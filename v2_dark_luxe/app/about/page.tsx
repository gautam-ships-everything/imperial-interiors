"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-4">Our Heritage</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">The J Interiors Philosophy</h1>
          <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
            Founded in 2010, J Interiors is a premier architectural and interior design firm dedicated to creating beautiful, functional spaces that reflect the unique personalities and lifestyles of our clients.
          </p>
          <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
            Our team of passionate designers, architects, and project managers work collaboratively to deliver exceptional results. From concept to completion, we ensure every detail is meticulously planned and executed with a touch of modern luxury.
          </p>
          <p className="text-lg text-gray-300 mb-10 font-light leading-relaxed">
            We believe that good design has the power to transform lives, relying on elegant minimalism, rich textures, and dramatic focal points.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="border-l-2 border-[#d4af37] pl-6">
              <p className="text-4xl font-extrabold text-white mb-2">150<span className="text-[#d4af37]">+</span></p>
              <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">Projects Completed</p>
            </div>
            <div className="border-l-2 border-[#d4af37] pl-6">
              <p className="text-4xl font-extrabold text-white mb-2">12</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">Design Awards</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 lg:mt-0 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-2xl blur-3xl transform rotate-3 scale-105 z-0"></div>
          <img 
            className="relative rounded-2xl shadow-2xl shadow-black/50 w-full h-[600px] object-cover border border-white/10 z-10" 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior design team working" 
          />
        </motion.div>
      </div>
    </div>
  );
}
