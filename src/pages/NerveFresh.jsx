import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight, FiAlertCircle, FiZap, FiHeart, FiMoon, FiActivity, FiShield, FiClock, FiTrendingUp } = FiIcons;

const NerveFresh = () => {
  const symptoms = [
    "Tingling that comes and goes throughout the day",
    "Burning sensations that wake you up at night",
    "Feeling like you're walking on pebbles or cushions",
    "Sudden electric zaps that make you wince",
    "Numbness that affects your balance and coordination",
    "Restless legs keeping you awake when you need rest most",
    "Fear of losing mobility or independence as time goes on"
  ];

  const ingredients = [
    {
      name: "Prickly Pear",
      benefit: "Nerve-Soothing Antioxidants",
      description: "Rich in compounds that help calm irritated nerve endings and reduce oxidation stress in nerve tissues.",
      icon: FiHeart
    },
    {
      name: "Passion Flower",
      benefit: "Relaxation & Better Sleep",
      description: "Traditionally used to promote calmness and help ease nighttime restlessness caused by nerve discomfort.",
      icon: FiMoon
    },
    {
      name: "Marshmallow Root",
      benefit: "Coating Irritated Nerves",
      description: "Contains mucilage compounds that may help soothe and protect sensitive nerve pathways naturally.",
      icon: FiShield
    },
    {
      name: "Corydalis",
      benefit: "Traditional Herbal Pain Relief",
      description: "Used for centuries in traditional medicine to support comfort and ease occasional nerve-related discomfort.",
      icon: FiActivity
    },
    {
      name: "California Poppy",
      benefit: "Natural Calming & Nighttime Comfort",
      description: "Gentle, non-habit-forming herb known for promoting relaxation and helping you rest more comfortably.",
      icon: FiMoon
    }
  ];

  const benefits = [
    "Less frequent tingling throughout the day",
    "Reduced burning discomfort, especially at night",
    "More stable walking and improved balance",
    "Fewer nighttime flare-ups disrupting your sleep",
    "Better, deeper, uninterrupted rest",
    "More calm and relaxed mood throughout the day",
    "More motivation and daily energy to do what you love"
  ];

  const timeline = [
    {
      week: "Weeks 1-2",
      title: "Initial Adjustment",
      description: "Your body begins absorbing the nerve-calming botanicals. Some users notice subtle improvements in sleep quality and overall comfort.",
      icon: FiClock
    },
    {
      week: "Weeks 3-4",
      title: "Building Momentum",
      description: "Many users report reduced frequency of tingling and burning sensations. Nighttime discomfort may begin to ease.",
      icon: FiTrendingUp
    },
    {
      week: "Weeks 5-8",
      title: "Cumulative Benefits",
      description: "Consistent use allows the botanical blend to work more effectively. Users often report better mobility, improved sleep, and a greater sense of comfort.",
      icon: FiZap
    }
  ];

  const testimonials = [
    {
      text: "The burning in my feet used to keep me up half the night. After about a month, I was finally sleeping through again. That alone changed everything.",
      author: "Carol M.",
      age: 62,
      location: "Florida"
    },
    {
      text: "I was skeptical at first, but the tingling in my hands started getting better around week 3. Now I can hold my grandkids without worrying about dropping them.",
      author: "Robert T.",
      age: 58,
      location: "Ohio"
    },
    {
      text: "My balance was getting so bad I was afraid to walk to the mailbox. This gave me my confidence back. I feel steadier and more like myself again.",
      author: "Linda S.",
      age: 67,
      location: "Arizona"
    },
    {
      text: "I've tried so many things over the years. This is the first natural option that actually made a difference I could feel. The restlessness at night is so much better.",
      author: "James K.",
      age: 54,
      location: "Texas"
    }
  ];

  const trustSignals = [
    "Made in USA",
    "FDA-Registered Facility",
    "GMP-Certified",
    "Non-GMO",
    "Stimulant-Free",
    "180-Day Money-Back Guarantee"
  ];

  const affiliateLink = "https://trk.healthfitfix.com/nervefresh";

  const handleCTAClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Publication Header */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-slate-gray">Health Insider</h1>
              <p className="text-sm text-gray-500 font-lato">Wellness Education & Research</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 font-lato">Published: March 2025</p>
              <p className="text-sm text-gray-500 font-lato">Category: Nerve Health</p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-slate-gray leading-tight">
                New Nerve Relief Breakthrough Helping Adults Over 45 Soothe Tingling, Burning & Discomfort — <span className="text-blue-600">Naturally</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-lato text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Doctors may treat the symptoms… but this surprising blend of 5 nerve-calming plants is helping thousands finally rest, walk, and sleep more comfortably.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Adult experiencing foot discomfort"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-gray/40 to-transparent"></div>
            </div>

            <div className="text-center">
              <button
                onClick={handleCTAClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-3"
              >
                <span>See the Natural Nerve-Calming Formula →</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM IDENTIFICATION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-12 text-center">
              Does This Sound Familiar?
            </h2>

            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 flex items-start space-x-4 border-l-4 border-red-400 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg font-lato text-gray-700 leading-relaxed">{symptom}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl font-lato text-gray-700 leading-relaxed text-center">
                If any of these resonate with you, you're not alone. Millions of adults over 45 experience these frustrating sensations — and many feel dismissed or told it's "just part of aging."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* REAL STORY INTRODUCTION */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-l-8 border-blue-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-montserrat font-bold text-slate-gray text-center mb-6">
                Meet Carol, 62 — She Thought Her Foot Pain Was "Just Age"… Until She Learned What Was Really Going On
              </h3>

              <div className="space-y-4 text-lg font-lato text-gray-700 leading-relaxed">
                <p>
                  Carol had been dealing with burning sensations in her feet for nearly two years. At first, it was just occasional tingling. Then it became constant. Then it started waking her up at night.
                </p>
                <p>
                  Her doctor told her it was neuropathy and prescribed medication that made her feel foggy and disconnected. She tried creams, compression socks, and even acupuncture.
                </p>
                <p className="text-blue-600 font-semibold text-xl">
                  Nothing worked — until she discovered that certain plants could naturally calm overactive nerves.
                </p>
                <p>
                  "I wish I had known about this sooner," Carol said. "The difference in my sleep alone was life-changing. I finally feel like myself again."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATIONAL EXPLANATION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-12 text-center">
              What Most People Don't Know About Nerve Discomfort
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                    Overactive Nerves
                  </h3>
                  <p className="text-lg font-lato text-gray-700 leading-relaxed">
                    When nerves become irritated or damaged, they can send false signals to your brain — creating sensations of burning, tingling, or electric shocks even when nothing is actually wrong.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500">
                  <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                    Inflammation
                  </h3>
                  <p className="text-lg font-lato text-gray-700 leading-relaxed">
                    Chronic inflammation can irritate nerve endings, making them more sensitive and reactive. This creates a cycle of discomfort that's hard to break.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                    Disrupted Sleep
                  </h3>
                  <p className="text-lg font-lato text-gray-700 leading-relaxed">
                    Nerve discomfort often worsens at night, disrupting your sleep. Poor sleep then makes pain worse, creating a vicious cycle that's exhausting and demoralizing.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Nerve system visualization"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 text-center shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl font-montserrat font-bold mb-3">
                The Problem:
              </p>
              <p className="text-xl font-lato">
                Pain + Poor Sleep + Inflammation feed each other in a never-ending loop
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCE THE DISCOVERY */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6 text-center">
              Researchers Found That Certain Plants Can Calm Overactive Nerves
            </h2>
            <p className="text-xl font-lato text-gray-600 text-center mb-16 max-w-4xl mx-auto">
              For centuries, traditional healers have used specific botanicals to soothe nerve discomfort. Now, modern research is beginning to understand why they work.
            </p>

            <div className="space-y-8">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={ingredient.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-montserrat font-bold text-slate-gray mb-2">
                        {ingredient.name}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-3">
                        {ingredient.benefit}
                      </p>
                      <p className="text-lg font-lato text-gray-700 leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT INTRODUCTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6 text-center">
              The Natural Formula Bringing Relief to Thousands
            </h2>
            <p className="text-xl font-lato text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Introducing <span className="text-blue-600 font-semibold">Nerve Fresh</span> — a gentle, plant-based daily supplement designed to support calmer, more comfortable nerves.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Natural supplement with fresh ingredients"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Gentle & Plant-Based
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      A natural daily supplement designed to work with your body, not against it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Manufactured to Highest Standards
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      Made in an FDA-registered, GMP-certified facility with rigorous quality controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Non-GMO & Stimulant-Free
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      Pure botanical ingredients without harsh chemicals or artificial additives.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCTAClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-3 mt-6"
                >
                  <span>Find Out How Nerve Fresh Works →</span>
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6 text-center">
              What Users Report After Taking Nerve Fresh Consistently
            </h2>
            <p className="text-xl font-lato text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              When taken daily as directed, many users experience the following improvements:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-start space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg font-lato text-gray-700 leading-relaxed pt-1">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-500 text-sm font-lato italic mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              *Individual results may vary. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE EXPECTATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6 text-center">
              What to Expect (Weeks 1–8)
            </h2>
            <p className="text-xl font-lato text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Natural solutions work gradually. Here's what many users experience over time:
            </p>

            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={phase.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-montserrat font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {phase.week}
                        </span>
                        <h3 className="text-2xl font-montserrat font-bold text-slate-gray">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-lg font-lato text-gray-700 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 text-center shadow-2xl mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-2xl font-montserrat font-bold mb-3">
                Remember:
              </p>
              <p className="text-xl font-lato">
                Consistency is key. Natural botanicals work best when taken daily as part of your wellness routine.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6 text-center">
              What Real Users Are Saying
            </h2>
            <p className="text-xl font-lato text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Hear from others who've experienced the difference
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-10 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    <SafeIcon icon={FiHeart} className="w-10 h-10 text-blue-600" />
                  </div>
                  <p className="text-xl font-lato text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-600 font-montserrat font-semibold">
                      — {testimonial.author}
                    </p>
                    <p className="text-gray-500 font-lato text-sm">
                      {testimonial.age}, {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-500 text-sm font-lato italic mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              *Individual results may vary. Testimonials are based on user experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ADDRESS SKEPTICISM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-8 text-center">
              Is This Too Good to Be True?
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                  We understand your skepticism
                </h3>
                <p className="text-lg font-lato text-gray-700 leading-relaxed">
                  If you've tried multiple solutions without success, it's natural to feel doubtful. Many people do before they experience the benefits for themselves.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                  Natural solutions require consistency
                </h3>
                <p className="text-lg font-lato text-gray-700 leading-relaxed">
                  Unlike harsh medications that force immediate changes, botanical ingredients work gradually by supporting your body's natural healing processes. This takes time and consistency.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-montserrat font-semibold text-slate-gray mb-4">
                  Everyone's experience differs
                </h3>
                <p className="text-lg font-lato text-gray-700 leading-relaxed">
                  Some people notice improvements within weeks. For others, it takes longer. Your body's unique chemistry, severity of symptoms, and overall health all play a role.
                </p>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-10 text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiShield} className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-2xl font-montserrat font-bold mb-4">
                That's Why There's a 180-Day Money-Back Guarantee
              </p>
              <p className="text-xl font-lato">
                Try Nerve Fresh risk-free for a full 6 months. If you don't experience the comfort and relief you're looking for, simply request a refund — no questions asked.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-montserrat font-bold text-slate-gray mb-12 text-center">
              Quality You Can Trust
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal}
                  className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-lato text-lg text-gray-700 leading-snug">{signal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
              Ready to Support Calmer, More Comfortable Nerves?
            </h2>

            <p className="text-2xl font-lato text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Click below to see today's official Nerve Fresh details, bundles, and offers.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleCTAClick}
                className="bg-white text-blue-600 hover:bg-gray-100 font-montserrat font-bold px-12 py-6 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-4"
              >
                <span>Visit the Official Nerve Fresh Page →</span>
                <SafeIcon icon={FiArrowRight} className="w-8 h-8" />
              </button>

              <p className="text-sm text-blue-200 font-lato">
                180-Day Money-Back Guarantee | Free Shipping on Select Packages
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
            <p className="text-sm font-lato text-gray-600 leading-relaxed text-center">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not provide medical advice. 
              The information presented here is not intended to diagnose, treat, cure, or prevent any disease. 
              Individual results may vary. Always consult with a qualified healthcare provider before starting any new supplement, 
              especially if you have existing medical conditions or take prescription medications. 
              Statements regarding dietary supplements have not been evaluated by the FDA.
            </p>
            <p className="text-sm font-lato text-gray-600 text-center mt-4">
              <strong>Affiliate Disclosure:</strong> We may earn a commission if you purchase through links on this page, at no extra cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-gray text-center">
        <p className="text-gray-400 font-lato text-sm">
          © 2025 Health Fit Fix | Wellness Education Only | Not Medical Advice
        </p>
      </footer>
    </div>
  );
};

export default NerveFresh;