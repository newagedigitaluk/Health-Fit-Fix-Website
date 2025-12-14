import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-soft-green to-blue-50 -z-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-leaf-green/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-aqua/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-2">
              <span className="text-sm font-semibold text-deep-green uppercase tracking-wide">
                Wellness Simplified
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-slate-gray leading-[1.1]">
              Your Fix for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-green to-leaf-green">
                Better Health
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 font-lato leading-relaxed max-w-lg">
              Realistic wellness advice for adults 30+ — from smart nutrition to stress, sleep, and metabolism. No fluff, just science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-aqua hover:bg-teal-500 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow shadow-lg ring-4 ring-aqua/20">
                Start Your Journey
              </button>
              <button className="bg-white hover:bg-gray-50 text-slate-gray font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-sm">
                Explore Topics
              </button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-lato">
                <span className="font-bold text-slate-gray">2,000+</span> members joined this week
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Active lifestyle"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-soft z-20 max-w-xs animate-float"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-leaf-green/10 rounded-full flex items-center justify-center text-leaf-green font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-gray">Daily Goals</p>
                  <p className="text-xs text-gray-500">Achieved today</p>
                </div>
              </div>
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute top-10 -right-10 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;