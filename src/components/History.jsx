import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-8 group"
  >
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-4 border-brand-accent bg-white flex items-center justify-center text-sm font-black text-slate-800 shrink-0 group-hover:scale-110 transition-transform duration-500">
        {year}
      </div>
      <div className="w-1 h-full bg-slate-200 group-last:bg-transparent min-h-[80px]" />
    </div>
    <div className="pt-2">
      <h4 className="text-xl font-black text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-600 font-semibold">{desc}</p>
    </div>
  </motion.div>
);

const History = () => {
  const milestones = [
    { year: "1991", title: "Founding Spark", desc: "Incorporation of Trident Softech Private Limited by five visionary technocrats." },
    { year: "1995", title: "Education Focus", desc: "Started as a corporate finishing school providing industry-ready tech training." },
    { year: "2005", title: "Academy Founding", desc: "Trident Academy of Technology established as a premium degree engineering college." },
    { year: "2023+", title: "Autonomous Journey", desc: "Continuous evolution as a UGC Autonomous institution with industry-leading placements." },
  ];

  return (
    <section id="milestones" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 section-header-center">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">TIMELINE</span>
          <h2 className="serif-heading-vibrant">
            Our <span className="text-brand-accent italic font-black">Institutional</span> Milestones
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-slate-50">
              <img 
                src="milestones_vibrant_timeline_nodes_1774672926576.png" 
                alt="Timeline Visual" 
                className="w-full h-[600px] object-cover" 
              />
            </div>
          </motion.div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <TimelineItem key={i} index={i} {...m} />
            ))}
          </div>
        </div>

        {/* Story Part */}
        <div id="story" className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif-title mb-8">Rooted in <span className="italic text-brand-green">Vision</span></h2>
            <p className="text-2xl font-black text-slate-800 mb-8 leading-snug">
              In the winter of 1991, five young minds sparkled a revolution over a coffee table. 
              They debated a future where world-class education wasn't just a dream, but a standard.
            </p>
            <p className="text-slate-600 text-lg font-semibold leading-relaxed mb-8">
              What started as "Trident Softech Private Limited" evolved into a corporate finishing school, and eventually, the Trident Academy of Technology. Today, we stand as a testament to the power of self-financing private entrepreneurship in building high-quality infrastructure for advanced education and research.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="visionary_meeting_journey_1774669005557.png" 
                alt="Founding Vision" 
                className="w-full h-[450px] object-cover" 
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;
