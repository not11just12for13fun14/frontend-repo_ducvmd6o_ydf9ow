import React from 'react';
import { Github, Mail, Shield, Settings } from 'lucide-react';

const BLUE = '#3B82F6'; // bright blue

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-[#0b0b12]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold" style={{ color: BLUE }}>Trakify</span> · AI Expense Manager · <span className="font-medium" style={{ color: BLUE }}>Powered by EKANI.AI</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a href="#" className="inline-flex items-center gap-1 hover:underline" style={{ color: BLUE }}><Shield size={16} /> Privacy</a>
          <a href="#" className="inline-flex items-center gap-1 hover:underline" style={{ color: BLUE }}><Settings size={16} /> Settings</a>
          <a href="#" className="inline-flex items-center gap-1 hover:underline" style={{ color: BLUE }}><Github size={16} /> GitHub</a>
          <a href="mailto:hello@trakify.app" className="inline-flex items-center gap-1 hover:underline" style={{ color: BLUE }}><Mail size={16} /> Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
