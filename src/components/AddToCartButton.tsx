'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { getPriceBySize, getMaxPrice } from '@/lib/pricing';
import { WhipPan } from '@/components/WhipPan';
import { FadeUp } from '@/components/FadeUp';
import { motion } from 'framer-motion';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [added, setAdded] = useState(false);
  const [showSizeError, setShowSizeError] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      setTimeout(() => setShowSizeError(false), 2000);
      return;
    }
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const currentPrice = selectedSize ? getPriceBySize(product.price, selectedSize) : null;

  return (
    <div className="add-to-cart-container">
      <div className="flex flex-col">

        {/* ── Name + Price: DESKTOP only (on mobile shown above image in page.tsx) ── */}
        <div className="hidden lg:flex flex-col">
          <WhipPan direction="right">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 leading-[0.85] text-balance break-normal uppercase font-black italic tracking-tighter">
              {product.name}
            </h2>
          </WhipPan>
          <FadeUp mode="animate" delay={0.2} y={20}>
            <div className={`text-3xl sm:text-4xl font-black italic mb-8 lg:mb-12 tracking-tighter transition-all duration-300 ${
              added ? 'text-red-600' : 'text-[var(--accent)]'
            }`}>
              {added ? 'ADDED TO CART ' : ''}¥{(currentPrice ?? getMaxPrice(product.price, product.sizes)).toLocaleString()}
            </div>
          </FadeUp>
        </div>

        {/* Description + Features (both mobile & desktop) */}
        <div className="space-y-6 mb-8 lg:mb-16">
          <FadeUp mode="animate" delay={0.35}>
            <p className="text-[#888] leading-relaxed text-sm">
              {product.description}
            </p>
          </FadeUp>
          <ul className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-[#444]">
            {product.features.map((feature, i) => (
              <FadeUp key={i} mode="animate" delay={0.5 + (i * 0.1)} y={10}>
                <li className="flex gap-4">
                  <span className="text-[var(--accent)]">[+]</span> {feature}
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>

        {/* ── DESKTOP: size selector + button inline ── */}
        <div className="hidden lg:block space-y-4">
          {product.sizes.length > 1 && (
            <div className={showSizeError ? 'animate-shake' : ''}>
              <p className={`font-mono uppercase tracking-widest mb-3 transition-all duration-300 ${
                showSizeError ? 'text-red-500 text-[15px] font-black' : 'text-[#444] text-[10px] font-medium'
              }`}>
                {showSizeError ? 'Select Size Required' : 'Select Size'}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setShowSizeError(false);
                    }}
                    className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                        : 'border-white/10 text-[#555] hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-6 text-base tracking-widest group relative overflow-hidden transition-all duration-300 ${
              added
                ? 'bg-black border-2 border-red-600 text-red-600 font-black italic shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                : 'btn-primary'
            }`}
          >
            <span className="relative z-10">
              {added ? (
                <>Added to cart ¥{currentPrice?.toLocaleString()}</>
              ) : (
                <>Add to Cart{selectedSize && <><span className="mx-2 opacity-30">·</span> ¥{currentPrice?.toLocaleString()}</>}</>
              )}
            </span>
            {!added && (
              <span className="ml-4 opacity-30 group-hover:opacity-100 transition-opacity relative z-10">→</span>
            )}
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Spacer so mobile content doesn't hide behind sticky bar */}
        <div className="lg:hidden h-36" />
      </div>

      {/* ── MOBILE STICKY BOTTOM BAR: sizes + button together (green = keep together) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[200] bg-black border-t border-white/10">

        {/* Size selector row inside sticky bar */}
        {product.sizes.length > 1 && (
          <div className={`px-4 pt-3 pb-1 ${showSizeError ? 'animate-shake' : ''}`}>
            <p className={`font-mono uppercase tracking-widest mb-2 transition-all duration-200 text-center ${
              showSizeError ? 'text-red-500 text-[13px] font-black' : 'text-[#555] text-[9px]'
            }`}>
              {showSizeError ? '⚠ Select a Size' : 'Select Size'}
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setShowSizeError(false);
                  }}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all duration-200 min-w-[3rem] ${
                    selectedSize === size
                      ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                      : 'border-white/10 text-[#555] active:border-white/30 active:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart button */}
        <div className="px-4 py-3">
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-5 text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${
              added
                ? 'bg-black border-2 border-red-600 text-red-600 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                : 'bg-[var(--accent)] text-black hover:brightness-110 active:scale-[0.98]'
            }`}
          >
            {added ? (
              <>✓ Added to Cart · ¥{currentPrice?.toLocaleString()}</>
            ) : (
              <>ADD TO CART {selectedSize ? <>· ¥{currentPrice?.toLocaleString()}</> : <>· ¥{getMaxPrice(product.price, product.sizes).toLocaleString()}</>} →</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
