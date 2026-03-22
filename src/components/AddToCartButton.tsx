'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { getPriceBySize } from '@/lib/pricing';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const currentPrice = selectedSize ? getPriceBySize(selectedSize) : null;

  return (
    <div className="space-y-4">
      {/* Size selector — hide if only one size */}
      {product.sizes.length > 1 && (
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-3">
            Select Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
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
        disabled={!selectedSize || added}
        className={`btn-primary w-full py-6 text-base tracking-widest group relative overflow-hidden transition-all duration-300 ${
          !selectedSize ? 'opacity-30 cursor-not-allowed' : ''
        }`}
      >
        <span className="relative z-10">
          {added ? (
            '✓ Added'
          ) : !selectedSize ? (
            'Select a Size'
          ) : (
            <>
              Add To Order <span className="mx-2 opacity-30">·</span> ¥{currentPrice?.toLocaleString()}
            </>
          )}
        </span>
        {selectedSize && !added && (
          <span className="ml-4 opacity-30 group-hover:opacity-100 transition-opacity relative z-10">→</span>
        )}
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </div>
  );
};
