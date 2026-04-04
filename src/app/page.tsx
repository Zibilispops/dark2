'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const marqueeItems = [
  'DIGITAL VANGUARD APPAREL',
  'DTG PRINT ON DEMAND',
  'GIFU STUDIO',
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

function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="w-full border-t border-white/5 bg-[#0a0a0a] px-8 md:px-16 py-16">
      <div className="max-w-2xl">
        <p className="text-[var(--accent)] font-mono text-[9px] uppercase tracking-[0.35em] mb-4">
          // FACTORY DISPATCH
        </p>
        <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-3">
          Receive Drop Alerts
        </h2>
        <p className="text-[#444] text-xs font-mono uppercase tracking-widest mb-8">
          Collection 002 loading. Be first to deploy.
        </p>

        {status === 'success' ? (
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
            <span className="text-[var(--accent)]">[+]</span>
            You&apos;re now an Operator — watch your inbox for Collection 002.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="operator@domain.com"
              className="flex-1 bg-[#111] border border-white/10 px-4 py-3 text-white text-xs font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#333]"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary px-8 py-3 text-xs tracking-widest disabled:opacity-30 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Join Dispatch →'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-400 font-mono text-[9px] uppercase tracking-widest">
            ⚠ Transmission failed. Try again.
          </p>
        )}

        <p className="mt-6 text-[#222] font-mono text-[9px] uppercase tracking-widest">
          No noise. Drop alerts only. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

// Featured products cycling in the hero
const FEATURED_PRODUCTS = [
  { slug: 'cyborg-girl', image: '/products/cyborg_girl_front.png', name: 'Cyborg Girl' },
  { slug: 'ramenrider', image: '/products/ramenrider_front.png', name: 'Ramen Rider' },
  { slug: 'spacecoffe', image: '/products/spacecoffe_front.png', name: 'Spacecoffee' },
];

function HeroProduct() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % FEATURED_PRODUCTS.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const product = FEATURED_PRODUCTS[idx];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="absolute right-0 top-0 h-full w-[45vw] max-w-[520px] hidden lg:flex items-end overflow-hidden group"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Gradient mask — fades left edge into bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 pointer-events-none" style={{ width: '35%' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] z-10 pointer-events-none" style={{ bottom: 0, height: '20%' }} />

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-top transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 0.7 }}
      />

      {/* Serial tag */}
      <div className="absolute bottom-10 right-8 z-20 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-1">
          // NOW FEATURED
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white">
          {product.name} →
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden relative flex flex-col">

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle,rgba(205,255,0,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* ── Hero ── */}
      <section className="relative flex-1 flex flex-col justify-center px-8 md:px-16 pt-10 pb-32 min-h-screen overflow-hidden">

        <HeroProduct />

        {/* Tag line */}
        <p className="fade-in-up text-[var(--accent)] font-mono text-[10px] mb-8 tracking-[0.35em] uppercase z-10">
          // [001] DTG Studio · Gifu JP · Est. 2024
        </p>

        {/* Big headline */}
        <h1 className="fade-in-up delay-100 relative z-10 text-[var(--h0)] leading-[0.82] tracking-tighter font-black italic mb-6 text-gradient">
          Wear The<br />Future
        </h1>

        {/* Sub */}
        <p className="fade-in-up delay-200 text-[#555] text-base md:text-lg max-w-md mb-12 leading-relaxed z-10 font-light">
          High-fidelity garments for the digital vanguard.<br />
          Designed in Gifu, printed on demand, shipped globally.
        </p>

        {/* CTAs */}
        <div className="fade-in-up delay-300 flex flex-wrap gap-4 z-10">
          <Link href="/shop" className="btn-primary px-10 py-4 text-xs">
            Shop Collection →
          </Link>
          <Link href="/about" className="px-10 py-4 text-xs font-mono uppercase tracking-widest border border-white/10 text-[#555] hover:border-white/30 hover:text-white transition-all">
            Studio →
          </Link>
        </div>

        {/* Bottom status bar */}
        <div className="fade-in-up delay-500 absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end z-10">
          <div className="text-white/15 text-[9px] font-mono leading-relaxed uppercase tracking-widest">
            LAT: 35.4233° N<br />LONG: 136.7606° E<br />
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

      {/* ── Email Capture ── */}
      <EmailCapture />

    </main>
  );
}
