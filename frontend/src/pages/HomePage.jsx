import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import OurServicesPage from './OurServicesPage';
import AdvisoryBoardsPage from './AdvisoryBoardsPage';
import NegotiationSupportPage from './NegotiationSupportPage';
import ConfidentialityPage from './ConfidentialityPage';
import ESGStatementPage from './ESGStatementPage';

const HomePageContent = () => {
  return (
    <>
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
    </>
  );
};

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/services" element={<><Navbar /><OurServicesPage /><Footer /></>} />
        <Route path="/advisory-boards" element={<><Navbar /><AdvisoryBoardsPage /><Footer /></>} />
        <Route path="/negotiation-support" element={<><Navbar /><NegotiationSupportPage /><Footer /></>} />
        <Route path="/confidentiality" element={<><Navbar /><ConfidentialityPage /><Footer /></>} />
        <Route path="/esg-statement" element={<><Navbar /><ESGStatementPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;