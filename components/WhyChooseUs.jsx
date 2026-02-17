import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Truck, Clock, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { 
    id: '01',
    icon: <ShieldCheck size={28} />, 
    title: 'Authentic Quality', 
    desc: 'We source directly from global manufacturers to ensure every product is 100% genuine and certified.' 
  },
  { 
    id: '02',
    icon: <Truck size={28} />, 
    title: 'Fast Delivery', 
    desc: 'Our optimized logistics network ensures your building materials reach the site exactly when you need them.' 
  },
  { 
    id: '03',
    icon: <HeartHandshake size={28} />, 
    title: 'Expert Consultation', 
    desc: 'Get free technical advice from our civil engineers and interior designers to make informed choices.' 
  },
  { 
    id: '04',
    icon: <Clock size={28} />, 
    title: 'Lifetime Support', 
    desc: 'Our relationship doesn’t end at sales. We provide dedicated after-sales service and warranty support.' 
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <Section className="relative overflow-hidden bg-slate-50 dark:bg-black border-y dark:border-white/5">
      <motion.div 
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
         <div 
           className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', 
             backgroundSize: '40px 40px',
             color: '#D4AF37'
           }} 
        />
      </motion.div>

      <div ref={containerRef} className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-end justify-between gap-8 px-2 mb-16 md:flex-row">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-10 h-px bg-brand-red"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Our Promise</span>
                </div>
                <h2 className="text-4xl font-black leading-tight font-serif md:text-6xl text-brand-navy dark:text-white">
                   Why Builders <br/>
                   <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Trust Kripa</span>
                </h2>
            </div>
            
            <p className="max-w-md pl-6 mb-1 text-sm font-medium leading-relaxed border-l-2 text-slate-600 dark:text-slate-400 border-brand-red">
               Beyond selling products, we build partnerships. Discover why thousands of homeowners choose us for their dream projects.
            </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-brand-surface p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/10 hover:border-brand-red/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-[8rem] font-serif font-bold text-slate-300 dark:text-white/10 group-hover:text-brand-red transition-colors select-none leading-none z-0">
                {feature.id}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center w-16 h-16 mb-8 transition-colors duration-300 shadow-sm rounded-2xl bg-brand-red/5 dark:bg-brand-gold/5 text-brand-red dark:text-brand-gold group-hover:bg-brand-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-red/30"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="mb-4 text-xl font-bold transition-colors text-brand-navy dark:text-white group-hover:text-brand-red">
                    {feature.title}
                  </h3>
                  
                  <p className="flex-grow mb-8 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>
                  
                 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;