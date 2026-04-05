import React from 'react';

const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-light mb-6 text-[#2c4c6e] tracking-wide">CONTACT</h1>
        <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-12"></div>
        
        <div className="space-y-6">
          <p className="text-[#555] leading-relaxed">
            For inquiries about our corporate finance and advisory services, please contact us:
          </p>
          
          <div className="flex items-center justify-center gap-3 pt-4">
            <a href="mailto:info@gcpinternational.com" className="text-[#2c4c6e] hover:underline">
              info@gcpinternational.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;