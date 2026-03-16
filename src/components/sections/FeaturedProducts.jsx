import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Layers, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { catalogProducts, productCategories } from '../../data/productData';

const allProducts = catalogProducts;
const categories = productCategories;

const FeaturedProducts = ({ onViewDetails, onEnquire, compareList, onToggleCompare }) => {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = (activeTab === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeTab)).slice(0, 4);

  return (
    <Section id="products" className="bg-white dark:bg-black" darkBg>
      <div className="flex flex-col items-end justify-between gap-8 px-2 mb-16 md:flex-row">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-10 h-px bg-brand-red"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Shop Now</span>
          </div>
          <h2 className="text-4xl font-black leading-tight font-serif md:text-6xl text-brand-navy dark:text-white">
            Trending <br />
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Products</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              aria-label={`Filter products by ${cat}`}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeTab === cat
                ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/30'
                : 'bg-transparent text-slate-500 border-slate-200 dark:border-white/10 hover:border-brand-red hover:text-brand-red'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const hasOffer = product.offerPrice && product.offerPrice < product.mrp;
            const discount = hasOffer ? Math.round(((product.mrp - (product.offerPrice || 0)) / product.mrp) * 100) : 0;
            const isComparing = compareList.some(p => p.id === product.id);

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group relative bg-white dark:bg-brand-surface rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.25)] dark:shadow-md dark:hover:shadow-2xl dark:hover:shadow-brand-red/10 hover:-translate-y-2 transition-all duration-500 border border-slate-200/80 dark:border-white/10 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-72 bg-slate-100 dark:bg-brand-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="400"
                    height="400"
                    loading="lazy"
                    className="object-cover w-full h-full duration-700 transition-transform group-hover:scale-110"
                  />

                  <div className="absolute flex flex-col gap-2 top-6 left-6">
                    <span className="bg-brand-navy/80 backdrop-blur-xl text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-wider border border-white/10">
                      {product.brand}
                    </span>
                    {hasOffer && (
                      <span className="px-4 py-2 text-white bg-brand-red text-[9px] font-black uppercase rounded-full shadow-lg tracking-wider">
                        {discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="absolute flex flex-col gap-3 top-6 right-6">
                    <button 
                      aria-label="Add to wishlist"
                      className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full shadow-xl opacity-0 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-brand-red hover:border-brand-red group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0"
                    >
                      <Heart size={16} />
                    </button>
                    <button
                      onClick={() => onToggleCompare(product)}
                      aria-label={isComparing ? "Remove from comparison" : "Add to comparison"}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border shadow-xl opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 ${isComparing
                        ? 'bg-brand-gold border-brand-gold text-brand-navy scale-110'
                        : 'bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy'
                        }`}
                    >
                      <Layers size={16} />
                    </button>
                  </div>

                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 z-20">
                    <button
                      onClick={() => navigate(`/products/${product.id}`)}
                      aria-label={`View details for ${product.name}`}
                      className="flex items-center justify-center transition-transform rounded-full shadow-2xl pointer-events-auto w-14 h-14 bg-brand-red/90 hover:bg-brand-red backdrop-blur-md text-white border border-red-500/50 shadow-brand-red/30 hover:scale-110"
                    >
                      <Eye size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* RESTORED: Info Details Section */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-1 mb-2 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "" : "text-slate-200 dark:text-white/10"} />
                    ))}
                  </div>

                  <h3
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mb-1 text-lg font-black leading-tight transition-colors cursor-pointer font-serif text-brand-navy dark:text-white group-hover:text-brand-red line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <p className="mb-4 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between pt-4 mt-auto border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-col">
                      {hasOffer && (
                        <span className="text-[10px] text-slate-400 line-through font-bold">₹{product.mrp.toFixed(2)}</span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-brand-navy dark:text-white">
                          ₹{(hasOffer ? product.offerPrice : product.mrp)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onEnquire(product.name)}
                      aria-label={`Enquire about ${product.name}`}
                      className="flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest text-white uppercase transition-all bg-brand-red rounded-xl hover:bg-red-700 shadow-lg shadow-brand-red/20"
                    >
                      <MessageSquare size={12} /> Enquire
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <button 
          onClick={() => navigate('/products')}
          aria-label="View all products in catalog"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-brand-red text-brand-red font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all duration-500 hover:bg-brand-red hover:text-white hover:shadow-[0_20px_40px_rgba(235,33,46,0.3)] hover:-translate-y-1 active:scale-95"
        >
          Explore Full Catalog
          <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
          
          {/* Subtle glow effect behind button on hover */}
          <div className="absolute inset-0 transition-opacity opacity-0 rounded-2xl bg-brand-red/20 blur-xl -z-10 group-hover:opacity-100"></div>
        </button>
      </motion.div>
    </Section>
  );
};

export default FeaturedProducts;