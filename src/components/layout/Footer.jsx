import React from 'react';
import { MapPin, Phone, Mail, Home, ArrowUp, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative pt-24 pb-12 overflow-hidden bg-black text-slate-400">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-red rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px]"
        />
      </div>

      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-1 opacity-50 bg-linear-to-r from-transparent via-brand-red to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-16 mb-20 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Identity */}
          <div className="space-y-10">
                      <a  href="#home"
  onClick={(e) => handleLinkClick(e, '#home')}
  className="flex items-center gap-3 cursor-pointer group"> 
  <div className="relative flex flex-col items-center">
    <img
      src="/Kripalogo.png" 
      alt="Kripa Home Solutions"
      className="h-20 w-auto transition-transform group-hover:scale-105"
    />
  </div>
</a>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Redefining luxury home experiences since 1995. We bring world-class hardware, paints, and kitchen solutions to your doorstep.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: <Facebook size={18} />, color: 'hover:text-blue-500 hover:shadow-blue-500/20' },
                 { icon: <Instagram size={18} />, color: 'hover:text-pink-500 hover:shadow-pink-500/20' },
                 { icon: <Youtube size={18} />, color: 'hover:text-red-500 hover:shadow-red-500/20' },
                 { icon: <Twitter size={18} />, color: 'hover:text-sky-400 hover:shadow-sky-400/20' }
               ].map((social, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5, scale: 1.1 }}
                   className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm group ${social.color} hover:bg-white/10 hover:border-white/20 hover:shadow-xl`}
                 >
                   {social.icon}
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="relative inline-block mb-8 text-lg font-bold text-white font-serif">
              Quick Navigation
              <span className="absolute left-0 w-8 h-1 rounded-full -bottom-2 bg-brand-red"></span>
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Showroom Tour', 'Trending Products', 'Brand Partners', 'Expert Video Series', 'Customer Stories', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 transition-all hover:text-brand-gold group">
                    <span className="w-0 h-px transition-all bg-brand-gold group-hover:w-4"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="relative inline-block mb-8 text-lg font-bold text-white font-serif">
              Get In Touch
              <span className="absolute left-0 w-8 h-1 rounded-full -bottom-2 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 transition-all cursor-pointer group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all rounded-lg bg-white/5 group-hover:bg-brand-red/20 group-hover:text-brand-red">
                  <MapPin size={20} />
                </div>
                <span className="leading-relaxed transition-colors group-hover:text-white">
                  123, Kripa Arcade, MG Road,<br/>Kochi, Kerala 682001
                </span>
              </li>
              <li className="flex items-center gap-4 transition-all cursor-pointer group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all rounded-lg bg-white/5 group-hover:bg-brand-red/20 group-hover:text-brand-red">
                  <Phone size={20} />
                </div>
                <span className="transition-colors group-hover:text-white">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 transition-all cursor-pointer group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all rounded-lg bg-white/5 group-hover:bg-brand-red/20 group-hover:text-brand-red">
                  <Mail size={20} />
                </div>
                <span className="transition-colors group-hover:text-white">hello@kripahome.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="relative inline-block mb-8 text-lg font-bold text-white font-serif">
              Stay Updated
              <span className="absolute left-0 w-8 h-1 rounded-full -bottom-2 bg-brand-red"></span>
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              Join 5,000+ homeowners receiving our weekly interior trends and offers.
            </p>
            <div className="space-y-3">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-5 py-4 text-sm text-white transition-all border outline-none bg-white/5 border-white/10 rounded-2xl placeholder-slate-600 focus:border-brand-red/50 focus:bg-white/10 backdrop-blur-md"
                />
                <button className="absolute px-6 text-xs font-bold text-white transition-all uppercase rounded-xl right-2 top-2 bottom-2 bg-brand-red hover:bg-red-600 shadow-lg shadow-brand-red/20">
                  Join
                </button>
              </div>
              <p className="text-[10px] text-slate-600 px-2 italic">
                * No spam, only premium home inspiration.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-8 pt-12 border-t md:flex-row border-white/5">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-700">© 2026 Kripa Home Solutions</p>
            <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#privacy-policy" className="hover:text-brand-red transition-colors">
    Privacy Policy
  </a>
              <a href="#" className="transition-colors hover:text-brand-gold">Terms</a>
              <a href="#" className="transition-colors hover:text-brand-gold">Sitemap</a>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-12 h-12 transition-all border rounded-full shadow-lg border-white group-hover:border-brand-gold group-hover:text-brand-gold">
              <ArrowUp size={20} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white group-hover:text-brand-gold transition-colors">Top</span>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;