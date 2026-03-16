import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
const Categories = lazy(() => import('./components/sections/Categories'));
const FeaturedProducts = lazy(() => import('./components/sections/FeaturedProducts'));
const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'));
const VideoSeries = lazy(() => import('./components/sections/VideoSeries'));
const Brands = lazy(() => import('./components/sections/Brands'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Gallery = lazy(() => import('./components/sections/Gallery'));
const Socials = lazy(() => import('./components/ui/Socials'));

import ComparisonModal from './components/ui/ComparisonModal';
const Footer = lazy(() => import('./components/layout/Footer'));
import { Layers, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/ui/SEO';
import PageLoader from './components/ui/PageLoader';

// Lazy-loaded routes for code splitting
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const PrivacyPolicy = lazy(() => import('./pages/LegalPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));


// Admin Imports
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/dashboard/Dashboard'));
const ProductManager = lazy(() => import('./pages/admin/products/ProductManager'));
const MediaManager = lazy(() => import('./pages/admin/media/MediaManager'));
const Inquiries = lazy(() => import('./pages/admin/inquiries/Inquiries'));
const Subscribers = lazy(() => import('./pages/admin/audience/Subscribers'));

// --- ScrollToTop Wrapper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};



// --- Structured Data for SEO ---
const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kripa Home Solutions",
    "image": "https://kripahomesolutions.abijith.me/Kripalogo.png",
    "@id": "https://kripahomesolutions.abijith.me",
    "url": "https://kripahomesolutions.abijith.me",
    "telephone": "+91 8606123467",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kottarakkara Sasthamcotta Rd, Puthoor",
      "addressLocality": "Kollam",
      "addressRegion": "Kerala",
      "postalCode": "691507",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0064, 
      "longitude": 76.7112
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/Kripahomesolutions",
      "https://www.instagram.com/kripahomesolutions",
      "https://www.youtube.com/channel/UCceQg8aDcOEbeZyb7H2BvBg"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kripa Home Solutions",
    "url": "https://kripahomesolutions.abijith.me",
    "logo": "https://kripahomesolutions.abijith.me/Kripalogo.png"
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </>
  );
};

// --- App Content (Inner Component to use useLocation) ---
const AppContent = ({ darkMode, toggleTheme, compareList, setCompareList, enquiryPrefill, handleProductEnquiry, toggleCompare, isCompareModalOpen, setIsCompareModalOpen }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <StructuredData />
      {!isAdminRoute && <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />}
      
      <main className="flex-grow pt-0 transition-opacity duration-500">
          <Suspense fallback={<PageLoader />}>
             <Routes>
                <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-0">
                <SEO 
                  title="Kripa Home Solutions | Building Materials & Modular Kitchens in Kollam"
                  description="Kripa Home Solutions in Kollam offers premium modular kitchens, sanitaryware, electrical fittings, paints, and building materials. Visit our showroom in Puthoor for world-class home solutions."
                />
                <Hero />
                     <Categories />
                     <FeaturedProducts onEnquire={handleProductEnquiry} compareList={compareList} onToggleCompare={toggleCompare} />
                     <WhyChooseUs />
                     <VideoSeries />
                     <Brands />
                     <Testimonials />
                     <Gallery />
                     <Socials />
                   </motion.div>
                } />
                <Route path="/about" element={<div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4"><About /></div>} />
                <Route path="/contact" element={<div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4"><Contact prefill={enquiryPrefill} /></div>} />
                <Route path="/products" element={<div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4"><ProductCatalog onEnquire={handleProductEnquiry} compareList={compareList} onToggleCompare={toggleCompare} /></div>} />
                <Route path="/products/:id" element={<div className="min-h-screen pt-24 duration-700 animate-in fade-in slide-in-from-bottom-4"><ProductDetails onEnquire={handleProductEnquiry} compareList={compareList} onToggleCompare={toggleCompare} /></div>} />
                <Route path="/privacy-policy" element={<div className="min-h-screen pt-20 duration-700 animate-in fade-in"><PrivacyPolicy /></div>} />
                <Route path="/terms" element={<div className="min-h-screen pt-20 duration-700 animate-in fade-in"><TermsOfService /></div>} />
                <Route path="/sitemap" element={<div className="min-h-screen pt-20 duration-700 animate-in fade-in"><Sitemap /></div>} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                   <Route index element={<Dashboard />} />
                   <Route path="login" element={<AdminLogin />} />
                   <Route path="products" element={<ProductManager />} />
                   <Route path="media" element={<MediaManager />} />
                   <Route path="inquiries" element={<Inquiries />} />
                   <Route path="subscribers" element={<Subscribers />} />
                </Route>

                <Route path="*" element={<div className="min-h-screen pt-20 duration-700 animate-in fade-in"><NotFound /></div>} />
             </Routes>
          </Suspense>
      </main>

      {!isAdminRoute && (
        <>
          <AnimatePresence>
            {compareList.length > 0 && (
              <motion.div initial={{ y: 150, x: '-50%' }} animate={{ y: 0, x: '-50%' }} exit={{ y: 150, x: '-50%' }} className="fixed bottom-6 md:bottom-24 left-1/2 z-60 w-[92vw] md:w-auto md:max-w-[95vw]">
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
                  <button onClick={() => setIsCompareModalOpen(true)} className="flex items-center gap-2 px-5 py-3 text-white transition-all bg-brand-red shadow-xl rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-brand-red/20 hover:bg-red-700 hover:scale-105 active:scale-95">
                    <Layers size={16} /> <span className="hidden sm:inline">Compare Hub</span>
                  </button>
                  <button onClick={() => setCompareList([])} className="p-3 text-gray-400 transition-colors hover:text-brand-red" title="Clear All"><X size={20} /></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <ComparisonModal isOpen={isCompareModalOpen} onClose={() => setIsCompareModalOpen(false)} products={compareList} onRemove={toggleCompare} />
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
};

// --- App Container wrapper ---
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState('');
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
      if (exists) return prev.filter(p => p.id !== product.id);
      if (prev.length >= 4) return prev;
      return [...prev, product];
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 transition-colors duration-700 bg-white dark:text-white dark:bg-brand-dark">
        <AppContent 
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          compareList={compareList}
          setCompareList={setCompareList}
          enquiryPrefill={enquiryPrefill}
          handleProductEnquiry={handleProductEnquiry}
          toggleCompare={toggleCompare}
          isCompareModalOpen={isCompareModalOpen}
          setIsCompareModalOpen={setIsCompareModalOpen}
        />
      </div>
    </Router>
  );
}

export default App;