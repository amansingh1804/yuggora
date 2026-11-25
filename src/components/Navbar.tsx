import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, hash?: string) => void;
  onOpenTalkModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenTalkModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageType, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-6 lg:px-8 py-3 transition-all duration-200">
      <div
        className={`w-full max-w-[1536px] mx-auto rounded-2xl border transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sm:gap-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_1px_0_rgba(255,255,255,0.2)] ${
          isScrolled
            ? 'bg-neutral-950/70 border-white/20 shadow-black/40'
            : 'bg-white/[0.08] border-white/15 hover:border-white/25'
        }`}
      >
        {/* Zone 1: Brand wordmark & Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded flex items-center gap-3 group"
        >
          <img
            src="/yuggora-logo.png"
            alt="Yuggora Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 drop-shadow-sm">
            YUGGORA
          </span>
        </button>

        {/* Zone 2: Hamburger menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white flex items-center gap-2"
            aria-label="Toggle navigation menu"
          >
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Menu
            </span>
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 w-full max-w-[1536px] mx-auto rounded-2xl bg-neutral-950/85 backdrop-blur-2xl border border-white/20 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-4 text-white animate-fade-in">
          <nav className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left py-2.5 px-4 rounded-xl transition-colors ${
                currentPage === 'home' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('what-we-build')}
              className={`text-left py-2.5 px-4 rounded-xl transition-colors ${
                currentPage === 'what-we-build' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              What We Build
            </button>
            <button
              onClick={() => handleLinkClick('about-how-we-work', 'how-we-work')}
              className={`text-left py-2.5 px-4 rounded-xl transition-colors ${
                currentPage === 'about-how-we-work' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              How We Work
            </button>
          </nav>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalkModal();
              }}
              className="w-full py-3 rounded-xl bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider text-center hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_15px_rgba(255,255,255,0.25)] active:scale-[0.99]"
            >
              <span>Talk to Yuggora</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
