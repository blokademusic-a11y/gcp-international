import React from 'react';
import { ArrowRight } from 'lucide-react';

const ESGStatementSection = () => {
  return (
    <section id="esg" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="ESG Statement"
              className="w-full shadow-lg"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide">ESG STATEMENT</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e]" />
            </div>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <p>
                GCP International Limited offers both a broad and exceptional quality in client deliverables, combined with 
                strong company ethics, and a code of outstanding corporate social responsibility.
              </p>
              
              <p>
                GCP International Limited promotes good corporate citizenship with a key focus on building long term trust 
                with its clients.
              </p>
              
              <p>
                We are committed to sustainable business practices and responsible investment strategies that consider 
                environmental impact, social responsibility, and strong governance principles.
              </p>
              
              <p>
                GCP International Limited believes that long-term business success is inseparable from environmental 
                stewardship, social equity, and transparent governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGStatementSection;