'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface ProductImageProps {
  frontImage: string;
  backImage?: string;
  name: string;
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Escape to close + prevent body scroll
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Scroll to zoom
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(5, Math.max(1, s - e.deltaY * 0.002)));
  }, []);

  // Reset pan when scale returns to 1
  useEffect(() => {
    if (scale === 1) setOffset({ x: 0, y: 0 });
  }, [scale]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y),
    });
  };

  const onMouseUp = () => { setDragging(false); dragStart.current = null; };

  const zoom = (factor: number) => {
    setScale((s) => Math.min(5, Math.max(1, s * factor)));
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black"
      style={{ touchAction: 'none' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 shrink-0 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => zoom(1.4)}
            className="font-mono text-[10px] uppercase tracking-widest text-[#555] active:text-[var(--accent)] border border-white/10 px-3 py-2 transition-all"
          >
            + Zoom
          </button>
          <span className="font-mono text-[9px] text-[#333] tracking-widest min-w-[4ch] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => zoom(1 / 1.4)}
            className="font-mono text-[10px] uppercase tracking-widest text-[#555] active:text-white border border-white/10 px-3 py-2 transition-all"
          >
            − Zoom
          </button>
          {scale > 1 && (
            <button
              onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }}
              className="font-mono text-[10px] uppercase tracking-widest text-[#333] border border-white/10 px-3 py-2"
            >
              Reset
            </button>
          )}
        </div>
        {/* Large close tap target for mobile */}
        <button
          onClick={onClose}
          className="font-mono text-[11px] uppercase tracking-widest text-white border border-white/20 px-4 py-2 active:bg-white/10 transition-all min-w-[56px] text-center"
        >
          ✕ Close
        </button>
      </div>

      {/* Image area */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{ cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in' }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            maxWidth: '92vw',
            maxHeight: '80vh',
            objectFit: 'contain',
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            transition: dragging ? 'none' : 'transform 0.15s ease',
            userSelect: 'none',
          }}
          onClick={(e) => { if (scale === 1) { zoom(2); } else { e.stopPropagation(); } }}
        />
      </div>

      {/* Bottom hint */}
      <div className="py-3 text-center shrink-0 border-t border-white/5">
        <p className="font-mono text-[9px] uppercase tracking-widest text-[#292929]">
          {scale > 1 ? 'Drag to pan · Tap outside to close' : 'Tap image or + Zoom to magnify'}
        </p>
      </div>
    </div>
  );
}

export function ProductImage({ frontImage, backImage, name }: ProductImageProps) {
  const [showBack, setShowBack] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const current = showBack && backImage ? backImage : frontImage;

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

      {zoomed && (
        <Lightbox
          src={current}
          alt={`${name} — ${showBack ? 'back' : 'front'}`}
          onClose={() => setZoomed(false)}
        />
      )}
    </>
  );
}
