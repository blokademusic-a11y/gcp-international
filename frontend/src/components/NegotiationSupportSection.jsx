import React from 'react';
import { ArrowRight } from 'lucide-react';

const NegotiationSupportSection = () => {
  return (
    <section id="negotiation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Negotiation Support"
              className="w-full shadow-lg"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide">NEGOTIATION SUPPORT</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e]" />
            </div>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <p>
                GCP International Limited transaction process not only requires experience and commitment, but a 
                huge amount of management and staff effort on a daily basis, utilising disciplined, fully documented 
                and sustainable transaction processes.
              </p>
              
              <p>
                GCP International Limited works closely with the individual client's executive management playing 
                an important role with our client in their project's development.
              </p>
              
              <p>
                GCP International Limited services add considerable value to our client and their key stakeholders.
              </p>
              
              <p>
                GCP International Limited brings over thirty years of visible and documented experience including 
                equity capital markets, corporate finance, project finance, private placements, initial public offerings, 
                and trading of debt securities and their derivatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NegotiationSupportSection;