import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-gray text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-leaf-green to-aqua rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
                </div>
              </div>
              <span className="font-montserrat font-bold text-xl">Health Fit Fix</span>
            </div>
            <p className="text-gray-400 font-lato text-sm leading-relaxed">
              Simple fixes for better health. Evidence-based wellness advice for adults 30+.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-aqua transition-colors font-lato">Home</Link></li>
              <li><Link to="/mission" className="text-gray-400 hover:text-aqua transition-colors font-lato">Our Mission</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-aqua transition-colors font-lato">Categories</Link></li>
              <li><Link to="/updates" className="text-gray-400 hover:text-aqua transition-colors font-lato">Updates</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/affiliate-disclosure" className="text-gray-400 hover:text-aqua transition-colors font-lato">Affiliate Disclosure</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-aqua transition-colors font-lato">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua transition-colors font-lato">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua transition-colors font-lato">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-400 font-lato text-sm mb-4">
              Follow us for daily health tips and updates.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-aqua rounded-full flex items-center justify-center transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-aqua rounded-full flex items-center justify-center transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-aqua rounded-full flex items-center justify-center transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="mailto:hello@healthfitfix.com" className="w-10 h-10 bg-white/10 hover:bg-aqua rounded-full flex items-center justify-center transition-colors">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-lato">
              © {new Date().getFullYear()} Health Fit Fix. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs font-lato">
              Made with care for your wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;