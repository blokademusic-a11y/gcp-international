import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Overview from './components/Overview';
import OurServicesSection from './components/OurServicesSection';
import LeadershipSection from './components/LeadershipSection';
import AdvisoryBoardsSection from './components/AdvisoryBoardsSection';
import NegotiationSupportSection from './components/NegotiationSupportSection';
import ConfidentialitySection from './components/ConfidentialitySection';
import ESGStatementSection from './components/ESGStatementSection';
import OurServicesPage from './pages/OurServicesPage';
import LeadershipPage from './pages/LeadershipPage';
import AdvisoryBoardsPage from './pages/AdvisoryBoardsPage';
import NegotiationSupportPage from './pages/NegotiationSupportPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import ESGStatementPage from './pages/ESGStatementPage';
import SuccessesPage from './pages/SuccessesPage';
import ContactPage from './pages/ContactPage';

const HomePageContent = () => {
  return (
    <>
      <Hero />
      <Overview />
      <OurServicesSection />
      <LeadershipSection />
      <AdvisoryBoardsSection />
      <NegotiationSupportSection />
      <ConfidentialitySection />
      <ESGStatementSection />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/advisory-boards" element={<AdvisoryBoardsPage />} />
          <Route path="/negotiation-support" element={<NegotiationSupportPage />} />
          <Route path="/confidentiality" element={<ConfidentialityPage />} />
          <Route path="/esg-statement" element={<ESGStatementPage />} />
          <Route path="/successes" element={<SuccessesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;