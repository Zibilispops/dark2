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
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#444]">[ The Pillars ]</h3>
            <ul className="space-y-4 text-xl font-black italic tracking-tighter uppercase">
              <li className="flex justify-between items-center group cursor-help transition-all duration-300">
                <span className="group-hover:text-[var(--accent)] transition-colors">1. Comfort</span>
                <div className="relative flex justify-end">
                  <span className="text-[10px] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity whitespace-nowrap">
                    [Verified]
                  </span>
                  <span className="absolute right-0 text-[10px] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right">
                    7.4oz premium heavyweight focus.
                  </span>
                </div>
              </li>
              <li className="flex justify-between items-center group cursor-help transition-all duration-300">
                <span className="group-hover:text-[var(--accent)] transition-colors">2. Authenticity</span>
                <div className="relative flex justify-end">
                  <span className="text-[10px] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity whitespace-nowrap">
                    [Verified]
                  </span>
                  <span className="absolute right-0 text-[10px] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right">
                    Authorized Bad Printer reseller.
                  </span>
                </div>
              </li>
              <li className="flex justify-between items-center group cursor-help transition-all duration-300">
                <span className="text-[var(--accent)]">3. Gifu_Direct</span>
                <div className="relative flex justify-end">
                  <span className="text-[10px] text-[var(--accent)] font-mono tracking-widest group-hover:opacity-0 transition-opacity whitespace-nowrap opacity-50">
                    [Verified]
                  </span>
                  <span className="absolute right-0 text-[10px] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right">
                    Small-studio, hand-dispatched craft.
                  </span>
                </div>
              </li>
              <li className="flex justify-between items-center group cursor-help transition-all duration-300">
                <span className="group-hover:text-[var(--accent)] transition-colors">4. Identity</span>
                <div className="relative flex justify-end">
                  <span className="text-[10px] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity whitespace-nowrap">
                    [Verified]
                  </span>
                  <span className="absolute right-0 text-[10px] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right">
                    Downloaded from digital to physical.
                  </span>
                </div>
              </li>
              <li className="flex justify-between items-center group cursor-help transition-all duration-300">
                <span className="group-hover:text-[var(--accent)] transition-colors">5. Archive</span>
                <div className="relative flex justify-end">
                  <span className="text-[10px] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity whitespace-nowrap">
                    [Verified]
                  </span>
                  <span className="absolute right-0 text-[10px] text-[var(--accent)] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right">
                    Manifesting the Bad Printer registry.
                  </span>
                </div>
              </li>
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
