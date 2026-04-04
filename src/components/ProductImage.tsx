'use client';

import { useState, useEffect } from 'react';

interface ProductImageProps {
  frontImage: string;
  backImage?: string;
  name: string;
}

export function ProductImage({ frontImage, backImage, name }: ProductImageProps) {
  const [showBack, setShowBack] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const current = showBack && backImage ? backImage : frontImage;

  // Close lightbox on Escape
  useEffect(() => {
    if (!zoomed) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomed(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [zoomed]);

  return (
    <>
      <div className="relative w-full h-auto flex flex-col items-center justify-center gap-4">
        <div
          className="relative w-full cursor-zoom-in group"
          onClick={() => setZoomed(true)}
        >
          <img
            src={current}
            alt={`${name} — ${showBack ? 'back' : 'front'}`}
            className="w-full h-auto object-contain transition-all duration-500 ease-in-out"
          />
          {/* Zoom hint */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/40 bg-black/60 px-2 py-1">
              Click to zoom
            </span>
          </div>
        </div>

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

      {/* ── Lightbox ── */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setZoomed(false)}
        >
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-[#444] hover:text-white transition-colors z-10"
          >
            [ESC] Close ×
          </button>
          <img
            src={current}
            alt={`${name} — ${showBack ? 'back' : 'front'}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
