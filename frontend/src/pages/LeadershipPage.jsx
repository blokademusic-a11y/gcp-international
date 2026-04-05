import React from 'react';
import Leadership from '../components/Leadership';

const LeadershipPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="py-16">
        <h1 className="text-4xl font-light text-slate-800 mb-6 text-center tracking-wide">LEADERSHIP</h1>
        <div className="w-16 h-[1px] bg-slate-300 mx-auto mb-12"></div>
      </div>
      <Leadership />
    </div>
  );
};

export default LeadershipPage;