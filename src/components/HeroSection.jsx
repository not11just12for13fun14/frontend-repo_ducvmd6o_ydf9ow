import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const BLUE = '#3B82F6'; // bright blue accent

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white dark:bg-[#0b0b12]">
      {/* 3D Spline Cover Background (full-bleed) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Radial + bottom gradient overlays for legibility; non-blocking for interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,11,18,0.0),_rgba(11,11,18,0.6)_60%,_rgba(11,11,18,0.85))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b12] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-12 text-center sm:pt-28 lg:pt-36">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur"
          style={{ color: BLUE, borderColor: `${BLUE}33`, backgroundColor: `${BLUE}14` }}
        >
          <Rocket size={14} style={{ color: BLUE }} />
          AI-Powered Expense Manager
        </span>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Trakify — Capture receipts. Extract with AI. Sync to Sheets.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 dark:text-gray-300">
          Fast, accurate, and modern. Upload images or PDFs, auto-parse totals and vendors, then review and push to Google Sheets for live reporting.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#auth"
            className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-0"
            style={{ backgroundColor: BLUE }}
          >
            Get Started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40"
            style={{ borderColor: BLUE, color: BLUE }}
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
