"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { use } from 'react';

export default function CategoryPlaceholder({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const categoryName = resolvedParams.category.replace(/-/g, ' ');

  const items = [
    { id: 1, name: "The Velvet Obsidian", price: "$2,400", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Aura Glass Table", price: "$1,200", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Bronze Halo Lamp", price: "$850", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Minimalist Lounge Chair", price: "$1,600", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Sculptural Vase Set", price: "$320", img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Cashmere Throw", price: "$150", img: "https://images.unsplash.com/photo-1583847268964-b28ce8f31586?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <Link href="/catalogue" className="inline-flex items-center text-beige-dark hover:text-beige-light mb-8 transition">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-beige-light capitalize">{categoryName}</h1>
        <p className="mt-4 text-beige-dark text-lg">Curated selections tailored for your {categoryName}.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-emerald-bg/20 group-hover:bg-transparent transition z-10"></div>
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-beige-light group-hover:text-gold transition">{item.name}</h3>
                <span className="text-gold font-medium">{item.price}</span>
              </div>
              <button className="w-full py-3 glass flex items-center justify-center gap-2 hover:bg-beige-light/10 text-beige-light rounded-md transition border border-beige-light/10 group-hover:border-gold/50">
                <ShoppingBag className="w-4 h-4" /> Add to Inquiry
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
