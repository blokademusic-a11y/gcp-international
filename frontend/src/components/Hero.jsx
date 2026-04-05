import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&q=85)',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-wide">
          GCP International Limited
        </h1>
        <div className="text-sm tracking-[0.3em] mb-2 uppercase">
          Corporate Finance & Advisory · International Trade & Development
        </div>
        <div className="text-xs tracking-[0.4em] mt-4 opacity-80">
          Established 1989
        </div>
      </div>
    </div>
  );
};

export default Hero;