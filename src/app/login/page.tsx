'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { WhipPan } from '@/components/WhipPan';
import { FadeUp } from '@/components/FadeUp';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      window.location.href = '/account';
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-12">
          <FadeUp mode="animate" delay={0.2}>
            <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
              // [AUTH] Secure Access Protocol
            </p>
          </FadeUp>
          <WhipPan direction="right">
            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85]">
              Sign In
            </h1>
          </WhipPan>
        </div>

        {/* Error */}
        {error && (
          <FadeUp mode="animate" delay={0}>
            <div className="mb-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-[13px] font-mono uppercase tracking-widest">
              ⚠ {error}
            </div>
          </FadeUp>
        )}

        {/* Form */}
        <FadeUp mode="animate" delay={0.5}>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-[#444] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-4 text-white text-[15px] font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#333]"
                placeholder="operator@darkfactory.jp"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-widest text-[#444] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-4 text-white text-[15px] font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#333]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-5 text-base tracking-widest flex items-center justify-center gap-4 disabled:opacity-30"
            >
              {loading ? (
                <span className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                'Authenticate →'
              )}
            </button>
          </form>
        </FadeUp>

        {/* Footer links */}
        <FadeUp mode="animate" delay={0.65}>
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/register"
              className="text-[11px] font-mono uppercase tracking-widest text-[#444] hover:text-[var(--accent)] transition-colors"
            >
              [Create Account]
            </Link>
            <Link
              href="/"
              className="text-[11px] font-mono uppercase tracking-widest text-[#444] hover:text-white transition-colors"
            >
              ← Back
            </Link>
          </div>
        </FadeUp>

        {/* Operator benefits */}
        <FadeUp mode="animate" delay={0.8}>
          <div className="mt-10 border border-white/5 p-4 bg-[#0c0c0c]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-3">
              // Operator Benefits
            </p>
            <ul className="space-y-2 font-mono text-[10px] uppercase tracking-widest text-[#333]">
              <li>[+] Order tracking &amp; history</li>
              <li>[+] Early access to Collection 002</li>
              <li>[+] Size memory across devices</li>
            </ul>
          </div>
        </FadeUp>

        {/* Status bar */}
        <FadeUp mode="animate" delay={0.95}>
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between font-mono text-[10px] uppercase tracking-widest text-[#222]">
            <span>Protocol: Supabase Auth</span>
            <span>Encryption: AES-256</span>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
