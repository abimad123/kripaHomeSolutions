import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// --- KEY CHANGE: Import the logo directly so Vite tracks it ---
import logoImg from '/Kripalogo.png';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active section based on current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') {
       // Since categories is on the home page, check hash logic lightly or just treat home as home.
       if (location.hash === '#categories') return 'Categories';
       return 'Home';
    }
    if (path === '/about') return 'About Us';
    if (path.startsWith('/products')) return 'Products';
    if (path === '/contact') return 'Contact Us';
    return '';
  };

  const activeSection = getActiveTab();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (link.path.startsWith('/#')) {
        // Handle in-page hash scroll for categories
        const targetId = link.path.substring(2);
        
        if (location.pathname !== '/') {
           // We are not on the homepage. Navigate to home, then let effect handle scroll, or just navigate to / with hash.
           navigate(link.path);
        } else {
           // We are on homepage, scroll to it
           const element = document.getElementById(targetId);
           if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
           } else {
              // Fallback just in case
              navigate(link.path);
           }
        }
    } else {
        // Standard navigation
        navigate(link.path);
    }
  };

  // Effect to handle scrolling on mount if there's a hash (e.g. arriving from /about to /#categories)
  useEffect(() => {
     if (location.pathname === '/' && location.hash) {
         const targetId = location.hash.substring(1);
         setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            }
         }, 100);
     }
  }, [location]);

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
           <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex flex-col justify-center min-h-[56px] min-w-[120px]">
              {!isLogoLoaded && (
                <div className="absolute inset-0 bg-slate-200/20 dark:bg-slate-800/50 animate-pulse rounded-lg"></div>
              )}
              <img
                src={logoImg}
                alt="Kripa Home Solutions"
                onLoad={() => setIsLogoLoaded(true)}
                className={`h-14 w-auto transition-all group-hover:scale-105 filter drop-shadow-md duration-500 ${isLogoLoaded ? 'opacity-100 relative' : 'opacity-0 absolute'}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center mr-4 space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                
                return (
                  <a 
                    key={link.name} 
                    href={link.path} 
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`relative px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-colors z-10 cursor-pointer ${
                      isActive 
                        ? 'text-brand-red dark:text-brand-red' 
                        : scrolled 
                          ? 'text-slate-600 dark:text-slate-300 hover:text-brand-red dark:hover:text-brand-red' 
                          : 'text-white hover:text-brand-red'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {hoveredLink === link.name && !isActive && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/10 z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {/* Active state indicator */}
                    {isActive && (
                        <motion.div 
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full border-2 border-brand-red/20 dark:border-brand-red/40 bg-brand-red/5 z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                    )}
                  </a>
                );
              })}
            </div>
            
            <div className={`flex items-center space-x-4 border-l pl-6 ${scrolled ? 'border-slate-200 dark:border-white/10' : 'border-white/20'}`}>
              <button 
                onClick={toggleTheme}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400' 
                    : 'hover:bg-white/20 text-white'
                }`}
                title="Toggle Theme"
              >
                {darkMode ? <Sun size={18} className="text-brand-gold" /> : <Moon size={18} />}
              </button>
              
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our store on Google Maps"
                className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl group overflow-hidden relative ${
                 scrolled 
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-brand-red/20' 
                  : 'bg-white text-brand-red hover:bg-slate-100 shadow-white/10'
               }`}>
                 <span className="relative z-10 flex items-center gap-2">
                    <MapPin size={14} className="group-hover:animate-bounce" />
                    Visit Store
                 </span>
                 <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-linear-to-r from-transparent via-black/5 to-transparent group-hover:translate-x-full" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
             <button 
                onClick={toggleTheme}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className={`p-2.5 rounded-xl ${scrolled ? 'text-slate-600 dark:text-white bg-slate-50 dark:bg-white/5' : 'text-white bg-white/20'}`}
              >
                {darkMode ? <Sun size={20} className="text-brand-gold" /> : <Moon size={20} />}
              </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`p-2.5 rounded-xl transition-all ${scrolled ? 'text-brand-navy dark:text-white bg-slate-50 dark:bg-white/5' : 'text-white bg-white/20'}`}
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
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link)}
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