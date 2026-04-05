import React from 'react';

const SuccessesPage = () => {
  const tombstoneImages = [
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture1-1.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture3.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture2-1.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture4.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture5.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture6.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture7.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture8.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture9.png',
    'https://gcp-international.com/wp-content/uploads/2023/09/Picture10.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture1-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture2-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture4.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture5.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture6.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture7.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture10-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture9.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture8-2.png'
  ];

  const additionalMinerals = [
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture1-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture2-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture3-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture4-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture5-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture6-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture7-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture8-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture9-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture10-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture11.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture12.png'
  ];

  const healthcareImages = [
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture1-1-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture2-4.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture3-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture4-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture5-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture6-2.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture7-2.png'
  ];

  const healthcareAdditional = [
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture1-6.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture2-5.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture3-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture4-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture5-3.png'
  ];

  const ittImages = [
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture1-7.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture2-6.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture3-4.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture4-4.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture5-4.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture6-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture7-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture8-8.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture9-6.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture10-3.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture11-1.png',
    'https://gcp-international.com/wp-content/uploads/2025/04/Picture12-1.png'
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-light text-center mb-6 text-[#2c4c6e] tracking-wide">SUCCESSES</h1>
        <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-4"></div>
        <p className="text-center text-[#666] mb-16 text-sm tracking-wide">Transaction Highlights</p>
        
        <div className="space-y-20">
          <div className="space-y-4 text-[#555] leading-relaxed text-sm">
            <h3 className="text-xl font-medium text-[#333] mb-4">Background</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>GCP International Limited has a long history of Successes starting in 1990. In its first decade of operations, GCP International Limited focused on the IT&T and healthcare industries closing local and international transactions in the private hospital, healthtech, mobile cellular, Satellite Pay-TV, software services, web development, web hosting, IT distribution and Internet industries. This included direct investments in the healthcare and IT&T industries</li>
              <li>In 2001, GCP International Limited opened its first Asian office in Taipei, and in 2002, GCP International Limited opened its first mainland China office in Chengdu. After opening a further office in Nanjing, and appointing representatives in Shanghai and Beijing, GCP International Limited moved its headquarters to Beijing in 2005</li>
              <li>In its second decade, GCP International Limited made a series of direct investments with a focus on fast growing industries, technology, minerals & metals, completed three IPOs on the London AIM Market, raised funds from institutions, hedge funds and proprietary trading desks for clients, and advised on the successful IPO on the Australian Securities Exchange of a gold development company with assets in Vietnam</li>
              <li>In GCP International Limited's third decade it focused on the minerals & metals markets, healthcare and technology, playing to its strengths with Australia being a major source of raw materials for the international markets, and an advanced healthcare & technology industry, as well as GCP International Limited's presence in mainland China, and its strong Asian and global relationships</li>
              <li>In 2019, GCP International Limited expanded its presence to the UK, Europe and North America. Australia and the EU's relationship is of growing importance, as well as 70% of Australians claim European heritage. A quarter of Australia's inward foreign investment is from the United States, and the EU is one of Australia's largest two-way investment partners.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-4">Minerals & Metals Transaction Highlights</h3>
            <p className="text-[#666] mb-8 text-sm">Product Offtake – Mining & Metals – Japan, U.S., South Korea, and mainland China</p>
            <div className="grid grid-cols-5 gap-4">
              {tombstoneImages.map((img, i) => (
                <div key={i} className="bg-white shadow-sm">
                  <img src={img} alt={`Transaction ${i + 1}`} className="w-full h-auto" />
                  <div className="text-center py-1 bg-[#555]">
                    <p className="text-[9px] text-white uppercase tracking-wide">In conjunction with GC Partners Asia Limited</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-4">More Minerals & Metals Transaction Highlights</h3>
            <p className="text-[#666] mb-8 text-sm">Transaction & Corporate Advisory Experience – London, mainland China, Laos and Vietnam</p>
            <div className="grid grid-cols-5 gap-4">
              {additionalMinerals.map((img, i) => (
                <div key={i} className="bg-white shadow-sm">
                  <img src={img} alt={`Transaction ${i + 1}`} className="w-full h-auto" />
                  <div className="text-center py-1 bg-[#555]">
                    <p className="text-[9px] text-white uppercase tracking-wide">In conjunction with GC Partners Asia Limited</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-4">Healthcare, HealthTech & Biotech Transaction Highlights</h3>
            <p className="text-[#666] mb-8 text-sm">Corporate Advisory & Business Agreements – mainland China, Taiwan and the U.S.</p>
            <div className="grid grid-cols-5 gap-4">
              {healthcareImages.map((img, i) => (
                <div key={i} className="bg-white shadow-sm">
                  <img src={img} alt={`Healthcare ${i + 1}`} className="w-full h-auto" />
                  <div className="text-center py-1 bg-[#555]">
                    <p className="text-[9px] text-white uppercase tracking-wide">In conjunction with GC Partners Asia Limited</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-4">More Healthcare, HealthTech & Biotech Transaction Highlights</h3>
            <p className="text-[#666] mb-8 text-sm">R&D Exchange, Asset Bid, Investment, M&A and fund raising advisory – Australia, U.S., Germany, UK, Hong Kong, and Dubai</p>
            <div className="grid grid-cols-5 gap-4">
              {healthcareAdditional.map((img, i) => (
                <div key={i} className="bg-white shadow-sm">
                  <img src={img} alt={`Healthcare ${i + 1}`} className="w-full h-auto" />
                  <div className="text-center py-1 bg-[#555]">
                    <p className="text-[9px] text-white uppercase tracking-wide">In conjunction with GC Partners Asia Limited</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-4">IT&T Transaction Highlights</h3>
            <p className="text-[#666] mb-8 text-sm">Corporate Advisory, MBI, M&A, investment, & fund raising – U.S., Hong Kong and Singapore</p>
            <div className="grid grid-cols-5 gap-4">
              {ittImages.map((img, i) => (
                <div key={i} className="bg-white shadow-sm">
                  <img src={img} alt={`IT&T ${i + 1}`} className="w-full h-auto" />
                  <div className="text-center py-1 bg-[#555]">
                    <p className="text-[9px] text-white uppercase tracking-wide">In conjunction with GC Partners Asia Limited</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessesPage;