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
        <p className="text-[var(--accent)] font-mono text-[11px] uppercase tracking-[0.3em] mb-8">
          // Order Confirmed
        </p>

        <h1 className="mb-4">
          Order<br />Received
        </h1>

        {/* Operator status */}
        <div className="mb-8 border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
            You&apos;re now an Operator
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#444] mt-1">
            Watch your inbox for Collection 002
          </p>
        </div>

        <p className="text-[#555] text-[15px] font-mono leading-relaxed mb-12">
          Your registry entry has been logged.<br />
          Production begins within 48 hours.<br />
          Gifu Studio will dispatch when ready.
        </p>

        <div className="border border-white/5 p-6 mb-12 text-left font-mono text-[11px] uppercase tracking-widest text-[#333] space-y-2">
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
            <span>Gifu Studio</span>
          </div>
          <div className="flex justify-between">
            <span>Blank</span>
            <span>Bad Printer 7.4oz</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="btn-primary inline-block px-12 py-4 text-[13px] tracking-widest uppercase font-mono"
        >
          Continue Exploring →
        </Link>
      </div>
    </main>
  );
}
