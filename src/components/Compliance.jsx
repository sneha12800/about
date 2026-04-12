import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, Landmark } from 'lucide-react';

const DocItem = ({ icon: Icon, title, links }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex gap-6 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl transition-all duration-500"
  >
    <div className="w-16 h-16 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-secondary shrink-0 shadow-inner">
      <Icon size={32} />
    </div>
    <div className="flex flex-col gap-3">
      <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <a 
            key={i} 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-primary font-bold hover:text-brand-green transition-colors flex items-center gap-2 group"
          >
            <div className="w-1 h-1 bg-brand-accent rounded-full group-hover:w-3 transition-all duration-300" />
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const Compliance = () => {
  return (
    <section id="compliance" className="pt-36 pb-24 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif-title mb-8">Transparency & <span className="italic text-brand-green font-black">Compliance</span></h2>
            <p className="text-xl font-semibold text-slate-600 leading-relaxed max-w-xl">
              Trident Academy of Technology maintains the highest standards of transparency in its operations and financial management. Access our official documents and regulatory approvals below.
            </p>
            <div className="mt-12 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 border-dashed relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <p className="text-brand-primary font-black italic relative z-10">
                "Governance rooted in trust and institutional integrity."
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <DocItem 
              icon={FileText} 
              title="Audited Financials" 
              links={[
                { name: "FY 2024-2025 (Provisional)", href: "https://tat.ac.in/wp-content/uploads/2025/09/PROVISIONAL-BS.pdf" },
                { name: "FY 2023-2024", href: "https://tat.ac.in/wp-content/uploads/2024/12/D.Foundation-2023-24.pdf" }
              ]} 
            />
            <DocItem 
              icon={Gavel} 
              title="Rules & Regulations" 
              links={[
                { name: "Student Hand Book", href: "https://tat.ac.in/wp-content/uploads/2023/05/Student-Hand-Book-Revised.pdf" },
                { name: "HR Policies", href: "https://tat.ac.in/wp-content/uploads/2025/08/HR-POLICY.pdf" }
              ]} 
            />
            <DocItem 
              icon={Landmark} 
              title="AICTE Approvals" 
              links={[
                { name: "Approval Letter 2025-26", href: "https://tat.ac.in/wp-content/uploads/2025/09/EOA-Report-25-26.pdf" }
              ]} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
