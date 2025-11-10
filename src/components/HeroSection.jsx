import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white dark:bg-[#0b0b12]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white dark:from-[#0b0b12]/40 dark:via-[#0b0b12]/70 dark:to-[#0b0b12]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-12 text-center sm:pt-24 lg:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary" style={{
          // Tailwind color shortcut – primary = #370044 from brief
          // Apply via inline style for brand accuracy
          color: '#370044',
          borderColor: '#37004433',
          backgroundColor: '#3700440D',
        }}>
          <Rocket size={14} />
          AI-Powered Expense Manager
        </span>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Trakify — Track receipts, extract with AI, and sync to Sheets
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          Upload receipts as images or PDFs, auto-extract details with OCR + AI, review, and push to Google Sheets for real-time dashboards.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#auth"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#370044] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#370044]/40"
          >
            Get Started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/5"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
