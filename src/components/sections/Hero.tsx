"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-violet/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold leading-[0.9] text-brand-white mb-6 uppercase"
          >
            Design that <span className="text-brand-coral">Disrupts</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-brand-white/80 font-manrope max-w-2xl mx-auto mb-10"
          >
            We are an audacious, contemporary, and editorial creative studio. Graphic design, branding, and copywriting that elevates your narrative.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-brand-violet text-brand-white font-manrope font-semibold rounded-full hover:bg-brand-violet/90 transition-colors">
              Start a Project
            </button>
            <button className="px-8 py-4 border border-brand-white/20 text-brand-white font-manrope font-semibold rounded-full hover:bg-brand-white hover:text-brand-dark transition-colors">
              Our Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
