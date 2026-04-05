'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useLang } from '@/context/LanguageContext';
import { Cart } from './Cart';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { user, loading } = useAuth();
  const { lang, toggleLang, t } = useLang();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Flag to display: show the OTHER language's flag (the one you can switch TO)
  const flagIcon = lang === 'ja' ? '🇺🇸' : '🇯🇵';
  const flagTitle = lang === 'ja' ? 'Switch to English' : '日本語に切り替え';

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md px-4 md:px-8 h-12 lg:h-20 flex justify-between items-center border-b border-white/5 transition-all duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="font-black text-xl lg:text-4xl tracking-tighter uppercase italic flex-shrink-0 whitespace-nowrap hover:brightness-110 transition-[filter] duration-300"
            style={{ fontWeight: 900, fontStyle: 'italic' }}
          >
            <span style={{ color: 'var(--foreground)', fontWeight: 'inherit', fontSize: 'inherit' }}>DARK&nbsp;</span><span style={{ color: 'var(--accent)', fontWeight: 'inherit', fontSize: 'inherit' }}>FACTORY</span>
          </Link>
        </motion.div>
        
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-[14px] items-center font-mono font-bold uppercase tracking-wider text-white/90">
          {[
            { href: '/shop', label: t('nav.shop') },
            { href: '/about', label: t('nav.studio') },
          ].map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
            >
              <Link 
                href={link.href} 
                className={`hover:text-white transition-colors ${pathname === link.href ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Auth link */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {user ? (
                <Link
                  href="/account"
                  className={`flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors ${
                    pathname === '/account' ? 'text-[var(--accent)]' : ''
                  }`}
                >
                  <User size="1.2em" strokeWidth={1.5} />
                  {t('nav.account')}
                </Link>
              ) : (
                <Link
                  href="/login"
                  className={`hover:text-white transition-colors ${
                    pathname === '/login' ? 'text-[var(--accent)] underline underline-offset-8' : ''
                  }`}
                >
                  {t('nav.login')}
                </Link>
              )}
            </motion.div>
          )}

          {/* Cart */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            onClick={() => setIsCartOpen(true)}
            className="text-[var(--accent)] font-bold decoration-dotted underline underline-offset-4 flex items-center gap-1 hover:brightness-110 transition-all font-mono"
          >
            {t('nav.cart')} [{totalItems}]
          </motion.button>

          {/* Language Toggle — flag shows the language you can SWITCH TO */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            onClick={toggleLang}
            title={flagTitle}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.15 }}
            className="text-xl leading-none cursor-pointer select-none"
            aria-label={flagTitle}
          >
            {flagIcon}
          </motion.button>
        </div>
      </motion.nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
