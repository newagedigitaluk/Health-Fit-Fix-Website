import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiHeart, FiMoon, FiBattery, FiArrowRight } = FiIcons;

const CategoriesPreview = () => {
  const categories = [
    {
      icon: FiTrendingUp,
      title: 'Fat-Loss & Metabolism',
      description: 'Smart habits for steady results',
      color: 'bg-rose-50 text-rose-500'
    },
    {
      icon: FiHeart,
      title: 'Gut & Digestive Health',
      description: 'Support from the inside out',
      color: 'bg-emerald-50 text-emerald-500'
    },
    {
      icon: FiMoon,
      title: 'Sleep & Stress',
      description: 'Recover better, feel better',
      color: 'bg-indigo-50 text-indigo-500'
    },
    {
      icon: FiBattery,
      title: 'Energy & Vitality',
      description: 'Bring your spark back',
      color: 'bg-amber-50 text-amber-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-gray mb-4">
              Explore What Matters Most
            </h2>
            <p className="text-lg text-gray-600 font-lato">
              Curated guides and insights to help you navigate your wellness journey.
            </p>
          </div>
          <button className="text-deep-green font-bold font-montserrat flex items-center hover:text-aqua transition-colors">
            View All Categories <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-soft transition-all duration-300 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${category.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-6`}>
                <SafeIcon
                  icon={category.icon}
                  className="w-7 h-7"
                />
              </div>
              
              <h3 className="text-xl font-montserrat font-bold text-slate-gray group-hover:text-deep-green transition-colors mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-500 font-lato leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-deep-green transition-colors">
                Learn More 
                <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;