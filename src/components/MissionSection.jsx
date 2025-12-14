import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-gray to-deep-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-aqua rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Our Mission
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-8 leading-tight">
            We Cut Through the Noise
          </h2>

          <p className="text-xl font-lato leading-relaxed text-white/90 mb-6">
            Health advice shouldn't be confusing. We translate the latest research into practical, 
            realistic strategies for busy adults who want to feel better — without the overwhelm.
          </p>

          <p className="text-lg font-lato leading-relaxed text-white/80">
            No quick fixes. No miracle cures. Just smart, science-backed guidance that respects 
            your time, your body, and your real life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;