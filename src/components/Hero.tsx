import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop" 
          alt="Campaign"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] mb-4"
          >
            Spring / Summer 2026
          </motion.p>
          
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8vw] font-light leading-[0.9] tracking-tighter uppercase mb-8"
          >
            Redefine <br /> Perception
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-12"
          >
            <button 
              onClick={onShopClick}
              className="group flex items-center space-x-4 bg-white text-brand-black px-8 py-4 rounded-full font-medium transition-all hover:bg-brand-accent focus:outline-none"
            >
              <span className="uppercase tracking-widest text-xs">Explore Shop</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="max-w-xs text-sm text-brand-offwhite/50 leading-relaxed font-light">
              A curated collection of essential silhouettes, refined through the lens of modern luxury.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-px h-12 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
