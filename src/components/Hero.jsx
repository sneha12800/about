import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-brand-cream overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col"
          >
            <span className="text-sm font-bold tracking-[3px] text-slate-500 uppercase mb-4">
              ABOUT TRIDENT
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              A Legacy of <br />
              <span className="text-brand-accent italic">Excellence</span>,<br />
              A Future of Innovation.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12">
              From a visionary coffee table discussion in 1991 to becoming a top-ranked pinnacle of technical education in Odisha.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#story" 
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-10 py-4 rounded-md uppercase text-[13px] tracking-wider transition-all hover:-translate-y-1 shadow-lg hover:shadow-brand-green/20"
              >
                Our Journey
              </a>
              <a 
                href="#stats" 
                className="border border-brand-secondary text-brand-secondary hover:bg-brand-secondary/5 font-bold px-10 py-4 rounded-md uppercase text-[13px] tracking-wider transition-all hover:-translate-y-1"
              >
                View Rankings
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 bg-brand-accent text-brand-primary font-extrabold px-6 py-4 text-xs tracking-[2px] z-20 shadow-xl">
              ESTABLISHED 2005
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="hero_vibrant_campus_sunset_premium_1774683689660.png" 
                alt="Trident Campus" 
                className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary opacity-5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
