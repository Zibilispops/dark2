import Link from 'next/link';
import { WhipPan } from '@/components/WhipPan';
import { FadeUp } from '@/components/FadeUp';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white py-[var(--section-py)] px-6 md:px-12">
      <header className="mb-10">
        <WhipPan direction="left">
          <h1 className="mb-4 text-gradient">The Studio</h1>
        </WhipPan>
        <FadeUp delay={0.3} mode="animate">
          <p className="text-[#666] max-w-lg mb-8 uppercase text-[14px] tracking-widest font-mono">
            // [001] Gifu Studio · Official <span className="font-black text-white whitespace-nowrap">Bad Printer</span> Reseller
          </p>
        </FadeUp>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
        <div className="space-y-6">
          <WhipPan direction="left">
            <h2 className="text-[var(--accent)]">Premium Comfort</h2>
          </WhipPan>
          <FadeUp delay={0.1}>
            <p className="text-[#888] leading-relaxed">
              Dark Factory is a small, independent studio in Gifu. We are the authorized reseller for <span className="font-black text-white whitespace-nowrap">Bad Printer</span>, specializing in Heavyweight 6.6oz (225 GSM) premium cotton for a perfect unisex fit.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#888] leading-relaxed">
              Choosing a <span className="font-black text-white whitespace-nowrap">Bad Printer</span> tee isn't just a purchase; it's an act of manifestation. It's the moment your digital aesthetic finally becomes a physical reality. We prioritize skin-soft comfort above all else—intentionally choosing a soft, breathable DTG touch over clinical sharpness.
            </p>
          </FadeUp>
        </div>
        
        <WhipPan direction="right" className="p-12 bg-[#0c0c0c] border border-white/5 space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-[var(--accent)] mb-8">The Pillars</h3>
            <ul className="space-y-4 text-xl font-black italic tracking-tighter uppercase">
              {[
                { label: "1. Comfort", detail: "DTG print for Zero touch feeling." },
                { label: "2. Quality", detail: "6.6oz (225 GSM) — Heavyweight." },
                { label: "3. Authenticity", detail: "Authorized Bad Printer reseller." },
                { label: "4. Identity", detail: "Small-studio, hand-dispatched craft." },
                { label: "5. Archive", detail: "Downloaded from digital to physical." }
              ].map((pillar, i) => (
                <FadeUp key={i} delay={0.1 + (i * 0.08)} y={15}>
                  <li className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline group cursor-help transition-all duration-300 py-3 lg:px-4 border-b border-white/5 lg:border-transparent lg:hover:bg-white overflow-hidden gap-y-2">
                    <span className="whitespace-nowrap group-hover:text-black font-bold transition-colors">
                      {pillar.label}
                    </span>
                    <div className="grid justify-items-start lg:justify-items-end lg:ml-auto">
                      <span className="col-start-1 row-start-1 text-[clamp(10px,1.5vw,1.25rem)] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap text-left lg:text-right">
                        Verified
                      </span>
                      <span className="col-start-1 row-start-1 text-[clamp(10px,1.5vw,1.25rem)] text-black font-mono font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-normal text-left lg:text-right pointer-events-none leading-tight max-w-[280px] sm:max-w-[450px]">
                        {pillar.detail.includes('Bad Printer') ? (
                          <>
                            {pillar.detail.split('Bad Printer')[0]}
                            <span className="font-black text-white whitespace-nowrap">Bad Printer</span>
                            {pillar.detail.split('Bad Printer')[1]}
                          </>
                        ) : pillar.detail}
                      </span>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </WhipPan>
      </section>

      {/* ── Bad Printer Quality Section ── */}
      <section className="border-t border-white/10 pt-20 mb-20">
        <FadeUp delay={0}>
          <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-6">
            // The Blank
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <WhipPan direction="left">
              <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-6">
                Bad Printer<br />6.6oz
              </h2>
            </WhipPan>
            <FadeUp delay={0.1}>
              <p className="text-[#888] leading-relaxed mb-6">
                Not all blanks are equal. The <span className="text-white font-black">Bad Printer</span> Heavyweight is 225 GSM (6.6oz) — 15/- Tenshiku Single Jersey woven with open-end yarn. That construction creates a dry, crisp texture with a classic American feel, holding shape wash after wash.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#888] leading-relaxed">
                DTG printing on this blank produces zero transparency even on white — ink sits in the fiber, not on top of it. Side-seam (Waki-shiyo) construction prevents torso twisting after washing. The double-stitched neckline ensures long-term stretch resistance.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '6.6oz', label: 'Heavyweight', detail: '225 GSM — Tenshiku Single Jersey' },
              { stat: '100%', label: 'Cotton', detail: '15/- Jersey · Open-end yarn' },
              { stat: 'DTG', label: 'Comfort Print', detail: 'Zero touch feel · Colors fade naturally' },
              { stat: 'Waki', label: 'Side-Seam Build', detail: 'No torso twist · Double-stitched neck' },
            ].map(({ stat, label, detail }, i) => (
              <FadeUp key={stat} delay={i * 0.1}>
                <div className="border border-white/5 p-4 bg-[#0c0c0c] h-full">
                  <p className="text-[var(--accent)] font-black italic text-2xl tracking-tighter mb-1">{stat}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white mb-1">{label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#333]">{detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-white/10 pt-20 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8">
          <FadeUp delay={0}>
            <h2 className="leading-[0.85]">
              The screen wasn't enough. <br />
              <span className="text-[var(--accent)] uppercase tracking-tighter overflow-hidden inline-block text-[1.1em]">Rooted in Gifu.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[#666] leading-relaxed italic text-lg">
              &quot;Authorized by <span className="font-black text-white whitespace-nowrap">Bad Printer</span>. Manifest in our Gifu studio—because some things aren&apos;t meant to stay on a screen.&quot;
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="pt-12">
              <Link href="/shop" className="btn-primary">
                View Collection
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
