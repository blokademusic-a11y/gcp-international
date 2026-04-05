import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'OUR SERVICES', path: '/services' },
    { name: 'SUCCESSES', path: '/successes' },
    { name: 'LEADERSHIP', path: '/leadership' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'ADVISORY BOARDS', path: '/advisory-boards' },
    { name: 'NEGOTIATION SUPPORT', path: '/negotiation-support' },
    { name: 'CONFIDENTIALITY', path: '/confidentiality' },
    { name: 'ESG STATEMENT', path: '/esg-statement' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className={`text-sm font-medium tracking-wider transition-colors ${
            scrolled ? 'text-slate-800' : 'text-white'
          }`}>
            GCP INTERNATIONAL
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-medium tracking-wider hover:opacity-70 transition-opacity relative ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                } ${
                  location.pathname === item.path ? 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-current' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;