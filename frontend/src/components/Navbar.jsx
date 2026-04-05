import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
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
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_animations-14/artifacts/cimmm7mt_image.png" 
              alt="GCP International Limited" 
              className="h-12"
            />
          </Link>
          
          <div className="flex items-center gap-6">
            {isHomePage ? (
              <button onClick={() => scrollToSection('home')} className="text-[11px] font-medium text-[#2c4c6e] hover:text-[#1a3a54] tracking-wider border-b-2 border-[#2c4c6e] pb-1">HOME</button>
            ) : (
              <Link to="/" className="text-[11px] font-medium text-[#2c4c6e] hover:text-[#1a3a54] tracking-wider">HOME</Link>
            )}
            <Link to="/services" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">OUR SERVICES</Link>
            {isHomePage ? (
              <button onClick={() => scrollToSection('successes')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">SUCCESSES</button>
            ) : (
              <Link to="/#successes" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">SUCCESSES</Link>
            )}
            {isHomePage ? (
              <button onClick={() => scrollToSection('leadership')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">LEADERSHIP</button>
            ) : (
              <Link to="/#leadership" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">LEADERSHIP</Link>
            )}
            {isHomePage ? (
              <button onClick={() => scrollToSection('contact')} className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONTACT</button>
            ) : (
              <Link to="/#contact" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONTACT</Link>
            )}
            <Link to="/advisory-boards" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ADVISORY BOARDS</Link>
            <Link to="/negotiation-support" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">NEGOTIATION SUPPORT</Link>
            <Link to="/confidentiality" className="text-[11px] font-medium text-[#666] hover:text-[#2c4c6e] tracking-wider">CONFIDENTIALITY</Link>
            <Link to="/esg-statement" className="text-[11px] font-medium text-[#87b5c5] hover:text-[#2c4c6e] tracking-wider">ESG STATEMENT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;