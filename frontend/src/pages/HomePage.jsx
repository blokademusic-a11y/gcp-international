import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import OurServicesSection from '../components/OurServicesSection';
import LeadershipSection from '../components/LeadershipSection';
import AdvisoryBoardsSection from '../components/AdvisoryBoardsSection';
import NegotiationSupportSection from '../components/NegotiationSupportSection';
import ConfidentialitySection from '../components/ConfidentialitySection';
import ESGStatementSection from '../components/ESGStatementSection';
import SuccessesSection from '../components/SuccessesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <OurServicesSection />
      <LeadershipSection />
      <AdvisoryBoardsSection />
      <NegotiationSupportSection />
      <ConfidentialitySection />
      <ESGStatementSection />
      <SuccessesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;