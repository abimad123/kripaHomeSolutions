import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { Instagram, Facebook, Youtube, ChevronLeft, ChevronRight, Play, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const reels = [
  { id: 1, type: 'instagram', views: '12.4K', likes: '1.2K', thumb: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400', caption: 'Modern kitchen makeover with Hettich fittings! #KripaHome #KitchenDesign' },
  { id: 2, type: 'youtube', views: '45K', likes: '3.8K', thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400', caption: 'Choosing the right paint for your dream home | Full Guide' },
  { id: 3, type: 'instagram', views: '8.9K', likes: '950', thumb: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=400', caption: 'The future of security: Smart Fingerprint Locks at Kripa.' },
  { id: 4, type: 'facebook', views: '5.2K', likes: '420', thumb: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=400', caption: 'Luxury Sanitaryware collection now in stock at Kochi Showroom.' },
  { id: 5, type: 'instagram', views: '22K', likes: '2.5K', thumb: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400', caption: 'Matte black or Chrome? Tell us your favorite bathroom finish below!' },
  { id: 6, type: 'youtube', views: '102K', likes: '12K', thumb: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=400', caption: 'Inside Kripa Arcade: A Virtual Walkthrough' },
  { id: 7, type: 'instagram', views: '15.6K', likes: '1.8K', thumb: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400', caption: 'Architectural hardware that makes a statement. #LuxuryHome' },
  { id: 8, type: 'facebook', views: '3.1K', likes: '280', thumb: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400', caption: 'Experience the magic of Asian Paints textures.' },
];

const Socials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'instagram': return <Instagram className="w-5 h-5 text-pink-500" />;
      case 'youtube': return <Youtube className="w-5 h-5 text-red-600" />;
      case 'facebook': return <Facebook className="w-5 h-5 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <Section className="relative py-24 overflow-hidden bg-white border-t dark:bg-black dark:border-white/5">
      {/* Decorative Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 blur-[120px] rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-end justify-between gap-8 mb-16 md:flex-row">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 rounded-full bg-brand-gold"></div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Join our Community</span>
            </div>
            <h2 className="text-4xl font-black leading-tight font-serif md:text-6xl text-brand-navy dark:text-white">
              See Us <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">In Action</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 transition-all duration-300 border shadow-lg rounded-2xl bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-brand-red hover:text-white hover:border-brand-red"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 transition-all duration-300 border shadow-lg rounded-2xl bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-brand-red hover:text-white hover:border-brand-red"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Reels Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 px-4 pb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <motion.div 
              key={reel.id}
              whileHover={{ y: -10 }}
              className="relative flex-shrink-0 w-[300px] aspect-[9/16] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl snap-center border border-slate-200 dark:border-white/10"
            >
              <img 
                src={reel.thumb} 
                alt="Reel" 
                className="object-cover w-full h-full duration-700 transition-transform group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-60 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-80"></div>
              
              {/* Top Metrics */}
              <div className="absolute z-20 flex justify-between items-center top-6 left-6 right-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                  <Play size={10} fill="white" className="text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{reel.views}</span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 transition-transform duration-700 bg-white shadow-lg rounded-full backdrop-blur-md group-hover:rotate-[360deg]">
                  {getIcon(reel.type)}
                </div>
              </div>

              {/* Center Play Button (Visible on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center w-16 h-16 transition-transform duration-500 scale-75 border rounded-full bg-white/20 backdrop-blur-xl border-white/30 group-hover:scale-100">
                  <Play size={24} fill="white" className="ml-1 text-white" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 z-20 w-full p-8">
                <div className="flex gap-4 mb-4 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart size={16} className="text-brand-red fill-brand-red" />
                    <span className="text-xs font-bold">{reel.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MessageCircle size={16} />
                    <span className="text-xs font-bold">{Math.floor(parseInt(reel.likes)/4)}</span>
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed text-white transition-transform duration-300 transform translate-y-4 line-clamp-2 group-hover:translate-y-0 delay-75">
                  {reel.caption}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 z-10 pointer-events-none -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Social Bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 md:gap-16">
          {[
            { name: 'Instagram', handle: '@kripahomesolutions', icon: <Instagram />, color: 'hover:text-pink-500', glow: 'hover:shadow-pink-500/20' },
            { name: 'YouTube', handle: 'Kripa Home Solutions', icon: <Youtube />, color: 'hover:text-red-600', glow: 'hover:shadow-red-600/20' },
            { name: 'Facebook', handle: 'kripahome', icon: <Facebook />, color: 'hover:text-blue-600', glow: 'hover:shadow-blue-600/20' }
          ].map((social) => (
            <motion.a 
              key={social.name}
              href="#"
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-4 text-slate-400 ${social.color} transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:bg-white/10 group-hover:border-current group-hover:shadow-xl ${social.glow}`}>
                {social.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold transition-colors text-brand-navy dark:text-white group-hover:text-current">{social.name}</span>
                <span className="text-xs font-medium opacity-60">{social.handle}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Socials;