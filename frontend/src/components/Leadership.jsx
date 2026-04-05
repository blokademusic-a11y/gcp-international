import React from 'react';

const Leadership = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="w-1 bg-blue-600 absolute left-0 top-0 bottom-0"></div>
            <div className="pl-8">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Mr James Egan"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-slate-800 mb-2">Mr James Egan</h3>
            
            <div className="text-slate-600 leading-relaxed space-y-4 text-sm">
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
                the Australian Executive Committee.
              </p>
              
              <p>
                Later he joined Shearson Lehman Bros Asia Inc. as Senior Vice President based in London and then Tokyo, 
                where he was head of Asian Trading & Sales for all non-USD securities, as well as advising on new issues.
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

export default Leadership;