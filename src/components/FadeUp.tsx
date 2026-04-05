'use client';

import { motion } from 'framer-motion';

/**
 * FadeUp — Assemble Motion T6 pattern.
 * Scroll-triggered 40px vertical lift + fade, fires once.
 * Use `delay` for stagger timing within a row (i * 0.1).
 * Use `animate` mode for above-the-fold elements that don't need scroll trigger.
 */
export function FadeUp({
  children,
  delay = 0,
  className = '',
  mode = 'scroll',
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  mode?: 'scroll' | 'animate';
  y?: number;
}) {
  if (mode === 'animate') {
    return (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
