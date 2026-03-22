'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const touchQuery = window.matchMedia('(hover: none)');
    setIsTouch(touchQuery.matches);

    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouch(e.matches);
    };

    touchQuery.addEventListener('change', handleTouchChange);

    let rafId: number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top = my + 'px';
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top = ry + 'px';
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      touchQuery.removeEventListener('change', handleTouchChange);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      <div 
        ref={dot} 
        className="cursor" 
        style={{ opacity: isVisible ? 1 : 0 }} 
        aria-hidden 
      />
      <div 
        ref={ring} 
        className="cursor-ring" 
        style={{ opacity: isVisible ? 0.4 : 0 }} 
        aria-hidden 
      />
    </>
  );
}
