import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { headers } from 'next/headers';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  let event;

  try {
    // Gate G8: Mandatory constructEvent
    event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);
  } catch (err: any) {
    console.error(`[STRIPE_WEBHOOK_SIGN_ERROR]: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as any;
      
      // Save order to Supabase (Gate G7 - RLS will be verified)
      const { data, error } = await supabase
        .from('orders')
        .insert({
          id: session.metadata.orderId,
          user_id: session.customer_details?.email, // Using email as basic ID for now
          total_cents: session.amount_total,
          currency: session.currency,
          status: 'paid',
          metadata: {
            stripe_session_id: session.id,
            // Gate G4: No sensitive PII in metadata logs
          }
        });

      if (error) {
        console.error('[SUPABASE_ORDER_INSERT_ERROR]', error);
        // We still return 200 to Stripe but log the error
      }
      break;

    default:
      console.log(`[STRIPE_WEBHOOK_UNHANDLED]: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
