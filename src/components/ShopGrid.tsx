'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/data/products';

type Filter = 'ALL' | 'RAMEN' | 'ICE CREAM' | 'CYBERPUNK' | 'ABSTRACT' | 'FOOD & DRINK';

const RAMEN_SLUGS = new Set(['bp-ramen', 'lula-ramen', 'ramen3', 'ramendrop', 'ramenmosnter', 'ramenrider', 'ultraramen']);
const ICE_CREAM_SLUGS = new Set(['ice-scream1', 'ice-scream2', 'ice-scream3', 'icecream1', 'icecream2', 'icescreamsoft']);
const CYBERPUNK_SLUGS = new Set(['cyborg-girl', 'digital-battle', 'hit-girl', 'boy', 'breaking-hearts', 'silly-devil', 'iceskull', 'fight-to']);
const ABSTRACT_SLUGS = new Set(['fibonacci', 'mundane', 'self', 'culture', 'leisure', 'chillout', 'einstein1-frame']);
const FOOD_SLUGS = new Set(['coffeeoclock', 'fast-food-racer', 'pie', 'spacecoffe', 'super-cute']);
const FEATURED_SLUGS = new Set(['cyborg-girl', 'ramenrider', 'spacecoffe', 'iceskull', 'fibonacci']);

function getCategory(slug: string): Filter | null {
  if (RAMEN_SLUGS.has(slug)) return 'RAMEN';
  if (ICE_CREAM_SLUGS.has(slug)) return 'ICE CREAM';
  if (CYBERPUNK_SLUGS.has(slug)) return 'CYBERPUNK';
  if (ABSTRACT_SLUGS.has(slug)) return 'ABSTRACT';
  if (FOOD_SLUGS.has(slug)) return 'FOOD & DRINK';
  return null;
}

const FILTERS: Filter[] = ['ALL', 'RAMEN', 'ICE CREAM', 'CYBERPUNK', 'ABSTRACT', 'FOOD & DRINK'];

export function ShopGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>('ALL');

  const filtered = active === 'ALL'
    ? products
    : products.filter((p) => getCategory(p.slug) === active);

  return (
    <>
      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 text-[9px] font-mono uppercase tracking-widest border transition-all duration-200 ${
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
      </div>

      {/* ── Product count ── */}
      <p className="text-[#222] font-mono text-[9px] uppercase tracking-widest mb-6">
        {filtered.length} item{filtered.length !== 1 ? 's' : ''} {active !== 'ALL' ? `in ${active}` : 'available'}
      </p>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-12">
        {filtered.map((product, i) => {
          const isFeatured = FEATURED_SLUGS.has(product.slug);
          return (
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

                {/* Top badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
                  {isFeatured && (
                    <span className="bg-[var(--accent)] text-black font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5">
                      Featured
                    </span>
                  )}
                  {!isFeatured && <span />}
                  <span className="bg-black/60 border border-white/10 font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 text-[#555]">
                    Bad Printer 7.4oz
                  </span>
                </div>

                {/* Bottom overlay row */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-[#444] border border-white/5 px-1.5 py-0.5">
                    {product.id}
                  </span>
                  <span className="text-base md:text-lg font-black italic tracking-tighter text-white">
                    ¥{product.price.toLocaleString()}
                  </span>
                </div>

                {/* Scarcity indicator */}
                <div className="absolute bottom-10 left-3">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-red-400/70">
                    Limited
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
          );
        })}
      </div>
    </>
  );
}
