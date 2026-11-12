"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingContactBtn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-beige-light/10 transition group border border-gold/40 shadow-lg shadow-black/30">
        <MessageCircle className="w-5 h-5 text-gold" />
        <span className="font-serif italic text-beige-light group-hover:text-gold transition">Consult in a click</span>
      </Link>
    </motion.div>
  );
}
