import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvisoryBoardsSection = () => {
  return (
    <section id="advisory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <Link to="/advisory-boards" className="flex items-center gap-3 mb-6 group">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide group-hover:text-[#1a3a54] transition-colors">ADVISORY BOARDS</h3>
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
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              alt="Advisory Boards"
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardsSection;