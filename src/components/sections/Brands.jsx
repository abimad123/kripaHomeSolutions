import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

// Replace these URLs with your actual local paths if needed
const brands = [
  { name: 'Luker', logo: 'https://www.luker.in/static/media/Luker_nav_logo-1.a8ee57b82c3eafa2dcd6.jpg' },
  { name: 'RR Kabel', logo: 'https://www.rrkabel.com/wp-content/uploads/2024/08/RR-Kabel-logo.svg' },
  { name: 'Havells', logo: 'https://havells.com/media/logo/stores/1/Havells_Logo.svg' },
  { name: 'Cera', logo: 'https://www.cera-india.com/themes/cera/assets/images/cera-logo-desk.gif' },
  { name: 'American Standard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/American_Standard_logo_2017.svg/500px-American_Standard_logo_2017.svg.png' },
  { name: 'Grohe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Grohe.svg/375px-Grohe.svg.png' },
  { name: 'Legrand', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Legrand.svg/1920px-Legrand.svg.png?20091220174938' },
  { name: 'Berger', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Berger.png/500px-Berger.png' },
  { name: 'Asian Paints', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Asian_paints_logo.svg/375px-Asian_paints_logo.svg.png' },
  { name: 'V-Guard', logo: 'https://www.vguard.in/ui/client/images/vguard-logo.jpg' }
];

const Brands = () => {
  return (
    <Section className="py-24 overflow-hidden border-y bg-slate-50 dark:bg-brand-dark border-slate-200 dark:border-slate-800">
      <div className="relative z-10 px-2 mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-10 h-px bg-brand-red"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Our Partners</span>
        </div>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black leading-tight font-serif md:text-6xl text-brand-navy dark:text-white">
              Brands We <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Offer</span>
            </h2>
          </div>
          <p className="pl-4 text-[10px] font-bold tracking-widest uppercase border-l-2 md:text-xs text-slate-500 dark:text-slate-400 border-brand-red">
            Premium Collections Under One Roof
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none md:w-40 bg-gradient-to-r from-slate-50 dark:from-brand-dark to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 z-10 w-20 pointer-events-none md:w-40 bg-gradient-to-l from-slate-50 dark:from-brand-dark to-transparent"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
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
              className="relative flex items-center justify-center w-40 h-20 transition-transform duration-500 md:w-48 group hover:scale-110"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain w-full h-full max-h-16"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Brands;