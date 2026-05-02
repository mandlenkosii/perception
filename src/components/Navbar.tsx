import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const { toggleCart, items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Collections', page: 'home' },
    { label: 'Shop All', page: 'shop' },
    { label: 'About', page: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 md:px-12 py-8 flex justify-between items-center transition-all duration-500">
      <div className="flex items-center space-x-12">
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold tracking-[0.2em] uppercase focus:outline-none"
        >
          Perception
        </button>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => onNavigate(link.page)}
              className={`text-xs uppercase tracking-widest transition-opacity hover:opacity-100 ${
                currentPage === link.page ? 'opacity-100' : 'opacity-40'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button 
          onClick={toggleCart}
          className="relative group p-2 focus:outline-none"
        >
          <ShoppingBag size={20} className="group-hover:scale-110 transition-transform duration-300" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
          )}
        </button>
        <button className="md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
