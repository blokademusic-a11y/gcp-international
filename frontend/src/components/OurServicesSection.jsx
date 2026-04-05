import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image with blue bar */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="pl-8">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c6230c69e9d4f52fff61c/db7ebecbc_image.png"
                alt="Our Services"
                className="w-full shadow-lg"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <Link to="/services" className="flex items-center gap-3 mb-6 group">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide group-hover:text-[#1a3a54] transition-colors">OUR SERVICES</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e] group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <p>
                GCP International Limited provides access to a broad range of strategic corporate, investment, finance and 
                technology partners actively participating in the relevant supply chains based in the key international mining, 
                production, manufacturing, product trading, and investment & finance centres.
              </p>
              
              <p>
                GCP International Limited access includes corporations, banks, funds, family offices, policy institutions, 
                policy and commercial banks, and sources of government assistance.
              </p>
              
              <p>
                GCP International Limited ability to offer a geographically broad service saves our clients' splitting the 
                potential partner search and the transaction management.
              </p>
              
              <p>
                GCP International Limited access is structured and packaged with cognizance of the specific culture targeted 
                and with the relevant transaction management experience, skills and knowledge to close agreement and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;