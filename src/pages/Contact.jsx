import React, { useState, useEffect } from 'react';
import { Section } from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';

const Contact = ({ prefill = '' }) => {
  const [formStatus, setFormStatus] = useState('idle');
  const [customSubject, setCustomSubject] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Product Specifications',
    message: prefill
  });

  useEffect(() => {
    if (prefill) {
      setFormData(prev => ({ ...prev, message: prefill }));
    }
  }, [prefill]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalSubject = formData.subject === 'Other' ? customSubject : formData.subject;
    console.log({ ...formData, subject: finalSubject });
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <Section id="contact" className="relative pt-10 pb-16 overflow-hidden bg-white dark:bg-black md:pt-16 md:pb-24">
      <SEO 
        title="Contact Kripa Home Solutions | Showroom in Kollam"
        description="Contact Kripa Home Solutions in Kollam for enquiries about modular kitchens, sanitaryware, paints, and building materials. Visit our showroom in Puthoor."
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 grid items-start grid-cols-1 gap-16 lg:grid-cols-2 md:gap-24">
        <div className="space-y-12">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Contact Hub</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-black leading-tight font-serif md:text-7xl text-brand-navy dark:text-white">
              Let's Create <br />
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Something Iconic.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="group">
              <div className="flex items-center gap-4 mb-3 text-xs font-bold tracking-widest uppercase text-brand-navy dark:text-white">
                <div className="flex items-center justify-center w-10 h-10 transition-all rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white"><Phone size={18} /></div>
                Support Line
              </div>
              <p className="text-lg font-bold text-slate-500 dark:text-slate-300">+91 8606 123467</p>
            </div>
            <div className="group">
              <div className="flex items-center gap-4 mb-3 text-xs font-bold tracking-widest uppercase text-brand-navy dark:text-white">
                <div className="flex items-center justify-center w-10 h-10 transition-all rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white"><Mail size={18} /></div>
                Enquiries
              </div>
              <p className="text-lg font-bold text-slate-500 dark:text-slate-300">kripahomesolutionsptr@gmail.com</p>
            </div>
          </div>

          <div className="relative overflow-hidden border h-90 rounded-[3rem] border-slate-200 dark:border-white/10 shadow-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4082.456026641585!2d76.70490057920182!3d9.046306314825179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060f813d779747%3A0xcae7912244aba76e!2sKripa%20Home%20Solutions!5e1!3m2!1sen!2sin!4v1773682080953!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"></div>
          </div>
        </div>

        <div className="relative lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand-red/5 dark:bg-white/[0.03] backdrop-blur-3xl border border-brand-red/20 rounded-[3rem] p-16 text-center">
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 text-white rounded-full bg-brand-red"><CheckCircle size={48} /></div>
                <h3 className="mb-4 text-4xl font-serif font-bold text-brand-navy dark:text-white">Request Sent</h3>
                <button onClick={() => setFormStatus('idle')} className="px-10 py-4 text-xs font-black tracking-widest text-white uppercase bg-brand-navy dark:bg-white dark:text-black rounded-2xl">New Enquiry</button>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="bg-white dark:bg-brand-surface border border-slate-100 dark:border-white/10 p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="ml-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400">Your Name</label>
                      <input required type="text" placeholder="e.g. Rahul Verma" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full font-medium transition-all outline-none px-7 py-5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 focus:border-brand-red dark:text-white placeholder:text-slate-300" />
                    </div>
                    <div className="space-y-3">
                      <label className="ml-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400">Email</label>
                      <input required type="email" placeholder="rahul@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full font-medium transition-all outline-none px-7 py-5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 focus:border-brand-red dark:text-white placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full font-bold transition-all appearance-none outline-none px-7 py-5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 focus:border-brand-red dark:text-white">
                      <option>Product Specifications</option>
                      <option>Bulk Project Quote</option>
                      <option>Showroom Appointment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {formData.subject === 'Other' && (
                    <div className="space-y-3">
                      <label className="ml-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400">Custom Subject</label>
                      <input
                        type="text"
                        placeholder="Enter your subject..."
                        value={customSubject}
                        onChange={(e) => setCustomSubject(e.target.value)}
                        className="w-full font-medium transition-all outline-none px-7 py-5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 focus:border-brand-red dark:text-white placeholder:text-slate-300"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <label className="ml-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400">Project Details</label>
                    <textarea required rows={5} placeholder="Tell us about your requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full font-medium leading-relaxed transition-all resize-none outline-none px-7 py-5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 focus:border-brand-red dark:text-white placeholder:text-slate-300"></textarea>
                  </div>

                  <button disabled={formStatus === 'submitting'} type="submit" className="w-full group relative py-6 bg-brand-red text-white font-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center gap-4 text-sm tracking-[0.2em]">
                    <span>{formStatus === 'submitting' ? 'PROCESSING...' : 'SUBMIT REQUEST'}</span>
                    <Send size={20} />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Contact;