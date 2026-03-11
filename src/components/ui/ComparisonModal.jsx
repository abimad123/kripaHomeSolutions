import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Check, AlertCircle, Trash2 } from 'lucide-react';

const ComparisonModal = ({ isOpen, onClose, products, onRemove }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 backdrop-blur-md bg-brand-navy/80"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex flex-col w-full h-full overflow-hidden shadow-2xl bg-white dark:bg-brand-surface md:h-auto md:max-h-[90vh] md:max-w-6xl md:rounded-[3rem]"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b bg-white dark:bg-brand-surface md:p-8 border-slate-100 dark:border-white/5">
              <div>
                <h2 className="mb-1 text-2xl italic font-black leading-none font-serif md:text-3xl text-brand-navy dark:text-white">Comparison Hub</h2>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Comparing {products.length} Premium Items</p>
              </div>
              <button 
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-slate-100 dark:bg-white/5 md:w-12 md:h-12 text-slate-500 hover:text-brand-red"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area with Responsive Table */}
            <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full border-collapse table-fixed">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-black/20">
                      {/* Sticky Header Column */}
                      <th className="sticky left-0 z-10 w-32 p-4 text-left border-r bg-slate-50 dark:bg-brand-surface md:w-48 md:p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-slate-100 dark:border-white/5 shadow-[4px_0_15px_-5px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_15px_-5px_rgba(0,0,0,0.5)]">
                        Specifications
                      </th>
                      {products.map(product => (
                        <th key={product.id} className="min-w-[200px] md:min-w-[280px] p-4 md:p-8 text-left align-top snap-start">
                          <div className="relative group">
                            <div className="overflow-hidden border shadow-inner aspect-square rounded-2xl md:rounded-[2rem] mb-4 bg-slate-100 dark:bg-brand-dark border-slate-200 dark:border-white/5">
                              <img src={product.image} className="object-cover w-full h-full" alt={product.name} />
                            </div>
                            <button 
                              onClick={() => onRemove(product)}
                              className="absolute z-10 flex items-center justify-center w-8 h-8 text-white transition-transform rounded-full shadow-lg -top-2 -right-2 bg-brand-red hover:scale-110"
                              title="Remove"
                            >
                              <Trash2 size={14} />
                            </button>
                            <h3 className="mb-1 text-sm font-black leading-tight md:text-base text-brand-navy dark:text-white line-clamp-2">{product.name}</h3>
                            <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{product.brand}</p>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {/* Price Row */}
                    <tr className="transition-colors group hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                      <td className="sticky left-0 z-10 p-4 bg-white border-r dark:bg-brand-surface md:p-6 font-black text-[9px] md:text-xs uppercase tracking-widest text-slate-400 border-slate-100 dark:border-white/5 shadow-[4px_0_15px_-5px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_15px_-5px_rgba(0,0,0,0.5)]">
                        Pricing
                      </td>
                      {products.map(p => (
                        <td key={p.id} className="p-4 md:p-8">
                          <div className="flex flex-col">
                            {p.offerPrice && <span className="text-[10px] md:text-xs text-slate-400 line-through font-bold">₹{p.mrp.toFixed(2)}</span>}
                            <span className="text-xl font-black md:text-2xl text-brand-navy dark:text-white">
                               ₹{(p.offerPrice || p.mrp).toFixed(2)}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Rating Row */}
                    <tr className="transition-colors group hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                      <td className="sticky left-0 z-10 p-4 bg-white border-r dark:bg-brand-surface md:p-6 font-black text-[9px] md:text-xs uppercase tracking-widest text-slate-400 border-slate-100 dark:border-white/5 shadow-[4px_0_15px_-5px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_15px_-5px_rgba(0,0,0,0.5)]">
                        Rating
                      </td>
                      {products.map(p => (
                        <td key={p.id} className="p-4 md:p-8">
                          <div className="flex items-center gap-1.5 text-brand-gold">
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm font-black md:text-base">{p.rating}.0</span>
                            <span className="text-[10px] text-slate-400 hidden sm:inline">/ 5.0</span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Category Row */}
                    <tr className="transition-colors group hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                      <td className="sticky left-0 z-10 p-4 bg-white border-r dark:bg-brand-surface md:p-6 font-black text-[9px] md:text-xs uppercase tracking-widest text-slate-400 border-slate-100 dark:border-white/5 shadow-[4px_0_15px_-5px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_15px_-5px_rgba(0,0,0,0.5)]">
                        Category
                      </td>
                      {products.map(p => (
                        <td key={p.id} className="p-4 md:p-8">
                          <span className="inline-block bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
                            {p.category}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Features Row */}
                    <tr className="transition-colors group hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                      <td className="sticky left-0 z-10 p-4 align-top bg-white border-r dark:bg-brand-surface md:p-6 font-black text-[9px] md:text-xs uppercase tracking-widest text-slate-400 border-slate-100 dark:border-white/5 shadow-[4px_0_15px_-5px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_15px_-5px_rgba(0,0,0,0.5)]">
                        Key Features
                      </td>
                      {products.map(p => (
                        <td key={p.id} className="p-4 align-top md:p-8">
                          <ul className="space-y-3">
                            {p.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                                <div className="flex items-center justify-center flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-brand-red/10">
                                  <Check size={8} className="text-brand-red" strokeWidth={4} />
                                </div>
                                <span className="line-clamp-2">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col items-center justify-between gap-6 p-6 border-t z-20 md:p-8 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 md:flex-row">
               {products.length < 2 ? (
                 <div className="flex items-center gap-3 px-4 py-2.5 border rounded-2xl text-brand-gold bg-brand-gold/5 border-brand-gold/10">
                   <AlertCircle size={18} />
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Select at least 2 items to compare properly</span>
                 </div>
               ) : (
                 <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500">
                   Swipe to compare more <Check size={14} className="text-green-500" />
                 </div>
               )}
               
               <div className="flex items-center w-full gap-4 md:w-auto">
                 <button 
                  onClick={() => {
                    products.forEach(p => onRemove(p));
                    onClose();
                  }}
                  className="flex-1 px-6 py-4 text-[10px] font-black tracking-widest transition-all uppercase md:flex-none bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-white rounded-2xl hover:bg-slate-300 dark:hover:bg-white/10"
                 >
                   Clear Comparison
                 </button>
                 <button 
                  onClick={onClose}
                  className="flex-1 px-10 py-4 text-[10px] font-black tracking-widest text-white transition-all uppercase shadow-xl md:flex-none bg-brand-navy dark:bg-white dark:text-brand-navy rounded-2xl hover:scale-105"
                 >
                   Back to Shopping
                 </button>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComparisonModal;