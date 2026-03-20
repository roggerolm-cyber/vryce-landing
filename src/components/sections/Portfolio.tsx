"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Aura Editorial",
    category: "Brand Identity & Editorial",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2787&auto=format&fit=crop"
  },
  {
    title: "Nova Tech",
    category: "Digital Design",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Lupitex Consulting",
    category: "Corporate Rebrand",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2894&auto=format&fit=crop"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-24 bg-brand-white text-brand-dark" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-syne font-bold mb-6 text-brand-dark"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-dark/70 font-manrope"
            >
              A curated selection of our most audacious and contemporary projects. 
              We believe in high contrast, asymmetrical compositions, and generous negative space.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="text-brand-violet font-bold font-syne hover:text-brand-coral transition-colors flex items-center gap-2 uppercase tracking-tightest">
              View all projects
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-syne font-bold mb-2 group-hover:text-brand-violet transition-colors">{project.title}</h3>
              <p className="text-brand-dark/60 font-manrope">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
