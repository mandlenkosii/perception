import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './constants';

interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  total: number;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, size: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.selectedSize === size);
      if (existing) {
        return prev.map(i => 
          (i.id === product.id && i.selectedSize === size) 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === productId && i.selectedSize === size)));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, total, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
