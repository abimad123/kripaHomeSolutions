import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  ShoppingBag, 
  Grid, 
  MessageSquare,
  Utensils,
  Lightbulb,
  Bath,
  PaintBucket,
  ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const NotFound = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Assuming ProductCatalog can handle search via query param or we just navigate
      navigate(`/products?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const popularSections = [
    { name: 'Modular Kitchens', icon: <Utensils size={20} />, path: '/products', category: 'Kitchen' },
    { name: 'Electrical Fittings', icon: <Lightbulb size={20} />, path: '/products', category: 'Electrical' },
    { name: 'Sanitaryware', icon: <Bath size={20} />, path: '/products', category: 'Sanitaryware' },
    { name: 'Premium Paints', icon: <PaintBucket size={20} />, path: '/products', category: 'Paints' },
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-brand-dark min-h-[90vh] flex items-center">
      <SEO 
        title="404 - Oops! This page went missing"
        description="The page you are looking for does not exist or has been moved. Explore our premium home solutions instead."
      />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Message & Main Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mb-8">
              <span className="absolute -top-16 left-0 text-[12rem] font-black text-brand-red opacity-5 select-none pointer-events-none font-serif">
                404
              </span>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-brand-red"></div>
                <span className="text-xs font-black tracking-[0.3em] uppercase text-brand-red">Error Code 404</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-brand-navy dark:text-white leading-tight mb-6">
                Oops! This page <br />
                <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">went missing.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
                Looks like the page you’re looking for doesn’t exist or has been moved. 
                Don't worry, we have plenty of premium solutions to get you back on track.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(227, 30, 36, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-brand-red text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-brand-red/10 group"
                >
                  <Home size={18} className="group-hover:rotate-12 transition-transform" />
                  Back to Home
                </motion.button>
              </Link>
              
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-slate-50 dark:bg-brand-surface border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <ShoppingBag size={18} />
                  View Products
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:border-brand-red transition-all"
                >
                  <MessageSquare size={18} />
                  Contact Us
                </motion.button>
              </Link>

              <button 
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 text-gray-500 text-xs font-black uppercase tracking-widest hover:text-brand-red transition-colors"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Right Column: Search & Popular Sections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-slate-50/50 dark:bg-brand-surface/50 backdrop-blur-sm border border-slate-200/50 dark:border-white/5 rounded-[3rem] p-8 md:p-12"
          >
            <div className="mb-10">
              <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-6">Can't find it? Search here</h3>
              <form onSubmit={handleSearch} className="relative group">
                <input 
                  type="text" 
                  placeholder="Search products or categories..." 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full py-5 pl-14 pr-6 bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all dark:text-white"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-red transition-colors" size={20} />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-brand-red hover:bg-brand-red/10 rounded-lg transition-colors">
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Popular Sections</h3>
                <Link to="/products" className="text-[10px] font-black uppercase text-brand-red hover:underline">See All</Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularSections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="cursor-pointer group"
                    onClick={() => navigate(section.path)}
                  >
                    <div className="p-6 bg-white dark:bg-brand-dark border border-slate-100 dark:border-white/5 rounded-[2rem] hover:shadow-xl hover:shadow-brand-red/5 transition-all">
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors mb-4">
                        {section.icon}
                      </div>
                      <h4 className="font-bold text-brand-navy dark:text-white mb-1">{section.name}</h4>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-brand-red transition-colors">
                        Explore <ChevronRight size={10} />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Branded Icon Overlay */}
            <div className="mt-12 flex justify-center opacity-10">
               <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                 <Grid size={48} className="text-brand-navy dark:text-white" />
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
