import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, className = '', id, darkBg = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkBg ? 'bg-white dark:bg-slate-800' : 'bg-transparent'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-20 bg-primary-500 rounded mt-4 ${center ? 'mx-auto' : ''}`} />
  </div>
);