import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiUsers, FiLock } = FiIcons;

const CredibilityStrip = () => {
  const features = [
    {
      icon: FiShield,
      label: 'Evidence-Aware Advice'
    },
    {
      icon: FiHeart,
      label: 'No-Hype Health'
    },
    {
      icon: FiUsers,
      label: 'Real-Life Friendly'
    },
    {
      icon: FiLock,
      label: 'Privacy First'
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-leaf-green bg-opacity-10 rounded-full flex items-center justify-center">
                  <SafeIcon
                    icon={feature.icon}
                    className="w-6 h-6 text-deep-green"
                  />
                </div>
              </div>
              <p className="font-montserrat font-semibold text-slate-gray text-sm">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-center text-gray-500 text-sm font-lato mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Backed by research summaries and real-world experience.
        </motion.p>
      </div>
    </section>
  );
};

export default CredibilityStrip;