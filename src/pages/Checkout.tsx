import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { motion } from 'motion/react';
import { Lock, CreditCard, Truck, ChevronRight, ArrowRight } from 'lucide-react';

const stripePromise = loadStripe((import.meta as any).env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export const Checkout: React.FC = () => {
  const { cart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'United States',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          successUrl: `${window.location.origin}/order-success`,
          cancelUrl: `${window.location.origin}/checkout`,
        }),
      });

      const session = await response.json();

      if (session.id) {
        const stripe = await stripePromise;
        await (stripe as any)?.redirectToCheckout({ sessionId: session.id });
      } else {
        throw new Error(session.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please ensure Stripe keys are configured.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-40 pb-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif mb-8">Your bag is empty</h2>
        <a href="/" className="text-[10px] uppercase tracking-[0.4em] font-bold border border-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all">
          Back to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-12 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Shipping Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-12"
        >
          <div>
             <h2 className="text-3xl font-serif tracking-tight mb-8">Shipping Details</h2>
             <form onSubmit={handleCheckout} className="space-y-6">
               <div className="space-y-4">
                 <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">Contact Information</p>
                 <input
                   required
                   type="email"
                   name="email"
                   placeholder="Email Address"
                   value={formData.email}
                   onChange={handleInputChange}
                   className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                 />
               </div>

               <div className="space-y-4">
                 <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">Shipping Address</p>
                 <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                    />
                 </div>
                 <input
                   required
                   type="text"
                   name="address"
                   placeholder="Address"
                   value={formData.address}
                   onChange={handleInputChange}
                   className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                 />
                 <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                    />
                    <input
                      required
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg"
                    />
                 </div>
                 <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-black/10 py-4 px-6 text-sm focus:outline-none focus:border-black transition-colors rounded-lg appearance-none"
                 >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                 </select>
               </div>

               <button
                 disabled={loading}
                 type="submit"
                 className="w-full bg-black text-white text-[11px] uppercase tracking-[0.5em] font-bold py-6 px-4 flex items-center justify-center gap-3 hover:bg-black/80 transition-all rounded-full mt-12 disabled:opacity-50"
               >
                 {loading ? 'Processing...' : 'Complete Purchase'} <ArrowRight className="w-4 h-4" />
               </button>

               <div className="flex items-center justify-center gap-8 pt-8 opacity-40">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Lock className="w-3 h-3" /> Secure</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><CreditCard className="w-3 h-3" /> Encrypted</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Truck className="w-3 h-3" /> Insured</div>
               </div>
             </form>
          </div>
        </motion.div>

        {/* Right Side: Order Summary */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-white p-8 md:p-12 h-fit space-y-8 rounded-2xl shadow-xl border border-black/5"
        >
           <h3 className="text-xl font-serif tracking-tight border-b border-black/5 pb-6 uppercase">Order Summary</h3>
           <div className="space-y-6 max-h-96 overflow-y-auto pr-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                   <div className="w-16 h-20 bg-[#F5F2ED] flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-baseline">
                         <h4 className="text-xs uppercase tracking-widest font-bold">{item.name}</h4>
                         <p className="text-xs font-bold">${item.price * item.quantity}</p>
                      </div>
                      <p className="text-[10px] text-black/40 mt-1 uppercase tracking-widest">{item.brand} • Qty {item.quantity}</p>
                   </div>
                </div>
              ))}
           </div>

           <div className="space-y-4 pt-6 border-t border-black/5">
              <div className="flex justify-between text-xs tracking-widest uppercase text-black/40">
                 <span>Subtotal</span>
                 <span>${total}</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest uppercase text-black/40">
                 <span>Complimentary Shipping</span>
                 <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-serif tracking-tight pt-4 border-t border-black/10">
                 <span className="uppercase text-sm font-bold tracking-[0.2em] font-sans">Total</span>
                 <span>${total}</span>
              </div>
           </div>

           <div className="bg-[#F5F2ED] p-6 rounded-xl">
              <p className="text-xs font-light leading-relaxed italic opacity-60">
                 "Your order represents a commitment to fine fragrance. Each bottle is inspected and hand-packaged with care."
              </p>
           </div>
        </motion.div>
      </div>
    </div>
  );
};
