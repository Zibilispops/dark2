import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { z } from 'zod';

const CheckoutSchema = z.object({
  items: z.array(z.object({
    id: z.string(),
    quantity: z.number().min(1),
  })).min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = CheckoutSchema.parse(body);

    // Map products from local data (source of truth for prices)
    const { products } = await import('@/data/products');
    
    const line_items = validated.items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`Product ${item.id} not found`);

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            images: [product.image.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_URL}${product.image}` : product.image],
            metadata: {
              id: product.id,
            },
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
      metadata: {
        orderId: `df-${Date.now()}`,
      },
      // APPI/GDPR consent (Gate G4)
      consent_collection: {
        promotions: 'auto',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('[STRIPE_CHECKOUT_ERROR]', err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
