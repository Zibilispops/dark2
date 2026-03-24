import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/data/products';

export const revalidate = 60; // Revalidate the shop page every 60 seconds

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
          Select items ship worldwide
        </p>
      </header>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-white/5 mb-8" />

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-12">
        {products.map((product, i) => (
          <Link
            key={product.id}
            href={`/shop/${product.slug}`}
            className="product-card group block fade-in-up"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            {/* Image container */}
            <div className="product-card-border aspect-[3/4] overflow-hidden bg-[#0f0f0f] relative border border-white/5 rounded-sm mb-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(205,255,0,0.03)_0%,transparent_70%)]" />

              <img
                src={product.image}
                alt={product.name}
                className="product-card-img w-full h-full object-cover"
              />

              {/* Bottom overlay row */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-mono text-[7px] uppercase tracking-widest text-[#444] border border-white/5 px-1.5 py-0.5">
                  {product.id}
                </span>
                <span className="text-base md:text-lg font-black italic tracking-tighter text-white">
                  ¥{product.price.toLocaleString()}
                </span>
              </div>

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Text */}
            <div className="px-1 mt-2">
              <p className="text-[20px] md:text-[22px] font-bold italic tracking-tighter uppercase group-hover:text-[var(--accent)] transition-colors duration-300 mb-0.5 leading-[1.1] min-h-[2.2em] line-clamp-2 overflow-hidden">
                {product.name}
              </p>
              <p className="text-[#333] text-[9px] uppercase font-mono tracking-widest">
                {product.sizes.includes('ONE SIZE') ? 'One Size' : `S · M · L · XL`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
