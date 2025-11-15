import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-montserrat font-semibold text-slate-gray mb-8">
            Contact Us
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-lato leading-relaxed">
              Coming soon - Get in touch with the Health Fit Fix team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;