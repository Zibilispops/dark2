import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LogoutButton } from '@/components/LogoutButton';
import { AccountEmailForm } from '@/components/AccountEmailForm';

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch user orders
  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-12 pb-20 px-6 md:px-12">
      {/* Header */}
      <header className="mb-16">
        <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-4">
          // [ACCOUNT] Operator Dashboard
        </p>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
          Your Account
        </h1>
      </header>

      {/* User Info Card */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-[#0c0c0c] border border-white/5 col-span-2">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#444] mb-4">
            [ Operator Profile ]
          </h2>
          <div className="space-y-4">
            <AccountEmailForm currentEmail={user.email} />
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#555]">User ID</span>
              <span className="text-[11px] font-mono text-[#444]">{user.id.slice(0, 12)}...</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#555]">Joined</span>
              <span className="text-[11px] font-mono text-[#444]">
                {new Date(user.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#555]">Status</span>
              <span className="text-[11px] font-mono text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-0.5">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#0c0c0c] border border-white/5 flex flex-col justify-between">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#444] mb-4">
              [ Quick Actions ]
            </h2>
            <div className="space-y-3">
              <Link
                href="/shop"
                className="block w-full text-center py-3 border border-white/10 text-[14px] font-mono uppercase tracking-widest text-[#666] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                Browse Collection
              </Link>
            </div>
          </div>
          <LogoutButton />
        </div>
      </section>

      {/* Order History */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-black italic tracking-tighter uppercase">Order History</h2>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#333]">
            {orders?.length || 0} Records
          </span>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />

        {(!orders || orders.length === 0) ? (
          <div className="p-16 bg-[#0c0c0c] border border-white/5 text-center">
            <p className="text-[#333] font-mono text-[14px] uppercase tracking-widest mb-4">
              No orders yet
            </p>
            <Link href="/shop" className="btn-primary inline-block px-8 py-3 text-[14px]">
              Start Shopping →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-6 bg-[#0c0c0c] border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#333]">
                    {order.id.slice(0, 8)}
                  </span>
                  <span className={`text-[11px] font-mono uppercase tracking-widest px-2 py-0.5 border ${
                    order.status === 'complete'
                      ? 'text-[var(--accent)] border-[var(--accent)]/30'
                      : order.status === 'pending'
                      ? 'text-yellow-400 border-yellow-400/30'
                      : 'text-[#555] border-white/10'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-[16px] font-black">
                    ¥{order.total_cents.toLocaleString()} {order.currency?.toUpperCase()}
                  </span>
                  <span className="font-mono text-[11px] text-[#333]">
                    {new Date(order.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
