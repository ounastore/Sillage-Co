import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="h-[90vh] relative flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Fragrance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 font-medium"
          >
            The Art of Fragrance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif tracking-tight mb-8"
          >
            Ethereal <span className="italic">Essence</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button className="border border-white/30 px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 rounded-full">
              Shop Collection
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40"
        >
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-4 md:px-12 bg-[#F5F2ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black/80 leading-relaxed">
            "We believe that a scent is more than just a fragrance; it is a <span className="italic">silent storyteller</span> of your unique journey through life's most precious moments."
          </h2>
          <div className="mt-12 flex justify-center items-center gap-4 text-xs uppercase tracking-[0.2em] font-semibold text-black/40">
            <span className="w-8 h-[1px] bg-black/20" />
            Our Philosophy
            <span className="w-8 h-[1px] bg-black/20" />
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4 font-bold">The Collection</p>
            <h2 className="text-4xl font-serif tracking-tight">Best Sellers</h2>
          </div>
          <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/20 pb-2 hover:border-black transition-colors flex items-center gap-3">
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="bg-[#1A1A1A] text-white p-12 md:p-24 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 font-bold">Seasonal Spotlight</span>
          <h2 className="text-5xl font-serif tracking-tight mb-8">Nuit d'Hiver</h2>
          <p className="text-lg opacity-60 font-light leading-loose mb-12 max-w-md">
            A limited edition masterpiece designed for the crystalline silence of winter nights. Featuring frozen iris, crystalline musk, and smoky amber.
          </p>
          <button className="w-fit border border-white/20 px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 rounded-full">
            Discover Nuit
          </button>
        </div>
        <div className="h-[60vh] lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200"
            alt="Feature"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
};
