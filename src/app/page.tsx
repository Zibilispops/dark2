'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      className="w-full border-t border-white/5 bg-[#0a0a0a] px-8 md:px-16 py-16"
    >
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4"
        >
          // FACTORY DISPATCH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-3"
        >
          Receive Drop Alerts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-white/60 text-[14px] font-mono uppercase tracking-widest mb-8"
        >
          Collection 002 loading. Be first to deploy.
        </motion.p>

        {status === 'success' ? (
          <div className="flex items-center gap-4 font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            <span className="text-[var(--accent)]">[+]</span>
            You&apos;re now an Operator — watch your inbox for Collection 002.
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="operator@domain.com"
              className="flex-1 bg-[#111] border border-white/10 px-4 py-3 text-white text-[14px] font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-white/40"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary px-8 py-3 text-[14px] tracking-widest disabled:opacity-30 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Join Dispatch →'}
            </button>
          </motion.form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-400 font-mono text-[10px] uppercase tracking-widest">
            ⚠ Transmission failed. Try again.
          </p>
        )}

        <p className="mt-6 text-white/20 font-mono text-[10px] uppercase tracking-widest">
          No noise. Drop alerts only. Unsubscribe anytime.
        </p>
      </div>
    </motion.section>
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
      className="relative lg:absolute right-0 top-0 h-[40vh] lg:h-full w-full lg:flex items-end overflow-hidden group z-0"
      style={{ 
        width: typeof window !== 'undefined' && window.innerWidth < 1024 ? '100%' : 'clamp(40vw, 50vw, 75vw)', 
        pointerEvents: 'auto' 
      }}
    >
      {/* Gradient mask — fades left edge into bg */}
      <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 pointer-events-none" style={{ width: '35%' }} />
      {/* Mobile Top/Bottom mask */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080808] to-transparent z-10 lg:hidden pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] z-10 pointer-events-none" style={{ bottom: 0, height: '20%' }} />

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-top transition-opacity duration-400 scale-125 group-hover:scale-[130%] transition-transform duration-1000 ease-out"
        style={{ opacity: fading ? 0 : 0.8 }}
      />

      {/* Serial tag */}
      <div className="absolute bottom-10 right-8 z-20 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-1">
          // NOW FEATURED
        </p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-white">
          {product.name} →
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // T2: Eyebrow - Vertical drop at 0.6s
    gsap.fromTo('.hero-eyebrow',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );

    // T3: Kinetic Hero - Whip-pan from left and right at 1.0s
    gsap.fromTo('.hero-whip-1',
      { x: '-120vw', opacity: 0 },
      { x: '0vw', opacity: 1, duration: 1, ease: 'power4.out', delay: 1.0 }
    );
    gsap.fromTo('.hero-whip-2',
      { x: '120vw', opacity: 0 },
      { x: '0vw', opacity: 1, duration: 1, ease: 'power4.out', delay: 1.15 }
    );

    // T4: Background Details (glow) scale up at 1.4s
    gsap.fromTo('.hero-glow',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1.4 }
    );

    // T5: Subtitle/CTAs - Vertical lift at 1.8s
    gsap.fromTo(['.hero-sub', '.hero-cta'],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.8, stagger: 0.2 }
    );

    // T5.5: Mobile Product lift - at 2.1s
    gsap.fromTo('.hero-product-mobile',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.1 }
    );

    // T6: Bottom status bar lift at 2.4s
    gsap.fromTo('.hero-status',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.4 }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#080808] overflow-hidden relative flex flex-col">

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute top-1/3 left-1/4 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle,rgba(205,255,0,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* ── Hero ── */}
      <section className="relative flex-1 flex flex-col justify-center px-8 md:px-16 pt-10 pb-32 min-h-screen overflow-hidden">

        <div className="hidden lg:block">
          <HeroProduct />
        </div>

        {/* Tag line */}
        <p className="hero-eyebrow text-[var(--accent)] font-mono text-[11px] mb-8 tracking-[0.35em] uppercase z-10 opacity-0">
          // [001] DTG Studio · Gifu JP · Est. 2024
        </p>

        {/* Big headline */}
        <h1 className="relative z-10 text-[var(--h0)] leading-[0.82] tracking-tighter font-black italic mb-6 mix-blend-difference overflow-hidden flex flex-col">
          <div className="hero-whip-1 text-gradient" style={{ opacity: 0 }}>Wear The</div>
          <div className="hero-whip-2 text-gradient" style={{ opacity: 0 }}>Future</div>
        </h1>

        {/* Sub */}
        <p className="hero-sub opacity-0 text-white/80 text-base md:text-lg max-w-md mb-12 leading-relaxed z-10 font-light mix-blend-screen">
          High-fidelity garments for the digital vanguard.<br />
          Designed in Gifu, printed on demand, shipped globally.
        </p>

        {/* CTAs */}
        <div className="hero-cta opacity-0 flex flex-wrap gap-4 z-10 mb-12 lg:mb-0">
          <Link href="/shop" className="btn-primary px-10 py-4 text-[14px] group">
            <span className="group-hover:invert transition-all">Shop Collection →</span>
          </Link>
          <Link href="/about" className="px-10 py-4 text-[14px] font-mono uppercase tracking-widest border border-white/10 text-white/80 hover:border-white hover:text-black hover:bg-white transition-all duration-500">
            Studio →
          </Link>
        </div>

        {/* Mobile-only Product placement */}
        <div className="lg:hidden w-full h-[40vh] relative z-0 mb-16 opacity-0 hero-product-mobile">
           <HeroProduct />
        </div>

        {/* Bottom status bar */}
        <div className="hero-status opacity-0 absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end z-10">
          <div className="text-white/15 text-[10px] font-mono leading-relaxed uppercase tracking-widest">
            LAT: 35.4233° N<br />LONG: 136.7606° E<br />
            <LiveClock />
          </div>
          <div className="text-white/15 text-[10px] font-mono leading-relaxed text-right uppercase tracking-widest">
            Status: Factory Online<br />Capacity: 88%<br />Queue: 12 orders
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8, ease: 'easeOut' }}
        className="w-full border-t border-b border-white/5 py-4 overflow-hidden bg-[#0a0a0a]"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 whitespace-nowrap">
              <span className="text-[var(--accent)] opacity-50">◆</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Email Capture ── */}
      <EmailCapture />

    </main>
  );
}
