import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import VideoSeries from './components/VideoSeries';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Socials from './components/Socials';
import Contact from './components/Contact';
import About from './components/About';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import ComparisonModal from './components/ComparisonModal';
import Footer from './components/Footer';
import { Layers, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- KEY CHANGE 1: Import from the renamed file ---
import PrivacyPolicy from './components/LegalPolicy'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState('home');
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState('All');
  const [activeProductId, setActiveProductId] = useState(null);
  const [enquiryPrefill, setEnquiryPrefill] = useState('');
  
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const scrollToSection = useCallback((id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  // --- KEY CHANGE 2: Update Navigation Logic ---
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleNavigation = () => {
      const hash = window.location.hash;
      window.scrollTo(0, 0);

      if (hash === '#contact') {
        setView('contact');
      } else if (hash === '#about') {
        setView('about');
      } else if (hash === '#products') {
        setView('products');
      } else if (hash.startsWith('#products/')) {
        const id = hash.split('/')[1];
        setActiveProductId(id);
        setView('product-details');
      } else if (hash === '#privacy-policy') { 
        // This connects the <a href="#privacy-policy"> to the view
        setView('privacy'); 
      } else {
        setView('home');
        if (hash && hash !== '#home') {
          scrollToSection(hash.substring(1));
        }
      }
    };

    window.addEventListener('hashchange', handleNavigation);
    handleNavigation();

    return () => window.removeEventListener('hashchange', handleNavigation);
  }, [scrollToSection]);

  // ... (toggleTheme, handleCategoryClick, etc. remain the same) ...
  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCatalogCategory(category);
    window.location.hash = '#products';
  };

  const handleProductEnquiry = (productName) => {
    setEnquiryPrefill(`I am interested in: ${productName}. Please provide more details regarding pricing and availability.`);
    window.location.hash = '#contact';
  };

  const handleViewDetails = (productId) => {
    window.location.hash = `#products/${productId}`;
  };

  const toggleCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 4) return prev;
      return [...prev, product];
    });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 transition-colors duration-700 bg-white dark:text-white dark:bg-brand-dark">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow pt-0 transition-opacity duration-500">
        {view === 'contact' ? (
          <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
            <Contact prefill={enquiryPrefill} />
          </div>
        ) : view === 'about' ? (
          <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
            <About />
          </div>
        ) : view === 'privacy' ? ( 
          // --- KEY CHANGE 3: Render Privacy Policy ---
          <div className="min-h-screen pt-20 duration-700 animate-in fade-in">
            <PrivacyPolicy />
          </div>
        ) : view === 'products' ? (
          <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
            <ProductCatalog 
              initialCategory={selectedCatalogCategory} 
              onViewDetails={handleViewDetails}
              onEnquire={handleProductEnquiry}
              compareList={compareList}
              onToggleCompare={toggleCompare}
            />
          </div>
        ) : view === 'product-details' ? (
          <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
            <ProductDetails 
              productId={activeProductId} 
              onEnquire={handleProductEnquiry}
              compareList={compareList}
              onToggleCompare={toggleCompare}
            />
          </div>
        ) : (
          <div className="duration-700 animate-in fade-in">
            <Hero />
            <Categories onCategorySelect={handleCategoryClick} />
            <FeaturedProducts 
              onViewDetails={handleViewDetails}
              onEnquire={handleProductEnquiry}
              compareList={compareList}
              onToggleCompare={toggleCompare}
            />
            <WhyChooseUs />
            <VideoSeries />
            <Brands />
            <Testimonials />
            <Gallery />
            <Socials />
          </div>
        )}
      </main>

      {/* Floating Comparison Bar */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div 
            initial={{ y: 150, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            exit={{ y: 150, x: '-50%' }}
            className="fixed bottom-6 md:bottom-24 left-1/2 z-60 w-[92vw] md:w-auto md:max-w-[95vw]"
          >
            <div className="bg-white/95 dark:bg-brand-navy/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl p-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-6">
              <div className="flex -space-x-3 overflow-hidden">
                {compareList.map(p => (
                  <div key={p.id} className="w-10 h-10 overflow-hidden bg-gray-100 border-2 border-white rounded-full shadow-md md:w-12 md:h-12 dark:border-brand-navy">
                    <img src={p.image} className="object-cover w-full h-full" alt={p.name} />
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col flex-grow min-w-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-0.5">{compareList.length} Selection{compareList.length > 1 ? 's' : ''}</span>
                <span className="hidden text-sm font-bold truncate text-brand-navy dark:text-white md:block">Comparison Hub</span>
                <span className="text-xs font-bold truncate text-brand-navy dark:text-white md:hidden">Compare</span>
              </div>

              <div className="w-px h-8 bg-gray-200 dark:bg-white/10"></div>
              
              <button 
                onClick={() => setIsCompareModalOpen(true)}
                className="flex items-center gap-2 px-5 py-3 text-white transition-all bg-brand-red shadow-xl rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-brand-red/20 hover:bg-red-700 hover:scale-105 active:scale-95"
              >
                <Layers size={16} /> 
                <span className="hidden sm:inline">Compare Hub</span>
              </button>
              
              <button 
                onClick={() => setCompareList([])}
                className="p-3 text-gray-400 transition-colors hover:text-brand-red"
                title="Clear All"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ComparisonModal 
        isOpen={isCompareModalOpen} 
        onClose={() => setIsCompareModalOpen(false)} 
        products={compareList}
        onRemove={toggleCompare}
      />
      <Footer />
    </div>
  );
}

export default App;