"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { id: 1, name: 'Sarah Jenkins', role: 'Homeowner', content: 'J Interiors transformed our outdated living room into a modern masterpiece. The attention to detail and use of textures is unparalleled!', rating: 5 },
    { id: 2, name: 'Mark Roberts', role: 'Cafe Owner', content: 'We hired them for our new coffee shop, and they captured our brand perfectly. The aesthetic draws customers in every day.', rating: 5 },
    { id: 3, name: 'Emily Chen', role: 'Homeowner', content: 'From the initial consultation to the final reveal, the entire process was seamless. They really understood our minimalist vision.', rating: 5 },
    { id: 4, name: 'James Wilson', role: 'Tech Startup CEO', content: 'They designed our office space to be both functional and inspiring. The glass features and dark tones give it a very premium feel.', rating: 5 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Client Testimonials</h1>
        <p className="mt-4 text-xl text-gray-400 font-light">Hear what our satisfied clients have to say about our work.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-10 rounded-2xl relative"
          >
            <div className="absolute top-8 right-10 opacity-10">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex text-[#d4af37] mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 italic text-lg mb-8 relative z-10 leading-relaxed">"{review.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center text-black font-bold text-xl">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white text-lg">{review.name}</p>
                <p className="text-sm text-[#d4af37] uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
