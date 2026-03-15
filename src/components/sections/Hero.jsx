import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const containerRef = useRef(null);

  // Set up scroll tracking for the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate dynamic scale and Y position based on scroll progress
  // Image will scale from 1 to 1.15 and move down slightly for a parallax effect
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Opacity fades out slightly as we scroll down
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const scrollToCatalog = () => {
     navigate('/products');
  };

  const openVirtualTour = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div ref={containerRef} className="relative flex items-center justify-center min-h-[110vh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ scale: bgScale, y: bgY, opacity: bgOpacity }}
          className={`w-full h-full will-change-transform sticky top-0 ${!isImageLoaded ? 'bg-slate-800/60 animate-pulse' : 'bg-black'}`}
        >
             {!isImageLoaded && (
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="w-16 h-16 border-4 border-brand-red/20 border-t-brand-red rounded-full animate-spin"></div>
               </div>
             )}
             <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=75&w=1920&auto=format&fm=webp&fit=crop" 
              alt="Kripa Home Solutions" 
              width="1920"
              height="1080"
              className={`object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              fetchPriority="high"
              onLoad={() => setIsImageLoaded(true)}
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/10"></div>
        <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 relative max-w-[1400px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="max-w-3xl lg:w-3/5 will-change-transform"
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
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden relative lg:block lg:w-2/5 will-change-transform"
          >
             <div className="relative z-10 p-10 border shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-2xl border-white/10 rounded-[2.5rem]">
                <div className="grid grid-cols-2 gap-x-10 gap-y-12">
                    <div className="flex flex-col items-center justify-center p-2 border-b border-r border-white/10 pb-10 pr-6">
                        <span className="block mb-2 text-5xl font-serif font-black text-brand-gold drop-shadow-lg">15K+</span>
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase text-white/80">Premium Products</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 border-b border-white/10 pb-10 pl-6">
                        <span className="block mb-2 text-5xl font-serif font-black text-white drop-shadow-lg">50+</span>
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase text-white/80">Global Brands</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 border-r border-white/10 pt-10 pr-6">
                        <span className="block mb-2 text-5xl font-serif font-black text-white drop-shadow-lg">28</span>
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase text-white/80">Years of Trust</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 pt-10 pl-6">
                        <span className="block mb-2 text-5xl font-serif font-black text-brand-red drop-shadow-lg">24/7</span>
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase text-white/80">Expert Support</span>
                    </div>
                </div>
             </div>
             <div className="absolute w-56 h-56 rounded-full opacity-30 -top-16 -right-16 bg-brand-gold mix-blend-screen filter blur-[4rem] animate-pulse"></div>
             <div className="absolute w-64 h-64 rounded-full opacity-30 -bottom-20 -left-20 bg-brand-red mix-blend-screen filter blur-[5rem] animate-pulse" style={{ animationDelay: '1s' }}></div>
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