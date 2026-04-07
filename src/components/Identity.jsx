import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Lightbulb, Trophy, ShieldCheck } from 'lucide-react';

const ValueItem = ({ icon: Icon, title, desc, accent = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
      accent ? 'bg-brand-accent/10 border border-brand-accent/20 shadow-brand-accent/5' : 'bg-slate-50 border border-slate-100 shadow-slate-100'
    }`}
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
      accent ? 'bg-brand-accent text-brand-primary' : 'bg-white text-brand-green'
    }`}>
      <Icon size={32} />
    </div>
    <h4 className="text-xl font-black text-slate-800 mb-3 uppercase tracking-tighter">{title}</h4>
    <p className="text-slate-600 leading-relaxed font-semibold">{desc}</p>
  </motion.div>
);

const Identity = () => {
  return (
    <section id="identity" className="py-24 bg-brand-cream/30 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] opacity-[0.03] select-none">
          <Lightbulb size={800} strokeWidth={0.5} className="text-brand-primary" />
        </div>
        
        {/* Soft Spirit Blurs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-accent/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[120px]" />
        
        {/* Decorative Grid Trace */}
        <div 
          className="absolute left-0 bottom-0 w-full h-1/2 opacity-[0.04]"
          style={{ 
            backgroundImage: `radial-gradient(#253386 1px, transparent 1px)`,
            backgroundSize: '30px 30px' 
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="vision_vibrant_colorful_students_1774672909834.png" 
                alt="Institutional Vision" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-accent rounded-[40px] -z-0 translate-x-3 translate-y-3" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">IDENTITY</span>
            <h2 className="serif-title mb-10">Vision & <span className="italic text-brand-green">Mission</span></h2>
            
            <div className="space-y-8">
              <div className="p-8 bg-white border border-brand-green/10 rounded-2xl shadow-xl shadow-brand-green/5">
                <h3 className="text-2xl font-black text-brand-green mb-4 flex items-center gap-3 decoration-slate-400 decoration-wavy">
                  Vision
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-semibold">
                  To be an institution of global excellence, nurturing innovative technical minds into responsible leaders who shape the future of technology and society.
                </p>
              </div>

              <div className="p-8 bg-white border border-brand-accent/10 rounded-2xl shadow-xl shadow-brand-accent/5">
                <h3 className="text-2xl font-black text-slate-800 mb-4 decoration-brand-accent decoration-wavy">
                  Mission
                </h3>
                <ul className="space-y-4">
                  {[
                    "To provide uncompromised academic rigor and transformative education.",
                    "To foster an environment of continuous learning and advanced research.",
                    "To develop world-class human resources with a strong sense of ethics and social responsibility."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 font-semibold leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">CORE VALUES</span>
          <h2 className="serif-title">
            The <span className="italic text-brand-green font-black">Trident</span> <span className="text-brand-accent">Spirit</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueItem 
            icon={Handshake} 
            title="Integrity" 
            desc="Upholding the highest ethical standards in all academic and professional pursuits." 
          />
          <ValueItem 
            icon={Lightbulb} 
            title="Innovation" 
            desc="Encouraging creativity and original thinking across all technical disciplines." 
            accent={true}
          />
          <ValueItem 
            icon={Trophy} 
            title="Excellence" 
            desc="Striving for the benchmark of quality in infrastructure and education." 
          />
          <ValueItem 
            icon={ShieldCheck} 
            title="Responsibility" 
            desc="Developing sensitive citizens committed to sustainable global development." 
            accent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Identity;
