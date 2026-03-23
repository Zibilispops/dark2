'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/data/products';
import { getPriceBySize } from '@/lib/pricing';

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  cartKey: string; // product id + size
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (cartKey: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string) => {
    const cartKey = `${product.id}-${size}`;
    const price = getPriceBySize(product.price, size);
    
    setCart((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);
      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, price, quantity: 1, selectedSize: size, cartKey }];
    });
  };

  const removeFromCart = (cartKey: string) => {
    setCart((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
