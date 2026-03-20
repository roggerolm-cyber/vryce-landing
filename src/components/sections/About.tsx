"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" id="about">
      {/* Decorative element */}
      <div className="absolute -right-[20%] top-0 w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-brand-violet translate-x-4 translate-y-4" />
            <div className="relative h-full w-full bg-brand-dark border border-brand-white/10 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                alt="Vryce Studio"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-syne font-bold mb-8 uppercase"
            >
              The Art of <br />
              <span className="text-brand-coral">Communication</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-brand-white/80 font-manrope text-lg"
            >
              <p>
                Backed by <strong>Lupitex Consulting Group</strong>, Vryce was born from the necessity to elevate corporate communications to an art form. 
              </p>
              <p>
                We believe that every brand has a unique DNA. Our mission is to extract that essence and project it into the world through audacious typography, intentional colors, and narratives that leave a lasting imprint.
              </p>
              <p>
                From Miami to the world, our team of creatives approaches every project with a contemporary editorial lens, ensuring that your message isn&apos;t just seen—it&apos;s experienced.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <button className="px-8 py-4 bg-transparent border-2 border-brand-white text-brand-white font-syne font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-dark transition-colors">
                Meet the Team
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
