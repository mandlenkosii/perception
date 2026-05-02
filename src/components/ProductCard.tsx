import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  key?: string | number;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray mb-6">
        <motion.img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-500" />
        
        {/* Quick info overlay */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <p className="text-[10px] uppercase tracking-widest text-white">View Details</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium tracking-tight mb-1">{product.name}</h3>
          <p className="text-[10px] uppercase tracking-widest opacity-40">{product.category}</p>
        </div>
        <p className="text-sm font-light">R {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
