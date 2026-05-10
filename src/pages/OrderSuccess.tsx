import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';
import { motion } from 'motion/react';

export const OrderSuccess: React.FC = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
     <div className="min-h-screen pt-40 pb-24 px-4 flex flex-col items-center justify-center bg-[#F5F2ED]">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-white p-12 md:p-16 rounded-[40px] shadow-2xl text-center max-w-lg w-full"
        >
           <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
           </div>
           
           <h1 className="text-4xl font-serif mb-4 uppercase tracking-tight">Order Confirmed</h1>
           <p className="text-sm font-light text-black/60 italic mb-12">
              Your fragrance is being prepared. An email confirmation has been sent to you.
           </p>

           <div className="space-y-4">
              <Link
                 to="/tracking"
                 className="w-full bg-black text-white text-[11px] uppercase tracking-[0.4em] font-bold py-5 px-4 flex items-center justify-center gap-3 hover:bg-black/80 transition-all rounded-full"
              >
                 <Package className="w-4 h-4" /> Track Order
              </Link>
              <Link
                 to="/"
                 className="border border-black/10 text-black text-[11px] uppercase tracking-[0.4em] font-bold py-5 px-4 block hover:bg-black/5 transition-all rounded-full"
              >
                 Back to Collection
              </Link>
           </div>
        </motion.div>
     </div>
  );
};
