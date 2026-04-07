import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Layer Group */}
      <div className="absolute inset-0 z-0">
        {/* Main Campus Image */}
        <img 
          src="hero_vibrant_campus_sunset_premium_1774683689660.png" 
          alt="Trident Campus" 
          className="w-full h-full object-cover opacity-[0.55]" 
        />
        
        {/* Institutional Blue Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-brand-primary/10 z-10" />

        {/* Technological Grid Pattern Design */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.12] z-20 pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(to right, #253386 1px, transparent 1px), linear-gradient(to bottom, #253386 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}
        />

        {/* Large Decorative Watermark */}
        <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] opacity-[0.06] z-20 pointer-events-none select-none">
          <img 
            src="https://admissions-tat-tekkzy.netlify.app/logo.png" 
            alt="TAT Watermark" 
            className="w-full h-full object-contain rotate-12" 
          />
        </div>

        {/* Soft Depth Blurs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] z-20" />
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-brand-accent/15 rounded-full blur-[100px] z-20" />
      </div>

      <div className="container-custom relative z-30 w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                <span className="h-[3px] w-12 bg-brand-primary" />
                <span className="h-[8px] w-[8px] rounded-full bg-brand-primary ml-[-4px]" />
              </div>
              <span className="text-[13px] font-black tracking-[5px] text-brand-primary/80 uppercase">
                ABOUT TRIDENT ACADEMY
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 drop-shadow-sm">
              A Legacy of <br />
              <span className="text-brand-accent italic drop-shadow-[0_2px_8px_rgba(251,176,59,0.2)]">Excellence</span>,<br />
              A Future of Innovation.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-12 font-bold border-l-4 border-brand-primary/10 pl-6">
              From a visionary coffee table discussion in 1991 to becoming a top-ranked pinnacle of technical education in Odisha.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <a 
                href="#story" 
                className="bg-brand-primary hover:bg-brand-primary-dark text-white font-black px-12 py-5 rounded-md uppercase text-[14px] tracking-wider transition-all hover:-translate-y-1 shadow-2xl shadow-brand-primary/30 active:scale-95"
              >
                Our Journey
              </a>
              <a 
                href="#stats" 
                className="group flex items-center gap-4 text-brand-primary font-black uppercase text-[14px] tracking-wider hover:text-brand-primary-dark transition-all"
              >
                <div className="relative flex items-center">
                  <div className="w-14 h-[3px] bg-brand-primary/10 group-hover:w-16 group-hover:bg-brand-primary transition-all duration-300" />
                  <div className="absolute right-0 w-2 h-2 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                View Rankings
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Established Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 right-12 z-30 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-xl border-2 border-brand-primary/5 p-10 flex flex-col items-center gap-1 rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          <span className="text-[11px] font-black text-slate-400 tracking-[5px] uppercase mb-1">Established</span>
          <span className="text-5xl font-serif font-black text-brand-primary">2005</span>
          <div className="w-16 h-[4px] bg-brand-accent mt-4 shadow-sm rounded-full" />
        </div>
      </motion.div>

      {/* Decorative side bar */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-brand-primary/20 via-brand-accent/20 to-brand-primary/20 opacity-50 z-20" />
      
      {/* Bottom gradient fade for smoother transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
