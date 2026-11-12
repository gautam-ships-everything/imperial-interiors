"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Eye, Heart, Target } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const values = [
  {
    icon: Eye,
    title: "Vision-First Design",
    desc: "Every project starts with understanding your unique vision and lifestyle. We listen, absorb, and translate your aspirations into tangible spaces.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    desc: "From millimeter-perfect shop drawings to structural detailing, our technical execution matches the ambition of our design concepts.",
  },
  {
    icon: Heart,
    title: "Crafted with Passion",
    desc: "We believe interiors should feel lived-in, not showroom-perfect. Every material, texture, and lighting choice is made with intention.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    desc: "We source only the finest marbles, sustainable hardwoods, rich fabrics, and artisanal finishes from trusted suppliers worldwide.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
];

export default function About() {
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="About Imperial Interiors"
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold"
          >
            The <span className="italic font-normal text-accent-light">Imperial</span> Story
          </motion.h1>
        </div>
      </section>

      {/* ════ FOUNDER'S STORY ════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Jayesh — Founder"
                className="w-full h-[550px] object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-accent text-white px-8 py-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-1">
                  Founded by
                </p>
                <p className="text-xl font-serif font-bold">Jayesh</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4"
              >
                Our Heritage
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-3xl md:text-4xl font-serif font-bold text-text mb-6 leading-tight"
              >
                Where architecture meets{" "}
                <span className="italic font-normal text-accent">artistry</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-text-muted leading-relaxed mb-6"
              >
                Imperial Interiors was born from a simple belief: that every
                space tells a story. Founded by Jayesh in Indore, our firm has
                grown from a single-person drafting studio into a full-service
                architectural and interior design practice.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={0.3}
                className="text-text-muted leading-relaxed mb-6"
              >
                We specialize in creating premium residential and commercial
                spaces that balance aesthetic elegance with functional
                brilliance. From hand-drawn concept sketches to millimeter-
                perfect execution drawings, every project receives our complete
                creative and technical dedication.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={0.4}
                className="text-text-muted leading-relaxed"
              >
                With over 150 projects delivered across Indore and Madhya
                Pradesh, our reputation is built on trust, transparency, and an
                obsessive attention to detail that our clients have come to
                expect and cherish.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ VALUES ════ */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl md:text-5xl font-serif font-bold text-text"
            >
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-white p-8 md:p-10 border border-border hover:border-accent/30 transition-all duration-500"
              >
                <value.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-serif font-bold text-text mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 150, suffix: "+", label: "Projects Completed" },
              { end: 8, suffix: "+", label: "Years in Business" },
              { end: 50, suffix: "+", label: "Happy Families" },
              { end: 25, suffix: "K+", label: "Sq. Ft. Designed" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-8"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-text mb-2">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-text-muted uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ GALLERY ════ */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden aspect-square"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
