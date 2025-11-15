import React from 'react';
import { motion } from 'framer-motion';

const MeetGuides = () => {
  const guides = [
    {
      name: 'Coach Alex',
      specialty: '10-minute movement & habit stacking',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Dr Maya',
      specialty: 'Nutrition, gut health & supplements',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Mindset Sam',
      specialty: 'Motivation & stress resilience',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Tech Jess',
      specialty: 'Honest reviews & wellness tools',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
            Meet Your Guides
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${guide.color} p-1`}>
                  <img
                    src={guide.avatar}
                    alt={`${guide.name} - Health Fit Fix guide`}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2 group-hover:text-deep-green transition-colors">
                {guide.name}
              </h3>
              
              <p className="text-gray-600 font-lato text-sm">
                {guide.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetGuides;