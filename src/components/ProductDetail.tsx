import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import { useCart } from '../CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-20 px-6 md:px-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-4 opacity-40 hover:opacity-100 transition-opacity mb-12 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-[0.2em]">Return to shop</span>
      </button>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-6">
          {product.images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="aspect-[3/4] bg-brand-gray overflow-hidden"
            >
              <img src={img} alt={product.name} className="w-full h-full object-cover grayscale" />
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <div className="sticky top-32 h-fit">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 uppercase">{product.name}</h1>
            <p className="text-2xl font-light mb-8">R {product.price.toLocaleString()}</p>
            
            <div className="h-px bg-white/10 w-full mb-8" />

            <p className="text-sm text-brand-offwhite/60 leading-relaxed max-w-md mb-12">
              {product.description}
            </p>

            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-widest mb-4 opacity-100">Select Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[60px] h-12 flex items-center justify-center border transition-all duration-300 rounded-full text-xs font-light tracking-widest ${
                      selectedSize === size 
                        ? 'bg-white text-brand-black border-white' 
                        : 'bg-transparent border-white/20 text-white hover:border-white/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, selectedSize)}
              className="w-full bg-white text-brand-black h-16 rounded-full flex items-center justify-center space-x-4 group hover:bg-brand-accent transition-all active:scale-[0.98]"
            >
              <ShoppingBag size={18} />
              <span className="text-xs font-medium uppercase tracking-[0.3em]">Add to bag</span>
            </button>

            <div className="mt-12 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Details</p>
                <div className="grid grid-cols-2 gap-y-2">
                  {product.details.map((detail, i) => (
                    <p key={i} className="text-[10px] font-light text-brand-offwhite/50 uppercase tracking-wider">• {detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
