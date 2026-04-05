'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ProductNavigationProps {
  prevSlug: string;
  nextSlug: string;
}

export function ProductNavigation({ prevSlug, nextSlug }: ProductNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let touchStartX = 0;
    let touchStartY = 0;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') {
        router.push(`/shop/${nextSlug}`);
      } else if (e.key === 'ArrowLeft') {
        router.push(`/shop/${prevSlug}`);
      }
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }

    function handleTouchEnd(e: TouchEvent) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Swipe threshold: 60px horizontal, more than vertical movement
      if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          router.push(`/shop/${nextSlug}`);
        } else {
          router.push(`/shop/${prevSlug}`);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router, nextSlug, prevSlug]);

  return (
    <div className="product-navigation-container fixed top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none flex justify-between px-6 md:px-12 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        onClick={() => router.push(`/shop/${prevSlug}`)}
        className="pointer-events-auto bg-black/40 border border-white/10 p-4 text-[#333] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2"
        aria-label="Previous product"
      >
        <span className="text-lg">←</span>
      </motion.button>
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        onClick={() => router.push(`/shop/${nextSlug}`)}
        className="pointer-events-auto bg-black/40 border border-white/10 p-4 text-[#333] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center font-mono text-xs uppercase tracking-widest gap-2"
        aria-label="Next product"
      >
        <span className="text-lg">→</span>
      </motion.button>
    </div>
  );
}
