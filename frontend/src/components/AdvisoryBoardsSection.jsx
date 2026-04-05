import React from 'react';
import { ArrowRight } from 'lucide-react';

const AdvisoryBoardsSection = () => {
  return (
    <section id="advisory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-medium text-[#2c4c6e] tracking-wide">ADVISORY BOARDS</h3>
              <ArrowRight className="w-5 h-5 text-[#2c4c6e]" />
            </div>
            <div className="w-12 h-[2px] bg-[#ddd] mb-6"></div>
            
            <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
              <p>
                GCP has worked with a large variety of companies including producers of gold, iron ore and tin, and 
                clients with advanced development projects in gold and battery minerals including graphite, HPA, 
                copper, zinc, and nickel, as well clients with phosphate & potash, iron ore, iron sands, kaolin, mineral 
                sands and oil & gas projects.
              </p>
              
              <p>
                We have worked in the battery minerals markets since 2015. We believe that the specialised markets 
                for many of the critical minerals are well suited for GCP International's skill set. The market 
                participants in these minerals are often less well known to the public, clients and other advisory firms. 
                Our experience is gained from our large network of relationships combined with detailed research 
                ensuring that there is a large, qualified audience.
              </p>
              
              <p className="font-semibold text-[#333]">
                What are Advisory Boards?
              </p>
              
              <p>
                Advisory Boards provide the strategic advice and complementary skills required to take small or 
                medium businesses to the next level.
              </p>
              
              <p>
                An Advisory Board is an individual, or a select group of "independent" people, who provide advice 
                and support to the owners/shareholders/directors of a business. They are composed of subject matter 
                experts who provide high quality, objective advice to business leaders in areas of strategic 
                importance. They provide non-binding strategic advice to organisations and are informal in nature. 
                This gives greater flexibility in how they are structured and managed, when compared to a board of 
                directors.
              </p>
              
              <p>
                Whereas formal boards of directors have legally defined responsibilities, Advisory Boards are not 
                regulated under the Corporations Act or corporate governance codes. Advisory Boards advise. They 
                do not make decisions like a formal board. However, calling a board that has a governance function 
                an "advisory board" is a growing practice.
              </p>
              
              <p>
                An Advisory Board enables the owners or managers of the business to have access to an independent 
                view and for a "safe" place to discuss issues of major significance. The role of the Advisory Board will 
                evolve over time, but it is useful to document a charter to provide some direction for its members.
              </p>
              
              <p>
                GCP International Limited Chairman & Managing Director, James Egan, with over 40 years 
                experience across various industries and stages of business development, is available for Advisory 
                Board roles – see his Bio under "Leadership".
              </p>
            </div>
          </div>
          
          {/* Right Side - Image */}
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