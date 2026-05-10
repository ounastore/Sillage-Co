import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { Search, Filter, ChevronDown } from 'lucide-react';

export const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4 font-bold">House of Sillage</p>
            <h1 className="text-5xl font-serif tracking-tight">Fragrance Collections</h1>
          </div>
          
          <div className="flex items-center gap-8 w-full md:w-auto">
             <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap px-4 py-2 transition-all ${
                      activeCategory === cat 
                        ? 'bg-black text-white rounded-full' 
                        : 'text-black/40 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <button className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold border-l border-black/10 pl-8">
                <ChevronDown className="w-3 h-3" /> Sort
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
           <div className="py-24 text-center">
              <p className="text-lg italic text-black/40 font-serif">No fragrances found in this collection.</p>
           </div>
        )}
      </div>
    </div>
  );
};
