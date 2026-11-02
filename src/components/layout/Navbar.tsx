import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onJoinNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 m-0 p-0 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-neutral-900 py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo pinned to extreme left edge with standard padding */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-display text-xl sm:text-2xl font-bold tracking-tight uppercase shrink-0"
          >
            <div className="w-7 h-7 rounded bg-[#ff5000] text-black flex items-center justify-center font-black text-sm">
              <Flame className="w-4 h-4 fill-black text-black" />
            </div>
            <span className="font-extrabold tracking-wide">
              FIT<span className="text-[#ff5000]">CORE</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#ff5000] transition-colors whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Action Button (Desktop) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onJoinNow}
              className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#ff5000] hover:bg-[#e04600] rounded-full transition-all duration-150 active:scale-95 shadow-md shadow-[#ff5000]/20 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Right Edge: Join Now button and Hamburger menu icon */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            <button
              onClick={onJoinNow}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#ff5000] rounded-full cursor-pointer whitespace-nowrap"
            >
              Join Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-200 hover:text-white focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[60px] left-0 right-0 bg-[#0c0d10] border-b border-neutral-800 px-6 py-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-[#ff5000] border-b border-neutral-800/60"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinNow();
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider bg-[#ff5000] hover:bg-[#e04600] text-white rounded-full text-center shadow-lg cursor-pointer"
              >
                Join Now — Start Today
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
