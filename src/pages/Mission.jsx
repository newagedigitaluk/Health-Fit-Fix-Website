import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-montserrat font-semibold text-slate-gray mb-8">
            Our Mission
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-lato leading-relaxed">
              Coming soon - Learn more about our mission to help adults 30+ achieve better health through simple, evidence-based fixes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;