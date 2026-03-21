'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/5">
      <Link href="/" className="font-black text-2xl tracking-tighter uppercase italic group">
        Dark <span className="text-[var(--accent)] group-hover:brightness-110 transition-all transition-duration-300 transition-timing-function-cubic-bezier(0.4, 0, 0.2, 1)">Factory</span>
      </Link>
      
      <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-[#666]">
        <Link 
          href="/shop" 
          className={`hover:text-white transition-colors ${pathname === '/shop' ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
        >
          Shop
        </Link>
        <Link 
          href="/archive" 
          className={`hover:text-white transition-colors ${pathname === '/archive' ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
        >
          Archive
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-white transition-colors ${pathname === '/about' ? 'text-[var(--accent)] underline underline-offset-8' : ''}`}
        >
          Studio
        </Link>
        <button className="text-[var(--accent)] font-bold decoration-dotted underline underline-offset-4">
          Cart [0]
        </button>
      </div>
    </nav>
  );
}
