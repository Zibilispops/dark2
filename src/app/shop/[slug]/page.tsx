import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AddToCartButton } from '@/components/AddToCartButton';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row gap-16">
      {/* Product Image */}
      <div className="flex-1 aspect-[4/5] bg-[#0c0c0c] border border-white/5 relative group p-12 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-1000"
        />
        
        <div className="absolute top-10 left-10 p-4 border border-white/5 font-mono text-[10px] uppercase text-[#444] tracking-widest leading-relaxed">
          Serial: {product.id}<br />
          Origin: Tokyo Studio<br />
          Type: [DTG-PRINT]
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/3 flex flex-col justify-start">
        <Link href="/shop" className="text-[#444] text-[10px] font-mono tracking-widest uppercase mb-12 hover:text-[var(--accent)] transition-colors inline-block">
          ← Back to Collection
        </Link>
        
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.8] mb-8">
          {product.name}
        </h1>
        
        <div className="text-4xl font-black italic mb-12 tracking-tighter">
          ${product.price}
        </div>

        <div className="space-y-6 mb-16">
          <p className="text-[#888] leading-relaxed text-sm">
            {product.description}
          </p>
          <ul className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-[#444]">
            {product.features.map((feature, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-[var(--accent)]">[+]</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <AddToCartButton product={JSON.parse(JSON.stringify(product))} />
        
        <div className="mt-8 flex justify-between p-4 border border-white/5 font-mono text-[10px] uppercase text-[#333]">
          <div>Ships Worldwide</div>
          <div>Limited Availability</div>
        </div>
      </div>
    </main>
  );
}
