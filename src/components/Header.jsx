import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Users } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'https://about-tat.tekkzy.com/' },
    { name: 'Admissions', href: 'https://admissions-tat.tekkzy.com/' },
    { name: 'Academics', href: 'https://academics-tat.tekkzy.com/' },
    { name: 'Research', href: 'https://research-tat.tekkzy.com/' },
    { name: 'Campus Life', href: 'https://campuslife-tat.tekkzy.com/' },
    { name: 'Activities', href: 'https://activities-tat.tekkzy.com/' },
    { name: 'Contact Us', href: 'https://contactus-tat.tekkzy.com/' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[1050]">
      {/* Utility Bar */}
      <div 
        className={cn(
          "bg-brand-primary border-b border-white/10 transition-all duration-500 overflow-hidden",
          isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2.5 opacity-100"
        )}
      >
        <div className="container-custom flex justify-between items-center text-[11px] font-semibold text-white/80 tracking-widest uppercase">
          <span>
            Affiliated to BPUT <span className="mx-2 text-brand-accent">|</span> NAAC 'A' Accredited
          </span>
          <div className="flex gap-6">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Users size={12} />
              Alumni
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "bg-white transition-all duration-500",
          isScrolled ? "py-3 shadow-lg" : "py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3.5 group">
            <img 
              src="https://admissions-tat-tekkzy.netlify.app/logo.png" 
              alt="TAT Logo" 
              className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain drop-shadow-sm" 
            />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="font-serif text-[22px] md:text-[24px] font-black text-brand-secondary tracking-wider uppercase leading-none">
                Trident
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#1B4D8E] to-transparent my-1" />
              <div className="text-[9px] md:text-[10px] font-semibold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none">
                Academy of Technology
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={cn(
                      "text-sm font-extrabold uppercase tracking-[0.14em] transition-all duration-300 relative py-1",
                      link.name === 'About' 
                        ? "text-brand-primary border-b-2 border-brand-primary" 
                        : "text-brand-secondary hover:text-brand-primary"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://apply-now.tekkzy.com/" 
              className="bg-[#E63946] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-7 py-3 rounded uppercase transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-primary hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-white border-t border-brand-primary/10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
            isOpen ? "max-h-[85vh] opacity-100 py-6 visible shadow-2xl" : "max-h-0 opacity-0 py-0 invisible"
          )}
        >
          <div className="px-6 flex flex-col">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href}
                className={cn(
                  "block py-3.5 px-3 text-[15px] font-extrabold text-brand-secondary uppercase tracking-[0.14em] border-b border-slate-100 hover:text-brand-primary hover:bg-slate-50 transition-all duration-500 rounded-lg",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{ transitionDelay: `${100 + i * 40}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div 
              className={cn(
                "pt-8 px-2 transition-all duration-700",
                isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              )}
              style={{ transitionDelay: '430ms' }}
            >
              <a 
                href="https://apply-now.tekkzy.com/" 
                className="block text-center bg-[#E63946] text-white text-sm font-extrabold py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)] uppercase tracking-wider"
              >
                Start Application
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
