import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight, FiAlertCircle, FiZap, FiHeart, FiSun, FiActivity, FiTrendingUp } = FiIcons;

const Mitolyn = () => {
  const painPoints = [
    "You eat less and move more… but nothing changes",
    "You wake up tired even after a 'good' night's sleep",
    "Your body feels heavier, slower, less responsive",
    "You feel inflamed, puffy, or weighed down",
    "Your energy crashes by mid-afternoon",
    "Your clothes feel tighter even when you're 'trying harder'",
    "You've lost trust in your own metabolism",
    "You keep thinking: 'Why isn't my body cooperating?'",
    "After meals, you feel heavy instead of energized",
    "Your body feels older than your actual age"
  ];

  const emotionalBenefits = [
    { icon: FiSun, text: "Feel naturally more awake and alert" },
    { icon: FiZap, text: "Support your body's metabolic rhythm" },
    { icon: FiHeart, text: "Feel lighter and more comfortable throughout the day" },
    { icon: FiActivity, text: "Reduce that 'weighed down' feeling after meals" },
    { icon: FiTrendingUp, text: "Support healthier digestion and energy flow" },
    { icon: FiCheck, text: "Help your body respond and adapt again" }
  ];

  const whyItFailed = [
    { 
      problem: "Diets", 
      reason: "Burn out your willpower and slow metabolism",
      icon: FiAlertCircle
    },
    { 
      problem: "Intense Workouts", 
      reason: "Don't address the cellular energy problem",
      icon: FiAlertCircle
    },
    { 
      problem: "Cutting Calories", 
      reason: "Slows your metabolism even further",
      icon: FiAlertCircle
    },
    { 
      problem: "Stimulants & Caffeine", 
      reason: "Create energy spikes followed by crashes",
      icon: FiAlertCircle
    }
  ];

  const testimonials = [
    { 
      text: "I wasn't looking for a miracle — I just wanted to feel like myself again.",
      author: "Sarah, 42"
    },
    { 
      text: "Every year I felt slower… I didn't know it could change.",
      author: "Michael, 51"
    },
    { 
      text: "I finally understand why I was exhausted all day.",
      author: "Jennifer, 38"
    },
    { 
      text: "My body wasn't broken — it just needed the right support.",
      author: "Lisa, 45"
    }
  ];

  const trustSignals = [
    "Manufactured in USA",
    "Non-GMO & Plant-Based",
    "GMP-Certified Facility",
    "No Artificial Additives",
    "90-Day Money-Back Guarantee"
  ];

  const affiliateLink = "https://trk.healthfitfix.com/mitolyn-n";

  const handleCTAClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* SECTION 1 - Emotional Pattern Interrupt Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-gray via-deep-green to-slate-gray overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,211,196,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight">
                If You Feel Tired, Heavy, and "Stuck"…{' '}
                <span className="text-aqua">There's a Reason No One Told You About.</span>
              </h1>
              
              <div className="space-y-4 text-xl text-gray-200 font-lato leading-relaxed">
                <p>It's not lack of effort.</p>
                <p>It's not your age.</p>
                <p>It's not your willpower.</p>
                <p className="text-aqua font-semibold text-2xl">
                  It may be something deeper — happening inside your cells.
                </p>
              </div>

              <button
                onClick={handleCTAClick}
                className="bg-aqua hover:bg-opacity-90 text-slate-gray font-montserrat font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-3 mt-8"
              >
                <span>See Why Thousands Are Looking Into This New Cellular Approach</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1763218512128-blob"
                  alt="Thoughtful person in morning light"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Pain Point Amplification */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6">
              Does Any of This Sound Like You?
            </h2>
          </motion.div>

          <div className="space-y-5 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 flex items-start space-x-4 border-l-4 border-red-400 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-lg font-lato text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-deep-green/5 to-aqua/5 rounded-2xl p-10 border-2 border-deep-green/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl font-lato text-gray-700 leading-relaxed text-center">
              If any of these resonate with you, you're not alone. These experiences are{' '}
              <strong className="text-deep-green">extremely common</strong> — and often caused by something deeper than diet or discipline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Micro Story for Relatability */}
      <section className="py-24 bg-gradient-to-br from-slate-gray/5 to-aqua/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-l-8 border-aqua"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-aqua to-leaf-green rounded-full flex items-center justify-center mx-auto">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-lato text-gray-700 leading-relaxed text-center italic">
                "I used to think there was something wrong with me.
                <br /><br />
                I ate clean, I exercised, I tried cutting calories — but my body just felt slower every year.
                <br /><br />
                <span className="text-deep-green font-semibold not-italic">
                  Nothing worked… because I was fighting the wrong problem.
                </span>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - Mechanism Reveal (Mitochondria) */}
      <section className="py-24 bg-gradient-to-br from-slate-gray to-deep-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6">
              The Real Reason You Feel "Stuck":{' '}
              <span className="text-aqua">Your Mitochondria Slow Down.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiZap} className="w-8 h-8 text-aqua flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3 text-aqua">
                      Mitochondria = Your Cellular "Engines"
                    </h3>
                    <p className="text-lg font-lato text-gray-200 leading-relaxed">
                      Think of them as tiny power plants inside every cell that convert food into usable energy (ATP).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3 text-red-400">
                      When They Slow, Energy Drops
                    </h3>
                    <p className="text-lg font-lato text-gray-200 leading-relaxed">
                      Less cellular energy means your entire body slows down — metabolism, fat-burning, mood, focus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiActivity} className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3 text-yellow-400">
                      When Metabolism Slows, Fat Becomes Stubborn
                    </h3>
                    <p className="text-lg font-lato text-gray-200 leading-relaxed">
                      Your body starts storing instead of burning — no matter how little you eat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiAlertCircle} className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-montserrat font-semibold mb-3 text-orange-400">
                      What Causes This Slowdown?
                    </h3>
                    <p className="text-lg font-lato text-gray-200 leading-relaxed">
                      Stress, age, poor sleep, inflammation, and toxins all push your mitochondria into "shutdown mode."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Cellular energy visualization"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-aqua/30 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-aqua/20 backdrop-blur-sm rounded-2xl p-10 text-center border-2 border-aqua"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl font-montserrat font-bold text-aqua mb-4">
              The Simple Truth:
            </p>
            <p className="text-xl font-lato text-white leading-relaxed">
              When mitochondria slow → energy drops → metabolism slows → fat becomes stubborn
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - The Turning Point */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray">
              If the Problem Starts in the Cells…{' '}
              <span className="text-deep-green">The Solution Must Start There Too.</span>
            </h2>
            
            <div className="bg-gradient-to-r from-deep-green/10 to-aqua/10 rounded-2xl p-10 border-2 border-deep-green/30">
              <p className="text-xl font-lato text-gray-700 leading-relaxed">
                Typical diet culture solutions fail because they don't address the{' '}
                <strong className="text-deep-green">mitochondrial slowdown</strong>.
                <br /><br />
                What your body needs is support at the{' '}
                <strong className="text-deep-green">cellular engine level</strong> — where energy production actually begins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - Introducing Mitolyn */}
      <section className="py-24 bg-gradient-to-br from-off-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-8">
              Meet Mitolyn —{' '}
              <span className="text-deep-green">
                A Mitochondria-Supporting Formula Designed to Reignite Your Inner Energy.
              </span>
            </h2>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
              A plant-based approach to cellular energy that works with your body, not against it.
            </p>
          </motion.div>

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
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Plant-Based & Natural
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      Gentle, science-backed ingredients that work with your body's natural systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Works at the Root Level
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      Supports energy production where it actually begins — in your mitochondria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-slate-gray mb-2">
                      Designed for Adults Who Feel "Blocked"
                    </h3>
                    <p className="text-lg font-lato text-gray-600">
                      If you feel sluggish, inflamed, or unresponsive to traditional approaches — this is for you.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCTAClick}
                className="bg-deep-green hover:bg-opacity-90 text-white font-montserrat font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-3 mt-6"
              >
                <span>Learn How Mitolyn Supports Cellular Energy</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Emotional Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6">
              How You May Feel
            </h2>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
              Real emotional outcomes people experience — not clinical claims
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emotionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="bg-gradient-to-br from-leaf-green/5 to-aqua/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-leaf-green/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-leaf-green to-aqua rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl font-lato text-slate-gray font-semibold leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Why Nothing Has Worked Until Now */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6">
              You Weren't Failing —{' '}
              <span className="text-red-600">The Typical Approaches Were.</span>
            </h2>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
              Here's why traditional methods don't address the real problem:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {whyItFailed.map((item, index) => (
              <motion.div
                key={item.problem}
                className="bg-white rounded-2xl p-8 border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <SafeIcon icon={item.icon} className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <h3 className="text-2xl font-montserrat font-bold text-slate-gray">
                    {item.problem}
                  </h3>
                </div>
                <p className="text-lg font-lato text-gray-600 leading-relaxed pl-12">
                  {item.reason}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-deep-green to-leaf-green text-white rounded-2xl p-10 text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SafeIcon icon={FiZap} className="w-16 h-16 mx-auto mb-6 text-aqua" />
            <p className="text-2xl font-montserrat font-bold mb-3">
              What You Actually Need:
            </p>
            <p className="text-xl font-lato">
              Support at the <span className="text-aqua font-semibold">cellular engine level</span> — where energy and metabolism truly begin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - Social Proof & Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-gray mb-6">
              Real People, Real Stories
            </h2>
            <p className="text-xl font-lato text-gray-600">
              Hear from others who finally found what was missing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-off-white to-green-50 rounded-2xl p-10 shadow-lg border-2 border-deep-green/10 hover:border-deep-green/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <SafeIcon icon={FiHeart} className="w-10 h-10 text-deep-green" />
                </div>
                <p className="text-xl font-lato text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-deep-green font-montserrat font-semibold">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 text-sm font-lato italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            *Individual results may vary. Always consult with a healthcare provider before starting any new supplement.
          </motion.p>
        </div>
      </section>

      {/* SECTION 10 - Trust & Quality */}
      <section className="py-24 bg-gradient-to-br from-slate-gray to-deep-green text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6">
              Backed by Quality & Research
            </h2>
            <p className="text-xl font-lato text-gray-300">
              Manufactured with the highest standards of quality and safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-aqua rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-slate-gray" />
                </div>
                <p className="font-lato text-lg leading-snug">{signal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - Final Emotional CTA */}
      <section className="py-32 bg-gradient-to-br from-aqua via-leaf-green to-deep-green text-white relative overflow-hidden">
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
              Your Body Is Not Broken.
              <br />
              <span className="text-slate-gray">It Just Needs the Right Kind of Support.</span>
            </h2>

            <p className="text-2xl font-lato text-green-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands who've discovered that the answer wasn't another diet or workout plan — it was cellular support at the mitochondrial level.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleCTAClick}
                className="bg-white text-deep-green hover:bg-gray-100 font-montserrat font-bold px-12 py-6 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-4"
              >
                <span>Visit the Official Mitolyn Website</span>
                <SafeIcon icon={FiArrowRight} className="w-8 h-8" />
              </button>

              <p className="text-sm text-green-200 font-lato">
                Affiliate disclosure: We may earn a commission at no extra cost to you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-slate-gray text-center">
        <p className="text-gray-400 font-lato text-sm">
          © 2025 Health Fit Fix | Wellness Education Only | Not Medical Advice
        </p>
      </footer>
    </div>
  );
};

export default Mitolyn;