"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6 mix-blend-difference"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-syne font-bold text-brand-white uppercase tracking-tightest">
          Vryce
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-brand-white font-manrope font-semibold text-sm">
          <Link href="#services" className="hover:text-brand-coral transition-colors">Services</Link>
          <Link href="#work" className="hover:text-brand-coral transition-colors">Work</Link>
          <Link href="#about" className="hover:text-brand-coral transition-colors">About</Link>
          <button className="px-5 py-2 bg-brand-white text-brand-dark rounded-full hover:bg-brand-coral hover:text-brand-white transition-colors">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
