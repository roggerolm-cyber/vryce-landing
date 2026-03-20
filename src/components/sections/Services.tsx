"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    description: "We craft compelling visual identities that resonate with your target audience and stand the test of time. Strategic positioning meets aesthetic excellence.",
  },
  {
    num: "02",
    title: "Art Direction",
    description: "Guiding the visual narrative across all touchpoints. We ensure your brand's voice is consistently translated into powerful imagery and layouts.",
  },
  {
    num: "03",
    title: "Editorial Design",
    description: "From print to digital, we design with high contrast, intentional negative space, and typographic precision that demands attention.",
  },
  {
    num: "04",
    title: "Copywriting",
    description: "Words that convert and compel. We create narratives that amplify your visual presence and communicate your core values with impact.",
  }
];

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-white text-brand-dark relative z-10" id="services">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-manrope font-bold mb-4 tracking-[0.2em] text-brand-dark/50 uppercase">
                Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-syne font-bold leading-tight">
                Tailored for <br/> <span className="italic font-light text-brand-violet">Ambition.</span>
              </h3>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-brand-dark/10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group border-b border-brand-dark/10 py-10 md:py-16 relative overflow-hidden cursor-default"
                >
                  {/* Hover Background Effect */}
                  <div 
                    className={`absolute inset-0 bg-brand-dark/5 transition-opacity duration-500 ease-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} 
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <span className="text-brand-dark/30 font-syne font-bold text-xl md:text-2xl transition-colors duration-500 group-hover:text-brand-violet">
                      {service.num}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-3xl md:text-4xl font-syne font-bold mb-4 transition-transform duration-500 group-hover:translate-x-2">
                        {service.title}
                      </h4>
                      <p className="text-brand-dark/60 font-manrope text-lg leading-relaxed max-w-xl transition-transform duration-500 group-hover:translate-x-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
