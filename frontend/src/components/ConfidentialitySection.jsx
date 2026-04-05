import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConfidentialitySection = () => {
  return (
    <section id="confidentiality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <Link to="/confidentiality" className="flex items-center gap-3 mb-6 group">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide group-hover:text-[#1a3a54] transition-colors">CONFIDENTIALITY</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e] group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <p>
                GCP International Limited act for a small number of high value clients at any one time. In addition, 
                GCP International Limited rigid policy is not to engage with any company that is seen to compete 
                with another client, except where there are synergies that drive this contact.
              </p>
              <p>
                GCP International Limited maintains independence and a very high level of service, a level of service we 
                believe is mandatory for successful outcomes and exceptional value for its clients.
              </p>
              <p>
                GCP International Limited offers both a broad and exceptional quality in client deliverables, combined with 
                strong company ethics, and a code of outstanding corporate social responsibility.
              </p>
              <p>
                GCP International Limited promotes good corporate citizenship with a key focus on building long term trust 
                with its clients.
              </p>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
              alt="Confidentiality"
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialitySection;