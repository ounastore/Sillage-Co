import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, Star, Share2, Heart, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-serif">Fragrance Not Found</h1>
          <Link to="/" className="text-xs uppercase tracking-widest border-b border-black/20 pb-1 mt-8 inline-block">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Images Section */}
        <div className="lg:h-[90vh] overflow-hidden bg-[#F5F2ED] flex items-center justify-center p-8">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={product.images[0]}
            alt={product.name}
            className="w-full max-w-lg h-auto object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-[0.4em] text-black/40 font-bold">{product.brand}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-black" />
                <span className="text-[10px] tracking-widest font-bold">{product.rating} / 5</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4 uppercase">{product.name}</h1>
            <p className="text-xl italic text-black/60 mb-8 font-light tracking-wide">{product.category} Eau de Parfum</p>
            
            <p className="text-lg text-black/80 font-light leading-loose mb-12 max-w-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-lg">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 block mb-3 font-bold">Top Notes</span>
                <p className="text-xs uppercase tracking-widest font-semibold leading-relaxed">{product.notes.top.join(', ')}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 block mb-3 font-bold">Middle Notes</span>
                <p className="text-xs uppercase tracking-widest font-semibold leading-relaxed">{product.notes.middle.join(', ')}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 block mb-3 font-bold">Base Notes</span>
                <p className="text-xs uppercase tracking-widest font-semibold leading-relaxed">{product.notes.base.join(', ')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-3xl font-serif tracking-tight">${product.price}</div>
              <button
                onClick={() => addToCart(product)}
                className="flex-1 w-full sm:w-auto bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold py-6 px-12 transition-all hover:bg-black/80 flex items-center justify-center gap-4 rounded-full"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
              <div className="flex gap-4">
                <button className="p-4 border border-black/10 hover:border-black transition-colors rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-4 border border-black/10 hover:border-black transition-colors rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-black/5 flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
              <div className="flex items-center gap-2"><Award className="w-4 h-4" /> 100% Authentic</div>
              <div className="flex items-center gap-2">Free Global Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reviews Section Placeholder */}
      <section className="bg-white py-24 px-4 md:px-12 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <h2 className="text-4xl font-serif tracking-tight">Fragrance Reviews</h2>
            <span className="text-xs opacity-40 font-bold uppercase tracking-widest">({product.reviewsCount} verified)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                  <Star className="w-3 h-3 fill-black" />
                </div>
                <p className="text-lg font-serif">"Exquisite and long-lasting."</p>
                <p className="text-xs text-black/60 font-light leading-relaxed">
                  The complexity of this scent is unlike anything I've ever experienced. 
                  Every note evolves throughout the day, creating a beautiful and lingering presence.
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] pt-4 border-t border-black/5 text-black/40">
                  <span className="font-bold">Marie L.</span>
                  <span>April 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
