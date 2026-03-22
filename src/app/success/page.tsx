'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md w-full">
        <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
          // Order Confirmed
        </p>

        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-8">
          Order<br />Received
        </h1>

        <p className="text-[#555] text-sm font-mono leading-relaxed mb-12">
          Your registry entry has been logged.<br />
          Production begins within 48 hours.<br />
          Tokyo Studio will dispatch when ready.
        </p>

        <div className="border border-white/5 p-6 mb-12 text-left font-mono text-[10px] uppercase tracking-widest text-[#333] space-y-2">
          <div className="flex justify-between">
            <span>Status</span>
            <span className="text-[var(--accent)]">Confirmed</span>
          </div>
          <div className="flex justify-between">
            <span>Method</span>
            <span>DTG Print-on-Demand</span>
          </div>
          <div className="flex justify-between">
            <span>Origin</span>
            <span>Tokyo Studio</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="btn-primary inline-block px-12 py-4 text-xs tracking-widest uppercase font-mono"
        >
          Continue Exploring →
        </Link>
      </div>
    </main>
  );
}
