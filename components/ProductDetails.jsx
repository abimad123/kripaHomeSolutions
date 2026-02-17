import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, MessageSquare, ArrowLeft, Star, ShieldCheck, Truck, Share2, Link as LinkIcon, Layers, Info } from 'lucide-react';
import { Section } from './ui/Section';

// Data reused for demonstration; in a real app this would be in a shared store or API
const catalogProducts = [
  { 
    id: '1', name: 'Royal Luxury Emulsion', brand: 'Asian Paints', category: 'Paints', mrp: 65, offerPrice: 45, 
    image: 'https://images.unsplash.com/photo-1562259920-47afc305f369?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Super-premium interior wall finish for a sophisticated look. This emulsion provides a rich, smooth finish with unparalleled durability and stain resistance.',
    features: ['Eco-friendly Low VOC', 'Rich Matte Finish', 'Highly Durable & Washable', 'Teflon Surface Protector']
  },
  { 
    id: '2', name: 'Smart Fingerprint Lock v3', brand: 'Dorset', category: 'Hardware', mrp: 245, offerPrice: 185, 
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Cutting-edge biometric security for modern homes. Features the latest semiconductor sensor for 0.5s rapid recognition.',
    features: ['5-way unlocking', 'Anti-theft Alarm', 'Emergency USB Power', 'Built-in Doorbell']
  },
  { 
    id: '3', name: 'Matte Black High-Neck Faucet', brand: 'Jaquar', category: 'Sanitaryware', mrp: 165, offerPrice: 125, 
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Architectural series bathroom fitting with water-saving tech. The matte black finish is electroplated for extreme scratch resistance.',
    features: ['Corrosion Resistant Brass', 'Soft Flow Aerator', '7-Year On-site Warranty', 'Eco-Flow Technology']
  },
  { 
    id: '4', name: 'Magic Corner Unit', brand: 'Hettich', category: 'Kitchen', mrp: 410, offerPrice: 320, 
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Maximum storage efficiency for modular kitchen corners. Allows you to utilize the blind corners of your cabinets fully.',
    features: ['Soft-close mechanism', 'Chrome Anti-slip Baskets', 'Heavy 40kg load capacity', 'Left/Right reversible']
  },
  { 
    id: '5', name: 'Designer Brass Handle', brand: 'Hafele', category: 'Hardware', mrp: 55, offerPrice: 35, 
    image: 'https://images.unsplash.com/photo-1617104424032-b9bd6972d0e5?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Handcrafted solid brass handle for premium doors. An antique finish that ages beautifully over time.',
    features: ['Solid Forged Brass', 'Elegant Patina Finish', 'Easy Mortise Installation', 'Ergonomic Grip']
  },
  { 
    id: '6', name: 'Table Top Ceramic Basin', brand: 'Cera', category: 'Sanitaryware', mrp: 125, offerPrice: 95, 
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Contemporary oval basin for luxury washrooms. Fired at 1200 degrees for high-strength ceramic quality.',
    features: ['Stain Resistant Glaze', 'High Gloss Finish', 'Sleek Italian Design', 'Compatible with Tall Faucets']
  },
  { 
    id: '7', name: 'Weather Defense Exterior', brand: 'Berger', category: 'Paints', mrp: 85, offerPrice: 65, 
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Advanced rain-protection formula for exterior walls. Includes Silicon additives for superior water repellency.',
    features: ['Anti-algae Technology', 'Heat Reflective Surfaces', 'Dust Guard Formula', '10-Year Warranty']
  },
  { 
    id: '8', name: 'Lauritz Smart Switch', brand: 'L&T', category: 'Electrical', mrp: 25, offerPrice: 15, 
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=600', 
    rating: 4, description: 'Wi-Fi enabled smart switches for home automation. Control your lights from anywhere using your smartphone.',
    features: ['Voice Control Ready', 'App Integration', 'Modular Design', 'Retrofit Compatible']
  },
  { 
    id: '9', name: 'Ultra-Quiet BLDC Fan', brand: 'Havells', category: 'Electrical', mrp: 105, offerPrice: 75, 
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=600', 
    rating: 5, description: 'Energy-saving fan with silent operation and remote. Saves up to 60% electricity compared to normal induction fans.',
    features: ['High Torque BLDC Motor', 'Remote Control Included', 'Timer & Sleep Mode', '5-Star BEE Rating']
  }
];

const ProductDetails = ({ productId, onEnquire, compareList, onToggleCompare }) => {
  const [copied, setCopied] = useState(false);
  
  const product = useMemo(() => 
    catalogProducts.find(p => p.id === productId), 
  [productId]);

  if (!product) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-black font-serif">Product Not Found</h2>
          <button 
            onClick={() => window.location.hash = '#products'}
            className="flex items-center gap-2 mx-auto font-bold text-brand-red hover:underline"
          >
            <ArrowLeft size={18} /> Back to Catalog
          </button>
        </div>
      </Section>
    );
  }

  const hasOffer = product.offerPrice && product.offerPrice < product.mrp;
  const discount = hasOffer ? Math.round(((product.mrp - (product.offerPrice || 0)) / product.mrp) * 100) : 0;
  const savings = hasOffer ? product.mrp - (product.offerPrice || 0) : 0;
  const isComparing = compareList.some(p => p.id === product.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this ${product.name} from Kripa Home Solutions!`);

  return (
    <div className="pb-16 bg-white dark:bg-brand-dark">
      {/* Compact Breadcrumb */}
      <div className="py-3 border-b bg-slate-50 dark:bg-brand-surface border-slate-200 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#home" className="flex items-center gap-1 transition-colors hover:text-brand-red">
              <Home size={12} />
            </a>
            <ChevronRight size={12} className="text-slate-300" />
            <a href="#products" className="transition-colors hover:text-brand-red">Catalog</a>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="truncate max-w-[200px] text-brand-navy dark:text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <Section className="pt-8 md:pt-12">
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          
          {/* Refined Image Side (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4 lg:col-span-5"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/10 shadow-xl relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
              {hasOffer && (
                <div className="absolute flex flex-col items-center justify-center w-14 h-14 text-white transform border-2 border-white rounded-full shadow-xl top-6 left-6 bg-brand-red -rotate-12">
                  <span className="text-lg font-black leading-none">{discount}%</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest">OFF</span>
                </div>
              )}
              <button 
                onClick={() => onToggleCompare(product)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border shadow-lg ${
                  isComparing 
                  ? 'bg-brand-gold border-brand-gold text-brand-navy scale-110' 
                  : 'bg-white/30 backdrop-blur-md border-white/40 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy'
                }`}
              >
                <Layers size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50 dark:bg-brand-surface border-slate-100 dark:border-white/5">
                <ShieldCheck size={20} className="flex-shrink-0 text-brand-red" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Authentic</p>
                  <p className="text-xs font-bold text-brand-navy dark:text-white">Authorized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50 dark:bg-brand-surface border-slate-100 dark:border-white/5">
                <Truck size={20} className="flex-shrink-0 text-brand-gold" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Logistics</p>
                  <p className="text-xs font-bold text-brand-navy dark:text-white">Fast Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Optimized Product Info Side (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-brand-navy text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.category}
                </span>
                <span className="text-brand-gold font-black uppercase tracking-widest text-[10px]">• {product.brand}</span>
              </div>
              
              <h1 className="mb-4 text-3xl font-black leading-tight font-serif md:text-5xl text-brand-navy dark:text-white">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "" : "text-slate-200 dark:text-white/10"} />
                  ))}
                </div>
                <span className="w-px h-4 bg-slate-200 dark:bg-white/10"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Premium Series</span>
              </div>
            </div>

            <div className="mb-8 space-y-6">
              <div className="relative p-6 overflow-hidden border rounded-3xl bg-slate-50 dark:bg-brand-surface border-slate-100 dark:border-white/5">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Info size={40} />
                </div>
                <h3 className="text-[9px] font-black text-brand-red uppercase tracking-[0.2em] mb-3">Professional Insight</h3>
                <p className="text-base font-medium italic leading-relaxed text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Core Specifications</h3>
                <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 font-bold text-xs group">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Primary Actions (Fixed to bottom or prominent) */}
            <div className="pt-8 mt-auto border-t border-slate-100 dark:border-white/5">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center items-end">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Showroom Price</p>
                  <div className="flex flex-col">
                    {hasOffer && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold line-through text-slate-400">₹{product.mrp.toFixed(2)}</span>
                        <span className="text-brand-red text-[10px] font-black uppercase tracking-tighter bg-brand-red/5 px-2 py-0.5 rounded-lg">
                           Save ₹{savings.toFixed(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black tracking-tighter md:text-5xl text-brand-navy dark:text-white">
                        ₹{(hasOffer ? product.offerPrice : product.mrp)?.toFixed(2).split('.')[0]}
                      </span>
                      <span className="text-lg font-bold text-slate-400">.{(hasOffer ? product.offerPrice : product.mrp)?.toFixed(2).split('.')[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-full gap-3 sm:w-auto">
                   {/* Share Button (Compact) */}
                   <div className="relative group/share">
                     <button className="flex items-center justify-center w-12 h-12 transition-all border border-transparent rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-brand-red hover:border-brand-red/20">
                        <Share2 size={20} />
                     </button>
                     <div className="absolute right-0 z-30 flex gap-2 p-2 mb-4 transition-all origin-bottom-right bg-white border shadow-2xl scale-0 bottom-full group-hover/share:scale-100 dark:bg-brand-surface border-slate-200 dark:border-white/10 rounded-2xl">
                        <button onClick={handleCopyLink} className="p-2 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-white"><LinkIcon size={16} /></button>
                        <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" className="p-2 text-green-500 transition-colors hover:bg-green-50 rounded-xl"><MessageSquare size={16} /></a>
                     </div>
                   </div>

                   <button 
                    onClick={() => onEnquire(product.name)}
                    className="flex-1 sm:flex-none px-12 h-14 bg-brand-red text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-brand-red/20 hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                   >
                    <MessageSquare size={18} /> ENQUIRE
                   </button>
                </div>
              </div>
              
              <p className="mt-6 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
                * Prices are indicative and may vary based on stock and configuration at store.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ProductDetails;