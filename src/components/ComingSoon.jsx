import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiVideo, FiHeadphones } = FiIcons;

const ComingSoon = () => {
  const upcomingFeatures = [
    {
      icon: FiBookOpen,
      title: 'In-Depth Guides',
      description: 'Comprehensive resources on sleep, metabolism, and more',
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: FiVideo,
      title: 'Expert Interviews',
      description: 'Conversations with researchers and health professionals',
      color: 'text-purple-500 bg-purple-50'
    },
    {
      icon: FiHeadphones,
      title: 'Wellness Podcast',
      description: 'Science-backed health advice in audio format',
      color: 'text-green-500 bg-green-50'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-gray mb-4">
            What's Next for Health Fit Fix
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            We're building more resources to support your wellness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-off-white rounded-2xl p-8 border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6`}>
                <SafeIcon icon={feature.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-slate-gray mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;