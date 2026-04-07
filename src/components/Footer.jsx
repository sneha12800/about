import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Partners = () => {
  const partners = ["TCS", "Infosys", "Wipro", "Cognizant", "IBM", "Capgemini", "Tech Mahindra"];
  const allPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden border-y border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[3px] text-slate-400 uppercase mb-4 block">CORPORATE TIES</span>
          <h2 className="serif-heading-vibrant">
            Top <span className="italic text-brand-green font-black">Recruiting</span> Partners
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-12 gap-8">
            {allPartners.map((p, i) => (
              <div key={i} className="px-12 py-8 bg-slate-50 border border-slate-100 rounded-2xl text-2xl font-black text-slate-400 grayscale hover:grayscale-0 transition-all duration-500 hover:text-brand-primary hover:bg-white hover:shadow-xl shadow-slate-100 uppercase tracking-widest text-center min-w-[200px]">
                {p}
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Subscription Block */}
        <div className="bg-brand-primary/10 border border-white/5 rounded-[40px] p-10 lg:p-16 mb-24 grid lg:grid-cols-2 gap-12 items-center backdrop-blur-sm">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif font-black mb-6 leading-tight">
              Stay informed, <br />
              stay <span className="text-brand-accent">ahead.</span>
            </h3>
            <p className="text-slate-400 font-semibold text-lg">
              Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 p-2 bg-white/5 rounded-2xl border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none flex-1 px-4 py-3 text-white placeholder:text-slate-500 font-semibold" 
              />
              <button className="bg-brand-accent text-brand-primary font-black px-8 py-3 rounded-xl hover:scale-95 transition-transform flex items-center gap-2">
                Subscribe <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-4">No spam. Only updates that matter.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img src="https://admissions-tat-tekkzy.netlify.app/logo.png" alt="Logo" className="w-14 h-14" />
              <div>
                <div className="text-2xl font-serif font-black uppercase tracking-tighter">Trident</div>
                <div className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] -mt-1 opacity-80">Academy of Technology</div>
              </div>
            </div>
            <p className="text-slate-400 font-semibold leading-relaxed mb-10">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Academics",
              url: "https://academics-tat.tekkzy.com/",
              links: ["Undergraduate Studies", "Postgraduate Studies", "Doctoral Programs", "Research Centers", "Academic Calendar"]
            },
            {
              title: "Campus Life",
              url: "https://campuslife-tat.tekkzy.com/",
              links: ["Student Hostels", "Clubs & Societies", "Sports & Recreation", "Health & Wellness", "Campus Safety"]
            },
            {
              title: "Resources",
              url: "https://about-tat.tekkzy.com/",
              links: [
                { name: "Admissions Portal", href: "https://admissions-tat.tekkzy.com/" },
                { name: "Alumni Network", href: "https://alumni-tat.tekkzy.com/" },
                { name: "Career Placements", href: "#" },
                { name: "NIRF Data", href: "#" },
                { name: "Tenders & Notices", href: "#" }
              ]
            }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <a href={col.url} className="hover:text-brand-accent transition-colors">{col.title}</a>
              </h5>
              <ul className="space-y-4">
                {col.links.map(link => {
                  const name = typeof link === 'string' ? link : link.name;
                  const href = typeof link === 'string' ? "#" : link.href;
                  return (
                    <li key={name}>
                      <a href={href} className="text-slate-400 font-semibold hover:text-brand-accent transition-colors flex items-center gap-2 group">
                        <div className="w-0 h-0.5 bg-brand-accent group-hover:w-3 transition-all duration-300" />
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 font-bold text-sm tracking-tight order-2 md:order-1">
            © 2026 Trident Academy of Technology. All rights reserved.
          </div>
          <div className="flex gap-8 text-slate-500 font-bold text-sm tracking-tight order-1 md:order-2">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Use</a>
          </div>
        </div>

        <div className="mt-12 text-center">
           <span className="text-slate-600 font-bold uppercase text-[10px] tracking-[0.3em]">
             Crafted with AI by <a href="https://tekkzy.com" className="text-brand-primary-dark hover:text-brand-accent transition-colors">Tekkzy</a>
           </span>
        </div>
      </div>
    </footer>
  );
};

export { Partners, Footer };
