import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&q=85)',
        }}
      >
        <div className="absolute inset-0 bg-[#1a2f4a]/75"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-wide">
          GCP International Limited
        </h1>
        <div className="flex items-center gap-3 text-sm tracking-[0.25em] mb-2 uppercase">
          <span>Corporate Finance & Advisory</span>
          <span className="text-white/60">·</span>
          <span>International Trade & Development</span>
        </div>
        <div className="text-xs tracking-[0.4em] mt-6 opacity-80">
          Established 1989
        </div>
        
        <button 
          onClick={scrollDown}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </button>
      </div>
    </div>
  );
};

export default Hero;