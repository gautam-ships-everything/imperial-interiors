"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Ruler,
  Palette,
  Building2,
  Hammer,
  ChevronDown,
  Star,
  Quote,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

/* ─── Animated Counter ─── */
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

/* ─── Animated Word Reveal ─── */
function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.08, duration: 0.5, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Infinite Marquee ─── */
function Marquee() {
  const words = [
    "Design",
    "Architecture",
    "Luxury",
    "Interiors",
    "Elegance",
    "Precision",
    "Bespoke",
    "Premium",
  ];

  return (
    <div className="overflow-hidden py-6 bg-bg-alt border-y border-border">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {words.map((word) => (
              <span
                key={`${setIndex}-${word}`}
                className="text-2xl md:text-3xl font-serif text-text/[0.08] tracking-widest uppercase mx-8 flex items-center"
              >
                {word}
                <span className="text-accent/20 mx-8 text-lg">◆</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: Ruler,
    title: "Residential Interiors",
    desc: "Complete home transformations — from space planning and 3D visualization to premium execution.",
    link: "/services",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    desc: "Workspaces that reflect brand identity with ergonomic layouts and acoustic planning.",
    link: "/services",
  },
  {
    icon: Palette,
    title: "Architectural Planning",
    desc: "High-precision 2D layouts, structural drawings, 3D elevations, and MEP detailing.",
    link: "/services",
  },
  {
    icon: Hammer,
    title: "Turnkey Projects",
    desc: "From concept to handover — we manage the entire lifecycle with meticulous quality control.",
    link: "/services",
  },
];

const projects = [
  {
    title: "Modern Villa Elevation",
    category: "Architecture",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Living Room",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Premium Bedroom Suite",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contemporary Kitchen",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We listen to your vision, understand your space, and define the project scope.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our team creates detailed layouts, 3D renders, and material selections for your approval.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Skilled craftsmen bring the design to life with precision and premium materials.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Final walkthrough, quality checks, and a space that exceeds your expectations.",
  },
];

/* ─── Page ─── */
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ════ HERO ════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[11px] md:text-sm uppercase text-white/60 mb-8 font-medium"
          >
            Architecture & Interior Design
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.05]">
            <WordReveal text="Transforming Spaces" delay={0.5} />
            <br />
            <WordReveal text="Into" delay={0.9} />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="italic text-accent-light font-normal"
            >
              {" "}
              Experiences
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Premium interior design and architectural solutions, crafted with
            precision and passion in the heart of Indore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="group px-10 py-4 bg-accent text-white uppercase tracking-[0.15em] text-sm font-bold hover:bg-accent-dark transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/30 text-white uppercase tracking-[0.15em] text-sm font-bold hover:bg-white/10 transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════ MARQUEE ════ */}
      <Marquee />

      {/* ════ ABOUT PREVIEW ════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
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
                Our Story
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-3xl md:text-5xl font-serif font-bold text-text mb-6 leading-tight"
              >
                Designing with soul,{" "}
                <span className="italic font-normal text-accent">building with precision.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-text-muted leading-relaxed mb-8"
              >
                Led by Jayesh, Imperial Interiors blends architectural mastery
                with refined interior aesthetics. Based in Indore, we transform
                ordinary spaces into extraordinary living experiences — with an
                unwavering commitment to quality, detail, and timeless elegance.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.3}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-bold text-accent hover:text-accent-dark transition"
                >
                  Read our full story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border"
              >
                {[
                  { end: 150, suffix: "+", label: "Projects Delivered" },
                  { end: 8, suffix: "+", label: "Years of Experience" },
                  { end: 100, suffix: "%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-serif font-bold text-text">
                      <Counter end={stat.end} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-text-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Imperial Interiors Design Process"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Floating accent element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-accent text-white px-8 py-5"
              >
                <p className="text-3xl font-serif font-bold">8+</p>
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Years in Indore
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
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
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl md:text-5xl font-serif font-bold text-text"
            >
              Our Services
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                custom={i * 0.1}
              >
                <Link
                  href={service.link}
                  className="group block bg-white p-8 md:p-10 border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                >
                  <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-serif font-bold text-text mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FEATURED PROJECTS ════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4"
              >
                Portfolio
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-3xl md:text-5xl font-serif font-bold text-text"
              >
                Featured Work
              </motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-bold text-text-muted hover:text-accent transition"
              >
                View all projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  i === 0 ? "md:row-span-2 aspect-auto md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[400px]" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent-light font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PROCESS ════ */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-4"
            >
              How We Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl md:text-5xl font-serif font-bold text-text"
            >
              Our Process
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-border" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-serif font-bold relative z-10"
                >
                  {step.num}
                </motion.div>
                <h3 className="text-lg font-serif font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIAL ════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <Quote className="w-12 h-12 text-accent/20 mx-auto mb-8" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-2xl md:text-3xl font-serif italic text-text leading-relaxed mb-8"
            >
              &ldquo;Imperial Interiors transformed our 3BHK into a space we
              didn&apos;t know we needed. Jayesh&apos;s attention to detail is
              extraordinary — from the false ceiling design to the custom
              cabinetry, everything exceeded our expectations.&rdquo;
            </motion.p>
            <motion.div variants={fadeUp} custom={0.2}>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="font-bold text-text text-sm uppercase tracking-widest">
                Rajesh Sharma
              </p>
              <p className="text-text-muted text-xs mt-1">
                3BHK Interior — Vijay Nagar, Indore
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════ CTA BANNER ════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Ready to transform{" "}
              <span className="italic font-normal text-accent-light">
                your space?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
            >
              Book a free consultation. Let&apos;s discuss your vision and bring
              it to life.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="px-10 py-4 bg-accent text-white uppercase tracking-[0.15em] text-sm font-bold hover:bg-accent-dark transition-all duration-300"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+919399969641"
                className="text-white/60 hover:text-white transition text-sm flex items-center gap-2"
              >
                or call{" "}
                <span className="text-accent-light font-bold">
                  +91 93999 69641
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
