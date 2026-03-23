"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section className="py-32 bg-brand-dark text-brand-white relative overflow-hidden" id="about">
      {/* Editorial Decorative line */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-brand-white/10 hidden md:block" />
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-brand-white/10 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-syne font-bold mb-8 uppercase tracking-tightest sticky top-32"
            >
              The Art <br />
              <span className="text-brand-white/40 italic font-light">Of</span> <br />
              Communi<br/>cation.
            </motion.h2>
          </div>

          <div className="lg:col-span-7 space-y-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl text-brand-white/90 font-syne leading-relaxed"
            >
              Vryce was born from the necessity to elevate corporate communications to an <span className="text-brand-violet">art form</span>.
            </motion.div>

            {/* Collage of images */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] w-full mt-12"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
                  alt="Magazine layout design"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] w-full"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                  alt="Vryce Studio"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 text-brand-white/60 font-manrope text-lg max-w-2xl"
            >
              <p>
                We believe that every brand has a unique DNA. Our mission is to extract that essence and project it into the world through audacious typography, intentional colors, and narratives that leave a lasting imprint.
              </p>
              <p>
                From Miami to the world, our team of creatives approaches every project with a contemporary editorial lens, ensuring that your message isn&apos;t just seen—it&apos;s experienced.
              </p>
              
              <div className="pt-8">
                <a href="mailto:info@vrycel.com" className="group relative px-8 py-4 bg-transparent border border-brand-white/20 text-brand-white font-syne font-bold uppercase tracking-widest overflow-hidden inline-block">
                  <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-500">Get In Touch</span>
                  <div className="absolute inset-0 bg-brand-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
