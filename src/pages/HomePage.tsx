import React from 'react';
import { ASSETS, FRAMEWORK_STAGES, WHO_WE_HELP } from '../data/content';
import { ServiceDiagramShowcase } from '../components/ServiceDiagramShowcase';
import { FluidFieldBackground } from '../components/FluidFieldBackground';
import { GlassHeadlineHero } from '../components/GlassHeadlineHero';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType, hash?: string) => void;
  onOpenTalkModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenTalkModal }) => {
  return (
    <div className="w-full text-neutral-900">
      {/* 1. HERO SECTION - WITH FLUID BACKGROUND (ONLY TILL THE TEXT / BUTTONS) */}
      <section className="relative w-full bg-[#030306] overflow-hidden border-b border-neutral-200">
        {/* Dynamic Fluid WebGL Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FluidFieldBackground className="w-full h-full opacity-90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-36 pb-20 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto">
          <div className="space-y-8 max-w-7xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              STARTUP INFRASTRUCTURE &amp; GROWTH PARTNER
            </p>

            <h1 className="text-[52px] sm:text-[76px] lg:text-[96px] xl:text-[116px] 2xl:text-[128px] font-black uppercase tracking-[-0.04em] leading-[0.92] text-white drop-shadow-sm">
              BUILD THE
              <br />
              COMPANY.
              <br />
              NOT JUST THE
              <br />
              PRODUCT.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <p className="md:col-span-8 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl font-normal drop-shadow-sm">
                Yuggora helps growing startups build the people, revenue, operations, and growth infrastructure required to scale. We do not just advise—we engineer the systems, playbooks, and processes that move companies forward.
              </p>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <button
                  onClick={onOpenTalkModal}
                  className="px-7 py-4 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-between shadow-[0_4px_20px_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_25px_0_rgba(255,255,255,0.35)] active:scale-[0.99]"
                >
                  <span>Talk to Yuggora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('what-we-build')}
                  className="px-7 py-4 rounded-xl border border-white/20 hover:border-white/50 bg-white/[0.06] backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center hover:bg-white/[0.12]"
                >
                  Explore What We Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Headline Hero Section (Replacing the architectural building image) */}
      <section className="px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto py-10 sm:py-12 border-b border-neutral-200">
        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950">
          <GlassHeadlineHero
            title="YUGGORA"
            description="Build the company. Not just the product. We help growing startups build the people, revenue, operations, and growth infrastructure required to scale."
            height="480px"
          />
        </div>
      </section>

      {/* 2. DIAGRAMMATIC SHOWCASE OF SERVICES (Requested by user) */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-4 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            SYSTEM ARCHITECTURE
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            What We Build.
            <br />
            Four Engineered Engines.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Every department in a scaling startup requires deterministic infrastructure. Explore the exact inputs, rules, and deliverables of each engine below.
          </p>
        </div>

        {/* Interactive Diagrammatic Service Showcase */}
        <ServiceDiagramShowcase onOpenTalkModal={onOpenTalkModal} />
      </section>

      {/* 3. HOW WE WORK (5-STAGE FRAMEWORK) - High Impact Editorial Typography */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              EXECUTION BLUEPRINT
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
              The Scale
              <br />
              Framework.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
            From chaos to clarity to scale in five distinct, disciplined execution stages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {FRAMEWORK_STAGES.map((stg) => (
            <div
              key={stg.number}
              className="backdrop-blur-xl bg-white/25 hover:bg-white/45 border border-neutral-200/50 hover:border-neutral-900 rounded-2xl p-6 space-y-3 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02),inset_0_1px_1px_0_rgba(255,255,255,0.7)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.05)] hover:-translate-y-0.5"
            >
              <div>
                <span className="font-mono text-xs font-bold text-neutral-400 block mb-2">
                  {stg.number}
                </span>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-neutral-950">
                  {stg.name}
                </h3>
                <p className="text-xs font-bold text-neutral-800 mt-1">
                  {stg.summary}
                </p>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed pt-2 border-t border-neutral-100/80">
                {stg.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHO WE HELP (THE MESSY MIDDLE) */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-3 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            STAGE ADAPTABILITY
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            Built For The
            <br />
            Messy Middle.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
            Startups encounter distinct friction points at predictable headcount thresholds. We install the infrastructure that removes each bottleneck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHO_WE_HELP.map((item) => (
            <div
              key={item.stage}
              className="backdrop-blur-xl bg-white/25 hover:bg-white/45 border border-neutral-200/50 hover:border-neutral-900 rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02),inset_0_1px_1px_0_rgba(255,255,255,0.7)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.05)] hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400 block">
                  {item.stage}
                </span>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950">
                  {item.headline}
                </h3>
                <p className="text-xs text-neutral-600 font-medium">
                  {item.subtitle}
                </p>

                <div className="pt-3 border-t border-neutral-100/80 space-y-2 text-xs text-neutral-500">
                  <p className="font-mono font-bold text-neutral-900 uppercase text-[10px] tracking-wider">
                    Core Friction Symptoms
                  </p>
                  {item.coreSymptoms.slice(0, 3).map((sym) => (
                    <p key={sym} className="flex items-start gap-1.5">
                      <span className="text-neutral-400 font-mono">·</span>
                      <span>{sym}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100/80">
                <p className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Yuggora Infrastructure
                </p>
                <p className="text-xs font-semibold text-neutral-900 leading-relaxed">
                  {item.yuggoraAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL DIRECT CTA */}
      <section className="py-20 sm:py-32 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto text-center space-y-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
          START THE CONVERSATION
        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold uppercase tracking-[-0.03em] leading-[0.96] text-neutral-950">
          What’s stopping
          <br />
          your startup
          <br />
          from scaling?
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-md mx-auto leading-relaxed">
          Let’s figure out what your business needs next. Direct conversation with our principals.
        </p>

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
