import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-sm font-medium text-slate-800 tracking-wider">GCP INTERNATIONAL LIMITED</h3>
            <p className="text-xs text-slate-500 tracking-wide mt-1">ESTABLISHED 1989</p>
          </div>
          
          <div className="text-xs text-slate-500">
            © 2026 GCP International Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;