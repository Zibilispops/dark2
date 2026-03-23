'use client';

import { useState } from 'react';

interface ProductImageProps {
  frontImage: string;
  name: string;
}

export function ProductImage({ frontImage, name }: ProductImageProps) {
  return (
    <div className="relative w-full h-auto flex items-center justify-center">
      <img
        src={frontImage}
        alt={name}
        className="w-full h-auto object-contain transition-all duration-700 ease-in-out"
      />
    </div>
  );
}
