import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-off-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-semibold text-slate-gray leading-tight">
              Your Fix for Better Health{' '}
              <span className="text-deep-green">Starts Here</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-lato leading-relaxed">
              Realistic wellness advice for adults 30+ — from smart nutrition to stress, sleep, and metabolism.
            </p>

            <div className="space-y-4">
              <button className="bg-aqua hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                Join the Fix List
              </button>
              <p className="text-sm text-gray-500 font-lato">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Adults 30+ enjoying a healthy active lifestyle outdoors"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-montserrat font-semibold text-deep-green">
                Simple Fixes for Better Health
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;