import Link from 'next/link';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-32 pb-24 px-6 md:px-12">

      {/* ── Header ── */}
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
      <div className="w-full h-px bg-white/5 mb-16" />

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, i) => (
          <Link
            key={product.id}
            href={`/shop/${product.slug}`}
            className="product-card group block fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Image container */}
            <div className="product-card-border aspect-[3/4] overflow-hidden bg-[#0f0f0f] relative border border-white/5 rounded-sm mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(205,255,0,0.03)_0%,transparent_70%)]" />

              <img
                src={product.image}
                alt={product.name}
                className="product-card-img w-full h-full object-cover"
              />

              {/* Bottom overlay row */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#555] border border-white/10 px-2 py-1">
                  {product.id}
                </span>
                <span className="text-2xl font-black italic tracking-tighter text-white">
                  ¥4,980~
                </span>
              </div>

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-black italic tracking-tighter uppercase group-hover:text-[var(--accent)] transition-colors duration-300 mb-1">
                {product.name}
              </h3>
              <p className="text-[#333] text-[9px] uppercase font-mono tracking-widest">
                {product.sizes.includes('ONE SIZE') ? 'One Size' : `Sizes: ${product.sizes.join(' · ')}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
