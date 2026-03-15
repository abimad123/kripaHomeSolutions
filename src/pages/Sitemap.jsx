import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Info, ShoppingBag, Mail, Shield, FileText, LayoutGrid, ChevronRight, MapPin, Search, Sparkles } from 'lucide-react';
import SEO from '../components/ui/SEO';

const Sitemap = () => {
  const sections = [
    {
      title: "Main Experience",
      description: "Core sections of our digital platform.",
      icon: <Home className="text-brand-red" size={24} />,
      links: [
        { name: "Home", path: "/", icon: <Home size={14} />, desc: "Luxury home solutions overview" },
        { name: "About Our Legacy", path: "/about", icon: <Info size={14} />, desc: "Since 1995 in Puthoor" },
        { name: "Product Catalog", path: "/products", icon: <ShoppingBag size={14} />, desc: "Browse premium collections" },
        { name: "Contact Support", path: "/contact", icon: <Mail size={14} />, desc: "Get expert assistance" }
      ]
    },
    {
      title: "Product Categories",
      description: "Dive deep into specialized hardware.",
      icon: <LayoutGrid className="text-brand-gold" size={24} />,
      links: [
        { name: "Luxury Sanitaryware", path: "/products?category=Sanitaryware", icon: <ChevronRight size={14} />, desc: "High-end bathroom fittings" },
        { name: "Modular Kitchens", path: "/products?category=Kitchen", icon: <ChevronRight size={14} />, desc: "Bespoke culinary spaces" },
        { name: "Electrical Solutions", path: "/products?category=Electrical", icon: <ChevronRight size={14} />, desc: "Premium switches & lighting" },
        { name: "General Hardware", path: "/products?category=Hardware", icon: <ChevronRight size={14} />, desc: "Locks, handles & accessories" },
        { name: "Paints & Finish", path: "/products?category=Paints", icon: <ChevronRight size={14} />, desc: "Designer wall collection" }
      ]
    },
    {
      title: "Governance & Info",
      description: "Legal and navigational essentials.",
      icon: <Shield className="text-brand-navy dark:text-white" size={24} />,
      links: [
        { name: "Privacy Foundations", path: "/privacy-policy", icon: <Shield size={14} />, desc: "Our data commitment" },
        { name: "Service Agreement", path: "/terms", icon: <FileText size={14} />, desc: "Terms and conditions" },
        { name: "Showroom Location", path: "/contact", icon: <MapPin size={14} />, desc: "Visit us in Puthoor" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark">
      <SEO 
        title="Site Navigator"
        description="A comprehensive guide to all pages and categories on Kripa Home Solutions. Easily navigate through our premium hardware, kitchen, and bathroom collections."
      />
      
      {/* Hero Header */}
      <div className="relative py-32 bg-brand-navy overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(225,29,72,0.15)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,#c2410c_0%,transparent_40%)]"></div>
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white/5 backdrop-blur-3xl rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-2xl"
          >
            <Sparkles className="text-brand-gold" size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-black text-white mb-6 tracking-tighter"
          >
            Site Navigator
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-red text-xs md:text-sm font-black tracking-[0.5em] uppercase"
          >
            Discover Your Dream Home Foundation
          </motion.p>
        </div>
      </div>

      {/* Main Grid */}
      <Section className="py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {sections.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-brand-surface p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {section.icon}
                   </div>
                   <h3 className="text-2xl font-serif font-black text-brand-navy dark:text-white">{section.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-10 px-1">{section.description}</p>
                
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group/link"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 group-hover/link:bg-brand-red group-hover/link:text-white transition-all">
                           {link.icon}
                        </div>
                        <div className="flex flex-col">
                           <span className="text-sm font-black text-brand-navy dark:text-slate-200 group-hover/link:text-brand-red transition-colors uppercase tracking-widest">{link.name}</span>
                           <span className="text-xs text-slate-500 italic mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Luxury Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-16 md:p-24 bg-linear-to-br from-brand-navy via-brand-navy/90 to-black rounded-[4.5rem] text-center text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">Need immediate architectural guidance?</h3>
              <p className="text-slate-400 mb-12 text-lg md:text-xl leading-relaxed">Our experience center in Puthoor is open daily to help you select the perfect hardware for your sanctuary.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-red text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-brand-red/30"
              >
                Connect With Us
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Sitemap;
