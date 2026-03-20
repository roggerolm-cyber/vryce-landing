"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-dark pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-syne font-bold leading-[0.9] text-brand-white mb-6 uppercase tracking-tightest">
              Design <span className="block text-brand-white/40 italic font-light ml-12 md:ml-32">That</span> Disrupts.
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-white/70 font-manrope max-w-md"
            >
              We are an audacious, contemporary creative studio. Graphic design, branding, and copywriting that elevates your narrative.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="group relative px-8 py-4 bg-brand-violet text-brand-white font-syne font-bold uppercase tracking-widest overflow-hidden">
                <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-500">Discover Vryce</span>
                <div className="absolute inset-0 bg-brand-coral translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Cinematic Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-dark/20 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop"
            alt="Minimalist abstract editorial studio"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};
