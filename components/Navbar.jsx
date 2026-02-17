import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('http')) return;
    e.preventDefault();
    window.location.hash = href;
    setIsOpen(false);
    
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const googleMapsUrl = "https://maps.app.goo.gl/MkVkY24tLqHMW2cDA";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-2 border-b border-brand-red/5' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
           <a
  href="#home"
  onClick={(e) => handleLinkClick(e, '#home')}
  className="flex items-center gap-3 cursor-pointer group"
>
  <div className="relative flex flex-col items-center">
    <img
      src="/Kripalogo.png"
      alt="Kripa Home Solutions"
      className="h-14 w-auto transition-transform group-hover:scale-105"
    />
  </div>
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center mr-4 space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-colors z-10 ${
                    scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white'
                  } hover:text-brand-red dark:hover:text-brand-red`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {hoveredLink === link.name && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/10 z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>
            
            <div className={`flex items-center space-x-4 border-l pl-6 ${scrolled ? 'border-slate-200 dark:border-white/10' : 'border-white/20'}`}>
              <button 
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400' 
                    : 'hover:bg-white/10 text-white'
                }`}
                title="Toggle Theme"
              >
                {darkMode ? <Sun size={18} className="text-brand-gold" /> : <Moon size={18} />}
              </button>
              
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl group overflow-hidden relative ${
                 scrolled 
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-brand-red/20' 
                  : 'bg-white text-brand-red hover:bg-slate-100'
               }`}>
                 <span className="relative z-10 flex items-center gap-2">
                    <MapPin size={14} className="group-hover:animate-bounce" />
                    Visit Store
                 </span>
                 <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
             <button 
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl ${scrolled ? 'text-slate-600 dark:text-white bg-slate-50 dark:bg-white/5' : 'text-white bg-white/10'}`}
              >
                {darkMode ? <Sun size={20} className="text-brand-gold" /> : <Moon size={20} />}
              </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-all ${scrolled ? 'text-brand-navy dark:text-white bg-slate-50 dark:bg-white/5' : 'text-white bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-brand-surface border-t border-slate-100 dark:border-white/5 overflow-hidden shadow-2xl md:hidden"
          >
            <div className="px-6 pt-6 pb-10 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-4 text-sm font-black tracking-widest uppercase transition-all rounded-2xl text-slate-700 dark:text-slate-100 hover:text-brand-red hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 mt-6 space-y-4 border-t border-slate-100 dark:border-white/5">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-3 py-5 text-xs font-black text-white uppercase shadow-xl rounded-2xl bg-brand-red shadow-brand-red/30 tracking-[0.2em]"
                >
                  <MapPin size={18} />
                  MAP LOCATION
                </a>
                <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">
                  Puthur, Kottarakara, Kollam • SINCE 1995
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;