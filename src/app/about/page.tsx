import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white py-[var(--section-py)] px-6 md:px-12">
      <header className="mb-10">
        <h1 className="mb-4 text-gradient">The Studio</h1>
        <p className="text-[#666] max-w-lg mb-8 uppercase text-xs tracking-widest font-mono">
          // [001] Gifu Studio · Official Bad Printer Reseller
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
        <div className="space-y-6">
          <h2 className="">Premium Comfort</h2>
          <p className="text-[#888] leading-relaxed">
            Dark Factory is a small, independent studio in Gifu. We are the authorized reseller for **Bad Printer**, specializing in 7.4oz premium heavyweight cotton for a perfect unisex fit.
          </p>
          <p className="text-[#888] leading-relaxed text-sm">
            Choosing a Bad Printer tee isn't just a purchase; it's an act of manifestation. It's the moment your digital aesthetic finally becomes a physical reality. We prioritize skin-soft comfort above all else—intentionally choosing a soft, breathable DTG touch over clinical sharpness.
          </p>
        </div>
        
        <div className="p-12 bg-[#0c0c0c] border border-white/5 space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-[var(--accent)] mb-8">The Pillars</h3>
            <ul className="space-y-4 text-xl font-black italic tracking-tighter uppercase">
              {[
                { label: "1. Comfort", detail: "7.4oz premium heavyweight focus." },
                { label: "2. Authenticity", detail: "Authorized Bad Printer reseller." },
                { label: "3. Gifu_Direct", detail: "Small-studio, hand-dispatched craft." },
                { label: "4. Identity", detail: "Downloaded from digital to physical." },
                { label: "5. Archive", detail: "Manifesting the Bad Printer registry." }
              ].map((pillar, i) => (
                <li key={i} className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline group cursor-help transition-all duration-300 py-3 border-b border-white/5 lg:border-transparent lg:hover:border-white/5 overflow-hidden gap-y-2">
                  <span className="whitespace-nowrap group-hover:text-[var(--accent)] transition-colors">
                    {pillar.label}
                  </span>
                  <div className="grid justify-items-start lg:justify-items-end lg:ml-auto">
                    <span className="col-start-1 row-start-1 text-[clamp(10px,1.5vw,1.25rem)] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap text-left lg:text-right">
                      Verified
                    </span>
                    <span className="col-start-1 row-start-1 text-[clamp(10px,1.5vw,1.25rem)] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-normal text-left lg:text-right pointer-events-none leading-tight max-w-[280px] sm:max-w-[450px]">
                      {pillar.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-white/10 pt-20 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8">
          <h2 className="leading-[0.85]">
            The screen wasn't enough. <br />
            <span className="text-[var(--accent)] uppercase tracking-tighter overflow-hidden inline-block text-[1.1em]">Rooted in Gifu.</span>
          </h2>
          <p className="text-[#666] leading-relaxed italic text-lg">
            "Authorized by Bad Printer. Manifest in our Gifu studio—because some things aren't meant to stay on a screen."
          </p>
          <div className="pt-12">
            <Link href="/shop" className="btn-primary">
              View Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
