import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const CheckoutSchema = z.object({
  items: z.array(z.object({
    id: z.string(),
    quantity: z.number().min(1),
    size: z.string(),
  })).min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = CheckoutSchema.parse(body);

    const { getPriceBySize } = await import('@/lib/pricing');
    
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .in('id', validated.items.map((i) => i.id));

    if (error || !products) {
      throw new Error('Failed to verify products against database');
    }
    
    const line_items = validated.items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`Product ${item.id} not found`);

      const price = getPriceBySize(product.price, item.size);

      const imageUrl = product.image.startsWith('http') 
        ? product.image 
        : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${product.image.startsWith('/') ? '' : '/'}${product.image}`;

      return {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: `${product.name} (${item.size})`,
            images: [imageUrl],
            metadata: {
              id: product.id,
              size: item.size,
            },
          },
          unit_amount: price,
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
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('[STRIPE_CHECKOUT_ERROR]', err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
