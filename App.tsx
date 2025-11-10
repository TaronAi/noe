import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import OurTeamPage from './pages/OurTeamPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-noe-dark font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/team" element={<OurTeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
