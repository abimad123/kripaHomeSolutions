import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, AlertCircle, HelpCircle, Mail, Phone, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/ui/SEO';

const TermsOfService = () => {
  const lastUpdated = "March 14, 2026";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark">
      <SEO 
        title="Terms of Service"
        description="Review the terms and conditions for using Kripa Home Solutions' website and services. Understanding our mutual agreement for home construction and decor solutions."
      />
      
      {/* Hero Header */}
      <div className="relative py-24 bg-brand-navy overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#c2410c_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#e11d48_0%,transparent_50%)]"></div>
        </div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 mb-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            <Scale className="text-brand-gold" size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-white mb-6 tracking-tight"
          >
            Digital Agreement
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-xs md:text-sm font-black tracking-[0.4em] uppercase"
          >
            Terms of Interaction • Updated {lastUpdated}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-white mb-6">Service Transparency</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "Our terms are built on the same foundation as our structures: integrity, clarity, and uncompromising quality."
            </p>
          </div>

          <div className="space-y-40">
            <div className="grid gap-12 md:grid-cols-2">
              <TermsCard 
                icon={<FileText className="text-brand-red" size={24} />}
                title="1. Scope of Use"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Permission is granted to temporarily view and interact with the materials on Kripa Home Solutions' website for personal, non-commercial transitory browsing only.
                </p>
                <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> No commercial mirroring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Respect intellectual property</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Digital integrity priority</li>
                </ul>
              </TermsCard>

              <TermsCard 
                icon={<Scale className="text-brand-gold" size={24} />}
                title="2. Service Warranty"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  The materials on our website are provided on an 'as is' basis. While we strive for absolute accuracy in our product catalog, discrepancies may occur due to manufacturer updates.
                </p>
                <div className="p-4 bg-orange-50 dark:bg-orange-500/5 border border-orange-100 dark:border-orange-500/20 rounded-2xl">
                   <p className="text-[10px] text-orange-700 dark:text-orange-300 font-bold uppercase">Important Notice:</p>
                   <p className="text-xs text-orange-600 dark:text-orange-400">Always verify final specifications with our in-store experts before purchase.</p>
                </div>
              </TermsCard>

              <TermsCard 
                icon={<Gavel className="text-brand-navy dark:text-white" size={24} />}
                title="3. User Liability"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  In no event shall Kripa Home Solutions or its authorized partners be liable for any damages arising out of the use or inability to use the digital materials provided on this platform.
                </p>
              </TermsCard>

              <TermsCard 
                icon={<AlertCircle className="text-orange-500" size={24} />}
                title="4. Modifications"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Kripa Home Solutions may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms.
                </p>
              </TermsCard>
            </div>

            {/* Premium Support Box */}
            <div className="bg-linear-to-br from-brand-navy to-black p-12 md:p-24 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-8">
                  Concierge Support
                </h3>
                <p className="text-slate-400 max-w-2xl mb-16 text-lg md:text-xl leading-relaxed">
                  Have questions about our service terms? Our legal and support teams are here to provide full clarity.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                   <SupportBox icon={<Mail size={24} />} label="Inquiry Desk" value="kripahomesolutionsptr@gmail.com" />
                   <SupportBox icon={<Phone size={24} />} label="Hotline" value="+91 8606 123467" />
                   <SupportBox icon={<MapPin size={24} />} label="Showroom" value="Puthoor, Kollam" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const TermsCard = ({ icon, title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-brand-surface p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-white uppercase tracking-tight">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const SupportBox = ({ icon, label, value }) => (
  <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-brand-gold/30 transition-all group">
    <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-2">{label}</p>
    <p className="font-bold text-white text-sm md:text-base">{value}</p>
  </div>
);

export default TermsOfService;
