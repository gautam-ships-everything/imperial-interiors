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
      <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-white/10 transition group border border-[#d4af37]/30 shadow-lg shadow-black/50">
        <MessageCircle className="w-5 h-5 text-[#d4af37]" />
        <span className="font-medium text-white group-hover:text-[#d4af37] transition">Consult in a click</span>
      </Link>
    </motion.div>
  );
}
