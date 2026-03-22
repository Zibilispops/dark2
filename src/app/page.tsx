'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const marqueeItems = [
  'DIGITAL VANGUARD APPAREL',
  'DTG PRINT ON DEMAND',
  'TOKYO STUDIO',
  'COLLECTION 001',
  'LIMITED AVAILABILITY',
  'SHIPS WORLDWIDE',
  'DESIGNED IN JAPAN',
];

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('ja-JP', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden relative flex flex-col">

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle,rgba(205,255,0,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* ── Hero ── */}
      <section className="relative flex-1 flex flex-col justify-center px-8 md:px-16 pt-10 pb-32 min-h-screen">

        {/* Tag line */}
        <p className="fade-in-up text-[var(--accent)] font-mono text-[10px] mb-8 tracking-[0.35em] uppercase z-10">
          // [001] DTG Studio · Tokyo JP · Est. 2024
        </p>

        {/* Big headline */}
        <h1 className="fade-in-up delay-100 relative z-10 text-[clamp(4rem,14vw,12rem)] leading-[0.82] tracking-tighter font-black italic mb-6 text-gradient">
          Wear The<br />Future
        </h1>

        {/* Sub */}
        <p className="fade-in-up delay-200 text-[#555] text-base md:text-lg max-w-md mb-12 leading-relaxed z-10 font-light">
          High-fidelity garments for the digital vanguard.<br />
          Designed in Tokyo, printed on demand, shipped globally.
        </p>

        {/* CTAs */}
        <div className="fade-in-up delay-300 flex flex-wrap gap-4 z-10">
          <Link href="/shop" className="btn-primary px-10 py-4 text-xs">
            Shop Collection →
          </Link>
          <Link
            href="/archive"
            className="px-10 py-4 border border-white/10 hover:border-white/30 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/5"
          >
            Explore Archive
          </Link>
        </div>

        {/* Bottom status bar */}
        <div className="fade-in-up delay-500 absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end">
          <div className="text-white/15 text-[9px] font-mono leading-relaxed uppercase tracking-widest">
            LAT: 35.6762° N<br />LONG: 139.6503° E<br />
            <LiveClock />
          </div>
          <div className="text-white/15 text-[9px] font-mono leading-relaxed text-right uppercase tracking-widest">
            Status: Factory Online<br />Capacity: 88%<br />Queue: 12 orders
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ── */}
      <div className="w-full border-t border-b border-white/5 py-4 overflow-hidden bg-[#0a0a0a]">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-[10px] font-mono uppercase tracking-[0.25em] text-[#333] whitespace-nowrap">
              <span className="text-[var(--accent)] opacity-50">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

    </main>
  );
}
