export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start px-12 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(205,255,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="z-10 max-w-4xl">
          <p className="text-[var(--accent)] font-mono text-sm mb-4 tracking-tighter uppercase">
            // [001] DTG Studio · Tokyo JP
          </p>
          <h1 className="text-8xl md:text-[10rem] leading-[0.85] mb-8 text-gradient">
            Wear The <br /> Future
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-xl mb-12 text-[#666]">
            High-fidelity garments for the digital vanguard. Designed in Tokyo, printed on demand, shipped globally.
          </p>
          
          <div className="flex gap-4">
            <button className="btn-primary">
              Shop Collection
            </button>
            <button className="px-8 py-3 border border-white/10 hover:bg-white/5 transition-all text-sm font-bold uppercase rounded-sm">
              Explore Archive
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="fixed bottom-0 left-0 w-full p-6 flex justify-between items-end mix-blend-difference pointer-events-none">
          <div className="text-white/20 text-[10px] font-mono leading-tight uppercase">
            LAT: 35.6762° N<br />LONG: 139.6503° E
          </div>
          <div className="text-white/20 text-[10px] font-mono leading-tight text-right uppercase">
            Status: Factory Online<br />Capacity: 88%
          </div>
        </div>
      </section>
    </main>
  );
}
