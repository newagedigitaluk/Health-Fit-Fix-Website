import React from 'react';
import { motion } from 'framer-motion';

const MeetGuides = () => {
  const guides = [
    {
      title: 'Evidence-Based',
      description: 'Every recommendation is rooted in current research and clinical insight.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Real-World Tested',
      description: 'We understand busy schedules, tight budgets, and human limitations.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Transparently Honest',
      description: 'We tell you what works, what doesn\'t, and what the research actually says.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-gray mb-4">
            What Guides Our Work
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            Three principles that shape everything we create and recommend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-montserrat font-bold text-white">
                    {guide.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 font-lato leading-relaxed">
                {guide.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetGuides;