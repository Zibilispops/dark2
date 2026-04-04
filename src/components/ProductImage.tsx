'use client';

import { useState } from 'react';

interface ProductImageProps {
  frontImage: string;
  backImage?: string;
  name: string;
}

export function ProductImage({ frontImage, backImage, name }: ProductImageProps) {
  const [showBack, setShowBack] = useState(false);

  const current = showBack && backImage ? backImage : frontImage;

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center gap-4">
      <img
        src={current}
        alt={`${name} — ${showBack ? 'back' : 'front'}`}
        className="w-full h-auto object-contain transition-all duration-500 ease-in-out"
      />

      {backImage && (
        <div className="flex gap-2">
          <button
            onClick={() => setShowBack(false)}
            className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest border transition-all ${
              !showBack
                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                : 'border-white/10 text-[#444] hover:border-white/30 hover:text-white'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => setShowBack(true)}
            className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest border transition-all ${
              showBack
                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                : 'border-white/10 text-[#444] hover:border-white/30 hover:text-white'
            }`}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
