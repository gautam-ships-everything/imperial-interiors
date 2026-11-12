"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-marble-bg/60 via-marble-bg/90 to-marble-bg"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-5xl mx-auto px-4 text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight text-ink mb-6 drop-shadow-md">
            Design that speaks <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-ink italic drop-shadow-sm">volumes.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-ink max-w-3xl mx-auto font-medium drop-shadow-md">
            Elevating everyday spaces into bespoke sanctuaries. Imperial Housing blends modern minimalism with unapologetic luxury.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-bold bg-accent-gold text-white hover:bg-ink transition duration-300 rounded-sm shadow-lg shadow-accent-gold/20">
              Discover Our Work
            </Link>
            <Link href="/catalogue" className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-bold glass text-ink hover:bg-white/40 transition duration-300 rounded-sm">
              View Catalogue
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Us at a Glance */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="glass-card rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold tracking-[0.2em] text-accent-gold uppercase mb-4">The Studio</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
                Crafting visual <span className="italic">breathing space.</span>
              </h3>
              <p className="text-ink-light text-lg mb-8 font-light">
                At Imperial Housing, we believe luxury isn't about excess; it's about curated restraint. 
                We combine rich marble tones, warm beige textures, and classical Italian influences to create 
                environments that are as calming as they are awe-inspiring.
              </p>
              <Link href="/about" className="inline-flex items-center text-accent-gold hover:text-ink transition group">
                <span className="uppercase tracking-widest text-sm font-bold mr-2">Read our story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/30 to-transparent rounded-2xl blur-2xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior Design Concept" 
                className="relative rounded-2xl shadow-2xl border border-accent-gold/20 object-cover h-[400px] w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work at a Glance */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-accent-gold uppercase mb-2">Featured</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-ink">Work at a Glance</h3>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-ink-light hover:text-accent-gold transition">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Velvet Lounge", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Monochrome Suite", img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Luxe Penthouse", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-marble-bg/90 via-marble-bg/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <h4 className="text-2xl font-serif font-bold text-ink mb-2">{item.title}</h4>
                  <p className="text-accent-gold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition duration-500 delay-100">Explore Project &rarr;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
