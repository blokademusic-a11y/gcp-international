import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SuccessesPage from './pages/SuccessesPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import AdvisoryBoardsPage from './pages/AdvisoryBoardsPage';
import NegotiationSupportPage from './pages/NegotiationSupportPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import ESGStatementPage from './pages/ESGStatementPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/successes" element={<SuccessesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/advisory-boards" element={<AdvisoryBoardsPage />} />
          <Route path="/negotiation-support" element={<NegotiationSupportPage />} />
          <Route path="/confidentiality" element={<ConfidentialityPage />} />
          <Route path="/esg-statement" element={<ESGStatementPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;