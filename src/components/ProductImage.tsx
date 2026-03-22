'use client';

import { useState } from 'react';

interface ProductImageProps {
  frontImage: string;
  name: string;
}

export function ProductImage({ frontImage, name }: ProductImageProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={frontImage}
        alt={name}
        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
      />
    </div>
  );
}
