import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CartDrawer } from './CartDrawer';

export const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'The Perfumes', path: '/perfumes' },
    { name: 'Our Story', path: '/about' },
    { name: 'Experience', path: '/experience' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-4 md:px-12 flex items-center justify-between',
          isScrolled ? 'bg-white/80 backdrop-blur-md py-4 text-black border-b border-black/5' : 'bg-transparent text-white'
        )}
      >
        <div className="flex-1 hidden md:flex gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-60'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex-1 flex justify-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
            Sillage & Co.
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden md:flex gap-8">
            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-60'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="hover:opacity-60 transition-opacity relative group"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="hidden hover:opacity-60 transition-opacity">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[60] flex flex-col p-8 text-black"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-serif tracking-widest uppercase">Sillage</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-serif tracking-tight border-b border-black/10 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
