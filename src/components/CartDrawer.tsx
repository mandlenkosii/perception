import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

export default function CartDrawer() {
  const { isOpen, toggleCart, items, removeFromCart, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-black border-l border-white/5 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-light tracking-widest uppercase">Your bag</h2>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <p className="text-sm uppercase tracking-widest mb-4">Your bag is empty</p>
                  <button 
                    onClick={toggleCart}
                    className="text-[10px] underline underline-offset-4 uppercase tracking-widest"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-6">
                    <div className="w-24 aspect-[3/4] bg-brand-gray overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium tracking-tight">{item.name}</h3>
                          <p className="text-sm font-light">R {item.price.toLocaleString()}</p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Size: {item.selectedSize}</p>
                        <p className="text-[10px] uppercase tracking-widest opacity-40">Qty: {item.quantity}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="flex items-center space-x-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={12} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/5 space-y-6">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Subtotal</p>
                  <p className="text-xl font-light">R {total.toLocaleString()}</p>
                </div>
                <button className="w-full bg-white text-brand-black py-4 rounded-full flex items-center justify-center space-x-4 group hover:bg-brand-accent transition-colors">
                  <span className="text-xs font-medium uppercase tracking-[0.2em]">Checkout</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[9px] text-center opacity-30 uppercase tracking-widest">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
