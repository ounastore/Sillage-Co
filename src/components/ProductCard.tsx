import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShoppingBag, Star, LayoutGrid } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = React.useState(false);

  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F2ED]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => setIsQuickViewOpen(true)}
            className="bg-white text-black text-[10px] uppercase tracking-widest py-3 px-4 hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick
          </button>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white text-[10px] uppercase tracking-widest py-3 px-4 hover:bg-white/90 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-black p-3 hover:bg-black hover:text-white transition-colors duration-300"
            title="View Details"
          >
            <LayoutGrid className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">{product.brand}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-black/60 mt-1 italic">{product.category}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium tracking-widest">${product.price}</p>
          <div className="flex items-center gap-1 mt-1 justify-end">
            <Star className="w-2.5 h-2.5 fill-black" />
            <span className="text-[10px] text-black/60">{product.rating}</span>
          </div>
        </div>
      </div>

      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </motion.div>
  </>
);
};
