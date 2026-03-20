"use client";

import { motion } from "framer-motion";
import { PenTool, Layout, Type } from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    description: "We craft compelling visual identities that resonate with your target audience and stand the test of time.",
    icon: <Layout className="w-8 h-8 text-brand-coral" />
  },
  {
    title: "Graphic Design",
    description: "From editorial layouts to marketing materials, we design with high contrast and intentional negative space.",
    icon: <PenTool className="w-8 h-8 text-brand-coral" />
  },
  {
    title: "Copywriting",
    description: "Words that convert. We create narratives that amplify your visual presence and communicate your core values.",
    icon: <Type className="w-8 h-8 text-brand-coral" />
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-brand-dark relative z-10" id="services">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-syne font-bold mb-6"
          >
            Services tailored to your ambition.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-brand-violet"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group border border-brand-white/10 p-8 hover:bg-brand-white/5 transition-colors duration-300"
            >
              <div className="mb-6 bg-brand-white/5 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-syne font-bold mb-4">{service.title}</h3>
              <p className="text-brand-white/70 leading-relaxed font-manrope">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
