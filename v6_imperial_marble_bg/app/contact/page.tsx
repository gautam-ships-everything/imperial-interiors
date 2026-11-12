"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-ink tracking-tight">Connect With Us</h1>
        <p className="mt-4 text-xl text-ink-light font-light">Ready to start your design journey? Let's curate your space.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="glass-card rounded-2xl overflow-hidden border border-accent-gold/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-marble-bg/80 p-12 text-ink flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Studio Details</h3>
            <div className="space-y-10 relative z-10">
              <div className="flex items-start group">
                <div className="p-3 bg-ink/5 rounded-full mr-6 group-hover:bg-accent-gold/20 transition duration-300">
                  <MapPin className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Location</p>
                  <p className="text-ink-light font-light">123 Design Avenue, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 bg-ink/5 rounded-full mr-6 group-hover:bg-accent-gold/20 transition duration-300">
                  <Phone className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Phone</p>
                  <p className="text-ink-light font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-3 bg-ink/5 rounded-full mr-6 group-hover:bg-accent-gold/20 transition duration-300">
                  <Mail className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Email</p>
                  <p className="text-ink-light font-light">hello@imperialhousing.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 glass relative">
            <h3 className="text-3xl font-serif font-bold text-ink mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-ink-light mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-marble-bg/30 border border-ink/20 rounded-none p-4 text-ink focus:outline-none focus:border-accent-gold transition duration-300" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-ink-light mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-marble-bg/30 border border-ink/20 rounded-none p-4 text-ink focus:outline-none focus:border-accent-gold transition duration-300" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-ink-light mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-marble-bg/30 border border-ink/20 rounded-none p-4 text-ink focus:outline-none focus:border-accent-gold transition duration-300 resize-none" placeholder="Tell us about your project space..."></textarea>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-accent-gold text-marble-bg font-bold uppercase tracking-widest py-4 px-4 hover:bg-ink transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
