import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    weeklyTips: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="py-20 bg-deep-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-4">
            Free PDF — 5 Fixes for Fat-Loss After 30
          </h2>
          <p className="text-xl font-lato mb-8 text-green-100">
            Quick wins for metabolism, appetite & energy you can start today.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border-0 text-slate-gray font-lato focus:ring-2 focus:ring-aqua focus:outline-none"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border-0 text-slate-gray font-lato focus:ring-2 focus:ring-aqua focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center justify-center space-x-3 text-left">
              <input
                type="checkbox"
                name="weeklyTips"
                id="weeklyTips"
                checked={formData.weeklyTips}
                onChange={handleChange}
                className="w-4 h-4 text-aqua bg-white border-gray-300 rounded focus:ring-aqua"
              />
              <label htmlFor="weeklyTips" className="text-sm font-lato text-green-100">
                Also send me weekly tips
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-aqua hover:bg-opacity-90 text-white font-montserrat font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Send My Guide
            </button>

            <p className="text-xs text-green-200 font-lato">
              We'll never sell your data.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;