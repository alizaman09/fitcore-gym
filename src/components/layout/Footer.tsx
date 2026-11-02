import React, { useState } from 'react';
import { Flame, Instagram, Youtube, Twitter, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#07080a] border-t border-neutral-900 text-neutral-400 text-xs pt-16 pb-24 md:pb-16 m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-white font-display text-2xl font-bold uppercase">
              <div className="w-7 h-7 rounded bg-[#ff5000] text-black flex items-center justify-center font-black text-sm">
                <Flame className="w-4 h-4 fill-black text-black" />
              </div>
              <span>
                FIT<span className="text-[#ff5000]">CORE</span>
              </span>
            </a>
            <p className="text-neutral-400 max-w-sm text-xs leading-relaxed">
              Join a community where goals are crushed, strength is built, and potential becomes power. Expert coaching, proven training programs, and elite equipment.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-lg bg-[#14161f] hover:bg-[#ff5000] hover:text-white flex items-center justify-center text-neutral-300 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#14161f] hover:bg-[#ff5000] hover:text-white flex items-center justify-center text-neutral-300 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#14161f] hover:bg-[#ff5000] hover:text-white flex items-center justify-center text-neutral-300 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#home" className="hover:text-[#ff5000] transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-[#ff5000] transition-colors">Programs</a></li>
              <li><a href="#schedule" className="hover:text-[#ff5000] transition-colors">Schedule</a></li>
              <li><a href="#about" className="hover:text-[#ff5000] transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-[#ff5000] transition-colors">Membership Packages</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="text-neutral-400 text-xs">
              Receive workout tips, nutrition guidance, and club updates directly to your inbox.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-[#ff5000]/10 border border-[#ff5000]/40 text-[#ff5000] text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 bg-[#12141c] border border-neutral-800 rounded-lg text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5000]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#ff5000] hover:bg-[#e04600] text-white font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} FITCORE Gym & Fitness Club. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
