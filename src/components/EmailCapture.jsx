import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail } = FiIcons;

const EmailCapture = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-soft-green to-blue-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-leaf-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-soft p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-aqua/10 rounded-2xl mb-6">
              <SafeIcon icon={FiMail} className="w-8 h-8 text-aqua" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-gray mb-4">
              Join the Fix List
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Get weekly insights, research updates, and honest product reviews delivered to your inbox. 
              No spam, no fluff — just useful health information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-aqua focus:ring-2 focus:ring-aqua/20 outline-none transition-all font-lato"
              />
              <button
                type="submit"
                className="bg-aqua hover:bg-teal-500 text-white font-montserrat font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-glow shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4 font-lato">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;