import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiUsers, FiLock } = FiIcons;

const CredibilityStrip = () => {
  const features = [
    {
      icon: FiShield,
      label: 'Evidence-Aware',
      desc: 'Backed by science'
    },
    {
      icon: FiHeart,
      label: 'No-Hype Health',
      desc: 'Just honest advice'
    },
    {
      icon: FiUsers,
      label: 'Real-Life Friendly',
      desc: 'Fits your schedule'
    },
    {
      icon: FiLock,
      label: 'Privacy First',
      desc: 'Your data is safe'
    }
  ];

  return (
    <section className="py-10 -mt-10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-off-white group-hover:bg-soft-green rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <SafeIcon
                    icon={feature.icon}
                    className="w-7 h-7 text-gray-400 group-hover:text-leaf-green transition-colors duration-300"
                  />
                </div>
                <h3 className="font-montserrat font-bold text-slate-gray text-base mb-1">
                  {feature.label}
                </h3>
                <p className="text-xs text-gray-500 font-lato">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityStrip;