import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
          <button onClick={() => scrollToSection('home')} className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_animations-14/artifacts/cimmm7mt_image.png" 
              alt="GCP International Limited" 
              className="h-12"
            />
          </button>
          
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-[11px] font-medium text-[#2c4c6e] hover:text-[#1a3a54] tracking-wider border-b-2 border-[#2c4c6e] pb-1">HOME</button>
            <a href="/services" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">OUR SERVICES</a>
            <button onClick={() => scrollToSection('successes')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">SUCCESSES</button>
            <button onClick={() => scrollToSection('leadership')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">LEADERSHIP</button>
            <button onClick={() => scrollToSection('contact')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONTACT</button>
            <a href="/advisory-boards" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ADVISORY BOARDS</a>
            <a href="/negotiation-support" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">NEGOTIATION SUPPORT</a>
            <a href="/confidentiality" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONFIDENTIALITY</a>
            <a href="/esg-statement" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ESG STATEMENT</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;