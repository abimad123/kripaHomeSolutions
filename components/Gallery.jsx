import React, { useRef } from 'react';
import { Section } from './ui/Section';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/build1.jpg',
    title: 'Lighting Studio',
    subtitle: 'Exquisite Chandeliers & LED Solutions',
    width: 'w-[350px]',
  },
  {
    id: 2,
    src: '/build9.jpg',
    title: 'Sanitaryware Lounge',
    subtitle: 'Premium Bathroom Fittings',
    width: 'w-[450px]',
  },
  {
    id: 3,
    src: '/build2.jpg',
    title: 'Kripa Arcade Exterior',
    subtitle: 'Our Landmark Showroom',
    width: 'w-[600px]',
  },
  {
    id: 4,
    src: '/build8.jpg',
    title: 'Modular Kitchens',
    subtitle: 'Modern Culinary Spaces',
    width: 'w-[400px]',
  },
  {
    id: 5,
    src: '/build5.jpg',
    title: 'Award Ceremony',
    subtitle: 'Celebrating Excellence with Partners',
    width: 'w-[400px]',
  },
  {
    id: 6,
    src: '/k1.jpg',
    title: 'Client Meet',
    subtitle: 'Consulting with Experts',
    width: 'w-[350px]',
  },
  {
    id: 7,
    src: '/build3.jpg',
    title: 'Hardware Selection',
    subtitle: 'Tools & Accessories',
    width: 'w-[350px]',
  },
];

const Gallery = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section id="gallery" className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 px-2">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-brand-red"></span>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs">
              Exhibition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-navy dark:text-white leading-tight">
            Store <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold italic">
              Gallery
            </span>
          </h2>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mb-1">
          <button
            onClick={() => scroll('left')}
            className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-12 px-2 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex-shrink-0 ${item.width} h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg snap-center`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <MapPin size={14} className="text-brand-gold" />
                <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest">
                  Kripa Arcade
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm opacity-80">
                {item.subtitle}
              </p>
            </div>

            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
