'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
              // [AUTH] Registration Complete
            </p>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
              Check Your Email
            </h1>
            <p className="text-[#666] text-[15px] leading-relaxed">
              We&apos;ve sent a confirmation link to <span className="text-[var(--accent)]">{email}</span>.
              Click the link to activate your account.
            </p>
          </div>
          <Link
            href="/login"
            className="btn-primary inline-block px-10 py-4 text-[13px]"
          >
            Go to Login →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
            // [AUTH] New Operator Registration
          </p>
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85]">
            Register
          </h1>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-[13px] font-mono uppercase tracking-widest">
            ⚠ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-6">
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
              minLength={8}
              className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-4 text-white text-[15px] font-mono focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#333]"
              placeholder="Min. 8 characters"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-widest text-[#444] mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
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
              'Initialize Account →'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 flex justify-between items-center">
          <Link
            href="/login"
            className="text-[11px] font-mono uppercase tracking-widest text-[#444] hover:text-[var(--accent)] transition-colors"
          >
            [Already Registered]
          </Link>
          <Link
            href="/"
            className="text-[11px] font-mono uppercase tracking-widest text-[#444] hover:text-white transition-colors"
          >
            ← Back
          </Link>
        </div>

        {/* Operator benefits */}
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

        {/* Status bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between font-mono text-[10px] uppercase tracking-widest text-[#222]">
          <span>Protocol: Supabase Auth</span>
          <span>Gate G6: Secure Cookies</span>
        </div>
      </div>
    </main>
  );
}
