import { supabase } from '@/lib/supabase';
import type { Product } from '@/data/products';
import { ShopGrid } from '@/components/ShopGrid';

export const revalidate = 60;

export default async function ShopPage() {
  const { data, error } = await supabase.from('products').select('*').order('id');

  if (error) {
    console.error('Error fetching products:', error);
  }

  const products = (data as Product[]) || [];

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-12 pb-24 px-6 md:px-12">

      {/* ── Header ── */}
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[var(--accent)] font-mono text-[9px] uppercase tracking-[0.35em] mb-3">
            // [001] Digital Vanguard Apparel
          </p>
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85]">
            Collection
          </h1>
        </div>
        <p className="text-[#333] font-mono text-[10px] uppercase tracking-widest md:text-right">
          {products.length} Items Available<br />
          Bad Printer 7.4oz · Ships Worldwide
        </p>
      </header>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-white/5 mb-8" />

      <ShopGrid products={products} />
    </main>
  );
}
