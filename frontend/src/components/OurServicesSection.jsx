import React from 'react';
import { ArrowRight } from 'lucide-react';

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
                alt="James Egan"
                className="w-full shadow-lg"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide">OUR SERVICES</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e]" />
            </div>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <h4 className="text-lg font-semibold text-[#333]">Mr James Egan</h4>
              
              <p>
                James Egan is the founder, Chairman and Managing Director of GCP International Limited. He has more than 
                forty years experience in domestic and international capital markets. He has a deep loyalty and commitment 
                to providing the best Corporate Finance and Corporate Advisory Services to GCP International Limited's clients.
              </p>
              
              <p>
                With a background of living and working in Australia, the United Kingdom, parts of SE Asia, Japan and 
                mainland China, Mr Egan has worked in the financial services industry since 1978. He has experience in 
                senior executive roles with market leaders including Ord Minnett, Schroders and Merrill Lynch. At Merrill 
                he was a founding Director, and Head of Merrill Lynch's Australian Merchant Banking operations and sat on 
                the Australian Executive Committee. Later he joined Shearson Lehman Bros Asia Inc. as Senior Vice President 
                based in London and then Tokyo, where he was head of Asian Trading & Sales for all non-USD securities, as well 
                as advising on new issues.
              </p>
              
              <p>
                Mr Egan founded GCP International Limited's business in 1989 with a focus on providing cross-border 
                Corporate Finance, Advisory and M&A services. His awareness of the persistent momentum in the Asian 
                economies led GCP International Limited to open their first Asian office in Taiwan in 2001, and then in 
                mainland China in 2002, where Mr Egan lived for 15 years.
              </p>
              
              <p>
                In 2019, Mr Egan led GCP International Limited's entry into the European and U.S. markets. With a deep 
                understanding of the various key geopolitical, business, market, packaging, structuring & financial issues 
                that can drive a transaction process, Mr Egan has led successful teams in various transaction environments 
                for over three decades with a focus on cross-border financing, customer acquisition and M&A.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;