import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight, FiZap, FiHeart, FiTrendingUp } = FiIcons;

const Mitolyn = () => {
  const ingredients = [
    {
      name: 'Maqui Berry',
      benefit: 'Antioxidants that may support fat oxidation and heart health',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Rhodiola Rosea',
      benefit: 'Adaptogen for energy, mood, and stress balance',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Red Algae (Astaxanthin)',
      benefit: 'Helps protect mitochondria and joints',
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'Amla Fruit',
      benefit: 'Rich in vitamin C for energy and rejuvenation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Cacao Extract',
      benefit: 'Supports circulation and healthy metabolism',
      color: 'from-amber-700 to-orange-600'
    },
    {
      name: 'Schisandra Berry',
      benefit: 'May enhance metabolism and skin vitality',
      color: 'from-red-600 to-pink-500'
    }
  ];

  const benefits = [
    { icon: FiZap, text: 'Gentle, stimulant-free metabolism support' },
    { icon: FiTrendingUp, text: 'More steady daily energy' },
    { icon: FiHeart, text: 'Feeling lighter and more active' },
    { icon: FiCheck, text: 'Helps maintain progress after weight loss' },
    { icon: FiZap, text: 'Better focus, mood, and confidence' }
  ];

  const testimonials = [
    { text: "I feel more energized throughout the day without jitters.", author: "Sarah", age: 42 },
    { text: "Finally something that works with my body, not against it.", author: "Michelle", age: 38 },
    { text: "My energy levels are so much better now.", author: "Jennifer", age: 45 }
  ];

  const trustSignals = [
    'Manufactured in the USA',
    'FDA-registered facilities',
    'GMP-certified',
    '100% plant-based, non-GMO',
    'Soy/dairy free',
    '90-Day Money-Back Guarantee'
  ];

  const handleCTAClick = () => {
    window.open('https://trk.healthfitfix.com/mitolyn-n', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-aqua/10 via-off-white to-leaf-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-semibold text-slate-gray leading-tight">
                Reignite Your Body's Natural Energy —{' '}
                <span className="text-deep-green">From the Inside Out</span>
              </h1>
              <p className="text-xl text-gray-600 font-lato leading-relaxed">
                Discover how the science of mitochondria is reshaping what we know about metabolism and steady weight management.
              </p>
              <button
                onClick={handleCTAClick}
                className="bg-aqua hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <span>Learn More on the Official Mitolyn Website</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 font-lato">
                Affiliate disclosure: We may earn a commission at no extra cost to you.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Mitolyn supplement bottle with fresh berries and natural ingredients"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-aqua/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Cellular energy and mitochondria visualization"
                className="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray">
                What Is Mitolyn and How Does It Work?
              </h2>
              <p className="text-lg text-gray-600 font-lato leading-relaxed">
                Mitolyn is a <strong>plant-based dietary supplement</strong> designed to support the body's energy factories — the mitochondria. By improving how cells turn nutrients into energy (ATP), it helps boost metabolism, vitality, and fat-burning efficiency without stimulants.
              </p>
              <div className="bg-gradient-to-r from-leaf-green/10 to-aqua/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 text-deep-green font-montserrat font-semibold">
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
                  <span>Nutrient</span>
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
                  <span>Mitochondria</span>
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
                  <span>Energy</span>
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
                  <span>Active Body</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-20 bg-gradient-to-br from-off-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
              Inside the Mitolyn Formula
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${ingredient.color} flex items-center justify-center`}>
                  <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-slate-gray text-center mb-3">
                  {ingredient.name}
                </h3>
                <p className="text-gray-600 font-lato text-center">
                  {ingredient.benefit}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-gray-700 font-lato italic">
              Together these nutrients help your body turn stored fat into usable energy — naturally.
            </p>
            <button
              onClick={handleCTAClick}
              className="bg-deep-green hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>See Full Ingredient Science</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
              What Users Love About Mitolyn
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="bg-gradient-to-r from-leaf-green/5 to-aqua/5 rounded-xl p-6 flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={benefit.icon} className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-lato text-gray-700 pt-1">{benefit.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-gradient-to-br from-off-white to-green-50 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-gray-700 font-lato text-lg mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-deep-green font-montserrat font-semibold">
                  — {testimonial.author} ({testimonial.age})
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 text-sm font-lato"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Individual results vary; always consult a healthcare provider before starting new supplements.
          </motion.p>
        </div>
      </section>

      {/* Pain Point Connection */}
      <section className="py-20 bg-gradient-to-br from-slate-gray/5 to-deep-green/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray">
                Designed for Anyone Tired of Feeling "Stuck"
              </h2>
              <p className="text-lg text-gray-600 font-lato leading-relaxed">
                If you've ever eaten right, exercised, and still felt your metabolism just won't cooperate — you're not alone. Mitolyn's mitochondria-supporting formula was created for adults 30+ who want to restore their natural energy, confidence, and freedom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Active morning lifestyle transformation"
                className="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Science and Trust Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
              Backed by Research & Quality
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal}
                className="bg-gradient-to-r from-leaf-green/10 to-aqua/10 rounded-xl p-6 flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                </div>
                <p className="font-lato text-gray-700">{signal}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Clean laboratory with natural ingredients"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-20 bg-gradient-to-br from-deep-green to-leaf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-6">
              Ready to Recharge Your Energy and Confidence?
            </h2>
            <p className="text-xl font-lato mb-8 text-green-100">
              Join thousands of adults discovering a more balanced, energetic life with Mitolyn. Simple routine — just one capsule daily.
            </p>
            <button
              onClick={handleCTAClick}
              className="bg-white text-deep-green hover:bg-opacity-90 font-montserrat font-bold px-10 py-5 rounded-full text-xl transition-all duration-200 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-3"
            >
              <span>Visit the Official Mitolyn Website</span>
              <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
            </button>
            <p className="text-sm text-green-200 font-lato mt-6">
              Affiliate disclosure: We may earn a commission at no extra cost to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-slate-gray text-center">
        <p className="text-gray-400 font-lato text-sm">
          © 2025 Health Fit Fix | Educational content only | Not medical advice
        </p>
      </footer>
    </div>
  );
};

export default Mitolyn;