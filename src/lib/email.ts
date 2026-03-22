// Resend email utility for Dark Factory order confirmations
// Requires RESEND_API_KEY environment variable

export async function sendOrderConfirmation({
  toEmail,
  orderId,
  totalCents,
  currency,
  items,
}: {
  toEmail: string;
  orderId: string;
  totalCents: number;
  currency: string;
  items?: { name: string; quantity: number; size?: string }[];
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn('[EMAIL] RESEND_API_KEY not set — skipping confirmation email');
    return;
  }

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(totalCents / 100);

  const itemsHtml = items
    ? items
        .map(
          (i) =>
            `<tr>
              <td style="padding:8px 0;font-family:monospace;font-size:12px;color:#888;border-bottom:1px solid #1a1a1a;">${i.name}${i.size ? ` / ${i.size}` : ''}</td>
              <td style="padding:8px 0;font-family:monospace;font-size:12px;color:#888;text-align:right;border-bottom:1px solid #1a1a1a;">x${i.quantity}</td>
            </tr>`
        )
        .join('')
    : '';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#000;color:#fff;font-family:sans-serif;margin:0;padding:40px 20px;">
  <div style="max-width:480px;margin:0 auto;">
    <p style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.3em;color:#cdff00;margin-bottom:24px;">
      // Dark Factory
    </p>
    <h1 style="font-size:40px;font-weight:900;font-style:italic;letter-spacing:-0.04em;line-height:0.9;margin-bottom:24px;">
      Order<br>Confirmed
    </h1>
    <p style="color:#555;font-size:13px;line-height:1.6;margin-bottom:32px;">
      Your registry entry has been logged. Production begins within 48 hours.
      Tokyo Studio will dispatch when ready.
    </p>
    <div style="border:1px solid #1a1a1a;padding:20px;margin-bottom:32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${itemsHtml}
        <tr>
          <td style="padding-top:16px;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#444;">
            Order ID
          </td>
          <td style="padding-top:16px;font-family:monospace;font-size:11px;color:#666;text-align:right;">
            ${orderId}
          </td>
        </tr>
        <tr>
          <td style="padding-top:8px;font-family:monospace;font-size:14px;font-weight:900;color:#fff;">
            Total
          </td>
          <td style="padding-top:8px;font-family:monospace;font-size:14px;font-weight:900;color:#cdff00;text-align:right;">
            ${formattedTotal}
          </td>
        </tr>
      </table>
    </div>
    <p style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#333;margin-top:48px;">
      Dark Factory · Tokyo Studio · sdjapan.jp
    </p>
  </div>
</body>
</html>`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Dark Factory <orders@dark-factory.co>',
      to: [toEmail],
      subject: `Order Confirmed — ${orderId}`,
      html,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('[EMAIL_SEND_ERROR]', err);
  } else {
    console.log(`[EMAIL_SENT] Confirmation sent to ${toEmail}`);
  }
}
