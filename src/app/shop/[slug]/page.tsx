import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AddToCartButton } from '@/components/AddToCartButton';
import { ProductImage } from '@/components/ProductImage';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/data/products';

export const revalidate = 60;

export async function generateStaticParams() {
  const { data } = await supabase.from('products').select('slug');
  const products = data || [];
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
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    notFound();
  }

  const product = data as Product;

  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 px-4 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
      {/* Product Image */}
      <div className="flex-1 bg-[#0c0c0c] border border-white/5 relative group p-4 md:p-12 overflow-hidden flex flex-col gap-6 self-start lg:sticky lg:top-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />
        
        <ProductImage 
          frontImage={product.image} 
          name={product.name}
        />
        
        <div className="w-full p-4 border border-white/5 font-mono text-[10px] uppercase text-[#444] tracking-widest leading-relaxed pointer-events-none z-10 bg-[#0a0a0a]">
          Serial: {product.id}<br />
          Origin: Gifu Studio<br />
          Type: [DTG-PRINT]
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <Link href="/shop" className="text-[#444] text-[10px] font-mono tracking-widest uppercase mb-12 hover:text-[var(--accent)] transition-colors inline-block">
          ← Back to Collection
        </Link>
        
        <AddToCartButton product={JSON.parse(JSON.stringify(product))} />
        
        <div className="mt-8 flex justify-between p-4 border border-white/5 font-mono text-[10px] uppercase text-[#333]">
          <div>Ships Worldwide</div>
          <div>Limited Availability</div>
        </div>
      </div>
    </main>
  );
}
