import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Search, Filter, ChevronDown, MessageSquare, Star, LayoutGrid, List, RotateCcw, Layers, Check, ArrowRight } from 'lucide-react';

const catalogProducts = [
  { 
    id: '1', name: 'Royal Luxury Emulsion', brand: 'Asian Paints', category: 'Paints', mrp: 65, offerPrice: 45, 
    image: 'https://images.unsplash.com/photo-1562259920-47afc305f369?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Super-premium interior wall finish for a sophisticated look.',
    features: ['Eco-friendly', 'Rich Matte Finish', 'Highly Durable']
  },
  { 
    id: '2', name: 'Smart Fingerprint Lock v3', brand: 'Dorset', category: 'Hardware', mrp: 245, offerPrice: 185, 
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Cutting-edge biometric security for modern homes.',
    features: ['5-way unlocking', 'Anti-theft Alarm', 'Emergency Power']
  },
  { 
    id: '3', name: 'Matte Black High-Neck Faucet', brand: 'Jaquar', category: 'Sanitaryware', mrp: 165, offerPrice: 125, 
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Architectural series bathroom fitting with water-saving tech.',
    features: ['Corrosion Resistant Brass', 'Soft Flow', '7-Year Warranty']
  },
  { 
    id: '4', name: 'Magic Corner Unit', brand: 'Hettich', category: 'Kitchen', mrp: 410, offerPrice: 320, 
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Maximum storage efficiency for modular kitchen corners.',
    features: ['Soft-close mechanism', 'Chrome Finish', 'Heavy load capacity']
  },
  { 
    id: '5', name: 'Designer Brass Handle', brand: 'Hafele', category: 'Hardware', mrp: 55, offerPrice: 35, 
    image: 'https://images.unsplash.com/photo-1617104424032-b9bd6972d0e5?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Handcrafted solid brass handle for premium doors.',
    features: ['Solid Brass', 'Elegant Patina', 'Easy Install']
  },
  { 
    id: '6', name: 'Table Top Ceramic Basin', brand: 'Cera', category: 'Sanitaryware', mrp: 125, offerPrice: 95, 
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Contemporary oval basin for luxury washrooms.',
    features: ['Stain Resistant Glaze', 'High Gloss Finish', 'Sleek Design']
  },
  { 
    id: '7', name: 'Weather Defense Exterior', brand: 'Berger', category: 'Paints', mrp: 85, offerPrice: 65, 
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Advanced rain-protection formula for exterior walls.',
    features: ['Anti-algae', 'Heat Reflective', 'Dust Guard']
  },
  { 
    id: '8', name: 'Lauritz Smart Switch', brand: 'L&T', category: 'Electrical', mrp: 25, offerPrice: 15, 
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Wi-Fi enabled smart switches for home automation.',
    features: ['Voice Control', 'App Integration', 'Modular Design']
  },
  { 
    id: '9', name: 'Ultra-Quiet BLDC Fan', brand: 'Havells', category: 'Electrical', mrp: 105, offerPrice: 75, 
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Energy-saving fan with silent operation and remote.',
    features: ['Energy Efficient', 'Remote Control', 'Sleep Mode']
  }
];

const categories = ["All", "Hardware", "Paints", "Sanitaryware", "Kitchen", "Electrical"];
const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Rating"];

const ProductCatalog = ({ initialCategory = 'All', onViewDetails, onEnquire, compareList, onToggleCompare }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('Newest');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(500);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = catalogProducts.filter(product => {
      const priceToCompare = product.offerPrice || product.mrp;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = priceToCompare <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "Price: Low to High": result.sort((a, b) => (a.offerPrice || a.mrp) - (b.offerPrice || b.mrp)); break;
      case "Price: High to Low": result.sort((a, b) => (b.offerPrice || b.mrp) - (a.offerPrice || a.mrp)); break;
      case "Rating": result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }
    return result;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange(500);
    setSortBy('Newest');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark">
      <div className="relative h-[35vh] md:h-[40vh] bg-brand-navy flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600')] bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="relative z-10 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 text-4xl font-black tracking-tight text-white font-serif md:text-7xl"
          >
            THE <span className="text-brand-red">CATALOG</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-brand-gold"></div>
            <p className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Precision Hardware & Finishes</p>
            <div className="w-8 h-px bg-brand-gold"></div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-16">
        <div className="mb-8 lg:hidden">
           <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center justify-between w-full px-6 py-4 font-bold border rounded-2xl bg-slate-50 dark:bg-brand-surface border-slate-200 dark:border-white/10 text-brand-navy dark:text-white">
             <div className="flex items-center gap-2"><Filter size={18} className="text-brand-red" /> Filters</div>
             <ChevronDown className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
           </button>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <AnimatePresence>
            {(isFilterOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.aside initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`${isFilterOpen ? 'block' : 'hidden'} lg:block lg:w-1/4 space-y-10 lg:sticky lg:top-28 h-fit`}>
                <div className="space-y-4">
                  <h3 className="text-xs font-black tracking-widest uppercase text-slate-400">Search Catalog</h3>
                  <div className="relative group">
                    <input type="text" placeholder="Find a product..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full py-4 pl-12 pr-10 transition-all border outline-none bg-slate-50 dark:bg-brand-surface border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red dark:text-white" />
                    <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400 group-focus-within:text-brand-red" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-6 text-xs font-black tracking-widest uppercase text-slate-400">Categories</h3>
                  <div className="flex flex-col gap-2">
                    {categories.map(cat => (
                      <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-left px-5 py-3 rounded-xl transition-all font-bold text-sm ${selectedCategory === cat ? 'bg-brand-red text-white shadow-xl shadow-brand-red/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}>{cat}</button>
                    ))}
                  </div>
                </div>
                <button onClick={resetFilters} className="flex items-center justify-center w-full gap-2 py-4 text-sm font-bold transition-all border-2 border-dashed rounded-2xl border-slate-200 dark:border-white/10 text-slate-500 hover:text-brand-red hover:border-brand-red">
                  <RotateCcw size={16} /> Reset All Filters
                </button>
              </motion.aside>
            )}
          </AnimatePresence>

          <main className="lg:w-3/4">
            <div className="flex flex-col items-center justify-between gap-6 p-4 mb-8 border border-slate-100 sm:flex-row bg-slate-50/50 dark:bg-white/[0.02] rounded-2xl dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-xs font-black rounded-full bg-brand-red/10 text-brand-red">{filteredAndSortedProducts.length}</div>
                <p className="text-sm font-bold tracking-wider uppercase text-slate-500">Luxury items found</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center p-1 bg-white border border-slate-200 dark:bg-brand-surface rounded-xl dark:border-white/10">
                   <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-brand-red text-white shadow-lg' : 'text-slate-400'}`}><LayoutGrid size={18} /></button>
                   <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-brand-red text-white shadow-lg' : 'text-slate-400'}`}><List size={18} /></button>
                </div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white dark:bg-brand-surface border border-slate-200 dark:border-white/10 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-brand-navy dark:text-white">
                  {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
              <LayoutGroup>
                <AnimatePresence mode="popLayout">
                  {filteredAndSortedProducts.map((product) => {
                    const hasOffer = product.offerPrice && product.offerPrice < product.mrp;
                    const discount = hasOffer ? Math.round(((product.mrp - (product.offerPrice || 0)) / product.mrp) * 100) : 0;
                    const isComparing = compareList.some(p => p.id === product.id);

                    return (
                      <motion.div 
                        layout 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        key={product.id} 
                        className={`group bg-white dark:bg-brand-surface rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-white/10 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-500 flex flex-col ${viewMode === 'list' ? 'md:flex-row' : ''}`}
                      >
                        {/* Image Section */}
                        <div className={`relative overflow-hidden bg-slate-50 dark:bg-black/20 ${viewMode === 'list' ? 'w-full md:w-72 h-72 flex-shrink-0' : 'aspect-square'}`}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="object-cover w-full h-full duration-1000 transition-transform group-hover:scale-110" 
                          />
                          <div className="absolute flex flex-col gap-2 top-6 left-6">
                             <span className="bg-brand-navy/80 backdrop-blur-xl text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
                               {product.brand}
                             </span>
                             {hasOffer && (
                               <span className="self-start px-4 py-2 text-white bg-brand-red rounded-full shadow-lg text-[9px] font-black uppercase tracking-widest">
                                 {discount}% OFF
                               </span>
                             )}
                          </div>
                          
                          {/* Comparison Shortcut (Floating) */}
                          <div className="absolute top-6 right-6">
                             <button 
                                onClick={() => onToggleCompare(product)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border shadow-lg ${
                                  isComparing 
                                  ? 'bg-brand-gold border-brand-gold text-brand-navy scale-110' 
                                  : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy'
                                }`}
                              >
                                <Layers size={18} />
                              </button>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col flex-grow p-8">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1 text-brand-gold">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={10} 
                                  fill={i < product.rating ? "currentColor" : "none"} 
                                  className={i < product.rating ? "" : "text-slate-200 dark:text-white/10"} 
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.category}</span>
                          </div>

                          <h3 
                            onClick={() => onViewDetails(product.id)} 
                            className="mb-2 text-xl font-black leading-tight transition-colors cursor-pointer font-serif text-brand-navy dark:text-white group-hover:text-brand-red line-clamp-1"
                          >
                            {product.name}
                          </h3>

                          <p className="mb-6 text-sm font-medium italic leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                            {product.description}
                          </p>

                          {/* Refined Pricing Section */}
                          <div className="p-5 mt-auto mb-8 border border-slate-100 bg-slate-50 dark:bg-black/20 rounded-3xl dark:border-white/5">
                            <div className="flex items-end justify-between">
                              <div className="flex flex-col">
                                {hasOffer && (
                                  <span className="text-[10px] text-slate-400 line-through font-bold mb-1 tracking-wider">
                                    MRP: ₹{product.mrp.toFixed(2)}
                                  </span>
                                )}
                                <div className="flex items-baseline gap-1">
                                  <span className="text-xs font-black tracking-widest uppercase text-brand-navy dark:text-white mr-1 opacity-60">Price:</span>
                                  <span className="text-sm font-black text-brand-navy dark:text-white">₹</span>
                                  <span className="text-3xl font-black tracking-tighter text-brand-navy dark:text-white">
                                    {(hasOffer ? product.offerPrice : product.mrp)?.toFixed(2).split('.')[0]}
                                  </span>
                                  <span className="text-sm font-bold text-slate-400">.{(hasOffer ? product.offerPrice : product.mrp)?.toFixed(2).split('.')[1]}</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <Check size={16} className="mb-1 text-green-500" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">In Stock</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons Section */}
                          <div className="flex items-center gap-3 mt-auto">
                            <button 
                              onClick={() => onViewDetails(product.id)} 
                              className="flex items-center justify-center flex-1 gap-2 px-4 py-4 text-[10px] font-black tracking-widest uppercase transition-all bg-white border border-slate-200 rounded-2xl dark:bg-brand-surface dark:border-white/10 text-brand-navy dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 group/btn"
                            >
                              Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                            <button 
                              onClick={() => onEnquire(product.name)} 
                              className="flex items-center justify-center flex-1 gap-2 px-4 py-4 text-[10px] font-black tracking-widest text-white transition-all uppercase bg-brand-red rounded-2xl hover:bg-red-700 shadow-xl shadow-brand-red/20"
                            >
                              <MessageSquare size={14} /> Inquire
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </LayoutGroup>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;