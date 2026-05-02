import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './CartContext';
import { PRODUCTS, Product, Category } from './constants';
import { Instagram, Twitter, ChevronRight } from 'lucide-react';

const CATEGORIES: (Category | 'All')[] = ['All', 'Hoodies', 'Sweaters', 'T-Shirts', 'Sweatpants', 'Pants', 'Jackets', 'Accessories', 'Art'];

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<(Category | 'All')>('All');

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const renderPage = () => {
    if (currentPage === 'product' && selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setCurrentPage('shop')} 
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-32">
            <Hero onShopClick={() => setCurrentPage('shop')} />
            
            {/* Featured Section */}
            <section className="px-6 md:px-12">
              <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-2">Selected works</p>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight uppercase">Featured</h2>
                </div>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="flex items-center space-x-4 group pb-1 overflow-hidden"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] relative transition-transform">
                    View all
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {PRODUCTS.slice(0, 4).map((p) => (
                  <ProductCard key={p.id} product={p} onClick={() => handleProductClick(p)} />
                ))}
              </div>
            </section>

            {/* Brand Statement */}
            <section className="py-40 bg-brand-gray/30 overflow-hidden relative">
              <div className="px-6 md:px-12 max-w-6xl mx-auto relative z-10 text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-6xl font-light leading-[1.2] tracking-tight uppercase"
                >
                  "Identity is not defined by what is seen, but by what is <span className="text-brand-offwhite/30 italic">perceived</span>."
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 text-[10px] uppercase tracking-[0.5em]"
                >
                  The Philosophy of Perception
                </motion.p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none">
                PERCEPTION
              </div>
            </section>
          </div>
        );

      case 'shop':
        const filteredProducts = activeCategory === 'All' 
          ? PRODUCTS 
          : PRODUCTS.filter(p => p.category === activeCategory);

        return (
          <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
            <header className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">The Archive</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase">Shop All</h2>
            </header>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-20 border-b border-white/5 pb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-white text-brand-black' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} onClick={() => handleProductClick(p)} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center opacity-20 uppercase tracking-[0.5em] text-xs">
                No items found in this category
              </div>
            )}
          </div>
        );

      case 'about':
        return (
          <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen max-w-6xl mx-auto">
             <header className="mb-20">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">Our Core</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase">About</h2>
            </header>

            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="aspect-[3/4] overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-offwhite/80">
                  PERCEPTION is a premium streetwear label born from the intersection of minimalist architectural lines and elevated luxury culture.
                </p>
                <div className="h-px bg-white/10 w-20" />
                <p className="text-sm font-light text-brand-offwhite/50 leading-relaxed">
                  Founded in 2026, we believe in the power of the silhouette. Every garment is an exploration of form, fabric, and fit—engineered to exist beyond trends. We source the finest materials from across the globe to create pieces that feel as substantial as they look.
                </p>
                <p className="text-sm font-light text-brand-offwhite/50 leading-relaxed uppercase tracking-widest pt-8">
                  Designed in London. Crafted globally. Permanent in perception.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <CartDrawer />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (selectedProduct?.id || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-white/5 px-6 md:px-12 py-20 bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold tracking-[0.2em] uppercase mb-8">Perception</h4>
            <p className="max-w-xs text-xs text-brand-offwhite/30 uppercase tracking-[0.2em] leading-relaxed">
              Premium streetwear for the modern era. Join our archive for exclusive updates.
            </p>
            <div className="mt-12 flex space-x-6">
              <Instagram size={20} className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
              <Twitter size={20} className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest mb-6 opacity-100">Information</p>
            {['Shipping', 'Returns', 'Size Guide', 'Contact'].map((item) => (
              <p key={item} className="text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest mb-6 opacity-100">Contact</p>
            <p className="text-[10px] uppercase tracking-widest opacity-30">info@perception.clothing</p>
            <p className="text-[10px] uppercase tracking-widest opacity-30">London, United Kingdom</p>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.3em] opacity-20">
          <p>© 2026 Perception Clothing. All rights reserved.</p>
          <div className="flex space-x-12 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
