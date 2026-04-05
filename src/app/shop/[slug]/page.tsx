import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { AddToCartButton } from '@/components/AddToCartButton';
import { ProductImage } from '@/components/ProductImage';
import { ProductNavigation } from '@/components/ProductNavigation';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/data/products';
import { productDescriptions } from '@/data/descriptions';
import { productPrices } from '@/data/prices';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase.from('products').select('name, id').eq('slug', slug).single();
  const description = productDescriptions[slug] ?? 'Limited edition DTG print on Bad Printer 7.4oz Super Heavyweight cotton. Designed in Gifu, Japan.';
  return {
    title: data ? `${data.name} — Dark Factory` : 'Dark Factory',
    description,
    alternates: { canonical: `https://www.sdjapan.jp/shop/${slug}` },
    openGraph: {
      title: data ? `${data.name} — Dark Factory` : 'Dark Factory',
      description,
      images: [{ url: `/products/${slug.replace(/-/g, '_')}_front.png` }],
    },
  };
}

export async function generateStaticParams() {
  const { data } = await supabase.from('products').select('slug');
  const products = data || [];
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Derive back image path from front image path
function getBackImage(frontImage: string): string | undefined {
  const back = frontImage.replace('_front.png', '_back.png');
  // Return the path — ProductImage will render it if it resolves
  return back !== frontImage ? back : undefined;
}

// Seed operator reviews per product (shown on all products)
const OPERATOR_REVIEWS = [
  { handle: 'OPR-4471', location: 'Tokyo', text: 'Print quality is exactly what Bad Printer promises. Ink sits deep, colors stay sharp after 20 washes.', verified: true },
  { handle: 'OPR-2209', location: 'Osaka', text: 'The weight of the cotton is immediately noticeable. Not a thin tee — it drapes properly and holds structure.', verified: true },
  { handle: 'OPR-5583', location: 'Berlin', text: 'Shipped from Gifu in 4 days to Germany. Packaging was clean. Would order from the full catalog.', verified: true },
];

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

  // Override DB description and price with local copies if available
  const description = productDescriptions[product.slug] ?? product.description;
  const price = productPrices[product.slug] ?? product.price;
  const productWithDescription = { ...product, description, price };

  const backImage = getBackImage(product.image);

  // Fetch all product slugs to determine neighbors (ordered by ID as in the shop)
  const { data: allProducts } = await supabase
    .from('products')
    .select('slug')
    .order('id', { ascending: true });

  const slugs = (allProducts || []).map((p) => p.slug);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : slugs[slugs.length - 1];
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : slugs[0];

  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-28 lg:pb-20 px-4 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">

      {/* Product Image */}
      <div className="flex-1 bg-[#0c0c0c] border border-white/5 relative group p-4 md:p-12 overflow-hidden flex flex-col gap-6 self-start lg:sticky lg:top-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />

        <ProductImage
          frontImage={product.image}
          backImage={backImage}
          name={product.name}
        />

        <div className="product-meta-container w-full p-4 border border-white/5 font-mono text-[10px] uppercase text-[#444] tracking-widest leading-relaxed pointer-events-none z-10 bg-[#0a0a0a]">
          Serial: {product.id}<br />
          Origin: Gifu Studio<br />
          Type: [DTG-PRINT] · Bad Printer 7.4oz
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <Link href="/shop" className="text-[#444] text-[10px] font-mono tracking-widest uppercase mb-12 hover:text-[var(--accent)] transition-colors inline-block">
          ← Back to Collection
        </Link>

        <AddToCartButton product={JSON.parse(JSON.stringify(productWithDescription))} />

        <div className="mt-8 flex justify-between p-4 border border-white/5 font-mono text-[10px] uppercase text-[#333]">
          <Link href="/logistics" className="hover:text-[var(--accent)] transition-colors">
            Shipping Info →
          </Link>
          <div>Limited Availability</div>
        </div>

        {/* ── Operator Reports ── */}
        <div className="mt-12">
          <p className="text-[var(--accent)] font-mono text-[9px] uppercase tracking-[0.35em] mb-6">
            // Operator Reports
          </p>
          <div className="space-y-6">
            {OPERATOR_REVIEWS.map((review, i) => (
              <div key={i} className="border border-white/5 p-4 bg-[#0c0c0c]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)]">
                      {review.handle}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#333] ml-3">
                      {review.location}
                    </span>
                  </div>
                  {review.verified && (
                    <span className="font-mono text-[7px] uppercase tracking-widest text-[#333] border border-white/5 px-1.5 py-0.5">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-[#666] text-xs leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyboard & Visual Navigation ── */}
      <ProductNavigation prevSlug={prevSlug} nextSlug={nextSlug} />
    </main>
  );
}
