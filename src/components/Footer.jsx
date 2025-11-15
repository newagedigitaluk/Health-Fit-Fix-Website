import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-deep-green to-leaf-green rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
                </div>
              </div>
              <span className="font-montserrat font-semibold text-xl">
                Health Fit Fix
              </span>
            </div>
            <p className="text-gray-300 font-lato">
              Simple fixes for better health. Practical wellness advice for adults 30+.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-300 hover:text-white font-lato transition-colors">
                Privacy Policy
              </Link>
              <Link to="/affiliate-disclosure" className="block text-gray-300 hover:text-white font-lato transition-colors">
                Affiliate Disclosure
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white font-lato transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/healthfitfix" className="text-gray-300 hover:text-white transition-colors" rel="nofollow">
                <SafeIcon icon={FiFacebook} className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/healthfitfix" className="text-gray-300 hover:text-white transition-colors" rel="nofollow">
                <SafeIcon icon={FiInstagram} className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@healthfitfix" className="text-gray-300 hover:text-white transition-colors" rel="nofollow">
                <SafeIcon icon={FiTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-lato text-sm">
              © 2025 Health Fit Fix. All rights reserved.
            </p>
            <p className="text-gray-400 font-lato text-xs text-center md:text-right">
              Educational purposes only; not medical advice; results vary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;