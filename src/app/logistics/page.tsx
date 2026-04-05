'use client';

import Link from 'next/link';
import { FadeUp } from '@/components/FadeUp';
import { useLang } from '@/context/LanguageContext';

export default function LogisticsPage() {
  const { t } = useLang();

  const shippingSectors = [
    {
      title: t('logistics.sector.mainland'),
      rows: [
        { service: t('logistics.service.standard'), time: '3–5 Business Days', rate: 'FREE' },
        { service: t('logistics.service.express'),  time: '1–2 Business Days', rate: '¥600' },
      ]
    },
    {
      title: t('logistics.sector.hokkaido'),
      rows: [
        { service: t('logistics.service.standard'), time: '5–10 Business Days', rate: '¥500' },
        { service: t('logistics.service.express'),  time: '2–3 Business Days', rate: '¥1,500' },
      ]
    },
    {
      title: t('logistics.sector.remote'),
      rows: [
        { service: t('logistics.service.standard'), time: '7–14 Business Days', rate: '¥800' },
        { service: t('logistics.service.express'),  time: '3–5 Business Days', rate: '¥2,200*' },
      ]
    },
  ];

  const trackingInfo = [
    { type: t('logistics.tracking.standard.type'), details: t('logistics.tracking.standard.details') },
    { type: t('logistics.tracking.express.type'),  details: t('logistics.tracking.express.details') },
  ];

  const deliveryMethods = [
    { method: t('logistics.delivery.standard.method'), details: t('logistics.delivery.standard.details') },
    { method: t('logistics.delivery.express.method'),  details: t('logistics.delivery.express.details') },
  ];

  const importantNotices = [
    { label: t('logistics.notice.1.label'), text: t('logistics.notice.1.text') },
    { label: t('logistics.notice.2.label'), text: t('logistics.notice.2.text') },
  ];

  const productionNotes = [
    t('logistics.production.1'),
    t('logistics.production.2'),
    t('logistics.production.3'),
    t('logistics.production.4'),
  ];

  const returnNotes = [
    t('logistics.returns.1'),
    t('logistics.returns.2'),
    t('logistics.returns.3'),
    t('logistics.returns.4'),
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 pb-24 px-6 md:px-16">
      <div className="max-w-3xl">

        {/* Header */}
        <FadeUp mode="animate" delay={0.1}>
          <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
            {t('logistics.eyebrow')}
          </p>
        </FadeUp>
        <FadeUp mode="animate" delay={0.2} y={30}>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-16">
            {t('logistics.h1')}
          </h1>
        </FadeUp>

        <div className="space-y-16">

          {/* 01 / Shipping Rates */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                {t('logistics.s01')}
              </p>
            </FadeUp>
            <div className="space-y-8">
              {shippingSectors.map((sector, sIdx) => (
                <FadeUp key={sIdx} delay={0.1 + (sIdx * 0.1)}>
                  <div className="border border-white/5 p-6 bg-[#0c0c0c]">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4 border-b border-white/5 pb-2">
                      {sector.title}
                    </h3>
                    <div className="space-y-4">
                      {sector.rows.map((row, rIdx) => (
                        <div key={rIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-white/5 last:border-0 group">
                          <div className="flex flex-col">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-white group-hover:text-[var(--accent)] transition-colors">
                              {row.service}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-1">
                              {row.time}
                            </span>
                          </div>
                          <span className="font-mono text-[13px] uppercase tracking-widest text-white mt-1 sm:mt-0 italic font-black">
                            {row.rate}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.4}>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                {t('logistics.sector.note')}
              </p>
            </FadeUp>
          </section>

          {/* 02 / Tracking */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                {t('logistics.s02')}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-6">
                {trackingInfo.map((info, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white mb-2">{info.type}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 leading-relaxed">{info.details}</p>
                  </div>
                ))}
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 pt-2 border-t border-white/5">
                  {t('logistics.tracking.note')}
                </p>
              </div>
            </FadeUp>
          </section>

          {/* 03 / Delivery Methods */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                {t('logistics.s03')}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-6">
                {deliveryMethods.map((method, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white mb-2">{method.method}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 leading-relaxed">{method.details}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 04 / Important Notices */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-8">
                {t('logistics.s04')}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border-l-2 border-[var(--accent)] bg-[#0c0c0c] p-6 space-y-8">
                {importantNotices.map((notice, i) => (
                  <div key={i}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2">• {notice.label}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/90 leading-relaxed italic">{notice.text}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 05 / Production */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                {t('logistics.s05')}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[11px] uppercase tracking-widest text-white/80 leading-relaxed">
                {productionNotes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 06 / Returns */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                {t('logistics.s06')}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c] space-y-4 font-mono text-[11px] uppercase tracking-widest text-white/80 leading-relaxed">
                {returnNotes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* 07 / Contact */}
          <section>
            <FadeUp delay={0}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-6">
                {t('logistics.s07')}
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <div className="border border-white/5 p-6 bg-[#0c0c0c]">
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/80 leading-relaxed">
                  {t('logistics.contact.p')}<br />
                  <span className="text-white mt-2 block">orders@dark-factory.co</span>
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {t('logistics.contact.time')}
                </p>
              </div>
            </FadeUp>
          </section>

        </div>

        {/* Footer nav */}
        <FadeUp delay={0.1}>
          <div className="mt-16 pt-8 border-t border-white/5 flex gap-8 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <Link href="/shop" className="hover:text-[var(--accent)] transition-colors">{t('logistics.nav.shop')}</Link>
            <Link href="/about" className="hover:text-[var(--accent)] transition-colors">{t('logistics.nav.studio')}</Link>
          </div>
        </FadeUp>

      </div>
    </main>
  );
}
