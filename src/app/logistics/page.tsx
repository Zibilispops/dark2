import Link from 'next/link';
import { FadeUp } from '@/components/FadeUp';

export default function LogisticsPage() {
  const shippingSectors = [
    {
      title: 'Mainland Japan (Honshu, Shikoku, Kyushu)',
      rows: [
        { service: 'Standard (Mailbox)', time: '3–5 Business Days', rate: 'FREE' },
        { service: 'Express (Hand-delivered)', time: '1–2 Business Days', rate: '¥600' },
      ]
    },
    {
      title: 'Hokkaido & Okinawa',
      rows: [
        { service: 'Standard (Mailbox)', time: '5–10 Business Days', rate: '¥500' },
        { service: 'Express (Hand-delivered)', time: '2–3 Business Days', rate: '¥1,500' },
      ]
    },
    {
      title: 'Remote Islands (Rito)',
      rows: [
        { service: 'Standard (Mailbox)', time: '7–14 Business Days', rate: '¥800' },
        { service: 'Express (Hand-delivered)', time: '3–5 Business Days', rate: '¥2,200*' },
      ]
    },
  ];

  const trackingInfo = [
    { type: 'Standard (Yu-Packet)', details: 'Track transit via Yamato; final delivery status updates through Japan Post tracking (12–24h sync delay).' },
    { type: 'Express (TA-Q-BIN)', details: 'Real-time tracking available exclusively through the Yamato Transport system.' },
  ];

  const deliveryMethods = [
    { method: 'Standard (Yu-Packet)', details: 'Delivered directly to mailbox. Signature not required. Must accept a package 3cm thick.' },
    { method: 'Express (TA-Q-BIN)', details: 'Hand-delivered. Requires signature or secure drop-off. Includes premium insurance up to ¥300,000.' },
  ];

  const importantNotices = [
    { label: 'The "Delivered" Finality', text: 'Tracking ends at "Delivered to Mailbox." Theft after delivery is not insured. We recommend Express for unsecured mailboxes.' },
    { label: 'The 3cm Rejection', text: 'Items too bulky for full mailboxes may be returned to our studio. Re-shipping will be at the customer\'s expense.' },
  ];

  const productionNotes = [
    '[+] Each tee is printed on demand in Gifu Studio after your order is placed.',
    '[+] Production time: 1–3 business days before shipping.',
    '[+] Total delivery = production time + shipping time above.',
    '[+] DTG printing on Bad Printer 6.6oz (225 GSM) Heavyweight blanks.',
  ];

  const returnNotes = [
    '[+] Returns: accepted within 14 days for unworn, unwashed items in original packaging.',
    '[+] Size Exchanges: contact within 14 days. Return shipping cost is on the customer.',
    '[+] Defective Items: full replacement at no cost. Send data/photo within 7 days of receipt.',
    '[+] Custom/On-Demand: items cannot be returned unless defective.',
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 pb-24 px-6 md:px-16">
      <div className="max-w-3xl">

        {/* Header */}
        <FadeUp mode="animate" delay={0.1}>
          <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
            // [LOGISTICS] Shipping & Delivery Policy
          </p>
        </FadeUp>
        <FadeUp mode="animate" delay={0.2} y={30}>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-16">
            Logistics
          </h1>
        </FadeUp>

        <div className="space-y-16">

          {/* 01 / Shipping Rates */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                01 / Shipping Rates & Delivery Times
              </p>
            </FadeUp>
            <div className="space-y-8">
              {shippingSectors.map((sector, sIdx) => (
                <FadeUp key={sector.title} delay={0.1 + (sIdx * 0.1)}>
                  <div className="border border-white/5 p-6 bg-[#0c0c0c]">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#666] mb-4 border-b border-white/5 pb-2">
                      {sector.title}
                    </h3>
                    <div className="space-y-4">
                      {sector.rows.map((row, rIdx) => (
                        <div key={rIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-white/5 last:border-0 group">
                          <div className="flex flex-col">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-white group-hover:text-[var(--accent)] transition-colors">
                              {row.service}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#444] mt-1">
                              {row.time}
                            </span>
                          </div>
                          <span className="font-mono text-[12px] uppercase tracking-widest text-white mt-1 sm:mt-0 italic font-black">
                            {row.rate}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.4}>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#333] leading-relaxed">
                *Note: Remote Island Express rates are estimates. We will contact you if your specific zip code requires an additional "Relay Fee" (Chūkei-ryō).
              </p>
            </FadeUp>
          </section>

          {/* 02 / Tracking Your Order */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                02 / Tracking Your Order
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-6">
                {trackingInfo.map((info, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white mb-2">{info.type}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] leading-relaxed">{info.details}</p>
                  </div>
                ))}
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#333] pt-2 border-t border-white/5">
                  Every order includes a 12-digit Yamato Tracking Number via email.
                </p>
              </div>
            </FadeUp>
          </section>

          {/* 03 / Delivery Methods */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                03 / Delivery Methods
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-6">
                {deliveryMethods.map((method, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white mb-2">{method.method}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] leading-relaxed">{method.details}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 04 / Important Notices */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                04 / Important Notices
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border-l-2 border-[var(--accent)] bg-[#0c0c0c] p-6 space-y-8">
                {importantNotices.map((notice, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2">• {notice.label}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] leading-relaxed italic">{notice.text}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 05 / Production */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                05 / Production
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[11px] uppercase tracking-widest text-[#555] leading-relaxed">
                {productionNotes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 06 / Returns */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                06 / Returns & Exchanges
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[11px] uppercase tracking-widest text-[#555] leading-relaxed">
                {returnNotes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 07 / Contact */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                07 / Contact
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c]">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#555] leading-relaxed">
                  For support & inquiries:<br />
                  <span className="text-white mt-2 block">orders@dark-factory.co</span>
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#333]">
                  Response time: 1–2 business days (JST)
                </p>
              </div>
            </FadeUp>
          </section>

        </div>

        {/* Footer nav */}
        <FadeUp delay={0.1}>
          <div className="mt-16 pt-8 border-t border-white/5 flex gap-8 font-mono text-[10px] uppercase tracking-widest text-[#333]">
            <Link href="/shop" className="hover:text-[var(--accent)] transition-colors">← Shop Collection</Link>
            <Link href="/about" className="hover:text-[var(--accent)] transition-colors">Studio →</Link>
          </div>
        </FadeUp>

      </div>
    </main>
  );
}
