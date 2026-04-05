import React from 'react';

const Overview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-light text-center mb-6 text-[#2c4c6e] tracking-wide">
          OVERVIEW
        </h2>
        <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-16"></div>
        
        <div className="space-y-6 text-[#555] text-center leading-relaxed">
          <p className="text-base">
            GCP International Limited is an independent boutique corporate finance and advisory firm providing cross-border 
            services to clients across Asia, Europe, and North America. Established in 1989, we bring over three decades of 
            experience in international capital markets.
          </p>
          
          <p className="text-base">
            We help our clients achieve their vision by opening the window to the key participants in supply chains based in 
            the key mining, production, technology, manufacturing, product trading, and investment & finance centres internationally.
          </p>
          
          <div className="pt-8 pb-4">
            <p className="text-base italic text-[#888] leading-relaxed">
              "GCP International Limited is equipped to provide our expert resources to assist you in building recognition of 
              the unique features of your business operations with the objective of securing and retaining the best strategic, 
              financial, investment and business partners."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;