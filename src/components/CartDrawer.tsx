import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, total, itemCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-black/5">
              <div className="flex items-center gap-4">
                <ShoppingBag className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.4em] font-bold">Shopping Bag</span>
                <span className="text-[10px] opacity-40 font-bold">({itemCount} ITEMS)</span>
              </div>
              <button onClick={onClose} className="hover:opacity-40 transition-opacity">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-sm font-light opacity-60 mb-8 italic">Your shopping bag is currently empty.</p>
                  <button
                    onClick={onClose}
                    className="text-[11px] uppercase tracking-[0.4em] font-bold bg-black text-white px-10 py-5 rounded-full hover:bg-black/80 transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 bg-[#F5F2ED] overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                             <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1 font-bold">{item.brand}</p>
                             <h4 className="text-sm uppercase tracking-widest font-bold">{item.name}</h4>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-black/40 hover:text-black transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-black/60 font-light mt-1 italic">{item.category}</p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-black/10 rounded-full px-3 py-1 gap-4">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:opacity-40">
                             <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:opacity-40">
                             <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-sm font-bold tracking-widest">${item.price * item.quantity}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-black/5 bg-[#F5F2ED]">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs uppercase tracking-[0.4em] font-bold opacity-60">Subtotal</span>
                  <span className="text-xl font-serif tracking-tight">${total}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full bg-black text-white text-[11px] uppercase tracking-[0.5em] font-bold py-6 px-4 flex items-center justify-center gap-3 hover:bg-black/80 transition-all rounded-full"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[10px] text-center mt-6 text-black/40 tracking-widest italic">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
