import Link from 'next/link';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic">Collection</h1>
        <p className="text-[#666] max-w-lg mb-8 uppercase text-xs tracking-widest font-mono">
          // [001] Digital Vanguard Apparel · Select Items Available Now
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/shop/${product.slug}`}
            className="group block space-y-6"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#111] relative border border-white/5 group-hover:border-[var(--accent)]/30 transition-all duration-500 rounded-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
              <img 
                src={product.image} 
                alt={product.id}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-6 left-6 flex justify-between items-center w-[calc(100%-48px)] z-20">
                <div className="text-[10px] font-mono uppercase bg-black border border-white/10 px-2 py-1 tracking-tighter">
                  {product.id}
                </div>
                <div className="text-xl font-black italic tracking-tighter">
                  ${product.price}
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl italic font-black group-hover:text-[var(--accent)] transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-[#444] text-[10px] uppercase font-mono tracking-widest">
                Category / Apparel / [Core]
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
