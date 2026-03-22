import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-12 pb-20 px-6 md:px-12">
      <header className="mb-10">
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic uppercase text-gradient">The Studio</h1>
        <p className="text-[#666] max-w-lg mb-8 uppercase text-xs tracking-widest font-mono">
          // [001] Digital Vanguard · DTG Printing Studio
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">High-Fidelity Garments</h2>
          <p className="text-[#888] leading-relaxed">
            Dark Factory is a direct-to-garment (DTG) printing studio based in Tokyo, Japan. Based on the philosophy of minimalist design and high-fidelity output, we specialize in high-end apparel for the digital vanguard.
          </p>
          <p className="text-[#888] leading-relaxed">
            Our studio is a solo founder operation, ensuring every piece is reviewed and handled with absolute care. We don't believe in mass production—we believe in high-quality, print-on-demand assets that serve as the uniform for modern makers.
          </p>
        </div>
        
        <div className="p-12 bg-[#0c0c0c] border border-white/5 space-y-12">
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#444]">[ The Pillars ]</h3>
            <ul className="space-y-4 text-xl font-black italic tracking-tighter uppercase">
              <li className="flex justify-between items-center text-[var(--accent)]">
                <span>1. Craft</span>
                <span className="text-[10px] text-white/20 font-mono tracking-widest">[Verified]</span>
              </li>
              <li className="flex justify-between items-center">
                <span>2. Clarity</span>
                <span className="text-[10px] text-white/20 font-mono tracking-widest">[Verified]</span>
              </li>
              <li className="flex justify-between items-center">
                <span>3. Story</span>
                <span className="text-[10px] text-white/20 font-mono tracking-widest">[Verified]</span>
              </li>
              <li className="flex justify-between items-center">
                <span>4. Transparency</span>
                <span className="text-[10px] text-white/20 font-mono tracking-widest">[Verified]</span>
              </li>
              <li className="flex justify-between items-center">
                <span>5. Ambition</span>
                <span className="text-[10px] text-white/20 font-mono tracking-widest">[Verified]</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-white/10 pt-20 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-[0.9]">
            We started by making sites. <br />
            <span className="text-[var(--accent)] text-6xl">Next came garments.</span>
          </h2>
          <p className="text-[#666] leading-relaxed italic text-lg">
            "Dark Factory is a project of Site & Design, exploring the physical manifestation of digital minimalist aesthetics."
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
