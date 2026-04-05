'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/FadeUp';

export const Cart = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            size: item.selectedSize,
          })),
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to initialize checkout');
      }
    } catch (err) {
      console.error('[STRIPE_PAYMENT_INIT_ERROR]', err);
      alert('Checkout initialization failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md h-full flex flex-col bg-[#0a0a0a] border-l border-white/10 shadow-2xl"
            >
              <div className="flex-1 py-12 px-8 overflow-y-auto">
                <div className="flex items-start justify-between mb-12">
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-black italic tracking-tighter uppercase"
                  >
                    Cart
                  </motion.h2>
                  <button
                    onClick={onClose}
                    className="p-2 text-[#666] hover:text-white transition-colors"
                  >
                    <X size={32} strokeWidth={1.5} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="h-[60vh] flex flex-col items-center justify-center space-y-6"
                  >
                    <ShoppingBag size={64} className="text-[#1a1a1a]" strokeWidth={1} />
                    <p className="text-[#444] font-mono text-[14px] uppercase tracking-[0.2em]">Your cart is empty</p>
                  </motion.div>
                ) : (
                  <div className="space-y-12">
                    {cart.map((item, i) => (
                      <motion.div
                        key={item.cartKey}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex gap-6"
                      >
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-[#111] border border-white/5 rounded-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover brightness-75 hover:brightness-100 transition-all duration-500"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-bold italic tracking-tighter uppercase leading-tight">
                                {item.name}
                              </h3>
                              <p className="ml-4 font-black">¥{item.price.toLocaleString()}</p>
                            </div>
                            <p className="mt-1 text-[#444] text-[11px] font-mono uppercase tracking-widest leading-none">
                              Qty: {item.quantity} · Size: {item.selectedSize}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => removeFromCart(item.cartKey)}
                              className="text-[11px] font-mono uppercase text-[#444] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                            >
                              <Trash2 size={10} /> [Remove]
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border-t border-white/10 py-8 px-8 bg-[#0d0d0d]"
              >
                <div className="flex justify-between text-base font-black mb-1">
                  <p className="uppercase text-[14px] font-mono text-[#666] tracking-widest">Subtotal</p>
                  <p>¥{totalPrice.toLocaleString()}</p>
                </div>
                <p className="mt-0.5 text-[11px] font-mono text-[#444] uppercase tracking-widest mb-8">
                  // Shipping and taxes calculated at entry
                </p>

                <button
                  disabled={cart.length === 0 || isLoading}
                  onClick={handleCheckout}
                  className="w-full py-5 bg-[var(--accent)] text-black font-black uppercase tracking-tighter italic text-xl disabled:opacity-20 disabled:grayscale transition-all hover:scale-[1.02] active:scale-[0.98] rounded-sm flex items-center justify-center gap-4"
                >
                  {isLoading ? (
                    <span className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    'Go to Registry'
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-full mt-4 py-2 text-[11px] font-mono text-[#444] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Keep Exploring
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
