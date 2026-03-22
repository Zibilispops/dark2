import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { sendOrderConfirmation } from '@/lib/email';
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

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as any;
      const customerEmail = session.customer_details?.email;
      const orderId = session.metadata?.orderId ?? `df-${session.id}`;

      // 1. Save order to Supabase (Gate G7 - RLS enforced)
      const { error } = await supabase
        .from('orders')
        .insert({
          id: orderId,
          user_id: customerEmail,
          total_cents: session.amount_total,
          currency: session.currency,
          status: 'paid',
          metadata: {
            stripe_session_id: session.id,
            // Gate G4: No sensitive PII in metadata logs
          },
        });

      if (error) {
        console.error('[SUPABASE_ORDER_INSERT_ERROR]', error);
      }

      // 2. Fetch line items to include in email
      let emailItems: { name: string; quantity: number }[] = [];
      try {
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 });
        emailItems = lineItems.data.map((li: any) => ({
          name: li.description,
          quantity: li.quantity,
        }));
      } catch (e) {
        console.warn('[STRIPE_LINE_ITEMS_ERROR]', e);
      }

      // 3. Send confirmation email
      if (customerEmail) {
        await sendOrderConfirmation({
          toEmail: customerEmail,
          orderId,
          totalCents: session.amount_total,
          currency: session.currency,
          items: emailItems,
        });
      }

      break;
    }

    default:
      console.log(`[STRIPE_WEBHOOK_UNHANDLED]: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
