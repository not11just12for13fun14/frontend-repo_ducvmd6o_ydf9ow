import React from 'react';
import { Mail, Lock, LogIn, UserPlus, ShieldCheck } from 'lucide-react';

const BLUE = '#3B82F6'; // bright blue

const Input = ({ icon: Icon, type = 'text', placeholder }) => (
  <div className="relative">
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BLUE }}>
      <Icon size={18} />
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border bg-[#11131a] py-3 pl-10 pr-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2"
      style={{ borderColor: '#1f2430', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, outlineColor: BLUE }}
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
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5" size={18} style={{ color: BLUE }} /> Min 8 characters, strong password validation</li>
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5" size={18} style={{ color: BLUE }} /> Email verification and password reset flows</li>
            <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5" size={18} style={{ color: BLUE }} /> OAuth with Google for Sheets access</li>
          </ul>
        </div>

        {/* Auth card with white font */}
        <div className="rounded-2xl border border-[#1f2430] bg-[#0f0f17] p-6 text-white shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <Input icon={Mail} placeholder="Email" type="email" />
            <Input icon={Lock} placeholder="Password" type="password" />
            <div className="flex gap-3">
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
                style={{ backgroundColor: BLUE }}
              >
                <LogIn size={16} /> Login
              </button>
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold hover:bg-blue-950/40"
                style={{ borderColor: BLUE, color: 'white' }}
              >
                <UserPlus size={16} /> Sign up
              </button>
            </div>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-[#11131a] px-4 py-2.5 text-sm font-semibold hover:bg-blue-950/40"
              style={{ borderColor: BLUE, color: 'white' }}
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-4 w-4" />
              Continue with Google
            </button>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <a href="#" className="hover:underline" style={{ color: BLUE }}>Forgot password?</a>
              <a href="#" className="hover:underline" style={{ color: BLUE }}>Resend verification</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthCTA;
