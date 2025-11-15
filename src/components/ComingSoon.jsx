import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-6">
            What's Next
          </h2>
          
          <p className="text-xl text-gray-600 font-lato leading-relaxed mb-8">
            Product reviews, simple workouts & step-by-step guides are on the way. Join the Fix List for early access to everything we're building.
          </p>

          <button className="bg-leaf-green hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;