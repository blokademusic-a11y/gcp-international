import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurServicesPage from './pages/OurServicesPage';
import LeadershipPage from './pages/LeadershipPage';
import AdvisoryBoardsPage from './pages/AdvisoryBoardsPage';
import NegotiationSupportPage from './pages/NegotiationSupportPage';
import ConfidentialityPage from './pages/ConfidentialityPage';
import ESGStatementPage from './pages/ESGStatementPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
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