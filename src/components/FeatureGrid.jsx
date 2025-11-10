import React from 'react';
import { Upload, Sparkles, FileSpreadsheet, BarChart3, Shield, Layers } from 'lucide-react';

const BLUE = '#3B82F6'; // bright blue

const features = [
  {
    icon: Upload,
    title: 'Receipt Upload',
    desc: 'Drag-and-drop images or PDFs, including bulk upload.'
  },
  {
    icon: Sparkles,
    title: 'OCR + AI Extraction',
    desc: 'Auto-detect date, vendor, category, amount, tax, and more.'
  },
  {
    icon: Layers,
    title: 'Duplicate Detection',
    desc: 'Hash-based detection surfaces possible duplicates instantly.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Google Sheets Sync',
    desc: 'Append and update rows, power real-time dashboards.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    desc: 'KPIs, charts, and PDF reports for any period.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'JWT sessions, OAuth, and privacy-first data handling.'
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="w-full bg-white py-14 dark:bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Everything you need to manage expenses</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-300">
          From secure sign-in to AI extraction and a live dashboard backed by Google Sheets.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-[#0f0f17]" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${BLUE}1A`, color: BLUE }}>
                  <Icon size={18} />
                </span>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
