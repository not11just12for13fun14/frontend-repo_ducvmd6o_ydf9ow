import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const BLUE = '#3B82F6'; // bright blue

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white dark:bg-[#0b0b12]">
      {/* 3D Scene with Spline (full size) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#0b0b12]/40 to-[#0b0b12] dark:from-transparent dark:via-[#0b0b12]/50 dark:to-[#0b0b12]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-12 text-center sm:pt-24 lg:pt-32">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
          style={{ color: BLUE, borderColor: `${BLUE}33`, backgroundColor: `${BLUE}0D` }}
        >
          <Rocket size={14} style={{ color: BLUE }} />
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
            className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2"
            style={{ backgroundColor: BLUE }}
          >
            Get Started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-950"
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
