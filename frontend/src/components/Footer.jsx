import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#888]">
          <div>
            <p className="font-medium text-[#2c4c6e]">GCP INTERNATIONAL LIMITED</p>
            <p className="text-xs mt-1">Established 1989</p>
          </div>
          <div className="text-xs">
            © 2026 GCP International Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;