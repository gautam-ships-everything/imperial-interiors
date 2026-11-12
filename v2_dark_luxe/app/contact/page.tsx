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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Connect With Us</h1>
        <p className="mt-4 text-xl text-gray-400 font-light">Ready to start your design journey? Let's curate your space.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="glass-card rounded-2xl overflow-hidden border border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-black/40 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-3xl font-bold mb-8 relative z-10">Studio Details</h3>
            <div className="space-y-10 relative z-10">
              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-full mr-6 group-hover:bg-[#d4af37]/20 transition duration-300">
                  <MapPin className="h-6 w-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Location</p>
                  <p className="text-gray-400 font-light">123 Design Avenue, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-full mr-6 group-hover:bg-[#d4af37]/20 transition duration-300">
                  <Phone className="h-6 w-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Phone</p>
                  <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-full mr-6 group-hover:bg-[#d4af37]/20 transition duration-300">
                  <Mail className="h-6 w-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wider uppercase mb-1">Email</p>
                  <p className="text-gray-400 font-light">hello@jinteriors.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 glass relative">
            <h3 className="text-3xl font-bold text-white mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-[#d4af37] transition duration-300" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-[#d4af37] transition duration-300" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-[#d4af37] transition duration-300 resize-none" placeholder="Tell us about your project space..."></textarea>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-[#d4af37] text-black font-bold uppercase tracking-widest py-4 px-4 hover:bg-[#f3e5ab] transition duration-300">
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
