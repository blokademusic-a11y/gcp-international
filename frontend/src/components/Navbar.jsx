import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2c4c6e] flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2c4c6e] font-semibold text-sm tracking-wide">GCP INTERNATIONAL</span>
              <span className="text-[#888] text-[10px] tracking-wider">LIMITED</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-[11px] font-medium text-[#2c4c6e] hover:text-[#1a3a54] tracking-wider border-b-2 border-[#2c4c6e] pb-1">HOME</button>
            <button onClick={() => scrollToSection('services')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">OUR SERVICES</button>
            <button onClick={() => scrollToSection('successes')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">SUCCESSES</button>
            <button onClick={() => scrollToSection('leadership')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">LEADERSHIP</button>
            <button onClick={() => scrollToSection('contact')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONTACT</button>
            <button onClick={() => scrollToSection('advisory')} className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ADVISORY BOARDS</button>
            <button onClick={() => scrollToSection('negotiation')} className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">NEGOTIATION SUPPORT</button>
            <button onClick={() => scrollToSection('confidentiality')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONFIDENTIALITY</button>
            <button onClick={() => scrollToSection('esg')} className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ESG STATEMENT</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;