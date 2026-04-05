'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';


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

function EmailCapture({ t }: { t: (k: Parameters<ReturnType<typeof useLang>['t']>[0]) => string }) {
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
          {t('dispatch.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-3"
        >
          {t('dispatch.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-white/60 text-[14px] font-mono uppercase tracking-widest mb-8"
        >
          {t('dispatch.sub')}
        </motion.p>

        {status === 'success' ? (
          <div className="flex items-center gap-4 font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            <span className="text-[var(--accent)]">[+]</span>
            {t('dispatch.cta')}
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
              placeholder={t('dispatch.placeholder')}
              className="flex-1 bg-[#111] border border-white/10 px-4 py-3 text-white text-[14px] font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-white/40"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary px-8 py-3 text-[14px] tracking-widest disabled:opacity-30 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : t('dispatch.cta')}
            </button>
          </motion.form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-400 font-mono text-[10px] uppercase tracking-widest">
            ⚠ Transmission failed. Try again.
          </p>
        )}

        <p className="mt-6 text-white/20 font-mono text-[10px] uppercase tracking-widest">
          {t('dispatch.note')}
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
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % FEATURED_PRODUCTS.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const product = FEATURED_PRODUCTS[idx];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="relative lg:absolute right-0 top-0 h-[40vh] lg:h-[100vh] w-full lg:w-[clamp(40vw,50vw,75vw)] lg:flex items-end overflow-hidden group z-0 block"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Gradient mask — fades left edge into bg */}
      <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 pointer-events-none" style={{ width: '35%' }} />

      {FEATURED_PRODUCTS.map((prod, i) => (
        <img
          key={prod.slug}
          src={prod.image}
          alt={prod.name}
          className={`absolute inset-0 w-full h-full object-cover object-top scale-125 group-hover:scale-[130%] transition-transform duration-1000 ease-out origin-top pointer-events-none ${
            idx === i ? 'opacity-80' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '800ms' }}
        />
      ))}

      {/* Serial tag */}
      <div className="absolute bottom-10 right-8 z-20 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-1">
          // NOW FEATURED
        </p>
        <div className="font-mono text-[11px] uppercase tracking-widest text-white flex gap-1">
          <AnimatePresence mode="wait">
            <motion.span 
              key={product.name}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {product.name}
            </motion.span>
          </AnimatePresence>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  const marqueeKeys = [
    'marquee.1', 'marquee.2', 'marquee.3', 'marquee.4',
    'marquee.5', 'marquee.6', 'marquee.7',
  ] as const;

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
      <section className="relative flex-1 px-8 md:px-16 pt-28 lg:pt-0 pb-32 min-h-screen overflow-hidden">

        {/* Desktop Product Wrapper - OUT OF FLOW to prevent Safari flex stretching bugs */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <HeroProduct />
        </div>

        {/* Text / Content Flex Container */}
        {/* Mobile: normal flow with top padding. Desktop: absolute centered using transform trick - reliable in ALL browsers including Safari */}
        <div className="relative z-10 flex flex-col space-y-8 lg:space-y-0 w-full lg:w-[50vw] lg:absolute lg:top-1/2 lg:-translate-y-1/2">

        {/* Tag line */}
        <p className="hero-eyebrow text-[var(--accent)] font-mono text-[11px] mb-8 tracking-[0.35em] uppercase z-10 opacity-0">
          {t('hero.eyebrow')}
        </p>

        {/* Big headline */}
        <h1 className="relative z-10 text-[var(--h0)] leading-[0.82] tracking-tighter font-black italic mb-6 mix-blend-difference overflow-hidden flex flex-col">
          <div className="hero-whip-1 text-gradient" style={{ opacity: 0 }}>{t('hero.line1')}</div>
          <div className="hero-whip-2 text-gradient" style={{ opacity: 0 }}>{t('hero.line2')}</div>
        </h1>

        {/* Sub */}
        <p className="hero-sub opacity-0 text-white/80 text-base md:text-lg max-w-md mb-12 leading-relaxed z-10 font-light mix-blend-screen">
          {t('hero.sub').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        {/* CTAs */}
        <div className="hero-cta opacity-0 flex flex-wrap gap-4 z-10">
          <Link href="/shop" className="btn-primary px-10 py-4 text-[14px] group flex justify-center items-center text-center">
            <span className="group-hover:invert transition-all">{t('hero.cta.shop')}</span>
          </Link>
          <Link href="/about" className="px-10 py-4 text-[14px] font-mono uppercase tracking-widest border border-white/10 text-white/80 hover:border-white hover:text-black hover:bg-white transition-all duration-500 flex justify-center items-center text-center">
            {t('hero.cta.studio')}
          </Link>
        </div>

        </div>

        {/* Mobile-only Product placement */}
        <div className="lg:hidden w-full h-[40vh] relative z-0 hero-product-mobile pb-12 mt-4">
           <HeroProduct />
        </div>

        {/* Bottom status bar */}
        <div className="hero-status opacity-0 absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end z-10">
          <div className="text-white/15 text-[10px] font-mono leading-relaxed uppercase tracking-widest">
            LAT: 35.4233° N<br />LONG: 136.7606° E<br />
            <LiveClock />
          </div>
          <div className="text-white/15 text-[10px] font-mono leading-relaxed text-right uppercase tracking-widest">
            {t('hero.status.on')}<br />{t('hero.status.capacity')}<br />{t('hero.status.queue')}
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
          {[...marqueeKeys, ...marqueeKeys].map((key, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 whitespace-nowrap">
              <span className="text-[var(--accent)] opacity-50">◆</span>
              {t(key)}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Email Capture ── */}
      <EmailCapture t={t} />

    </main>
  );
}
