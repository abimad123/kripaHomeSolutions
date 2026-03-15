import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import SEO from '../components/ui/SEO';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark">
      <SEO 
        title="Privacy Policy"
        description="Our commitment to your privacy. Read the Kripa Home Solutions privacy policy to understand how we handle your data with the utmost care and security."
      />
      
      {/* Hero Header */}
      <div className="relative py-24 bg-brand-navy overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#e11d48_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#c2410c_0%,transparent_50%)]"></div>
        </div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 mb-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            <Shield className="text-brand-red" size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-white mb-6 tracking-tight"
          >
            Privacy Foundations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-xs md:text-sm font-black tracking-[0.4em] uppercase"
          >
            Commitment to Transparency • Updated {lastUpdated}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Introduction */}
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-white mb-6">Our Data Ethics</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "We treat your data with the same precision and care that we apply to our luxury modular kitchens. Your trust is our most valuable inventory."
            </p>
          </div>

          <div className="space-y-40">
            {/* Policy Grid */}
            <div className="grid gap-12 md:grid-cols-2">
              <PolicyCard 
                icon={<Eye className="text-brand-red" size={24} />}
                title="Information We Collect"
              >
                <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-red shrink-0" /> <span><strong>Identity Data:</strong> First name, last name, or username.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-red shrink-0" /> <span><strong>Contact Data:</strong> Email address and telephone numbers provided via enquiry forms.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-red shrink-0" /> <span><strong>Technical Data:</strong> IP address, browser type, and time zone setting.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-red shrink-0" /> <span><strong>Usage Data:</strong> Information about how you use our website and products.</span></li>
                </ul>
              </PolicyCard>

              <PolicyCard 
                icon={<Server className="text-brand-gold" size={24} />}
                title="How We Use Your Data"
              >
                <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-gold shrink-0" /> <span>To respond to your inquiries regarding our hardware and sanitaryware.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-gold shrink-0" /> <span>To schedule store visits or virtual tours as requested.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-gold shrink-0" /> <span>To improve our website, products/services, and customer relations.</span></li>
                  <li className="flex gap-3"><ChevronRight size={16} className="text-brand-gold shrink-0" /> <span>To manage our relationship with you including notifying you of changes.</span></li>
                </ul>
              </PolicyCard>

              <PolicyCard 
                icon={<Lock className="text-brand-navy dark:text-white" size={24} />}
                title="Data Security"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. 
                  We limit access to your personal data to those employees, agents, and contractors who have a business need to know.
                </p>
              </PolicyCard>

              <PolicyCard 
                icon={<Shield className="text-green-500" size={24} />}
                title="Third-Party Links"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  This website may include links to third-party websites (such as YouTube for video tours and Google Maps for location). 
                  Clicking on those links may allow third parties to collect or share data about you. We encourage you to read their privacy notices.
                </p>
              </PolicyCard>
            </div>

            {/* Detailed Guidelines */}
            <div className="prose dark:prose-invert max-w-none bg-white dark:bg-brand-surface p-12 md:p-20 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-2xl">
              <h3 className="text-4xl font-serif font-black mb-12 text-center text-brand-navy dark:text-white">Detailed Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-16 text-slate-600 dark:text-slate-400">
                <div className="space-y-6">
                  <h4 className="text-brand-navy dark:text-white font-black uppercase tracking-[0.3em] text-xs">A. Data Retention</h4>
                  <p className="text-base leading-relaxed">We only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. As a legacy home solutions provider, we keep historical project inquiry data to provide better service during your future renovations.</p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-brand-navy dark:text-white font-black uppercase tracking-[0.3em] text-xs">B. Your Legal Rights</h4>
                  <p className="text-base leading-relaxed">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of processing of your personal data. If you wish to exercise any of these rights, please contact our concierge team.</p>
                </div>
              </div>
            </div>

            {/* Premium Contact Section */}
            <div className="bg-linear-to-br from-brand-navy to-black p-12 md:p-24 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-8">
                  Security Concierge
                </h3>
                <p className="text-slate-400 max-w-2xl mb-16 text-lg md:text-xl leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, we are here to help. Reach out to us through any of our official channels.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                  <ContactInfoBox icon={<Mail size={24} />} label="Priority Email" value="kripahomesolutionsptr@gmail.com" />
                  <ContactInfoBox icon={<Phone size={24} />} label="Concierge Line" value="+91 8606 123467" />
                  <ContactInfoBox icon={<MapPin size={24} />} label="Experience Center" value="Puthoor, Kollam" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const PolicyCard = ({ icon, title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-brand-surface p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ContactInfoBox = ({ icon, label, value }) => (
  <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 hover:border-brand-red/30 transition-all group">
    <div className="w-14 h-14 bg-brand-red/20 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-2">{label}</p>
    <p className="font-bold text-white text-sm md:text-base">{value}</p>
  </div>
);

export default PrivacyPolicy;