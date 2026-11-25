/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TalkModal } from './components/TalkModal';
import { AuroraBackground } from './components/AuroraBackground';
import { HomePage } from './pages/HomePage';
import { WhatWeBuildPage } from './pages/WhatWeBuildPage';
import { AboutHowWeWorkPage } from './pages/AboutHowWeWorkPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTalkModalOpen, setIsTalkModalOpen] = useState<boolean>(false);
  const [talkInitialPillar, setTalkInitialPillar] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageType, hash?: string) => {
    setCurrentPage(page);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenTalk = (initialPillar?: string) => {
    setTalkInitialPillar(initialPillar);
    setIsTalkModalOpen(true);
  };

  return (
    <AuroraBackground className="min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <div className="min-h-screen flex flex-col justify-between">
        {/* Top Minimal Navbar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenTalkModal={() => handleOpenTalk()}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenTalkModal={() => handleOpenTalk()}
            />
          )}
          {currentPage === 'what-we-build' && (
            <WhatWeBuildPage
              onNavigate={handleNavigate}
              onOpenTalkModal={() => handleOpenTalk()}
            />
          )}
          {currentPage === 'about-how-we-work' && (
            <AboutHowWeWorkPage
              onNavigate={handleNavigate}
              onOpenTalkModal={() => handleOpenTalk()}
            />
          )}
        </main>

        {/* Global Minimal Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenTalkModal={() => handleOpenTalk()}
        />

        {/* Talk to Yuggora Modal */}
        <TalkModal
          isOpen={isTalkModalOpen}
          onClose={() => setIsTalkModalOpen(false)}
          initialPillar={talkInitialPillar}
        />

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 p-2.5 rounded-lg bg-white/90 backdrop-blur-md border border-neutral-300 text-neutral-700 hover:text-neutral-950 hover:border-neutral-900 transition-all shadow-md active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </AuroraBackground>
  );
}
