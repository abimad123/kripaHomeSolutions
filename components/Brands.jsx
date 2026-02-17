import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

// Replace these URLs with your actual local paths if needed
const brands = [
  { name: 'Asian Paints', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Asian_Paints_Logo.svg/1200px-Asian_Paints_Logo.svg.png' },
  { name: 'luker', logo: 'https://www.luker.in/static/media/Luker_nav_logo-1.a8ee57b82c3eafa2dcd6.jpg' },
  { name: 'Dulux', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dulux_logo.svg/2560px-Dulux_logo.svg.png' },
  { name: 'Hettich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Hettich_logo.svg/2560px-Hettich_logo.svg.png' },
  { name: 'Hafele', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/H%C3%A4fele_Logo.svg/1200px-H%C3%A4fele_Logo.svg.png' },
  { name: 'Jaquar', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Jaquar_Group_Logo.svg/1200px-Jaquar_Group_Logo.svg.png' },
  { name: 'Cera', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cera_Sanitaryware_Logo.png' },
  { name: 'Havells', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Havells_Logo.svg/1200px-Havells_Logo.svg.png' },
  { name: 'Anchor', logo: 'https://download.logo.wine/logo/Panasonic/Panasonic-Logo.wine.png' },
  { name: 'Pidilite', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Pidilite_logo.svg/1200px-Pidilite_logo.svg.png' }
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
            <h2 className="text-4xl font-black leading-tight font-serif md:text-5xl text-brand-navy dark:text-white">
              Brands We <br/>
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
              className="relative flex items-center justify-center h-20 w-40 md:w-48 group grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110"
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