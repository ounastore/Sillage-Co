import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Narrative Section */}
      <section className="px-4 md:px-12 max-w-6xl mx-auto mb-32 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8 font-bold">Legacy & Craft</p>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">The <span className="italic">Soul</span> of Sillage</h1>
        <div className="space-y-8 text-lg md:text-xl font-light leading-loose text-black/80 max-w-3xl mx-auto">
           <p>
              Founded in 2024, Sillage & Co. was born from a singular obsession: the fleeting nature of memory and its profound connection to scent. we believe that the right fragrance can transport you to a time, a place, or a feeling that exists nowhere else.
           </p>
           <p>
              Our perfumes are produced in small batches, using only the rarest sustainably-sourced ingredients from around the globe. Each bottle is a testament to the artisans who dedicate their lives to the ancient craft of perfumery.
           </p>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[60vh] md:h-[80vh] bg-black overflow-hidden mb-32">
         <img
            src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=2000"
            alt="Perfume Lab"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
         />
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
         <div>
            <span className="text-3xl font-serif text-black/20 block mb-6 italic">01</span>
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Sourcing</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
               We work directly with growers from Grasse to Indonesia, ensuring every botanical extract is of the highest quality and ethical origin.
            </p>
         </div>
         <div>
            <span className="text-3xl font-serif text-black/20 block mb-6 italic">02</span>
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Maceration</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
               Allowing nature to take its course. Our fragrances are aged for six months in stainless steel vats before filtering and bottling.
            </p>
         </div>
         <div>
            <span className="text-3xl font-serif text-black/20 block mb-6 italic">03</span>
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Composition</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
               A delicate dance of chemistry and art. Each scent profile takes years to perfect, balanced across top, heart, and base notes.
            </p>
         </div>
      </section>
    </div>
  );
};
