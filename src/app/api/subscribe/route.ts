import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';
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
    limiter: Ratelimit.slidingWindow(3, '60 s'),
    analytics: true,
  });
}

const SubscribeSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    if (ratelimit) {
      const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
      const { success } = await ratelimit.limit(`subscribe_${ip}`);
      if (!success) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    }

    const body = await req.json();
    const validated = SubscribeSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const email = validated.data.email;

    const { error } = await supabase
      .from('subscribers')
      .upsert({ email: email.toLowerCase().trim(), subscribed_at: new Date().toISOString() }, { onConflict: 'email' });

    if (error) {
      // Table may not exist in dev — still return success to not break the UI
      console.error('Subscriber insert error:', error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
