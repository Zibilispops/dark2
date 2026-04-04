'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ProductNavigationProps {
  prevSlug: string;
  nextSlug: string;
}

export function ProductNavigation({ prevSlug, nextSlug }: ProductNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') {
        router.push(`/shop/${nextSlug}`);
      } else if (e.key === 'ArrowLeft') {
        router.push(`/shop/${prevSlug}`);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, nextSlug, prevSlug]);

  return (
    <div className="fixed top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none flex justify-between px-6 md:px-12 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
      <button 
        onClick={() => router.push(`/shop/${prevSlug}`)}
        className="pointer-events-auto bg-black/40 border border-white/10 p-4 text-[#333] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2"
        aria-label="Previous product"
      >
        <span className="text-lg">←</span>
      </button>
      <button 
        onClick={() => router.push(`/shop/${nextSlug}`)}
        className="pointer-events-auto bg-black/40 border border-white/10 p-4 text-[#333] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2"
        aria-label="Next product"
      >
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}
