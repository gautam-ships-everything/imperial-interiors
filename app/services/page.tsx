"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Home,
  Building2,
  PenTool,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const services = [
  {
    icon: Home,
    title: "Premium Residential Interior",
    subtitle: "Your home, elevated.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    desc: "Complete interior design for homes — from initial space planning and 3D visualization to premium material selection and flawless execution. We create living spaces that feel both luxurious and deeply personal.",
    styles: ["Modern Luxury", "Neo-Classical", "Minimalist Elegance"],
    features: [
      "Custom furniture design & millwork",
      "Strategic lighting layouts (ambient, task, accent)",
      "Premium material moodboards & sourcing",
      "3D photorealistic renders for approval",
      "False ceiling & electrical layout planning",
    ],
    pricing: {
      consultancy: "₹100 – ₹250 / sq. ft.",
      execution: "₹2,200 – ₹4,500+ / sq. ft.",
    },
  },
  {
    icon: Building2,
    title: "Commercial & Office Spaces",
    subtitle: "Spaces that work harder.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    desc: "Professional workspaces that reflect your brand identity while maximizing productivity. Ergonomic layouts, acoustic solutions, and brand-integrated aesthetics for offices, retail, and hospitality.",
    styles: ["Industrial Chic", "Contemporary Corporate", "Boutique Retail"],
    features: [
      "Ergonomic workspace planning",
      "Acoustic treatment & sound design",
      "Brand identity integration in materials & colors",
      "Reception & conference room design",
      "Compliance with commercial building codes",
    ],
    pricing: {
      consultancy: "₹80 – ₹150 / sq. ft.",
      execution: "₹1,800 – ₹3,500 / sq. ft.",
    },
  },
  {
    icon: PenTool,
    title: "Architectural Planning & Drawings",
    subtitle: "Precision on paper.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    desc: "High-precision architectural documentation — from conceptual floor plans to fully detailed structural drawings, 3D elevations, and MEP layouts. Every drawing is a testament to our commitment to perfection.",
    styles: ["Bespoke Architectural Forms", "Modern Elevation Design"],
    features: [
      "Floor plans & furniture layouts",
      "Structural detailing drawings",
      "3D elevation renders (exterior & interior)",
      "MEP (Mechanical, Electrical, Plumbing) layouts",
      "Millwork & shop drawings for fabrication",
    ],
    pricing: {
      rate: "₹40 – ₹100 / sq. ft.",
      lumpSum: "₹75,000 – ₹2,50,000+ / project",
    },
  },
  {
    icon: Hammer,
    title: "Turnkey Execution Projects",
    subtitle: "From dream to doorstep.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    desc: "We handle the entire project lifecycle — from first concept sketch to final handover. You share your vision; we manage design, materials, contractors, timelines, and quality control. Zero stress, premium results.",
    styles: ["Tailored to Client Vision"],
    features: [
      "End-to-end project management",
      "Vendor & contractor coordination",
      "Material procurement at best rates",
      "Weekly progress reporting",
      "Quality assurance & final walkthrough",
    ],
    pricing: {
      fee: "10% – 15% of project cost",
      fixed: "₹2,500 – ₹5,000+ / sq. ft.",
    },
  },
];

const specialDetailing = [
  {
    title: "Millwork Drawings",
    desc: "Millimeter-perfect shop drawings for custom cabinetry, wall paneling, decorative moldings, and bespoke joinery.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Lighting Layouts",
    desc: "Strategic placement of ambient, task, and accent lighting — including cove lighting, chandeliers, and smart lighting integration.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Material Specification",
    desc: "Comprehensive moodboards featuring premium Italian marbles, sustainable hardwoods, rich fabrics, and artisanal tiles.",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Services() {
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
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
            alt="Our Services"
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold"
          >
            Our <span className="italic font-normal text-accent-light">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-bg-alt" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    {service.subtitle}
                  </p>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="text-2xl md:text-4xl font-serif font-bold text-text mb-4"
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  custom={0.2}
                  className="text-text-muted leading-relaxed mb-6"
                >
                  {service.desc}
                </motion.p>

                {/* Styles */}
                <motion.div variants={fadeUp} custom={0.25} className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-text mb-2">
                    Design Styles:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.styles.map((style) => (
                      <span
                        key={style}
                        className="text-xs px-3 py-1.5 bg-bg-alt border border-border text-text-muted"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.ul variants={fadeUp} custom={0.3} className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </motion.ul>

                {/* Pricing */}
                <motion.div
                  variants={fadeUp}
                  custom={0.35}
                  className="bg-bg-alt border border-border p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">
                    Indicative Pricing (Indore Market)
                  </p>
                  <div className="space-y-1">
                    {Object.entries(service.pricing).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-text-muted capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-bold text-text">{val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ════ SPECIAL DETAILING ════ */}
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
              The Details
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl md:text-5xl font-serif font-bold text-text"
            >
              Special Detailing
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialDetailing.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white border border-border overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-5xl font-serif font-bold text-text mb-6"
            >
              Need a custom package?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-text-muted mb-8 max-w-xl mx-auto"
            >
              Every project is unique. Contact us for a personalized quotation
              tailored to your specific requirements and budget.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-accent text-white uppercase tracking-[0.15em] text-sm font-bold hover:bg-accent-dark transition-all duration-300"
              >
                Request a Custom Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
