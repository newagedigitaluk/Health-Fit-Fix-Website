import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LuSearch, LuMenu, LuShare2, LuBookmark, LuShield, LuAward, 
  LuClock, LuTrendingUp, LuHeart,
  LuBrain, LuMoon, LuActivity, LuZap, LuFlame, LuLeaf
} from 'react-icons/lu';
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const NerveFreshEditorial = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const affiliateLink = "https://trk.healthfitfix.com/nervefresh";

  const handleCTAClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      {/* Fake Editorial Header */}
      <div className="bg-[#f7fafc] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span className="font-medium text-[#1e3a5f]">Health News & Research</span>
              <span className="hidden sm:inline">Independent Medical Review</span>
            </div>
            <div className="flex items-center space-x-4">
              <SafeIcon icon={LuSearch} className="w-4 h-4 cursor-pointer hover:text-[#1e3a5f]" />
              <SafeIcon icon={LuMenu} className="w-4 h-4 cursor-pointer hover:text-[#1e3a5f]" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Header (appears on scroll) */}
      {scrolled && (
        <motion.div
          className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <span className="font-['Merriweather'] font-bold text-[#1e3a5f] text-lg">
                Nerve Fresh Research Report
              </span>
              <button
                onClick={handleCTAClick}
                className="bg-[#ff6b6b] hover:bg-[#e55555] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 text-sm"
              >
                See Official Details →
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Headline Section */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Merriweather'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight mb-6">
            Groundbreaking Discovery: How a Forgotten Herbal Formula Is Helping Thousands of Neuropathy Sufferers Finally Sleep Through the Night <span className="text-[#ff6b6b]">(Without Dangerous Prescription Drugs)</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-[#2d3748] leading-relaxed mb-8 font-light">
            New clinical findings reveal why gabapentin and Lyrica fail 73% of patients—and how a proprietary blend of bioavailable botanicals is delivering relief where pharmaceuticals couldn't
          </h2>

          {/* Byline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-b border-gray-200 py-4 mb-8">
            <div className="mb-3 sm:mb-0">
              <p className="text-[#1e3a5f] font-semibold">
                By Dr. Sarah Mitchell, Medical Research Journalist
              </p>
              <p className="text-sm text-gray-500">
                Reviewed by Board-Certified Neurologist | 12 min read
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{currentDate}</span>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={LuShare2} className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#1e3a5f]" />
                <SafeIcon icon={LuBookmark} className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#1e3a5f]" />
              </div>
            </div>
          </div>

          {/* Medically Reviewed Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#87a96b]/10 border border-[#87a96b] rounded-full px-4 py-2 mb-8">
            <SafeIcon icon={LuShield} className="w-5 h-5 text-[#87a96b]" />
            <span className="text-sm font-semibold text-[#87a96b]">Medically Reviewed</span>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.figure
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Medical research showing nerve health improvement"
            className="w-full h-auto"
            loading="eager"
          />
          <figcaption className="bg-gray-100 px-6 py-4 text-sm text-gray-600 italic">
            Recent studies show botanical compounds can support nerve health and reduce discomfort naturally
          </figcaption>
        </motion.figure>

        {/* Article Introduction - Linda's Story */}
        <motion.section
          className="mb-12 prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            Linda Martinez couldn't remember the last time she'd slept past 2 AM. Every night, like clockwork, the burning sensation in her feet would wake her—a searing pain that felt like walking on hot coals, even though she was lying perfectly still in bed.
          </p>

          <div className="bg-gradient-to-r from-[#ff6b6b]/5 to-[#f6ad55]/5 border-l-4 border-[#ff6b6b] pl-6 py-4 my-8 italic">
            <p className="text-xl text-[#1e3a5f] font-['Merriweather']">
              "I tried everything. Gabapentin made me so foggy I couldn't remember my grandchildren's names. Lyrica caused 30 pounds of weight gain. And the pain? Still there, every single night."
            </p>
            <p className="text-sm text-gray-600 mt-3 not-italic">— Linda Martinez, 62, Retired Teacher</p>
          </div>

          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            Linda's story isn't unique. According to the American Diabetes Association, over <strong className="text-[#1e3a5f]">30 million Americans</strong> suffer from peripheral neuropathy, and conventional treatments fail to provide adequate relief for nearly 3 out of 4 patients.
          </p>

          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            But emerging research is revealing why—and more importantly, what actually works.
          </p>
        </motion.section>

        {/* Statistic Callout */}
        <motion.div
          className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] text-white rounded-2xl p-8 text-center my-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-6xl font-bold mb-3">30M+</p>
          <p className="text-xl">Americans suffer from peripheral neuropathy</p>
          <p className="text-sm mt-4 text-blue-200">Source: American Diabetes Association</p>
        </motion.div>

        {/* Problem Agitation Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8">
            The Pharmaceutical Failure: Why Your Doctor's Prescriptions Aren't Working (And May Never Work)
          </h2>

          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            For decades, neurologists have prescribed the same three medications for neuropathy: gabapentin, pregabalin (Lyrica), and carbamazepine (Tegretol). But here's what most doctors won't tell you:
          </p>

          <div className="bg-[#ff6b6b]/10 border-2 border-[#ff6b6b] rounded-xl p-8 my-8">
            <p className="text-xl font-semibold text-[#1e3a5f] mb-4">
              These drugs don't heal nerve damage. They don't reduce inflammation. They don't address the root cause of neuropathy at all.
            </p>
            <p className="text-lg text-[#2d3748]">
              Instead, they simply interrupt pain signals in your brain—masking symptoms while your nerves continue to deteriorate.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 my-8 border-l-4 border-[#87a96b]">
            <div className="flex items-start space-x-4">
              <SafeIcon icon={LuBrain} className="w-12 h-12 text-[#87a96b] flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg italic text-[#2d3748] leading-relaxed">
                  "We've been treating neuropathy backwards for 40 years. We sedate the brain instead of healing the nerves. It's like turning off your car's check engine light and pretending the problem is solved."
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  — Dr. James Richardson, Neurologist, Stanford Medical Center
                </p>
              </div>
            </div>
          </div>

          {/* Side Effects List */}
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { icon: LuBrain, text: 'Brain Fog & Memory Issues', color: '#ff6b6b' },
              { icon: LuTrendingUp, text: 'Significant Weight Gain (15-30 lbs)', color: '#ff6b6b' },
              { icon: FiAlertTriangle, text: 'Dizziness & Balance Problems', color: '#ff6b6b' },
              { icon: LuActivity, text: 'Physical Dependency Risk', color: '#ff6b6b' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SafeIcon icon={item.icon} className="w-6 h-6 flex-shrink-0" style={{ color: item.color }} />
                <span className="text-[#2d3748]">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Statistic */}
          <div className="bg-gradient-to-r from-[#f6ad55]/20 to-[#ff6b6b]/20 rounded-xl p-6 text-center my-8 border-2 border-[#f6ad55]">
            <p className="text-4xl font-bold text-[#1e3a5f] mb-2">73%</p>
            <p className="text-lg text-[#2d3748]">of patients report inadequate relief from prescription medications</p>
          </div>
        </motion.section>

        {/* Science Revelation Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8">
            The Breakthrough: What 40 Years of Neuroscience Research Finally Revealed About Nerve Regeneration
          </h2>

          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            In 2019, a team of researchers at the University of California made a startling discovery while studying traditional herbal medicine used by indigenous populations.
          </p>

          <p className="text-lg leading-relaxed text-[#2d3748] mb-6">
            They found that five specific botanical compounds, when combined in precise ratios and processed for maximum bioavailability, demonstrated remarkable nerve-protective and regenerative properties in clinical trials.
          </p>

          <div className="bg-gradient-to-br from-[#87a96b]/10 to-[#87a96b]/5 rounded-2xl p-8 my-10 border-2 border-[#87a96b]">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">
              Three Distinct Mechanisms of Action
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#87a96b] rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={LuShield} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-2">1. Myelin Sheath Repair</h4>
                  <p className="text-[#2d3748] leading-relaxed">
                    Rebuilding the protective coating around nerve fibers that deteriorates in neuropathy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={LuFlame} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-2">2. Inflammation Reduction</h4>
                  <p className="text-[#2d3748] leading-relaxed">
                    Targeting the chronic inflammation that perpetuates nerve damage
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f6ad55] rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={LuZap} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-2">3. Nerve Signal Optimization</h4>
                  <p className="text-[#2d3748] leading-relaxed">
                    Restoring proper electrical conductivity in damaged neural pathways
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 my-8 inline-flex items-center space-x-3">
            <SafeIcon icon={LuAward} className="w-8 h-8 text-[#f6ad55]" />
            <div>
              <p className="font-semibold text-[#1e3a5f]">Published Research</p>
              <p className="text-sm text-gray-600">Journal of Ethnopharmacology | Replicated across 3 continents</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-[#2d3748] mt-6">
            The results were so compelling that the research was published in the Journal of Ethnopharmacology and replicated by independent laboratories across three continents.
          </p>
        </motion.section>

        {/* Ingredient Spotlight */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            The Five Botanical Compounds That Changed Everything
          </h2>

          <div className="space-y-8">
            {/* Prickly Pear */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#87a96b]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#87a96b] to-[#6b8f55] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <SafeIcon icon={LuLeaf} className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Prickly Pear Extract (Opuntia ficus-indica)</h3>
                  <div className="inline-block bg-[#87a96b]/10 text-[#87a96b] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Reduces Neural Inflammation by 47%
                  </div>
                  <p className="text-[#2d3748] leading-relaxed">
                    Used for centuries in traditional Mexican medicine, prickly pear contains rare betalain compounds that reduce neural inflammation by up to 47% in clinical studies. Its unique polysaccharide structure protects nerve cells from oxidative damage—the primary cause of progressive neuropathy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Passionflower */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#ff6b6b]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#e55555] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <SafeIcon icon={LuMoon} className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Passionflower</h3>
                  <div className="inline-block bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Enhances GABA Activity for Better Sleep
                  </div>
                  <p className="text-[#2d3748] leading-relaxed">
                    Clinical trials show passionflower increases GABA (gamma-aminobutyric acid) activity in the brain, promoting natural relaxation without sedation. Unlike pharmaceutical sleep aids, it supports the body's natural sleep-wake cycle while reducing nighttime nerve discomfort that disrupts rest.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Marshmallow Root */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#f6ad55]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f6ad55] to-[#d89440] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <SafeIcon icon={LuShield} className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Marshmallow Root</h3>
                  <div className="inline-block bg-[#f6ad55]/10 text-[#f6ad55] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Creates Protective Mucilage Layer
                  </div>
                  <p className="text-[#2d3748] leading-relaxed">
                    This ancient remedy contains high levels of mucilage—a gel-like substance that coats and protects irritated nerve pathways. Research demonstrates its ability to reduce nerve sensitivity and create a protective barrier against inflammatory compounds that trigger burning sensations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Corydalis */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#1e3a5f]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <SafeIcon icon={LuActivity} className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Corydalis</h3>
                  <div className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Contains Dehydrocorybulbine (DHCB)
                  </div>
                  <p className="text-[#2d3748] leading-relaxed">
                    Used in Traditional Chinese Medicine for over 2,000 years, Corydalis contains DHCB, a compound that works through dopamine pathways to reduce pain perception without the side effects of opioids. Studies show it's particularly effective for nerve-related discomfort.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* California Poppy */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#87a96b]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#87a96b] to-[#6b8f55] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <SafeIcon icon={LuHeart} className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">California Poppy</h3>
                  <div className="inline-block bg-[#87a96b]/10 text-[#87a96b] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Non-Addictive Natural Anxiolytic
                  </div>
                  <p className="text-[#2d3748] leading-relaxed">
                    Despite its name, California Poppy is non-narcotic and non-addictive. It contains alkaloids that promote relaxation and reduce anxiety associated with chronic pain. Research shows it helps regulate sleep patterns and reduces the emotional distress that often accompanies neuropathy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Solution Introduction - Nerve Fresh Reveal */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f] text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <SafeIcon icon={LuZap} className="w-16 h-16 mx-auto mb-4 text-[#f6ad55]" />
                <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold mb-4">
                  Introducing Nerve Fresh
                </h2>
                <p className="text-xl text-blue-100">
                  The First Supplement to Combine All Five Compounds in Clinically-Effective Doses
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  After reviewing the research, a team of formulators asked a simple question: What if we could combine all five of these nerve-healing compounds into a single, convenient supplement—using the exact ratios and bioavailable forms proven effective in clinical trials?
                </p>
                <p className="text-lg leading-relaxed">
                  The result is <strong className="text-[#f6ad55]">Nerve Fresh</strong>: a proprietary blend that delivers therapeutic doses of all five botanical compounds in a single daily capsule.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <SafeIcon icon={LuShield} className="w-10 h-10 mx-auto mb-3 text-[#87a96b]" />
                  <p className="font-semibold">GMP Certified</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <SafeIcon icon={LuAward} className="w-10 h-10 mx-auto mb-3 text-[#f6ad55]" />
                  <p className="font-semibold">FDA Registered</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <SafeIcon icon={FiCheckCircle} className="w-10 h-10 mx-auto mb-3 text-[#87a96b]" />
                  <p className="font-semibold">Made in USA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={handleCTAClick}
            className="bg-[#ff6b6b] hover:bg-[#e55555] text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-3"
          >
            <span>See How Nerve Fresh Works →</span>
          </button>
          <p className="text-sm text-gray-500 mt-4">180-Day Money-Back Guarantee</p>
        </motion.div>

        {/* Benefits Transformation Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            What Users Are Experiencing Within 2-3 Weeks of Daily Use
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: LuMoon,
                title: 'Finally Sleeping Through the Night',
                description: 'The burning, tingling, and shooting pains that intensify at night begin to diminish within the first two weeks. Users report falling asleep faster and waking fewer times, leading to genuine restorative rest for the first time in years.',
                color: '#1e3a5f'
              },
              {
                icon: LuActivity,
                title: 'Regaining Sensation and Dexterity',
                description: 'The frustrating numbness that makes simple tasks like buttoning shirts or holding a coffee cup difficult starts to improve. Users describe it as "feeling coming back" to their fingers and toes, restoring confidence in daily activities.',
                color: '#87a96b'
              },
              {
                icon: LuHeart,
                title: 'Returning to Activities You Love',
                description: 'As pain decreases and sensation improves, users find themselves gardening again, playing with grandchildren, returning to hobbies, and walking without fear of losing balance.',
                color: '#ff6b6b'
              },
              {
                icon: LuBrain,
                title: 'Mental Clarity Without Medication Fog',
                description: 'Unlike gabapentin or Lyrica, Nerve Fresh doesn\'t cloud your thinking. Users report feeling sharp, focused, and like themselves again—without the cognitive impairment of prescription drugs.',
                color: '#f6ad55'
              },
              {
                icon: FiCheckCircle,
                title: 'Breaking Free from the Doctor\'s Office Cycle',
                description: 'No more endless appointments, failed treatments, or medication adjustments. Users describe the relief of finding something that actually works, reducing their dependence on the healthcare system that\'s let them down.',
                color: '#87a96b'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4"
                style={{ borderColor: benefit.color }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${benefit.color} 0%, ${benefit.color}dd 100%)` }}
                  >
                    <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">{benefit.title}</h3>
                    <p className="text-[#2d3748] leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Graphic */}
          <div className="bg-gradient-to-r from-[#87a96b]/10 to-[#f6ad55]/10 rounded-2xl p-8 mt-12 border-2 border-[#87a96b]">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Expected Timeline</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#87a96b] to-[#6b8f55] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <p className="font-bold text-[#1e3a5f] mb-2">Week 1</p>
                <p className="text-sm text-[#2d3748]">Initial absorption, subtle improvements in sleep quality</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#e55555] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2-3</span>
                </div>
                <p className="font-bold text-[#1e3a5f] mb-2">Weeks 2-3</p>
                <p className="text-sm text-[#2d3748]">Noticeable reduction in burning, tingling sensations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f6ad55] to-[#d89440] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">4+</span>
                </div>
                <p className="font-bold text-[#1e3a5f] mb-2">Week 4+</p>
                <p className="text-sm text-[#2d3748]">Continued improvement, better mobility, sustained relief</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Detailed Testimonials */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            Real Stories from Real People: How Nerve Fresh Changed Their Lives
          </h2>

          <div className="space-y-8">
            {/* Linda's Full Story */}
            <motion.div
              className="bg-gradient-to-br from-white to-[#87a96b]/5 rounded-3xl p-10 shadow-xl border-2 border-[#87a96b]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#87a96b] to-[#6b8f55] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl font-bold text-white">LM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">Linda Martinez</h3>
                  <p className="text-gray-600 mb-2">Age 62 | Phoenix, AZ | Retired Teacher</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f6ad55] text-xl">★</span>
                    ))}
                  </div>
                  <div className="inline-block bg-[#87a96b]/20 text-[#87a96b] px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    ✓ Verified Purchase
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-lg text-[#2d3748] leading-relaxed">
                <p>
                  "I was skeptical—I've tried every supplement on the market. But within 10 days of taking Nerve Fresh, I noticed the burning in my feet wasn't waking me up at 2 AM anymore. By week three, I was sleeping through the night consistently for the first time in five years.
                </p>
                <p>
                  But the real miracle? I can feel my feet again. I'm driving to see my grandchildren independently, I'm back in my garden club, and I'm standing at the stove cooking Sunday dinners again. My husband says I'm 'back to my old self'—and he's right. I feel like me again.
                </p>
                <p className="font-semibold text-[#1e3a5f]">
                  If you're suffering like I was, please don't give up. This gave me my life back."
                </p>
              </div>
            </motion.div>

            {/* Marcus's Story */}
            <motion.div
              className="bg-gradient-to-br from-white to-[#1e3a5f]/5 rounded-3xl p-10 shadow-xl border-2 border-[#1e3a5f]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl font-bold text-white">MT</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">Marcus Thompson</h3>
                  <p className="text-gray-600 mb-2">Age 54 | Atlanta, GA | Sales Manager</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f6ad55] text-xl">★</span>
                    ))}
                  </div>
                  <div className="inline-block bg-[#1e3a5f]/20 text-[#1e3a5f] px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    ✓ Verified Purchase
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-lg text-[#2d3748] leading-relaxed">
                <p>
                  "As a sales manager, my hands are everything. When the neuropathy started making me fumble during product demonstrations, I was terrified I'd lose my job. The medications my doctor prescribed made me so foggy I couldn't think straight in meetings.
                </p>
                <p>
                  Nerve Fresh gave me my career back. The tingling stopped, my dexterity returned, and I can shake hands with clients confidently again. Last quarter, I hit 127% of my sales target—my best performance in three years.
                </p>
                <p className="font-semibold text-[#1e3a5f]">
                  This supplement literally saved my livelihood."
                </p>
              </div>
            </motion.div>

            {/* Patricia's Story */}
            <motion.div
              className="bg-gradient-to-br from-white to-[#ff6b6b]/5 rounded-3xl p-10 shadow-xl border-2 border-[#ff6b6b]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#ff6b6b] to-[#e55555] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl font-bold text-white">PR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">Patricia Rodriguez</h3>
                  <p className="text-gray-600 mb-2">Age 68 | Portland, OR | Retired Nurse</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f6ad55] text-xl">★</span>
                    ))}
                  </div>
                  <div className="inline-block bg-[#ff6b6b]/20 text-[#ff6b6b] px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    ✓ Verified Purchase
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-lg text-[#2d3748] leading-relaxed">
                <p>
                  "I'm a retired nurse caring for my husband who has Parkinson's. When neuropathy made my hands numb, I was terrified of making a medication error with his complex regimen. The fear was overwhelming.
                </p>
                <p>
                  Nerve Fresh restored the sensation in my hands and reduced the pain enough that I can sleep through the night and have the energy to care for him with patience and love. I can cook, help him with transfers, and manage his medications safely.
                </p>
                <p className="font-semibold text-[#1e3a5f]">
                  It's kept my promise to care for him at home—something I thought I'd have to break."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Medical Professional Endorsement */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            Why Medical Professionals Are Recommending Nerve Fresh to Their Patients
          </h2>

          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] text-white rounded-3xl p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                <span className="text-5xl font-bold text-[#1e3a5f]">MC</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Dr. Michael Chen, MD</h3>
                <p className="text-blue-200 mb-4">Board-Certified Neurologist | California</p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Medical Professional Endorsement
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  "After reviewing the research behind the formulation, I was impressed by the scientific rigor. These aren't random herbs thrown together—each compound has documented nerve-protective properties, and the dosages match what's been proven effective in clinical trials.
                </p>
                <p className="text-lg leading-relaxed">
                  I've seen patients who failed every pharmaceutical option find real relief with this formula. The lack of cognitive side effects is particularly important for my older patients who need to maintain their mental clarity."
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: LuShield, text: 'GMP Certified', subtext: 'Highest Quality Standards' },
              { icon: LuAward, text: 'Made in USA', subtext: 'FDA Registered Facility' },
              { icon: FiCheckCircle, text: 'Third-Party Tested', subtext: 'Purity & Potency Verified' },
              { icon: LuLeaf, text: 'Natural Ingredients', subtext: 'No Synthetic Compounds' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SafeIcon icon={badge.icon} className="w-12 h-12 mx-auto mb-3 text-[#87a96b]" />
                <p className="font-bold text-[#1e3a5f] mb-1">{badge.text}</p>
                <p className="text-sm text-gray-600">{badge.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            Nerve Fresh vs. Prescription Medications: A Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Nerve Fresh</th>
                    <th className="px-6 py-4 text-center font-bold">Gabapentin/Lyrica</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Addresses root cause', nerveFresh: true, pharma: false },
                    { feature: 'Cognitive side effects', nerveFresh: false, pharma: true },
                    { feature: 'Weight gain', nerveFresh: false, pharma: true },
                    { feature: 'Dependency risk', nerveFresh: false, pharma: true },
                    { feature: 'Supports nerve healing', nerveFresh: true, pharma: false },
                    { feature: 'Natural ingredients', nerveFresh: true, pharma: false },
                    { feature: 'Doctor visits required', nerveFresh: false, pharma: true },
                    { feature: 'Monthly cost', nerveFresh: '$47-59', pharma: '$200-400' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-[#2d3748]">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.nerveFresh === 'boolean' ? (
                          row.nerveFresh ? (
                            <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-[#87a96b] mx-auto" />
                          ) : (
                            <span className="text-2xl text-gray-300">✗</span>
                          )
                        ) : (
                          <span className="font-semibold text-[#87a96b]">{row.nerveFresh}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.pharma === 'boolean' ? (
                          row.pharma ? (
                            <span className="text-2xl text-[#ff6b6b]">✗</span>
                          ) : (
                            <span className="text-2xl text-gray-300">✗</span>
                          )
                        ) : (
                          <span className="font-semibold text-[#ff6b6b]">{row.pharma}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6 italic">
            *Without insurance. Individual costs may vary.
          </p>
        </motion.section>

        {/* How It Works Timeline */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Merriweather'] text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
            Your Path to Relief: What to Expect Week by Week
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#87a96b] via-[#ff6b6b] to-[#f6ad55]"></div>

            <div className="space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Initial Adaptation',
                  description: 'Your body begins absorbing the bioavailable compounds. Some users notice subtle improvements in sleep quality and slight reduction in pain intensity. The botanical ingredients start working at the cellular level to reduce inflammation.',
                  icon: LuClock,
                  color: '#87a96b'
                },
                {
                  week: 'Weeks 2-3',
                  title: 'Noticeable Relief',
                  description: 'This is when most users experience significant changes: burning sensations decrease, sleep improves dramatically, and sensation begins returning to numb areas. The cumulative effect of the five compounds becomes apparent.',
                  icon: LuTrendingUp,
                  color: '#ff6b6b'
                },
                {
                  week: 'Week 4-6',
                  title: 'Continued Improvement',
                  description: 'Pain continues to diminish, dexterity improves, and users report returning to activities they\'d abandoned. Energy levels increase due to better sleep. Many users report feeling "like themselves again" during this phase.',
                  icon: LuActivity,
                  color: '#f6ad55'
                },
                {
                  week: 'Week 8+',
                  title: 'Sustained Results',
                  description: 'With continued use, benefits become more stable and consistent. Users report sustained comfort, better mobility, and improved quality of life. The nerve-protective properties of the botanicals continue supporting long-term nerve health.',
                  icon: LuHeart,
                  color: '#1e3a5f'
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-6 ml-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div 
                    className="absolute -left-16 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${phase.color} 0%, ${phase.color}dd 100%)` }}
                  >
                    <SafeIcon icon={phase.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 border-l-4" style={{ borderColor: phase.color }}>
                    <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-bold mb-3" style={{ color: phase.color }}>
                      {phase.week}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">{phase.title}</h3>
                    <p className="text-[#2d3748] leading-relaxed text-lg">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f6ad55]/20 to-[#ff6b6b]/20 rounded-2xl p-8 mt-12 text-center border-2 border-[#f6ad55]">
            <p className="text-xl font-semibold text-[#1e3a5f]">
              <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 inline mr-2" />
              Important: Natural solutions work gradually. Consistency is key to experiencing the full benefits.
            </p>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#ff6b6b] via-[#e55555] to-[#ff6b6b] text-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <SafeIcon icon={LuZap} className="w-20 h-20 mx-auto mb-6 text-[#f6ad55]" />
              
              <h2 className="font-['Merriweather'] text-4xl sm:text-5xl font-bold mb-6">
                Ready to Support Calmer, More Comfortable Nerves?
              </h2>
              
              <p className="text-2xl mb-8 text-white/90">
                Click below to see today's official Nerve Fresh details, bundles, and offers.
              </p>

              <button
                onClick={handleCTAClick}
                className="bg-white text-[#ff6b6b] hover:bg-gray-100 font-bold px-14 py-7 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block mb-6"
              >
                Visit the Official Nerve Fresh Page →
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={LuShield} className="w-5 h-5" />
                  <span>180-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5" />
                  <span>Free Shipping on Select Packages</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="font-bold text-[#1e3a5f] mb-4 text-center text-lg">Important Disclaimers</h3>
            <div className="space-y-3 text-sm text-[#2d3748] leading-relaxed">
              <p>
                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not provide medical advice. The information presented here is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult with a qualified healthcare provider before starting any new supplement, especially if you have existing medical conditions or take prescription medications. Statements regarding dietary supplements have not been evaluated by the FDA.
              </p>
              <p>
                <strong>Affiliate Disclosure:</strong> We may earn a commission if you purchase through links on this page, at no extra cost to you. This helps support our independent medical journalism and research.
              </p>
              <p>
                <strong>Results Disclaimer:</strong> Testimonials and case studies presented are individual experiences and do not guarantee that you will achieve the same results. The effectiveness of any health supplement can vary based on many factors including age, overall health, severity of condition, and consistency of use.
              </p>
            </div>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="font-['Merriweather'] text-2xl font-bold">Health News & Research</p>
            <p className="text-blue-200 text-sm">Independent Medical Review | Evidence-Based Wellness Education</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-200 pt-6 border-t border-white/20">
              <span>© 2025 Health Fit Fix</span>
              <span>•</span>
              <span>Wellness Education Only</span>
              <span>•</span>
              <span>Not Medical Advice</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NerveFreshEditorial;