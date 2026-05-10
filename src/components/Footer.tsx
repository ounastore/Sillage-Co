import React from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-24">
        {/* Brand Column */}
        <div className="space-y-8">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase block">
            Sillage & Co.
          </Link>
          <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
            A high-end parfumerie dedicated to the creation of scents that capture life’s most profound moments.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white/60 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white/60 transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase font-medium">
            <li><Link to="/collections" className="hover:text-white/60 transition-colors">Collections</Link></li>
            <li><Link to="/perfumes" className="hover:text-white/60 transition-colors">The Perfumes</Link></li>
            <li><Link to="/experience" className="hover:text-white/60 transition-colors">Experience</Link></li>
            <li><Link to="/gift-guide" className="hover:text-white/60 transition-colors">Gift Guide</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Client Care</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase font-medium">
            <li><Link to="/shipping" className="hover:text-white/60 transition-colors">Shipping Info</Link></li>
            <li><Link to="/returns" className="hover:text-white/60 transition-colors">Return Policy</Link></li>
            <li><Link to="/tracking" className="hover:text-white/60 transition-colors">Order Tracking</Link></li>
            <li><Link to="/contact" className="hover:text-white/60 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Newsletter</h4>
          <p className="text-white/40 text-sm font-light">Join the circle for exclusive releases.</p>
          <div className="relative group">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-white/20 py-2 pr-10 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-white/60 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
        <p>© 2026 Sillage & Co. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
