'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLang();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
      className="w-full border-t border-white/5 bg-[#060606] px-8 md:px-16 py-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
          >
            <p className="font-black italic text-lg tracking-tighter uppercase mb-3 text-white">
              DARK <span className="text-[var(--accent)]">FACTORY</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">
              {t('footer.tagline')}<br />
              {t('footer.auth')}<br />
              {t('footer.collection')}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-4">
              {t('footer.nav.title')}
            </p>
            <ul className="space-y-2 font-mono text-[11px] uppercase tracking-widest">
              {[
                { href: '/shop',      label: t('footer.nav.shop') },
                { href: '/about',     label: t('footer.nav.studio') },
                { href: '/logistics', label: t('footer.nav.shipping') },
                { href: '/login',     label: t('footer.nav.login') },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[var(--accent)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-4">
              {t('footer.contact.title')}
            </p>
            <div className="space-y-2 font-mono text-[11px] uppercase tracking-widest text-white/60">
              <p>
                <a href="mailto:orders@dark-factory.co" className="hover:text-[var(--accent)] transition-colors">
                  orders@dark-factory.co
                </a>
              </p>
              <p>{t('footer.contact.type')}</p>
              <p className="pt-2 text-white/20">{t('footer.contact.response')}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5, ease: "easeOut" }}
          className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-white/20"
        >
          <p>{t('footer.copy')}</p>
          <p>{t('footer.print')}</p>
        </motion.div>

      </div>
    </motion.footer>
  );
}
