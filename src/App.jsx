import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Mission from './pages/Mission';
import Categories from './pages/Categories';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import PrimeBiome from './pages/PrimeBiome';
import Mitolyn from './pages/Mitolyn';
import NerveFresh from './pages/NerveFresh';
import NerveFreshEditorial from './pages/NerveFreshEditorial';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/prime-biome" element={<PrimeBiome />} />
        <Route path="/mitolyn" element={<Mitolyn />} />
        <Route path="/nerve-fresh" element={<NerveFresh />} />
        <Route path="/nerve-relief-research" element={<NerveFreshEditorial />} />
      </Routes>
    </Router>
  );
}

export default App;