import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import FeaturedProducts from './components/sections/FeaturedProducts';
import WhyChooseUs from './components/sections/WhyChooseUs';
import VideoSeries from './components/sections/VideoSeries';
import Brands from './components/sections/Brands';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import Socials from './components/ui/Socials';

// Lazy-loaded routes for code splitting
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const PrivacyPolicy = lazy(() => import('./pages/LegalPolicy'));
import ComparisonModal from './components/ui/ComparisonModal';
import Footer from './components/layout/Footer';
import { Layers, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ScrollToTop Wrapper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// --- Full Page Loader Fallback (For Suspense) ---
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-brand-dark">
    <div className="w-16 h-16 border-4 rounded-full border-brand-red/20 border-t-brand-red animate-spin"></div>
    <span className="mt-4 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400 animate-pulse">Loading Experience...</span>
  </div>
);

// --- Main App Component ---
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState('');
  
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

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

  const handleProductEnquiry = (productName) => {
    setEnquiryPrefill(`I am interested in: ${productName}. Please provide more details regarding pricing and availability.`);
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
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 transition-colors duration-700 bg-white dark:text-white dark:bg-brand-dark">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="flex-grow pt-0 transition-opacity duration-500">
          <Suspense fallback={<PageLoader />}>
            <Routes>
               {/* Main Landing Page */}
               <Route path="/" element={
                  <div className="duration-700 animate-in fade-in">
                    <Hero />
                    <Categories />
                    <FeaturedProducts 
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
               } />

               {/* Individual Pages */}
               <Route path="/about" element={
                 <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
                   <About />
                 </div>
               } />
               
               <Route path="/contact" element={
                 <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
                   <Contact prefill={enquiryPrefill} />
                 </div>
               } />

               <Route path="/products" element={
                 <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
                   <ProductCatalog 
                     onEnquire={handleProductEnquiry}
                     compareList={compareList}
                     onToggleCompare={toggleCompare}
                   />
                 </div>
               } />

               <Route path="/products/:id" element={
                 <div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4">
                   <ProductDetails 
                     onEnquire={handleProductEnquiry}
                     compareList={compareList}
                     onToggleCompare={toggleCompare}
                   />
                 </div>
               } />

               <Route path="/privacy-policy" element={
                 <div className="min-h-screen pt-20 duration-700 animate-in fade-in">
                   <PrivacyPolicy />
                 </div>
               } />
            </Routes>
          </Suspense>
        </main>

        {/* Floating Comparison Bar (Rendered globally across routes) */}
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
    </Router>
  );
}

export default App;