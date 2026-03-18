import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Luker', logo: '/brands/luker.svg' },
  { name: 'RR Kabel', logo: '/brands/RR-Kabel.svg' },
  { name: 'Havells', logo: '/brands/Havells.svg' },
  { name: 'Cera', logo: '/brands/cera.gif' },
  { name: 'American Standard', logo: '/brands/American_Standard.png' },
  { name: 'Grohe', logo: '/brands/Grohe.svg' },
  { name: 'Legrand', logo: '/brands/Legrand.png' },
  { name: 'Berger', logo: '/brands/Berger.png' },
  { name: 'Asian Paints', logo: '/brands/Asian_Paints.svg' },
  { name: 'V-Guard', logo: '/brands/vguard.png' }
];

const Brands = () => {
  return (
    <Section id="brands" className="py-24 overflow-hidden border-y bg-slate-50 dark:bg-brand-dark border-slate-200 dark:border-slate-800">
      <div className="relative z-10 px-2 mb-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-10 h-px bg-brand-red"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Our Partners</span>
            </div>
            <h2 className="text-4xl font-black leading-tight font-serif md:text-6xl text-brand-navy dark:text-white">
              Brands We <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Offer</span>
            </h2>
          </div>
          <p className="pl-4 text-[10px] font-bold tracking-widest uppercase border-l-2 md:text-xs text-slate-500 dark:text-slate-400 border-brand-red md:border-l-2 md:pl-4 mb-1">
            Premium Collections Under One Roof
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none md:w-40 bg-gradient-to-r from-slate-50 dark:from-brand-dark to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 z-10 w-20 pointer-events-none md:w-40 bg-gradient-to-l from-slate-50 dark:from-brand-dark to-transparent"></div>

        <motion.div
          className="flex w-max items-center gap-16 md:gap-24 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity
          }}
        >
          {/* We duplicate the array 4 times to ensure seamless infinite scrolling */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="relative flex shrink-0 items-center justify-center w-40 h-20 transition-transform duration-500 md:w-48 group hover:scale-110"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                width="160"
                height="80"
                loading="lazy"
                className="object-contain w-full h-full max-h-16 dark:brightness-0 dark:invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Brands;