'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Cart } from './Cart';
import { User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { user, loading } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md px-4 h-[50px] flex justify-between items-center border-b border-white/5">
        <Link href="/" className="font-black text-2xl tracking-tighter uppercase italic group leading-none flex-shrink-0">
          Dark <span className="text-[var(--accent)] group-hover:brightness-110 transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]">Factory</span>
        </Link>
        
        <div className="flex gap-[clamp(0.75rem,3vw,2rem)] text-[10px] items-center font-mono uppercase tracking-widest text-[#666] min-w-0 ml-[6px] md:ml-0">
          <Link 
            href="/shop" 
            className={`hover:text-white transition-colors ${pathname === '/shop' ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-white transition-colors ${pathname === '/about' ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
          >
            Studio
          </Link>

          {/* Auth link */}
          {!loading && (
            user ? (
              <Link
                href="/account"
                className={`flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors ${
                  pathname === '/account' ? 'text-[var(--accent)]' : ''
                }`}
              >
                <User size={12} strokeWidth={1.5} />
                Account
              </Link>
            ) : (
              <Link
                href="/login"
                className={`hover:text-white transition-colors ${
                  pathname === '/login' ? 'text-[var(--accent)] underline underline-offset-8' : ''
                }`}
              >
                Login
              </Link>
            )
          )}

          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-[var(--accent)] font-bold decoration-dotted underline underline-offset-4 flex items-center gap-1 hover:brightness-110 transition-all font-mono"
          >
            Cart [{totalItems}]
          </button>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
