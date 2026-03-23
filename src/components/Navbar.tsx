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
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md px-[clamp(16px,10px+1.5vw,32px)] h-[clamp(50px,32px+4.7vw,100px)] flex justify-between items-center border-b border-white/5 transition-all duration-300">
        <Link
          href="/"
          className="font-black text-[clamp(20px,13px+1.9vw,40px)] tracking-tighter uppercase italic flex-shrink-0 whitespace-nowrap hover:brightness-110 transition-[filter] duration-300"
          style={{ fontWeight: 900, fontStyle: 'italic' }}
        >
          <span style={{ color: 'var(--foreground)', fontWeight: 'inherit', fontSize: 'inherit' }}>DARK&nbsp;</span><span style={{ color: 'var(--accent)', fontWeight: 'inherit', fontSize: 'inherit' }}>FACTORY</span>
        </Link>
        
        <div className="flex gap-[clamp(12px,8px+1.1vw,24px)] text-[clamp(10px,6.5px+0.9vw,20px)] items-center font-mono font-bold uppercase tracking-wider text-[#666] min-w-0 ml-auto sm:ml-0">
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
                <User size="1.2em" strokeWidth={1.5} />
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
