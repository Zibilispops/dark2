'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export function AccountEmailForm({ currentEmail }: { currentEmail?: string }) {
  const [newEmail, setNewEmail] = useState(currentEmail || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (newEmail === currentEmail) {
      setIsEditing(false);
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ email: newEmail });

    if (error) {
      setError(error.message);
    } else {
      setMessage('A confirmation link has been sent to your new email address. Please verify both emails to complete the change.');
      setIsEditing(false);
    }
    setLoading(false);
  };

  if (!isEditing && !message) {
    return (
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#555]">Email</span>
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-[var(--accent)]">{currentEmail}</span>
          <button 
            onClick={() => setIsEditing(true)}
            className="text-[9px] font-mono border border-white/10 px-2 py-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all uppercase"
          >
            [ Edit ]
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-white/5 pb-3">
      {message ? (
        <div className="p-4 bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-2">
            <p className="font-mono text-[10px] text-[var(--accent)] leading-relaxed uppercase tracking-wider">
                {message}
            </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex justify-between items-center mb-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#555]">Email Update Protocol</span>
            <button 
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-[9px] font-mono border border-red-500/20 px-2 py-0.5 hover:border-red-500 hover:text-red-500 transition-all uppercase text-[#444]"
            >
              [ Cancel ]
            </button>
          </div>
          
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full bg-[#0f0f0f] border border-white/10 px-3 py-3 text-white text-xs font-mono focus:outline-none focus:border-[var(--accent)] transition-colors"
            required
            placeholder="New Operator Email"
          />

          {error && (
            <p className="text-[9px] font-mono text-red-500 uppercase tracking-widest">⚠ {error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[var(--accent)] text-black text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-90 transition-all disabled:opacity-30"
          >
            {loading ? '[ INITIALIZING... ]' : '[ INITIALIZE UPDATE → ]'}
          </button>
        </form>
      )}
    </div>
  );
}
