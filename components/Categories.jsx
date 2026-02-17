import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Wrench, PaintBucket, Utensils, Lightbulb, Bath, BrickWall, ArrowRight, ArrowUpRight } from 'lucide-react';

const categoriesData = [
  { 
    id: '1', 
    name: 'Hardware', 
    displayName: 'Hardware',
    description: 'Premium handles, digital locks, and fittings that define security and style.', 
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '2', 
    name: 'Paints', 
    displayName: 'Paints & Finishes',
    description: 'Vibrant colors and textures for interiors and exteriors.', 
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: '3', 
    name: 'Kitchen', 
    displayName: 'Modular Kitchens',
    description: 'Smart culinary spaces designed for the modern chef.', 
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: '4', 
    name: 'Sanitaryware', 
    displayName: 'Luxury Sanitaryware',
    description: 'Transform your daily routine with spa-like bathroom fittings.', 
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '5', 
    name: 'Electrical', 
    displayName: 'Electrical Solutions',
    description: 'Efficient lighting and smart switches.', 
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: '6', 
    name: 'All', 
    displayName: 'Building Materials',
    description: 'Foundational strength for lasting structures.', 
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800' 
  }
];

const iconMap = {
  'Hardware': <Wrench className="w-6 h-6" />,
  'Paints': <PaintBucket className="w-6 h-6" />,
  'Kitchen': <Utensils className="w-6 h-6" />,
  'Sanitaryware': <Bath className="w-6 h-6" />,
  'Electrical': <Lightbulb className="w-6 h-6" />,
  'All': <BrickWall className="w-6 h-6" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const Categories = ({ onCategorySelect }) => {
  return (
    <Section id="categories" className="relative">
      <div className="flex flex-col items-end justify-between gap-8 px-2 mb-12 md:flex-row">
         <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
               <span className="w-10 h-px bg-brand-red"></span>
               <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Our Collections</span>
            </div>
            <h2 className="text-4xl font-black leading-tight font-serif md:text-5xl text-brand-navy dark:text-white">
               Explore Our <br/>
               <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Premium Categories </span>
            </h2>
         </div>
       
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
      >
        {categoriesData.map((category, index) => (
          <motion.div 
            key={category.id} 
            variants={itemVariants}
            onClick={() => onCategorySelect?.(category.name)}
            className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 
              ${index === 0 || index === 3 || index === 5 ? 'lg:col-span-2' : 'lg:col-span-1'}
            `}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 bg-slate-900">
                <img 
                  src={category.image} 
                  alt={category.displayName} 
                  className="object-cover w-full h-full duration-700 ease-out transition-transform opacity-80 group-hover:scale-110 group-hover:opacity-60"
                />
            </div>
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-80 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-90"></div>
            
            {/* Decorative Icon Circle */}
            <div className="absolute z-10 flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 border rounded-full top-6 right-6 bg-white/10 backdrop-blur-md border-white/20 group-hover:bg-brand-red group-hover:border-brand-red">
               <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
            </div>

            {/* Content Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="transition-transform duration-500 ease-out transform translate-y-4 group-hover:translate-y-0">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-2">
                   <div className="transition-colors duration-300 text-brand-gold group-hover:text-white">
                      {iconMap[category.name]}
                   </div>
                   <h3 className="text-2xl font-bold leading-none text-white font-serif md:text-3xl">
                     {category.displayName}
                   </h3>
                </div>

                {/* Animated Line */}
                <div className="w-12 h-1 mb-4 transition-all duration-500 ease-out rounded-full bg-brand-red group-hover:w-full origin-left"></div>
                
                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-[90%]">
                  {category.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-8 text-center md:hidden">
         <button 
           onClick={() => onCategorySelect?.('All')}
           className="inline-flex items-center gap-2 text-brand-navy dark:text-white font-bold uppercase text-[10px] tracking-[0.2em] border-b-2 border-brand-red pb-1"
         >
            View All Categories
         </button>
      </div>
    </Section>
  );
};

export default Categories;