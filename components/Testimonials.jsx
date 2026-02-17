import React from 'react';
import { Section } from './ui/Section';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: '1', name: 'Priya Sharma', role: 'Homeowner', content: 'Kripa Home Solutions made my renovation stress-free. The variety of kitchen fittings they have is unmatched in the city.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  { id: '2', name: 'Rahul Verma', role: 'Interior Contractor', content: 'As a contractor, I need reliability. Kripa always delivers authentic products on time. Highly recommended!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { id: '3', name: 'Sneha Patel', role: 'DIY Enthusiast', content: 'The staff was super helpful in guiding me to choose the right paint for my balcony. It looks amazing now!', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" className="relative overflow-hidden bg-white dark:bg-slate-900 py-24">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-end justify-between gap-8 px-2 mb-16 md:flex-row">
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                 <span className="w-10 h-px bg-brand-red"></span>
                 <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Trusted by 10,000+ Customers</span>
              </div>
              <h2 className="text-4xl font-black leading-tight font-serif md:text-5xl text-brand-navy dark:text-white">
                Voices of <br/>
                <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Satisfaction</span>
              </h2>
           </div>
           <div className="flex items-center gap-2 text-brand-gold font-bold uppercase text-[10px] tracking-[0.2em]">
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <span className="ml-2 text-slate-500">5.0 Customer Rating</span>
           </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
           {testimonials.map((item, index) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.2 }}
               whileHover={{ y: -10 }}
               className="relative p-8 pt-12 transition-all duration-300 border shadow-sm bg-slate-50 dark:bg-slate-800/60 rounded-[2.5rem] border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-black/50 group"
             >
                <div className="absolute transition-colors duration-300 top-8 right-8 text-slate-200 dark:text-slate-700 group-hover:text-brand-red/10">
                   <Quote size={80} fill="currentColor" strokeWidth={0} />
                </div>

                <div className="flex gap-1 mb-6 text-brand-gold relative z-10">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />)}
                </div>

                <p className="relative z-10 mb-8 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                  "{item.content}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                   <div className="relative">
                     <div className="absolute inset-0 transition-opacity rounded-full opacity-20 bg-brand-red blur group-hover:opacity-40"></div>
                     <img 
                       src={item.avatar} 
                       alt={item.name} 
                       className="relative object-cover transition-transform duration-300 border-2 border-white rounded-full shadow-md w-14 h-14 dark:border-slate-600 group-hover:scale-110" 
                     />
                     <div className="absolute p-1 border-2 border-white rounded-full shadow-sm -bottom-1 -right-1 bg-brand-gold text-brand-navy dark:border-slate-600" title="Verified Customer">
                        <CheckCircle size={10} strokeWidth={4} />
                     </div>
                   </div>
                   
                   <div>
                      <h4 className="text-lg font-bold transition-colors text-brand-navy dark:text-white group-hover:text-brand-red">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold tracking-wider uppercase text-slate-500">
                        {item.role}
                      </p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;