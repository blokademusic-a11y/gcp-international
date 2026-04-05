import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-light mb-6 text-[#2c4c6e] tracking-wide">
          CONTACT
        </h2>
        <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-12"></div>
        
        <div className="space-y-6">
          <p className="text-[#555] leading-relaxed">
            For inquiries about our corporate finance and advisory services, please contact us:
          </p>
          
          <div className="flex items-center justify-center gap-3 pt-4">
            <Mail className="w-5 h-5 text-[#2c4c6e]" />
            <a href="mailto:info@gcpinternational.com" className="text-[#2c4c6e] hover:underline">
              info@gcpinternational.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;