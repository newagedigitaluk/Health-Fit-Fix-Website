import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CredibilityStrip from '../components/CredibilityStrip';
import MissionSection from '../components/MissionSection';
import CategoriesPreview from '../components/CategoriesPreview';
import MeetGuides from '../components/MeetGuides';
import EmailCapture from '../components/EmailCapture';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <HeroSection />
        <CredibilityStrip />
        <MissionSection />
        <CategoriesPreview />
        <MeetGuides />
        <EmailCapture />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;