'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="btn-primary w-full py-6 text-base tracking-widest group relative overflow-hidden"
    >
      <span className="relative z-10">Add To Order</span>
      <span className="ml-4 opacity-30 group-hover:opacity-100 transition-opacity relative z-10">→</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};
