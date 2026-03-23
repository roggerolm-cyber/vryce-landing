"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Aura Editorial",
    category: "Brand Identity & Editorial",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2787&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Maison Blanc",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2832&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Nova Tech",
    category: "Digital Design",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2874&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Vertex Studio",
    category: "Corporate Rebrand",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop",
    size: "large"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-32 bg-brand-white text-brand-dark" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-syne font-bold mb-6 tracking-tightest uppercase"
            >
              Selected <br/><span className="text-brand-violet italic font-light">Works</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="text-brand-dark font-syne font-bold hover:text-brand-coral transition-colors flex items-center gap-3 uppercase tracking-widest text-sm border-b-2 border-brand-dark pb-2">
              View the archive
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Editorial Masonry/Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer ${
                project.size === 'large' 
                  ? 'md:col-span-8' 
                  : 'md:col-span-4'
              } ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className={`relative w-full overflow-hidden bg-gray-100 ${project.size === 'large' ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10 duration-700" />
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-syne font-bold mb-2 group-hover:text-brand-violet transition-colors">{project.title}</h3>
                  <p className="text-brand-dark/60 font-manrope uppercase tracking-widest text-xs">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-violet group-hover:text-brand-white group-hover:border-transparent transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
