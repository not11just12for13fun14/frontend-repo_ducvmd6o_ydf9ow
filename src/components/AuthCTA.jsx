import React from 'react';
import { Mail, Lock, LogIn, UserPlus, ShieldCheck } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder }) => (
  <div className="relative">
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <Icon size={18} />
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#370044] dark:border-gray-700 dark:bg-[#0f0f17] dark:text-white"
    />
  </div>
);

const AuthCTA = () => {
  return (
    <section id="auth" className="relative w-full bg-white py-12 dark:bg-[#0b0b12] sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Secure sign-in with email or Google</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Create an account with email and password, or use Google to connect Sheets instantly. We use JWT sessions with refresh tokens and industry-standard password rules.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 text-emerald-500" size={18} /> Min 8 characters, strong password validation</li>
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 text-emerald-500" size={18} /> Email verification and password reset flows</li>
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 text-emerald-500" size={18} /> OAuth with Google for Sheets access</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0f0f17]">
          <div className="grid grid-cols-1 gap-4">
            <Input icon={Mail} placeholder="Email" type="email" />
            <Input icon={Lock} placeholder="Password" type="password" />
            <div className="flex gap-3">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#370044] px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95">
                <LogIn size={16} /> Login
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/5">
                <UserPlus size={16} /> Sign up
              </button>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#0f0f17] dark:text-white dark:hover:bg-white/5">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-4 w-4" />
              Continue with Google
            </button>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <a href="#" className="hover:underline">Forgot password?</a>
              <a href="#" className="hover:underline">Resend verification</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthCTA;
