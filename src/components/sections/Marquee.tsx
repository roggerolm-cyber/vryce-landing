"use client";

import { motion } from "framer-motion";

export const Marquee = () => {
  return (
    <div className="bg-brand-violet py-6 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1036] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex items-center space-x-8 text-brand-white font-syne font-bold uppercase tracking-widest text-2xl md:text-3xl"
      >
        <span>DESIGN THAT DISRUPTS</span>
        <span className="text-brand-dark">✦</span>
        <span>AUDACIOUS CREATIVITY</span>
        <span className="text-brand-dark">✦</span>
        <span>CONTEMPORARY BRANDING</span>
        <span className="text-brand-dark">✦</span>
        <span>EDITORIAL APPROACH</span>
        <span className="text-brand-dark">✦</span>
        <span>DESIGN THAT DISRUPTS</span>
        <span className="text-brand-dark">✦</span>
        <span>AUDACIOUS CREATIVITY</span>
        <span className="text-brand-dark">✦</span>
        <span>CONTEMPORARY BRANDING</span>
        <span className="text-brand-dark">✦</span>
        <span>EDITORIAL APPROACH</span>
        <span className="text-brand-dark">✦</span>
      </motion.div>
    </div>
  );
};
