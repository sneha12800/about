import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Monitor, BarChart3 } from 'lucide-react';

const DeptCard = ({ icon: Icon, title, desc, color }) => {
  const colors = {
    green: "bg-brand-green border-brand-green/20 text-white",
    yellow: "bg-brand-accent border-brand-accent/20 text-brand-primary",
    charcoal: "bg-brand-secondary border-brand-secondary/20 text-white"
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[32px] border ${colors[color]} shadow-xl transition-all duration-500 flex flex-col items-center text-center`}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{title}</h3>
      <p className="font-semibold leading-relaxed opacity-90">{desc}</p>
    </motion.div>
  );
};

const Recognitions = () => {
  return (
    <section id="academics" className="py-24 bg-brand-cream/30 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 section-header-center">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">ACADEMIC PILLARS</span>
          <h2 className="serif-heading-vibrant">
            Broadening <span className="italic text-brand-green">Institutional</span> Horizons
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <DeptCard 
            icon={Settings} 
            title="Engineering" 
            desc="Providing top-tier B.Tech programs across diverse specializations with industry-ready curriculum."
            color="green" 
          />
          <DeptCard 
            icon={Monitor} 
            title="MCA" 
            desc="Ranked #1 MCA institution in Odisha, focusing on advanced computing and software paradigms."
            color="yellow" 
          />
          <DeptCard 
            icon={BarChart3} 
            title="MBA" 
            desc="Empowering future managers with strategic thinking and professional leadership skills."
            color="charcoal" 
          />
        </div>

        <div id="stats" className="text-center mb-20 section-header-center">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">RECOGNITIONS</span>
          <h2 className="serif-heading-vibrant">
            Benchmark of <span className="italic text-brand-accent">Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 p-10 bg-brand-green rounded-[40px] text-white flex flex-col justify-center border border-white/10 shadow-2xl overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
            <h3 className="text-4xl md:text-5xl font-black font-serif mb-4 text-brand-accent">Top 100</h3>
            <p className="text-xl font-semibold opacity-90 leading-relaxed max-w-xl">
              Consistently ranked among the Top 100 Engineering Institutions in India by DataQuest along with IITs and NITs.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-brand-accent rounded-[40px] text-brand-primary flex flex-col justify-center border border-white/10 shadow-2xl"
          >
            <h3 className="text-4xl font-black font-serif mb-2">No. 1</h3>
            <p className="text-lg font-bold opacity-80 uppercase tracking-widest mb-4">IN ODISHA</p>
            <p className="text-xl font-black leading-tight">
              Ranked #1 MCA Institution in Odisha.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-brand-secondary rounded-[40px] text-white flex flex-col justify-center border border-white/10 shadow-2xl"
          >
            <h3 className="text-4xl font-black font-serif mb-4 text-brand-accent">#25</h3>
            <p className="text-xl font-semibold opacity-90">
              DataQuest CMR Rankings Nationwide.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-brand-green rounded-[40px] text-white flex flex-col justify-center border border-white/10 shadow-2xl"
          >
            <h3 className="text-4xl font-black font-serif mb-4 text-brand-accent">No. 4</h3>
            <p className="text-xl font-semibold opacity-90">
              Private Engineering College under BPUT, Odisha.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-brand-accent rounded-[40px] text-brand-primary flex flex-col justify-center border border-white/10 shadow-2xl"
          >
            <h3 className="text-4xl font-black font-serif mb-4">100%</h3>
            <p className="text-xl font-black leading-tight">
              Placement assistance with industry-leading packages for every graduating student.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
