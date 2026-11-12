"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export default function Contact() {
  return (
    <div className="overflow-hidden">
      {/* ════ HERO ════ */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold"
          >
            Let&apos;s <span className="italic font-normal text-accent-light">Talk</span>
          </motion.h1>
        </div>
      </section>

      {/* ════ CONTACT SECTION ════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* ── Contact Info ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4"
              >
                Contact Information
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-3xl font-serif font-bold text-text mb-8"
              >
                Start your project with us
              </motion.h2>

              <motion.div variants={fadeUp} custom={0.2} className="space-y-6 mb-10">
                <a
                  href="tel:+919399969641"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-bg-alt border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-1">
                      Phone
                    </p>
                    <p className="font-medium text-text group-hover:text-accent transition">
                      +91 93999 69641
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bg-alt border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-1">
                      Location
                    </p>
                    <p className="font-medium text-text">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bg-alt border border-border flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-1">
                      Working Hours
                    </p>
                    <p className="font-medium text-text">
                      Mon – Sat: 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="p-6 bg-accent/5 border border-accent/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <p className="font-bold text-text text-sm">
                    Try our AI Quotation Assistant
                  </p>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Click the chat button in the bottom-right corner to get an
                  instant rough estimate for your project — powered by AI.
                </p>
              </motion.div>
            </motion.div>

            {/* ── Inquiry Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-3 bg-white border border-border p-8 md:p-10"
            >
              <h3 className="text-xl font-serif font-bold text-text mb-2">
                Project Inquiry
              </h3>
              <p className="text-sm text-text-muted mb-8">
                Tell us about your project. The more details you share, the more
                accurate our estimate will be.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Project Type *
                    </label>
                    <select className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition appearance-none">
                      <option value="">Select type...</option>
                      <option>Residential Interior</option>
                      <option>Commercial / Office</option>
                      <option>Architectural Planning</option>
                      <option>Turnkey Project</option>
                      <option>Renovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                      Approximate Area (sq. ft.)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1500"
                      className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition appearance-none">
                    <option value="">Select budget range...</option>
                    <option>Under ₹5 Lakhs</option>
                    <option>₹5 – ₹10 Lakhs</option>
                    <option>₹10 – ₹25 Lakhs</option>
                    <option>₹25 – ₹50 Lakhs</option>
                    <option>₹50 Lakhs+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space, preferred style, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white font-bold uppercase tracking-[0.15em] text-sm hover:bg-accent-dark transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
