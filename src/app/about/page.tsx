'use client';

import Link from 'next/link';
import { WhipPan } from '@/components/WhipPan';
import { FadeUp } from '@/components/FadeUp';
import { useLang } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLang();

  const pillars = [
    { label: t('about.pillar.1.label'), detail: t('about.pillar.1.detail') },
    { label: t('about.pillar.2.label'), detail: t('about.pillar.2.detail') },
    { label: t('about.pillar.3.label'), detail: t('about.pillar.3.detail') },
    { label: t('about.pillar.4.label'), detail: t('about.pillar.4.detail') },
    { label: t('about.pillar.5.label'), detail: t('about.pillar.5.detail') },
  ];

  const stats = [
    { stat: '6.6oz', label: t('about.stat.heavyweight'), detail: t('about.stat.heavyweight.d') },
    { stat: '100%',  label: t('about.stat.cotton'),      detail: t('about.stat.cotton.d') },
    { stat: 'DTG',   label: t('about.stat.dtg'),         detail: t('about.stat.dtg.d') },
    { stat: 'Waki',  label: t('about.stat.waki'),        detail: t('about.stat.waki.d') },
  ];

  const [philH2Line1, philH2Line2] = t('about.philosophy.h2').split('\n');

  return (
    <main className="min-h-screen bg-black text-white py-[var(--section-py)] px-6 md:px-12">
      <header className="mb-10">
        <WhipPan direction="left">
          <h1 className="mb-4 text-gradient">{t('about.h1')}</h1>
        </WhipPan>
        <FadeUp delay={0.3} mode="animate">
          <p className="text-white/90 max-w-lg mb-8 uppercase text-[14px] tracking-widest font-mono">
            {t('about.eyebrow').replace('Bad Printer', '').trim()}
            {' '}<span className="font-black text-white whitespace-nowrap">Bad Printer</span>{' '}
            {/* eyebrow suffix handled inline */}
          </p>
        </FadeUp>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
        <div className="space-y-6">
          <WhipPan direction="left">
            <h2 className="text-[var(--accent)]">{t('about.comfort.h2')}</h2>
          </WhipPan>
          <FadeUp delay={0.1}>
            <p className="text-white leading-relaxed">
              {t('about.comfort.p1')}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white leading-relaxed">
              {t('about.comfort.p2')}
            </p>
          </FadeUp>
        </div>
        
        <WhipPan direction="right" className="p-12 bg-[#0c0c0c] border border-white/5 space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-mono uppercase tracking-widest text-[var(--accent)] mb-8">
              {t('about.pillars.title')}
            </h3>
            <ul className="space-y-4 text-xl font-black italic tracking-tighter uppercase">
              {pillars.map((pillar, i) => (
                <FadeUp key={i} delay={0.1 + (i * 0.08)} y={15}>
                  <li className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline group cursor-help transition-all duration-300 py-3 lg:px-4 border-b border-white/5 lg:border-transparent lg:hover:bg-white overflow-hidden gap-y-2">
                    <span className="whitespace-nowrap group-hover:text-black font-bold transition-colors">
                      {pillar.label}
                    </span>
                    <div className="grid justify-items-start lg:justify-items-end lg:ml-auto">
                      <span className="col-start-1 row-start-1 text-[clamp(10px,1.5vw,1.25rem)] text-white/20 font-mono tracking-widest group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap text-left lg:text-right">
                        {t('about.pillars.verified')}
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
            {t('about.blank.eyebrow')}
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <WhipPan direction="left">
              <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-6 text-[var(--accent)]">
                Bad Printer<br />6.6oz
              </h2>
            </WhipPan>
            <FadeUp delay={0.1}>
              <p className="text-white leading-relaxed mb-6">{t('about.blank.p1')}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-white leading-relaxed">{t('about.blank.p2')}</p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ stat, label, detail }, i) => (
              <FadeUp key={stat} delay={i * 0.1}>
                <div className="border border-white/5 p-4 bg-[#0c0c0c] h-full">
                  <p className="text-[var(--accent)] font-black italic text-2xl tracking-tighter mb-1">{stat}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white mb-1">{label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{detail}</p>
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
              {philH2Line1}<br />
              <span className="text-[var(--accent)] uppercase tracking-tighter overflow-hidden inline-block text-[1.1em]">
                {philH2Line2}
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-white/90 leading-relaxed italic text-lg">
              {t('about.philosophy.quote')}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="pt-12">
              <Link href="/shop" className="btn-primary">
                {t('about.philosophy.cta')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
