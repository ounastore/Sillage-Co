import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, MapPin, Calendar, CheckCircle2, Clock, Truck } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../lib/utils';

export const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [order, setOrder] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    setIsSearching(true);
    // Mocking a search
    setTimeout(() => {
      setOrder({
        id: orderId,
        status: 'shipped',
        createdAt: new Date('2026-04-15'),
        estimatedDelivery: new Date('2026-04-20'),
        items: [
          { name: 'Oud Noir', price: 240, quantity: 1 },
          { name: 'Jardin de Rose', price: 180, quantity: 1 }
        ],
        steps: [
          { status: 'Order Placed', date: '2026-04-15 09:30 AM', completed: true },
          { status: 'Processing', date: '2026-04-15 02:45 PM', completed: true },
          { status: 'Shipped', date: '2026-04-16 11:20 AM', completed: true },
          { status: 'Out for Delivery', date: null, completed: false },
          { status: 'Delivered', date: null, completed: false }
        ]
      });
      setIsSearching(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold mb-4">Post-Purchase Experience</p>
          <h1 className="text-5xl font-serif tracking-tight mb-8">Track Your <span className="italic text-black/60">Fragrance</span></h1>
          
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative group">
            <input
              type="text"
              placeholder="Enter your Order ID (e.g. SC-12345)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full bg-[#F5F2ED] border border-black/5 py-5 px-8 pr-16 text-sm focus:outline-none focus:border-black/20 transition-all rounded-full shadow-sm group-hover:shadow-md"
            />
            <button
               disabled={isSearching}
               type="submit"
               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-black/80 transition-all disabled:opacity-50"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {order && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Status Timeline */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-xl">
               <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-4">
                     <Package className="w-6 h-6 text-black/60" />
                     <div>
                        <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Status</p>
                        <h3 className="text-lg font-bold uppercase tracking-widest">{order.status}</h3>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Expected Arrival</p>
                     <p className="text-sm font-bold uppercase tracking-widest">{format(order.estimatedDelivery, 'MMMM do, yyyy')}</p>
                  </div>
               </div>

               <div className="space-y-12 relative overflow-hidden">
                  <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-black/10" />
                  
                  {order.steps.map((step: any, i: number) => (
                    <div key={i} className="flex gap-8 items-start relative z-10">
                       <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-black/5 shadow-sm transition-colors duration-500",
                          step.completed ? "bg-black text-white" : "bg-white text-black/20"
                       )}>
                          {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                       </div>
                       <div className="flex-grow pt-1">
                          <h4 className={cn(
                             "text-xs uppercase tracking-widest font-bold mb-1",
                             step.completed ? "text-black" : "text-black/40"
                          )}>{step.status}</h4>
                          {step.date && <p className="text-[10px] text-black/40 font-bold">{step.date}</p>}
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Order Details Mini-Card */}
            <div className="space-y-8">
               <div className="bg-black text-white p-8 rounded-3xl space-y-8 shadow-xl">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Delivery To</h4>
                  <div className="flex gap-4">
                     <MapPin className="w-5 h-5 opacity-60 shrink-0" />
                     <p className="text-xs font-light leading-relaxed">
                        Madison Avenue, Suite 100<br />
                        New York, NY 10022<br />
                        United States
                     </p>
                  </div>
                  <div className="h-[1px] bg-white/10" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Shipment Details</h4>
                  <div className="flex gap-4">
                     <Truck className="w-5 h-5 opacity-60 shrink-0" />
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest">Global Express</p>
                        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest tracking-widest">Insured Shipment • Fragile</p>
                     </div>
                  </div>
               </div>

               <div className="bg-[#F5F2ED] p-8 rounded-3xl border border-black/5 space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">Contact Specialist</h4>
                  <p className="text-xs font-light leading-relaxed">
                     Need assistance with your fragrance delivery? Our specialists are available 24/7.
                  </p>
                  <button className="w-full border border-black/10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-black hover:text-white transition-all">
                     View Help Center
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
