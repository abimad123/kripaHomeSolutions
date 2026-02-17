import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { History, Target, Users, Award, ShieldCheck, Gem, Store, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-brand-dark">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Kripa Arcade Interior" 
            className="object-cover w-full h-full grayscale opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-brand-dark via-transparent to-white dark:to-brand-dark"></div>
        </div>

        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-brand-red"></div>
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs">Our Heritage</span>
            <div className="w-12 h-px bg-brand-red"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif font-black text-brand-navy dark:text-white mb-6 leading-[0.9]"
          >
            LEGACY OF <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">EXCELLENCE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg font-medium italic md:text-xl text-slate-600 dark:text-slate-400"
          >
            "Crafting luxury home experiences through quality hardware, curated designs, and trust since 1995."
          </motion.p>
        </div>
      </section>

      {/* Our Story Split Section */}
      <Section className="py-24">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-brand-surface">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop" 
                alt="Construction History" 
                className="w-full aspect-4/5 object-cover"
              />
            </div>
            {/* Year Badge */}
            <div className="absolute z-20 p-12 text-center text-white transform rotate-6 shadow-2xl -bottom-10 -right-10 bg-brand-red rounded-[3rem]">
              <span className="block font-serif text-5xl font-black">28+</span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Trust</span>
            </div>
            {/* Background Decorative Frame */}
            <div className="absolute w-full h-full border-2 -top-10 -left-10 border-brand-gold/30 rounded-[3.5rem] -z-10"></div>
          </motion.div>
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <History className="text-brand-red" size={24} />
                <h2 className="text-4xl font-serif font-black text-brand-navy dark:text-white">The Kripa Journey</h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Founded in 1995, Kripa Home Solutions began as a humble hardware store with a singular vision: to provide Kerala with the highest quality building materials available in the global market.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Today, Kripa Arcade stands as a landmark of modern retail, spanning thousands of square feet of curated showroom space. We have evolved from a local supplier to a state-of-the-art solution provider for architects, builders, and discerning homeowners.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t dark:border-white/10">
               <div>
                  <h4 className="mb-1 text-3xl font-black text-brand-red">150+</h4>
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Major Projects Completed</p>
               </div>
               <div>
                  <h4 className="mb-1 text-3xl font-black text-brand-gold">5000+</h4>
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Satisfied Homeowners</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision Cards */}
      <section className="py-32 bg-slate-50 dark:bg-black/50 border-y dark:border-white/5">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-serif font-black md:text-5xl text-brand-navy dark:text-white">Driven by Purpose</h2>
            <div className="w-24 h-1 mx-auto bg-brand-red"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-brand-surface p-12 rounded-[3.5rem] shadow-xl border border-slate-100 dark:border-white/5 group"
            >
               <div className="flex items-center justify-center w-16 h-16 mb-8 transition-all shadow-lg bg-brand-red/10 text-brand-red rounded-2xl group-hover:bg-brand-red group-hover:text-white">
                 <Target size={32} />
               </div>
               <h3 className="mb-6 text-3xl font-serif font-bold text-brand-navy dark:text-white">Our Mission</h3>
               <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                 To empower builders and homeowners by providing an unparalleled range of premium hardware, kitchenware, and painting solutions that combine world-class technology with timeless aesthetics.
               </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-brand-surface p-12 rounded-[3.5rem] shadow-xl border border-slate-100 dark:border-white/5 group"
            >
               <div className="flex items-center justify-center w-16 h-16 mb-8 transition-all shadow-lg bg-brand-gold/10 text-brand-gold rounded-2xl group-hover:bg-brand-gold group-hover:text-brand-navy">
                 <Globe size={32} />
               </div>
               <h3 className="mb-6 text-3xl font-serif font-bold text-brand-navy dark:text-white">Our Vision</h3>
               <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                 To become the benchmark for luxury home solutions in India, where every product sold at Kripa is synonymous with durability, innovation, and superior craftsmanship.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <Section className="py-32">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
           <div className="lg:w-1/3">
              <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs">Our Ethos</span>
              <h2 className="mt-4 mb-8 text-5xl font-serif font-black text-brand-navy dark:text-white">What We Stand For</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Our values are the foundation of every relationship we build with our customers and partners.</p>
           </div>
           
           <div className="grid grid-cols-1 gap-8 lg:w-2/3 sm:grid-cols-2">
             {[
               { icon: <ShieldCheck />, title: 'Unyielding Integrity', desc: 'Honest pricing and genuine products are our core promise.' },
               { icon: <Gem />, title: 'Curated Quality', desc: 'We only house brands that meet our rigorous standards of excellence.' },
               { icon: <Users />, title: 'Customer First', desc: 'Personalized consultation is at the heart of our service.' },
               { icon: <Award />, title: 'Industry Leadership', desc: 'Constantly bringing the latest global home trends to our local market.' }
             ].map((value, idx) => (
               <div key={idx} className="p-8 transition-all border rounded-3xl bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-brand-gold group">
                  <div className="mb-6 transition-transform text-brand-gold group-hover:scale-110">{value.icon}</div>
                  <h4 className="mb-3 text-xl font-bold text-brand-navy dark:text-white">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{value.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </Section>

      {/* Showroom Infrastructure Showcase */}
      <section className="relative py-32 text-white bg-brand-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600')] bg-fixed bg-center"></div>
        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl">
           <Store size={48} className="mx-auto mb-8 text-brand-gold" />
           <h2 className="mb-8 text-4xl font-serif font-black md:text-6xl">The Kripa Arcade Experience</h2>
           <p className="max-w-3xl mx-auto mb-16 text-xl leading-relaxed text-slate-300">
             Our flagship showroom is designed to be an experiential hub. Walk through live modular kitchen setups, test the latest architectural hardware, and visualize your walls with our master paint studios.
           </p>
           <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="p-10 border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                 <span className="block mb-2 text-4xl font-serif font-black text-brand-gold">10,000+</span>
                 <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Sq. Ft. Showroom</p>
              </div>
              <div className="p-10 border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                 <span className="block mb-2 text-4xl font-serif font-black text-brand-red">15,000+</span>
                 <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Products in Stock</p>
              </div>
              <div className="p-10 border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                 <span className="block mb-2 text-4xl font-serif font-black text-white">50+</span>
                 <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Global Luxury Brands</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Footer for About */}
      <Section className="py-24 text-center">
        <h2 className="mb-8 text-4xl font-serif font-black text-brand-navy dark:text-white">Ready to Build Your Dream?</h2>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
           <a 
            href="#contact" 
            className="px-12 py-5 text-sm font-black tracking-widest text-white transition-all shadow-xl bg-brand-red rounded-2xl shadow-brand-red/30 hover:scale-105"
           >
             WORK WITH US
           </a>
           <a 
            href="#products" 
            className="px-12 py-5 text-sm font-black tracking-widest transition-all bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10 text-brand-navy dark:text-white rounded-2xl hover:bg-slate-50"
           >
             BROWSE CATALOG
           </a>
        </div>
      </Section>
    </div>
  );
};

export default About;