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

        {/* Laptop mockup showing an accounting tracker */}
        <div className="pointer-events-none mt-12 w-full max-w-5xl">
          <div className="mx-auto rounded-xl border border-white/10 bg-gradient-to-b from-white/60 to-white/20 p-2 shadow-2xl backdrop-blur-md dark:from-white/10 dark:to-white/5">
            {/* Screen */}
            <div className="rounded-lg border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-[#0f0f17]">
              {/* Window controls */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:text-gray-400">
                  Trakify — Accounting
                </span>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <aside className="col-span-3 space-y-2">
                  {['Dashboard', 'Transactions', 'Vendors', 'Reports', 'Sheets Sync'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-md border px-3 py-2 text-sm ${i === 0 ? 'border-blue-500/30 bg-blue-500/10 text-blue-500' : 'border-white/10 text-gray-600 dark:text-gray-300'}`}
                    >
                      {item}
                    </div>
                  ))}
                </aside>

                {/* Main content */}
                <main className="col-span-9 space-y-4">
                  {/* KPI cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Total Spend', value: '$12,450', delta: '+8%' },
                      { label: 'This Month', value: '$2,130', delta: '+3%' },
                      { label: 'Uncategorized', value: '$184', delta: '-12%' },
                    ].map((k) => (
                      <div key={k.label} className="rounded-lg border border-white/10 bg-gradient-to-b from-white/40 to-white/10 p-3 dark:from-white/5 dark:to-transparent">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{k.label}</div>
                        <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{k.value}</div>
                        <div className="text-[11px] text-emerald-500">{k.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart + Table */}
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 rounded-lg border border-white/10 p-3">
                      <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">Spending by Category</div>
                      <div className="flex h-28 items-end gap-2">
                        {[40, 72, 55, 90, 60].map((h, i) => (
                          <div
                            key={i}
                            className="w-6 rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-7 rounded-lg border border-white/10 p-3">
                      <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">Recent Transactions</div>
                      <div className="divide-y divide-white/10 text-xs">
                        {[
                          ['2025-02-01', 'Starbucks', '$4.80', 'Meals'],
                          ['2025-02-01', 'Uber', '$18.60', 'Travel'],
                          ['2025-02-02', 'Office Depot', '$64.12', 'Supplies'],
                          ['2025-02-03', 'AWS', '$215.00', 'Cloud'],
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-4 gap-2 py-2 text-gray-700 dark:text-gray-300">
                            <div>{row[0]}</div>
                            <div>{row[1]}</div>
                            <div className="text-right">{row[2]}</div>
                            <div className="text-right text-gray-500">{row[3]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            {/* Base/keyboard hint */}
            <div className="mx-auto mt-2 h-2 w-2/3 rounded-b-xl bg-gradient-to-b from-white/70 to-white/20 dark:from-white/10 dark:to-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
