import React from 'react';

const Successes = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-6 text-slate-800 tracking-wide">
          SUCCESSES
        </h2>
        <div className="w-16 h-[1px] bg-slate-300 mx-auto mb-4"></div>
        <p className="text-center text-slate-600 mb-16 text-sm">Transaction Highlights</p>
        
        <div className="space-y-20">
          {/* Background Section */}
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <h3 className="text-xl font-medium text-slate-800 mb-4">Background</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                GCP International Limited has a long history of Successes starting in 1990. In its first decade of operations, 
                GCP International Limited focused on the IT&T and healthcare industries closing local and international 
                transactions in the private hospital, healthtech, mobile cellular, Satellite Pay-TV, software services, web 
                development, web hosting, IT distribution and Internet industries. This included direct investments in the 
                healthcare and IT&T industries
              </li>
              <li>
                In 2001, GCP International Limited opened its first Asian office in Taipei, and in 2002, GCP International 
                Limited opened its first mainland China office in Chengdu. After opening a further office in Nanjing, and 
                appointing representatives in Shanghai and Beijing, GCP International Limited moved its headquarters to 
                Beijing in 2005
              </li>
              <li>
                In its second decade, GCP International Limited made a series of direct investments with a focus on fast 
                growing industries, technology, minerals & metals, completed three IPOs on the London AIM Market, raised 
                funds from institutions, hedge funds and proprietary trading desks for clients, and advised on the successful 
                IPO on the Australian Securities Exchange of a gold development company with assets in Vietnam
              </li>
              <li>
                In GCP International Limited's third decade it focused on the minerals & metals markets, healthcare and 
                technology, playing to its strengths with Australia being a major source of raw materials for the international 
                markets, and an advanced healthcare & technology industry, as well as GCP International Limited's presence 
                in mainland China, and its strong Asian and global relationships
              </li>
              <li>
                In 2019, GCP International Limited expanded its presence to the UK, Europe and North America. Australia and 
                the EU's relationship is of growing importance, as well as 70% of Australians claim European heritage. A 
                quarter of Australia's inward foreign investment is from the United States, and the EU is one of Australia's 
                largest two-way investment partners.
              </li>
            </ul>
          </div>

          {/* Minerals & Metals */}
          <div>
            <h3 className="text-2xl font-light text-slate-800 mb-4">Minerals & Metals Transaction Highlights</h3>
            <p className="text-slate-600 mb-8 text-sm">Product Offtake – Mining & Metals – Japan, U.S., South Korea, and mainland China</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-slate-100 mb-3 flex items-center justify-center">
                    <div className="text-center text-xs text-slate-400 p-4">
                      Transaction Tombstone {i + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-white bg-slate-600 py-1 px-2 uppercase tracking-wider">
                      In conjunction with GC Partners Asia Limited
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Healthcare */}
          <div>
            <h3 className="text-2xl font-light text-slate-800 mb-4">Healthcare, HealthTech & Biotech Transaction Highlights</h3>
            <p className="text-slate-600 mb-8 text-sm">Corporate Advisory & Business Agreements – mainland China, Taiwan and the U.S.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-slate-100 mb-3 flex items-center justify-center">
                    <div className="text-center text-xs text-slate-400 p-4">
                      Healthcare Transaction {i + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-white bg-slate-600 py-1 px-2 uppercase tracking-wider">
                      In conjunction with GC Partners Asia Limited
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT&T */}
          <div>
            <h3 className="text-2xl font-light text-slate-800 mb-4">IT&T Transaction Highlights</h3>
            <p className="text-slate-600 mb-8 text-sm">Corporate Advisory, MBI, M&A, investment, & fund raising – U.S., Hong Kong and Singapore</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-slate-100 mb-3 flex items-center justify-center">
                    <div className="text-center text-xs text-slate-400 p-4">
                      IT&T Transaction {i + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-white bg-slate-600 py-1 px-2 uppercase tracking-wider">
                      In conjunction with GC Partners Asia Limited
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successes;