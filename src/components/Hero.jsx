import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/hero_vibrant_campus_sunset_premium_1774683689660.png",
    "/hero_campus_realistic_daytime_1774671873536.png",
    "/campus_hero_modern_1774668970671.png",
    "/student_tech_lab_1774668989975.png",
    "/vision_vibrant_colorful_students_1774672909834.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-64 pb-24 overflow-hidden bg-white">
      {/* Background Layer Group */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Dynamic Background Slideshow (All images rendered to prevent network load flashes) */}
        {images.map((imgSrc, index) => {
          const isCurrent = currentImageIndex === index;
          const isPrevious = index === (currentImageIndex - 1 + images.length) % images.length;
          
          return (
            <motion.img 
              key={imgSrc}
              src={imgSrc}
              alt={`Trident Campus Slide ${index + 1}`} 
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ opacity: isCurrent || isPrevious ? 1 : 0 }}
              style={{ zIndex: isCurrent ? 2 : isPrevious ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover" 
            />
          );
        })}

        {/* Dark Aesthetic Overlay to deepen the mood and make text pop */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />



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
            <div className="flex items-center gap-4 mb-8 text-white/90 drop-shadow-md">
              <div className="flex items-center">
                <span className="h-[3px] w-12 bg-white/60" />
                <span className="h-[8px] w-[8px] rounded-full bg-white/80 ml-[-4px]" />
              </div>
              <span className="text-[13px] font-black tracking-[5px] uppercase">
                ABOUT TRIDENT ACADEMY
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 drop-shadow-2xl">
              A Legacy of <br />
              <span className="text-brand-accent italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">Excellence</span>,<br />
              A Future of Innovation.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-12 font-bold border-l-4 border-brand-accent pl-6 drop-shadow-xl">
              From a visionary coffee table discussion in 1991 to becoming a top-ranked pinnacle of technical education in Odisha.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <a 
                href="#story" 
                className="bg-brand-accent hover:bg-yellow-400 text-slate-900 font-black px-12 py-5 rounded-md uppercase text-[14px] tracking-wider transition-all hover:-translate-y-1 shadow-2xl shadow-brand-accent/30 active:scale-95"
              >
                Our Journey
              </a>
              <a 
                href="#stats" 
                className="group flex items-center gap-4 text-white font-black uppercase text-[14px] tracking-wider hover:text-white/80 transition-all drop-shadow-md"
              >
                <div className="relative flex items-center">
                  <div className="w-14 h-[3px] bg-white/40 group-hover:w-16 group-hover:bg-brand-accent transition-all duration-300" />
                  <div className="absolute right-0 w-2 h-2 rounded-full bg-white/60 group-hover:bg-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
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
