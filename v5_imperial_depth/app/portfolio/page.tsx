"use client";

import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    { id: 1, title: 'Modern Minimalist Apartment', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Cozy Bohemian Studio', category: 'Residential', image: 'https://images.unsplash.com/photo-1598928506311-c55dd71a1795?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Industrial Office Space', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Luxury Villa Remodel', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Boutique Coffee Shop', category: 'Commercial', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Scandinavian Living Room', category: 'Residential', image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-ink tracking-tight">Our Portfolio</h1>
        <p className="mt-4 text-xl text-ink-light font-light">Explore our curated collection of successful interior design projects.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <p className="text-sm font-bold tracking-[0.2em] text-accent-gold uppercase mb-1 drop-shadow-md">{project.category}</p>
              <h3 className="text-2xl font-serif font-bold text-ink drop-shadow-md">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
