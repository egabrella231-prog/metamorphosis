import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-meta-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-meta-orange tracking-tight">META</span>
              <span className="text-2xl font-bold text-white tracking-tight">MORPHOSIS</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              We help businesses transform through innovative web design, process automation, and intelligent AI agents. Your evolution starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-meta-orange">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-meta-orange">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/metamorphosis.167777/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-meta-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-meta-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-meta-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-300 space-y-2">
                <p>+264 81 387 9841</p>
                <p>egabrella231@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Metamorphosis Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};