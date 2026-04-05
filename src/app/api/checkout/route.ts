import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';
import { productPrices } from '@/data/prices';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let ratelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, '10 s'),
    analytics: true,
  });
}

const CheckoutSchema = z.object({
  items: z.array(z.object({
    id: z.string(),
    quantity: z.number().min(1),
    size: z.string(),
  })).min(1),
});

export async function POST(req: Request) {
  try {
    if (ratelimit) {
      const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
      const { success } = await ratelimit.limit(`checkout_${ip}`);
      if (!success) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    }

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

      const basePrice = productPrices[product.slug] ?? product.price;
      const price = getPriceBySize(basePrice, item.size);

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
    // Sanitize error message to prevent leaking internal Stripe/DB details to the client
    return NextResponse.json({ error: 'Unable to initialize checkout. Please try again.' }, { status: 400 });
  }
}
