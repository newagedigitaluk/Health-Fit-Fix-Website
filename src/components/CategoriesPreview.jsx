import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiHeart, FiMoon, FiBattery } = FiIcons;

const CategoriesPreview = () => {
  const categories = [
    {
      icon: FiTrendingUp,
      title: 'Fat-Loss & Metabolism',
      description: 'Smart habits for steady results',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiHeart,
      title: 'Gut & Digestive Health',
      description: 'Support from the inside out',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMoon,
      title: 'Sleep & Stress',
      description: 'Recover better, feel better',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: FiBattery,
      title: 'Energy & Vitality',
      description: 'Bring your spark back',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
            Explore What Matters Most
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-leaf-green cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <SafeIcon
                    icon={category.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-slate-gray group-hover:text-deep-green transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 font-lato">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;