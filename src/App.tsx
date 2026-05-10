/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { OrderTracking } from './pages/OrderTracking';
import { OrderSuccess } from './pages/OrderSuccess';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { CartProvider } from './context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white overflow-x-hidden flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/perfumes" element={<Collections />} /> {/* Shared for now */}
                <Route path="/about" element={<About />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/tracking" element={<OrderTracking />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                {/* Other routes can be added here */}
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

