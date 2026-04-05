import Link from 'next/link';

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 pb-24 px-6 md:px-16">
      <div className="max-w-2xl">

        {/* Header */}
        <p className="text-[var(--accent)] font-mono text-[9px] uppercase tracking-[0.35em] mb-4">
          // [LOGISTICS] Shipping &amp; Returns
        </p>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-16">
          Logistics
        </h1>

        <div className="space-y-12">

          {/* Shipping */}
          <section>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-6">
              01 / Shipping
            </p>
            <div className="space-y-4 border border-white/5 p-6 bg-[#0c0c0c]">
              {[
                { region: 'Japan (domestic)', cost: '¥500 flat rate', time: '2–4 business days' },
                { region: 'Asia Pacific', cost: '¥1,200 flat rate', time: '5–10 business days' },
                { region: 'Europe', cost: '¥1,800 flat rate', time: '7–14 business days' },
                { region: 'North America', cost: '¥1,800 flat rate', time: '7–14 business days' },
                { region: 'Rest of World', cost: '¥2,200 flat rate', time: '10–21 business days' },
              ].map(({ region, cost, time }) => (
                <div key={region} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 py-3 border-b border-white/5 last:border-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#888]">{region}</span>
                  <div className="text-right">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white">{cost}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#444] ml-4">{time}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-[#333]">
              All orders ship from Gifu Studio, Japan. Tracking number provided via email after dispatch.
            </p>
          </section>

          {/* Production */}
          <section>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-6">
              02 / Production
            </p>
            <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[10px] uppercase tracking-widest text-[#555] leading-relaxed">
              <p>[+] Each tee is printed on demand in Gifu Studio after your order is placed.</p>
              <p>[+] Production time: 1–3 business days before shipping.</p>
              <p>[+] Total delivery = production time + shipping time above.</p>
              <p>[+] DTG printing on Bad Printer 7.4oz Super Heavyweight blanks.</p>
            </div>
          </section>

          {/* Returns */}
          <section>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-6">
              03 / Returns &amp; Exchanges
            </p>
            <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[10px] uppercase tracking-widest text-[#555] leading-relaxed">
              <p>[+] Returns accepted within 14 days of delivery for unworn, unwashed items with original packaging.</p>
              <p>[+] Size exchanges: contact us within 14 days. Return shipping cost is on the customer.</p>
              <p>[+] Defective or mis-printed items: full replacement at no cost. Send a photo within 7 days of receipt.</p>
              <p>[+] Custom or on-demand items cannot be returned unless defective.</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-6">
              04 / Contact
            </p>
            <div className="border border-white/5 p-6 bg-[#0c0c0c]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] leading-relaxed">
                For all shipping inquiries, returns, and support:<br />
                <span className="text-white mt-2 block">orders@dark-factory.co</span>
              </p>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-[#333]">
                Response time: 1–2 business days (Japan Standard Time)
              </p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/5 flex gap-8 font-mono text-[9px] uppercase tracking-widest text-[#333]">
          <Link href="/shop" className="hover:text-[var(--accent)] transition-colors">← Shop Collection</Link>
          <Link href="/about" className="hover:text-[var(--accent)] transition-colors">Studio →</Link>
        </div>

      </div>
    </main>
  );
}
