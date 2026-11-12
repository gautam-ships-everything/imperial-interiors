"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const categories = ["All", "Residential", "Commercial", "Architecture"];

const projects = [
  {
    title: "Royal Villa Elevation",
    category: "Architecture",
    area: "4,500 sq. ft.",
    location: "Vijay Nagar, Indore",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Living Room",
    category: "Residential",
    area: "800 sq. ft.",
    location: "Sapna Sangeeta, Indore",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern Bedroom Suite",
    category: "Residential",
    area: "450 sq. ft.",
    location: "Nipania, Indore",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Office",
    category: "Commercial",
    area: "2,200 sq. ft.",
    location: "Palasia, Indore",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Penthouse Interior",
    category: "Residential",
    area: "3,000 sq. ft.",
    location: "AB Road, Indore",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Spa & Wellness Centre",
    category: "Commercial",
    area: "1,800 sq. ft.",
    location: "Rajwada, Indore",
    img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern Kitchen Design",
    category: "Residential",
    area: "250 sq. ft.",
    location: "Scheme 78, Indore",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Duplex Elevation",
    category: "Architecture",
    area: "6,000 sq. ft.",
    location: "Super Corridor, Indore",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Boutique Showroom",
    category: "Commercial",
    area: "1,200 sq. ft.",
    location: "MG Road, Indore",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* ════ HERO ════ */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
            alt="Our Portfolio"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-bg" />
        <div className="relative z-10 text-center text-white">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[11px] uppercase text-white/60 mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold"
          >
            Project <span className="italic font-normal text-accent-light">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* ════ FILTER ════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-white"
                    : "bg-bg-alt text-text-muted hover:bg-border hover:text-text border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold bg-white/90 text-text px-3 py-1.5">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <span>{project.area}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
