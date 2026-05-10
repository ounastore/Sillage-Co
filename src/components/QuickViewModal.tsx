import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Star, Info } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl max-h-[90vh] bg-white z-[201] shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-[40px]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Column */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-[#F5F2ED] flex items-center justify-center p-12">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full max-w-xs h-auto object-cover drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">{product.brand}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-2 uppercase">{product.name}</h2>
              <p className="text-sm italic text-black/60 mb-6">{product.category} Eau de Parfum</p>

              <p className="text-sm text-black/70 font-light leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-black/40 block mb-1 font-bold">Top</span>
                  <p className="text-[10px] font-semibold">{product.notes.top[0]}</p>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-black/40 block mb-1 font-bold">Heart</span>
                  <p className="text-[10px] font-semibold">{product.notes.middle[0]}</p>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-black/40 block mb-1 font-bold">Base</span>
                  <p className="text-[10px] font-semibold">{product.notes.base[0]}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 pt-6 border-t border-black/5">
                <div className="text-2xl font-serif">${product.price}</div>
                <div className="flex gap-2 flex-grow">
                  <button
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                    className="flex-grow bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold py-4 rounded-full hover:bg-black/80 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    className="p-4 border border-black/10 hover:border-black transition-colors rounded-full"
                    title="View Details"
                  >
                    <Info className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
