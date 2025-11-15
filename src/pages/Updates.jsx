import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Updates = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-montserrat font-semibold text-slate-gray mb-8">
            Latest Updates
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-lato leading-relaxed">
              Coming soon - Stay updated with the latest health and wellness insights from Health Fit Fix.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;