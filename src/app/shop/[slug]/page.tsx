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
import { FadeUp } from '@/components/FadeUp';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase.from('products').select('name, id').eq('slug', slug).single();
  const description = productDescriptions[slug] ?? 'Limited edition DTG print on Bad Printer 7.4oz Heavyweight cotton. Designed in Gifu, Japan.';
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
  return back !== frontImage ? back : undefined;
}

// Seed operator reviews per product (shown on all products)
const OPERATOR_REVIEWS = [
  { handle: 'OPR-4471', location: 'Tokyo', text: 'Confort is exactly what Bad Printer promises. Ink sits deep, touch zero, you never fell the print, colors are good, but fade with washes.', verified: true },
  { handle: 'OPR-2209', location: 'Osaka', text: 'HEAVYWEIGHT 6.6 OZ (225 GSM) - The weight of the cotton is immediately noticeable. Not a thin tee — it drapes properly and holds structure.', verified: true },
  { handle: 'OPR-5583', location: 'Berlin', text: 'Shipped from Gifu in 2 days to all Japan. Packaging was clean. Would order from the full catalog. Shipping Fee: Free (Excluding Hokkaido, Okinawa, and Remote Islands).', verified: true },
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

  const description = productDescriptions[product.slug] ?? product.description;
  const price = productPrices[product.slug] ?? product.price;
  const productWithDescription = { ...product, description, price };

  const backImage = getBackImage(product.image);

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

      {/* ── MOBILE-ONLY: Name above image ── */}
      <FadeUp mode="animate" delay={0.2}>
        <div className="lg:hidden flex flex-col gap-2 -mb-2">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter leading-[0.85]">
            {product.name}
          </h1>
        </div>
      </FadeUp>

      {/* Product Image */}
      <FadeUp mode="animate" delay={0.3} className="flex-1 self-start lg:sticky lg:top-32">
        <div className="bg-[#0c0c0c] border border-white/5 relative group p-4 md:p-12 overflow-hidden flex flex-col gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />

          <ProductImage
            frontImage={product.image}
            backImage={backImage}
            name={product.name}
          />

          {/* Metadata — hidden on mobile */}
          <div className="product-meta-container hidden lg:block w-full p-4 border border-white/5 font-mono text-[11px] uppercase text-[#444] tracking-widest leading-relaxed pointer-events-none z-10 bg-[#0a0a0a]">
            Serial: {product.id}<br />
            Origin: Gifu Studio<br />
            Type: [DTG-PRINT] · Heavyweight 6.6oz
          </div>
        </div>
      </FadeUp>

      {/* Product Details */}
      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <FadeUp mode="animate" delay={0.2}>
          <Link href="/shop" className="text-[#444] text-[11px] font-mono tracking-widest uppercase mb-12 hover:bg-white hover:text-black transition-colors inline-block px-2 py-1 -ml-2">
            ← Back to Collection
          </Link>
        </FadeUp>

        <FadeUp mode="animate" delay={0.4}>
          <AddToCartButton product={JSON.parse(JSON.stringify(productWithDescription))} />
        </FadeUp>

        <FadeUp mode="animate" delay={0.55}>
          <div className="mt-8 flex justify-between p-4 border border-white/5 font-mono text-[11px] uppercase text-[#333]">
            <Link href="/logistics" className="hover:bg-white hover:text-black px-2 py-1 -mx-2 transition-colors">
              Shipping Info →
            </Link>
            <div>Limited Availability</div>
          </div>
        </FadeUp>

        {/* ── Operator Reports ── */}
        <div className="mt-12">
          <FadeUp delay={0}>
            <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-[0.35em] mb-6">
              // Operator Reports
            </p>
          </FadeUp>
          <div className="space-y-6">
            {OPERATOR_REVIEWS.map((review, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="border border-white/5 p-4 bg-[#0c0c0c]">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                        {review.handle}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#333] ml-3">
                        {review.location}
                      </span>
                    </div>
                    {review.verified && (
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#333] border border-white/5 px-1.5 py-0.5">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[#666] text-[13px] leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyboard & Visual Navigation ── */}
      <ProductNavigation prevSlug={prevSlug} nextSlug={nextSlug} />
    </main>
  );
}
