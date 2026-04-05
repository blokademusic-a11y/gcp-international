import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import ServiceCards from '../components/ServiceCards';
import Leadership from '../components/Leadership';
import Successes from '../components/Successes';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <ServiceCards />
      <Leadership />
      <Successes />
    </div>
  );
};

export default HomePage;