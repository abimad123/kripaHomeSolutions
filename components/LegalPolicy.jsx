import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, MapPin, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark">
      {/* Hero / Header Section */}
      <div className="relative py-20 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-red/30 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-medium tracking-widest uppercase"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to <strong>Kripa Home Solutions</strong>. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we look after your personal data when you visit our website (regardless of where you visit it from) 
              and tells you about your privacy rights and how the law protects you.
            </p>
          </div>

          {/* Policy Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            <PolicyCard 
              icon={<Eye className="text-brand-red" size={24} />}
              title="Information We Collect"
            >
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li><strong>Identity Data:</strong> First name, last name, or username.</li>
                <li><strong>Contact Data:</strong> Email address and telephone numbers provided via enquiry forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and operating system.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
              </ul>
            </PolicyCard>

            <PolicyCard 
              icon={<Server className="text-brand-gold" size={24} />}
              title="How We Use Your Data"
            >
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li>To respond to your inquiries regarding our hardware and sanitaryware products.</li>
                <li>To schedule store visits or virtual tours as requested.</li>
                <li>To improve our website, products/services, and customer relationships.</li>
                <li>To manage our relationship with you (e.g., notifying you about changes to our terms).</li>
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
                This website may include links to third-party websites (such as <strong>YouTube</strong> for video tours and <strong>Google Maps</strong> for location). 
                Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </PolicyCard>
          </div>

          {/* Contact Section */}
          <div className="bg-white dark:bg-brand-surface p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-white mb-6">
              Contact Us
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <ContactItem icon={<Mail size={18} />} label="Email" value="support@kripahome.com" />
              <ContactItem icon={<Phone size={18} />} label="Phone" value="+91 9846 123 456" />
              <ContactItem icon={<MapPin size={18} />} label="Address" value="Kripa Arcade, Kochi, Kerala" />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

// Helper Components for cleaner code
const PolicyCard = ({ icon, title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-brand-surface p-6 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-navy dark:text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
    <div className="text-brand-red mt-1">{icon}</div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="font-bold text-brand-navy dark:text-white">{value}</p>
    </div>
  </div>
);

export default PrivacyPolicy;