import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('categories');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVirtualTour = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div className="relative flex items-center justify-center min-h-[110vh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
             <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" 
              alt="Kripa Home Solutions" 
              className="object-cover w-full h-full"
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-90 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 relative max-w-[1400px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-12 bg-brand-gold"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Since 1995</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[0.9] mb-8 drop-shadow-2xl">
              BUILDING <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-orange-500">DREAMS</span> <br/>
              TOGETHER
            </h1>
            
            <p className="max-w-xl pl-6 mb-10 text-lg leading-relaxed border-l-4 md:text-xl text-slate-300 border-brand-red">
             Don't just build a house, craft a home. We help you find the perfect fittings and finishes that last a lifetime.
            </p>
            
            <div className="flex flex-col gap-5 sm:flex-row">
              <button 
                onClick={scrollToCatalog}
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-full font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(227,30,36,0.5)] hover:shadow-[0_0_30px_rgba(227,30,36,0.8)] flex items-center justify-center gap-3 group"
              >
                EXPLORE CATALOG
                <div className="p-1 transition-transform rounded-full bg-white/20 group-hover:translate-x-1">
                     <ArrowRight size={16} />
                </div>
              </button>
              
              <button 
                onClick={openVirtualTour}
                className="flex items-center justify-center gap-3 px-8 py-4 font-bold tracking-wide text-white transition-all border rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border-white/20 group"
              >
                <div className="flex items-center justify-center w-8 h-8 transition-transform bg-white rounded-full text-brand-red group-hover:scale-110">
                   <Play size={14} fill="currentColor" />
                </div>
                VIRTUAL TOUR
              </button>
            </div>
            
           <a href="https://maps.app.goo.gl/RBqCFaV6u1goDdMeA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-12 transition-colors cursor-pointer text-white/80 hover:text-brand-gold group"
            >
                <MapPin className="text-brand-red group-hover:animate-bounce" />
                <span className="font-medium underline decoration-brand-red decoration-2 underline-offset-4">Find Kripa Home Solutions near you</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden relative lg:block lg:w-2/5"
          >
             <div className="relative z-10 p-8 border shadow-2xl bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-4 text-center border-b border-r border-white/10">
                        <span className="block mb-1 text-4xl font-serif font-bold text-brand-gold">15K+</span>
                        <span className="text-xs tracking-wider uppercase text-slate-300">Premium Products</span>
                    </div>
                    <div className="p-4 text-center border-b border-white/10">
                        <span className="block mb-1 text-4xl font-serif font-bold text-white">50+</span>
                        <span className="text-xs tracking-wider uppercase text-slate-300">Global Brands</span>
                    </div>
                    <div className="p-4 text-center border-r border-white/10">
                        <span className="block mb-1 text-4xl font-serif font-bold text-white">28</span>
                        <span className="text-xs tracking-wider uppercase text-slate-300">Years of Trust</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="block mb-1 text-4xl font-serif font-bold text-brand-red">24/7</span>
                        <span className="text-xs tracking-wider uppercase text-slate-300">Expert Support</span>
                    </div>
                </div>
             </div>
             <div className="absolute w-32 h-32 rounded-full opacity-50 -top-10 -right-10 bg-brand-gold mix-blend-overlay filter blur-3xl animate-pulse"></div>
             <div className="absolute w-40 h-40 rounded-full opacity-50 -bottom-10 -left-10 bg-brand-red mix-blend-overlay filter blur-3xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute flex flex-col items-center -translate-x-1/2 bottom-10 left-1/2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;