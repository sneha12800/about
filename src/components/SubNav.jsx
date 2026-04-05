import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SubNav = () => {
  const [activeToken, setActiveToken] = useState('stats-counter');
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { name: 'Stats', id: 'stats-counter' },
    { name: 'Vision', id: 'identity' },
    { name: 'History', id: 'milestones' },
    { name: 'Leadership', id: 'leadership' },
    { name: 'Success', id: 'success' },
    { name: 'Partners', id: 'partners' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 700;
      setIsVisible(window.scrollY > heroHeight - 100);

      // ScrollSpy logic
      let current = '';
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = link.id;
          }
        }
      }
      if (current) setActiveToken(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-brand-primary/5 z-[1000] py-4 shadow-sm"
        >
          <div className="container-custom">
            <ul className="flex justify-center gap-6 md:gap-12">
              {links.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleClick(link.id)}
                    className={cn(
                      "relative text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 pb-1.5",
                      activeToken === link.id ? "text-brand-primary" : "text-slate-400 hover:text-brand-primary/60"
                    )}
                  >
                    {link.name}
                    {activeToken === link.id && (
                      <motion.div 
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubNav;
