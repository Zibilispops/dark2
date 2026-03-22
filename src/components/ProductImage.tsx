'use client';

import { useState } from 'react';

interface ProductImageProps {
  frontImage: string;
  backImage?: string;
  name: string;
}

export function ProductImage({ frontImage, backImage, name }: ProductImageProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center cursor-crosshair"
      onMouseEnter={() => backImage && setShowBack(true)}
      onMouseLeave={() => setShowBack(false)}
      onClick={() => backImage && setShowBack(!showBack)}
    >
      <img 
        src={showBack && backImage ? backImage : frontImage} 
        alt={name}
        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
      />
      
      {backImage && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <div className={`w-1.5 h-1.5 rounded-full border border-white/20 ${!showBack ? 'bg-[var(--accent)]' : 'bg-transparent'}`} />
          <div className={`w-1.5 h-1.5 rounded-full border border-white/20 ${showBack ? 'bg-[var(--accent)]' : 'bg-transparent'}`} />
        </div>
      )}

      {backImage && !showBack && (
        <div className="absolute bottom-10 right-10 font-mono text-[8px] uppercase tracking-[0.2em] text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">
          Hover to view back
        </div>
      )}
    </div>
  );
}
