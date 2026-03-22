'use client';

import { useState, useEffect } from 'react';

interface Order {
  id: string;
  user_id: string;
  total_cents: number;
  currency: string;
  status: string;
  created_at: string;
  metadata: Record<string, any>;
}

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrders = async (t: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/orders', {
        headers: { Authorization: `Bearer ${t}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setOrders(data.orders);
      setAuthed(true);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (cents: number, currency: string) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(cents / 100);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  if (!authed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
            // Admin Access
          </p>
          <h1 className="text-4xl font-black italic tracking-tighter mb-8">Factory Control</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchOrders(token)}
              className="w-full bg-[#0d0d0d] border border-white/10 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            {error && (
              <p className="text-red-400 font-mono text-xs">[ERROR] {error}</p>
            )}
            <button
              onClick={() => fetchOrders(token)}
              disabled={loading || !token}
              className="btn-primary w-full py-4 font-mono tracking-widest uppercase text-sm disabled:opacity-30"
            >
              {loading ? 'Accessing...' : 'Enter Factory →'}
            </button>
          </div>
        </div>
      </main>
    );
  }

  const totalRevenue = orders.reduce((sum, o) => sum + o.total_cents, 0);
  const paidOrders = orders.filter((o) => o.status === 'paid');

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-2">
              // Factory Control
            </p>
            <h1 className="text-6xl font-black italic tracking-tighter">Orders</h1>
          </div>
          <button
            onClick={() => { setAuthed(false); setOrders([]); setToken(''); }}
            className="font-mono text-[10px] text-[#444] uppercase tracking-widest hover:text-white transition-colors"
          >
            [Exit]
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Total Orders', value: orders.length },
            { label: 'Paid Orders', value: paidOrders.length },
            {
              label: 'Total Revenue',
              value: orders.length > 0
                ? formatCurrency(totalRevenue, orders[0]?.currency ?? 'usd')
                : '$0.00',
            },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-black italic tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        {orders.length === 0 ? (
          <div className="border border-white/5 p-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#333]">
              // No orders yet
            </p>
          </div>
        ) : (
          <div className="border border-white/5">
            {/* Table Header */}
            <div className="grid grid-cols-5 px-6 py-3 border-b border-white/5 font-mono text-[9px] uppercase tracking-widest text-[#333]">
              <span>Order ID</span>
              <span>Customer</span>
              <span>Amount</span>
              <span>Status</span>
              <span>Date</span>
            </div>

            {/* Rows */}
            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-5 px-6 py-4 border-b border-white/5 hover:bg-white/2 transition-colors"
              >
                <span className="font-mono text-[11px] text-[#666] truncate pr-4">
                  {order.id}
                </span>
                <span className="font-mono text-[11px] text-[#888] truncate pr-4">
                  {order.user_id ?? '—'}
                </span>
                <span className="font-mono text-[11px] font-bold text-white">
                  {formatCurrency(order.total_cents, order.currency)}
                </span>
                <span>
                  <span
                    className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 ${
                      order.status === 'paid'
                        ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                        : 'bg-white/5 text-[#555]'
                    }`}
                  >
                    {order.status}
                  </span>
                </span>
                <span className="font-mono text-[10px] text-[#444]">
                  {formatDate(order.created_at)}
                </span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => fetchOrders(token)}
          className="mt-8 font-mono text-[10px] text-[#444] uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
        >
          [↻ Refresh]
        </button>
      </div>
    </main>
  );
}
