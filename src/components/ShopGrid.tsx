'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { getMaxPrice } from '@/lib/pricing';
import { productPrices } from '@/data/prices';

type Filter = 'ALL' | 'RAMEN' | 'ICE CREAM' | 'CYBERPUNK' | 'ABSTRACT' | 'FOOD & DRINK';

const RAMEN_SLUGS = new Set(['bp-ramen', 'lula-ramen', 'ramen3', 'ramendrop', 'ramenmosnter', 'ramenrider', 'ultraramen']);
const ICE_CREAM_SLUGS = new Set(['ice-scream1', 'ice-scream2', 'ice-scream3', 'icecream1', 'icecream2', 'icescreamsoft']);
const CYBERPUNK_SLUGS = new Set(['cyborg-girl', 'digital-battle', 'hit-girl', 'boy', 'breaking-hearts', 'silly-devil', 'iceskull', 'fight-to']);
const ABSTRACT_SLUGS = new Set(['fibonacci', 'mundane', 'self', 'culture', 'leisure', 'chillout', 'einstein1-frame']);
const FOOD_SLUGS = new Set(['coffeeoclock', 'fast-food-racer', 'pie', 'spacecoffe', 'super-cute']);
const FEATURED_SLUGS = new Set(['cyborg-girl', 'ramenrider', 'spacecoffe', 'iceskull', 'fibonacci', 'breaking-hearts']);

// Fixed stock counts per product — creates specific scarcity urgency
const STOCK_COUNTS: Record<string, number> = {
  'cyborg-girl': 6,
  'ramenrider': 9,
  'spacecoffe': 7,
  'iceskull': 11,
  'fibonacci': 8,
  'bp-ramen': 14,
  'digital-battle': 13,
  'hit-girl': 10,
  'breaking-hearts': 12,
  'coffeeoclock': 15,
  'boy': 17,
  'lula-ramen': 14,
  'ramen3': 16,
  'ramendrop': 11,
  'ramenmosnter': 13,
  'ultraramen': 9,
  'ice-scream1': 18,
  'ice-scream2': 15,
  'ice-scream3': 12,
  'icecream1': 14,
  'icecream2': 16,
  'icescreamsoft': 10,
  'fast-food-racer': 13,
  'fight-to': 11,
  'pie': 14,
  'mundane': 12,
  'self': 9,
  'culture': 13,
  'leisure': 15,
  'chillout': 14,
  'einstein1-frame': 8,
  'silly-devil': 11,
  'super-cute': 16,
};

function getStockLabel(slug: string): { label: string; urgent: boolean } {
  const count = STOCK_COUNTS[slug] ?? 12;
  if (count <= 8) return { label: `${count} remaining`, urgent: true };
  if (count <= 12) return { label: `${count} remaining`, urgent: false };
  return { label: 'Limited', urgent: false };
}

function getCategory(slug: string): Filter | null {
  if (RAMEN_SLUGS.has(slug)) return 'RAMEN';
  if (ICE_CREAM_SLUGS.has(slug)) return 'ICE CREAM';
  if (CYBERPUNK_SLUGS.has(slug)) return 'CYBERPUNK';
  if (ABSTRACT_SLUGS.has(slug)) return 'ABSTRACT';
  if (FOOD_SLUGS.has(slug)) return 'FOOD & DRINK';
  return null;
}

const FILTERS: Filter[] = ['ALL', 'RAMEN', 'ICE CREAM', 'CYBERPUNK', 'ABSTRACT', 'FOOD & DRINK'];

function ProductCard({ product, i, columns = 4 }: { product: Product; i: number; columns?: number }) {
  const isFeatured = FEATURED_SLUGS.has(product.slug);
  const stock = getStockLabel(product.slug);

  const delay = (i % columns) * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link
        href={`/shop/${product.slug}`}
        className="product-card group block p-4 bg-white/5 hover:bg-white transition-all duration-700"
      >
      <div className="product-card-border aspect-[3/4] overflow-hidden bg-[#0f0f0f] relative border border-white/5 rounded-sm mb-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(205,255,0,0.03)_0%,transparent_70%)]" />

        <img
          src={product.image}
          alt={product.name}
          className="product-card-img w-full h-full object-cover"
        />

        {/* Top badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
          {isFeatured ? (
            <span className="bg-[var(--accent)] text-black font-mono text-[14px] uppercase tracking-widest px-2 py-1">
              Staff Pick
            </span>
          ) : <span />}
          <span className="bg-black/60 border border-white/10 font-mono text-[8px] uppercase tracking-widest px-1.5 py-0.5 text-[#555]">
            Bad Printer 6.6oz
          </span>
        </div>

        {/* Bottom overlay row */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#444] border border-white/5 px-1.5 py-0.5">
            {product.id}
          </span>
          <span className="text-base md:text-lg font-black italic tracking-tighter text-white">
            ¥{getMaxPrice(productPrices[product.slug] ?? product.price, product.sizes).toLocaleString()}
          </span>
        </div>

        {/* Scarcity indicator */}
        <div className="absolute bottom-10 left-3">
          <span className={`font-mono text-[8px] uppercase tracking-widest ${stock.urgent ? 'text-red-400' : 'text-red-400/60'}`}>
            {stock.label}
          </span>
        </div>

        {/* Hover accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="px-1 mt-2">
        <p className="text-[20px] md:text-[22px] font-bold italic tracking-tighter uppercase text-white group-hover:text-black transition-colors duration-700 mb-0.5 leading-[1.1] min-h-[2.2em] line-clamp-2 overflow-hidden">
          {product.name}
        </p>
        <p className="text-[#333] group-hover:text-[#555] text-[10px] uppercase font-mono tracking-widest transition-colors duration-700">
          {product.sizes.includes('ONE SIZE') ? 'One Size' : `S · M · L · XL`}
        </p>
      </div>
      </Link>
    </motion.div>
  );
}

export function ShopGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>('ALL');

  const featured = products.filter((p) => FEATURED_SLUGS.has(p.slug));
  const filtered = active === 'ALL'
    ? products
    : products.filter((p) => getCategory(p.slug) === active);

  return (
    <>
      {/* ── Staff Picks (shown on ALL only) ── */}
      {active === 'ALL' && featured.length > 0 && (
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-mono text-[16px] uppercase tracking-[0.35em] mb-8"
          >
            // STAFF PICKS
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} i={i} columns={3} />
            ))}
          </div>
          <div className="w-full h-px bg-white/5 mt-12 mb-8" />
        </div>
      )}

      {/* ── Filter tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all duration-200 ${
              active === f
                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                : 'border-white/10 text-[#444] hover:border-white/30 hover:text-[#888]'
            }`}
          >
            {f}
            {f !== 'ALL' && (
              <span className="ml-2 opacity-40">
                {products.filter((p) => getCategory(p.slug) === f).length}
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {/* ── Product count ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-[#222] font-mono text-[10px] uppercase tracking-widest mb-6"
      >
        {filtered.length} item{filtered.length !== 1 ? 's' : ''} {active !== 'ALL' ? `in ${active}` : 'available'}
      </motion.p>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-12">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} i={i} columns={4} />
        ))}
      </div>
    </>
  );
}
