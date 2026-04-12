import React from 'react';
import { motion } from 'framer-motion';

const BoardCard = ({ img, name, role, desc, color }) => {
  const colors = {
    green: "bg-brand-green text-white shadow-brand-green/20",
    yellow: "bg-brand-accent text-brand-primary shadow-brand-accent/20",
    charcoal: "bg-brand-secondary text-white shadow-brand-secondary/20"
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-10 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center ${colors[color]}`}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6 shrink-0 shadow-xl">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-black mb-2">{name}</h3>
      <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">{role}</p>
      <div className="w-12 h-0.5 bg-white/30 mb-4" />
      <p className="text-sm font-semibold opacity-90 leading-relaxed italic">{desc}</p>
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Principal Message */}
        <div id="principal" className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto lg:mr-0 w-full group"
          >
            {/* Formal Architectural Frame Accent */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-primary/20 rounded-md -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Professional Portrait Container */}
            <div className="rounded-md overflow-hidden shadow-2xl shadow-brand-primary/10 relative z-10 bg-white ring-1 ring-slate-900/5">
              <img 
                src="https://tat.ac.in/wp-content/uploads/2026/02/Passport_Size_Photo_Final.png" 
                alt="Prof. (Dr) D. N. Pattanayak" 
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">LEADERSHIP VOICE</span>
            <h2 className="serif-title mb-10">Message from the <span className="italic text-brand-green font-black">Principal</span></h2>
            <p className="text-2xl font-semibold text-slate-800 italic mb-8 border-l-4 border-brand-accent pl-6 leading-snug">
              "At Trident, we don't just teach technology; we cultivate the innovators of tomorrow through uncompromised academic rigor and transformative mentorship."
            </p>
            <p className="text-slate-600 text-lg font-semibold leading-relaxed mb-6">
              Our institution stands on the foundations of innovation, integrity, and excellence. We believe in providing our students with a holistic environment where world-class infrastructure meets personalized guidance. Join us in our journey of continuous learning and professional growth.
            </p>
            <div className="pt-6 border-t border-slate-100 flex flex-col">
              <span className="text-xl font-black text-brand-green">Prof. (Dr) D. N. Pattanayak</span>
              <span className="text-slate-500 font-bold uppercase text-sm tracking-widest mt-1">Principal, Trident Academy of Technology</span>
            </div>
          </motion.div>
        </div>

        {/* Governing Board */}
        <div id="governance" className="text-center mb-20 section-header-center">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">LEADERSHIP</span>
          <h2 className="serif-heading-vibrant">
            Governing <span className="italic text-brand-green">Board</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BoardCard 
            img="/chairperson_panigrahi_1775112672468.png"
            name="Smt. S. Panigrahi"
            role="Chairperson"
            desc="Trustee – D. Foundation"
            color="green"
          />
          <BoardCard 
            img="/member_nanda_portrait_1775112695824.png"
            name="Dr. B. K. Nanda"
            role="Member"
            desc="Ex-Vice Chancellor, VSSUT, Burla (Ph.D, Mechanical)"
            color="yellow"
          />
          <BoardCard 
            img="https://tat.ac.in/wp-content/uploads/2026/02/Passport_Size_Photo_Final.png"
            name="Prof. (Dr) D. N. Pattanayak"
            role="Member Secretary (GB)"
            desc="Principal (Ph.D, JU, Electrical Engg)"
            color="charcoal"
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
