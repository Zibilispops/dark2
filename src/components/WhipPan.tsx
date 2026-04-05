'use client';

import { motion } from 'framer-motion';

export function WhipPan({ 
  children, 
  direction = 'left', 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode; 
  direction?: 'left' | 'right'; 
  className?: string;
  delay?: number;
}) {
  const xOffset = direction === 'left' ? '-120vw' : '120vw';
  
  return (
    <motion.div
      initial={{ x: xOffset, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
