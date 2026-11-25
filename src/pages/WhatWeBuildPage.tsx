import React from 'react';
import { PILLARS, ASSETS } from '../data/content';
import { ServiceDiagramShowcase } from '../components/ServiceDiagramShowcase';
import { FluidFieldBackground } from '../components/FluidFieldBackground';
import { GlassHeadlineHero } from '../components/GlassHeadlineHero';
import { ArrowRight, Check } from 'lucide-react';
import { PageType } from '../types';

interface WhatWeBuildPageProps {
  onNavigate: (page: PageType, hash?: string) => void;
  onOpenTalkModal: () => void;
}

export const WhatWeBuildPage: React.FC<WhatWeBuildPageProps> = ({
  onOpenTalkModal,
}) => {
  return (
    <div className="w-full text-neutral-900">
      {/* 1. Header with Fluid WebGL Background (matching Home hero) */}
      <section className="relative w-full bg-[#030306] overflow-hidden border-b border-neutral-200">
        {/* Dynamic Fluid WebGL Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FluidFieldBackground className="w-full h-full opacity-90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-36 pb-20 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto">
          <div className="space-y-6 max-w-5xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              SYSTEMS ARCHITECTURE
            </p>

            <h1 className="text-[52px] sm:text-[76px] lg:text-[96px] xl:text-[112px] font-black uppercase tracking-[-0.04em] leading-[0.92] text-white drop-shadow-sm">
              MORE THAN
              <br />
              SERVICES.
              <br />
              THE SYSTEMS
              <br />
              BEHIND GROWTH.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed drop-shadow-sm">
              Four essential parts of a business. One connected approach. We build the people, revenue, operations, and growth infrastructure required to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Glass Headline Hero (Replacing architectural visual) */}
      <section className="px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto py-10 sm:py-12 border-b border-neutral-200">
        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950">
          <GlassHeadlineHero
            title="SYSTEMS"
            description="Four essential engines engineered for scale: People Architecture, Revenue Engine, Operating SOPs, and Growth Flywheel."
            height="480px"
          />
        </div>
      </section>

      {/* 2. Interactive Diagrammatic Showcase */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-3 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            DIAGRAMMATIC ENGINE SPECIFICATION
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            The Infrastructure
            <br />
            Schematics.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            Inspect the structural stages, inputs, and verified deliverables for each organizational discipline.
          </p>
        </div>

        <ServiceDiagramShowcase onOpenTalkModal={onOpenTalkModal} />
      </section>

      {/* 3. Deep-Dive Deliverables for the 4 Pillars */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-3 pb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            DELIVERABLES MATRIX
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            Scope &amp; Artifacts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="backdrop-blur-xl bg-white/25 hover:bg-white/45 border border-neutral-200/50 hover:border-neutral-900 rounded-2xl p-8 space-y-6 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02),inset_0_1px_1px_0_rgba(255,255,255,0.7)] hover:shadow-[0_16px_45px_rgb(0,0,0,0.05)] hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-neutral-400 block">
                  {pillar.number} — {pillar.title}
                </span>

                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950">
                  {pillar.headline}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pillar.strategicImpact}
                </p>

                <div className="pt-2 border-t border-neutral-100/80 space-y-2">
                  <p className="font-mono text-[10px] font-bold text-neutral-900 uppercase tracking-wider">
                    Core Systems Installed
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-700">
                    {pillar.details.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Full Implementation Package
                </span>
                <button
                  onClick={onOpenTalkModal}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-950 hover:underline flex items-center gap-1"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Page Finish CTA */}
      <section className="py-20 sm:py-32 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold uppercase tracking-[-0.03em] leading-[0.96] text-neutral-950">
          Let’s build what
          <br />
          your business
          <br />
          needs next.
        </h2>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenTalkModal}
            className="px-8 py-4 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2.5 shadow-sm active:scale-[0.99]"
          >
            <span>Talk to Yuggora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
