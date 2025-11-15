import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck } = FiIcons;

const MissionSection = () => {
  const expectations = [
    'Clear, actionable tips',
    'Honest product reviews',
    'Weekly "Fix List" email with 5-minute wins'
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray">
              Why Health Fit Fix?
            </h2>
            
            <p className="text-lg text-gray-600 font-lato leading-relaxed">
              We help busy adults 30+ cut through the noise with practical guidance you can actually use — from nutrition and movement to sleep, stress, and smart supplements.
            </p>

            <p className="text-lg font-montserrat font-semibold text-deep-green">
              No quick fixes. Just simple steps that work.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-montserrat font-semibold text-slate-gray">
                What to Expect:
              </h3>
              <ul className="space-y-3">
                {expectations.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-lato text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Wellness workspace with journal and smoothie"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;