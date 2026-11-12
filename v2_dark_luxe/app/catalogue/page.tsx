"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Catalogue() {
  const categories = [
    { id: 'living-room', name: 'Living Room Furniture', description: 'Sofas, coffee tables, and TV units.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'bedroom', name: 'Bedroom Decor', description: 'Beds, nightstands, and wardrobes.', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'lighting', name: 'Lighting Solutions', description: 'Chandeliers, floor lamps, and smart lighting.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'office', name: 'Office Workspaces', description: 'Ergonomic chairs and modern desks.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Design Catalogue</h1>
        <p className="mt-4 text-xl text-gray-400 font-light">Explore our recommended pieces to elevate your space.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col md:flex-row glass-card rounded-2xl overflow-hidden group"
          >
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition">{cat.name}</h3>
              <p className="text-gray-400 mb-6 font-light">{cat.description}</p>
              <Link href={`/catalogue/${cat.id}`} className="inline-flex items-center text-[#d4af37] font-semibold tracking-wider uppercase text-sm">
                Browse Collection
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
