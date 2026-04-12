import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, img, name, detail, color }) => {
  const colors = {
    green: "bg-brand-green text-white",
    yellow: "bg-brand-accent text-brand-primary"
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-12 rounded-[40px] shadow-2xl transition-all duration-500 overflow-hidden relative ${colors[color]}`}
    >
      <div className="text-4xl lg:text-6xl font-black opacity-20 absolute top-8 left-8 select-none">"</div>
      <p className="text-lg md:text-xl font-semibold leading-relaxed mb-10 relative z-10 italic">
        {quote}
      </p>
      <div className="flex items-center gap-4 pt-8 border-t border-white/20">
        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/30 shrink-0">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-xl font-black uppercase tracking-tight">{name}</h4>
          <span className="text-sm font-bold opacity-80">{detail}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Success = () => {
  return (
    <section id="success" className="pt-36 pb-24 bg-brand-cream/40 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 section-header-center">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">STUDENT SUCCESS</span>
          <h2 className="serif-heading-vibrant">
            Voices of <span className="italic text-brand-green font-black">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <TestimonialCard 
            quote="Trident provided me with the perfect blend of technical rigor and creative freedom. The labs are truly world-class."
            img="/student_rahul_sharma_cse_portrait_1775288690112.png"
            name="Rahul Sharma"
            detail="CSE, Batch of 2024"
            color="green"
          />
          <TestimonialCard 
            quote="The faculty mentorship here is unparalleled. I was able to publish two research papers before graduating."
            img="/student_anjali_priya_etc_portrait_1775288708312.png"
            name="Anjali Priya"
            detail="ETC, Batch of 2023"
            color="yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default Success;
