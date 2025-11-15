import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiArrowRight } = FiIcons;

const PrimeBiome = () => {
  const benefits = [
    'Supports digestion & reduces bloating',
    'Promotes clear, glowing skin',
    'Doctor-endorsed probiotic blend',
    'Vegan, non-GMO, GMP-certified',
    'Visible results in 2–4 weeks'
  ];

  const testimonials = [
    {
      text: "Less bloating and my skin feels smoother already.",
      author: "Sophie",
      age: 41
    },
    {
      text: "Gentle but effective — I feel lighter and more confident.",
      author: "Laura",
      age: 36
    },
    {
      text: "My gut is happier and my skin looks amazing.",
      author: "Jen",
      age: 48
    }
  ];

  const comparison = [
    { feature: 'Skin Health Support', typical: false, primeBiome: true },
    { feature: 'Doctor Formulated', typical: false, primeBiome: true },
    { feature: 'Visible Results', typical: false, primeBiome: true },
    { feature: 'Antioxidants', typical: false, primeBiome: true }
  ];

  const handleCTAClick = () => {
    // Replace with actual affiliate link
    window.open('https://example.com/prime-biome-official', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-off-white via-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-semibold text-slate-gray leading-tight">
                Glow From Within — Revitalize Your{' '}
                <span className="text-deep-green">Gut & Skin</span>{' '}
                with Prime Biome
              </h1>

              <p className="text-xl text-gray-600 font-lato leading-relaxed">
                Science-backed probiotics that help women 30+ support digestion, energy, and natural radiance.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleCTAClick}
                  className="bg-aqua hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                >
                  <span>See Prime Biome → Official Website</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                
                <p className="text-sm text-gray-500 font-lato">
                  As an affiliate partner, Health Fit Fix may earn a small commission at no extra cost to you.
                </p>
              </div>
            </motion.div>

            {/* Right: Product Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Prime Biome supplement supporting gut and skin health"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Diagram showing gut–skin connection"
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
                Why Your Gut Affects Your Glow
              </h2>
              
              <p className="text-lg text-gray-600 font-lato leading-relaxed">
                When your gut microbiome is out of balance, it can cause bloating, fatigue, and dull skin. Prime Biome restores harmony from the inside out, using targeted probiotics and antioxidants that nurture both digestion and radiance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-off-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
              What Makes Prime Biome Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-lato text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={handleCTAClick}
              className="bg-deep-green hover:bg-opacity-90 text-white font-montserrat font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Discover How It Works</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Expert Insight */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-gray mb-4">
              Dr. Maya Explains the Gut–Skin Connection
            </h2>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-1 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                  alt="AI avatar Dr. Maya nutrition expert"
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-xl text-gray-700 font-lato italic leading-relaxed mb-4">
                  "When your gut is balanced, your skin reflects it. Prime Biome supports microbiome health and reduces inflammation for smoother, brighter skin."
                </blockquote>
                <p className="text-deep-green font-montserrat font-semibold">
                  — Dr. Maya, Nutrition & Gut Health Expert
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Real Women, Real Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white rounded-2xl p-6 shadow-lg"
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
            Individual results may vary.
          </motion.p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-deep-green to-leaf-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-montserrat font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-montserrat font-semibold">Typical Probiotic</th>
                  <th className="px-6 py-4 text-center font-montserrat font-semibold">Prime Biome</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparison.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 font-lato text-gray-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <SafeIcon icon={FiX} className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-leaf-green mx-auto" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-deep-green to-leaf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-6">
              Ready to Feel Lighter, Brighter, and More Confident?
            </h2>
            
            <p className="text-xl font-lato mb-8 text-green-100">
              Join thousands of women who've transformed their gut health and rediscovered their natural glow with Prime Biome.
            </p>

            <button
              onClick={handleCTAClick}
              className="bg-white text-deep-green hover:bg-opacity-90 font-montserrat font-bold px-10 py-5 rounded-full text-xl transition-all duration-200 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-3"
            >
              <span>Visit the Official Prime Biome Website</span>
              <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
            </button>

            <p className="text-sm text-green-200 font-lato mt-6">
              Affiliate disclosure: we may earn a commission if you purchase through this link — your price stays the same.
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

export default PrimeBiome;