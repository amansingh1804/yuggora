import React from 'react';
import { ASSETS, FRAMEWORK_STAGES } from '../data/content';
import { FluidFieldBackground } from '../components/FluidFieldBackground';
import { GlassHeadlineHero } from '../components/GlassHeadlineHero';
import { ArrowRight, Check } from 'lucide-react';
import { PageType } from '../types';

interface AboutHowWeWorkPageProps {
  onNavigate: (page: PageType, hash?: string) => void;
  onOpenTalkModal: () => void;
}

export const AboutHowWeWorkPage: React.FC<AboutHowWeWorkPageProps> = ({
  onOpenTalkModal,
}) => {
  const groups = [
    {
      title: 'Founders',
      phase: 'Day Zero to Seed',
      description: 'Navigating the transition from doing everything solo to hiring the first key operators.',
      focus: 'Role scorecards, first CRM pipeline, and basic operating hygiene.',
    },
    {
      title: 'Early-Stage Startups',
      phase: 'Seed to Series A',
      description: 'When sudden customer demand creates friction across ad-hoc workflows.',
      focus: 'Repeatable sales playbooks, onboarding systems, and weekly management rhythms.',
    },
    {
      title: 'Growing Teams',
      phase: 'Series A to B',
      description: 'Bridging the messy middle where informal chat stops scaling.',
      focus: 'Middle-management enablement, cross-team handoffs, and KPI governance.',
    },
    {
      title: 'Scale-Stage Companies',
      phase: 'Series B & Beyond',
      description: 'Transforming strong individual contributors into institutionalized divisions.',
      focus: 'Enterprise SOP repositories, capacity models, and compounding acquisition engines.',
    },
  ];

  return (
    <div className="w-full text-neutral-900">
      {/* 1. Hero with Fluid WebGL Background (matching Home hero) */}
      <section id="about" className="relative w-full bg-[#030306] overflow-hidden border-b border-neutral-200">
        {/* Dynamic Fluid WebGL Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FluidFieldBackground className="w-full h-full opacity-90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-36 pb-20 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto">
          <div className="space-y-6 max-w-5xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              ABOUT YUGGORA
            </p>

            <h1 className="text-[52px] sm:text-[76px] lg:text-[96px] xl:text-[112px] font-black uppercase tracking-[-0.04em] leading-[0.92] text-white drop-shadow-sm">
              GROWTH NEEDS
              <br />
              MORE THAN
              <br />
              GOOD IDEAS.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed drop-shadow-sm">
              It needs structure, people and systems that work together. Yuggora is the startup infrastructure partner that helps growing companies build the foundations required to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Glass Headline Hero (Replacing architectural visual) */}
      <section className="px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto py-10 sm:py-12 border-b border-neutral-200">
        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950">
          <GlassHeadlineHero
            title="METHOD"
            description="Our 5-stage framework translates high-level strategy into deterministic operating cadences, playbooks, and organizational leverage."
            height="480px"
          />
        </div>
      </section>

      {/* 2. The 5-Stage Framework */}
      <section id="how-we-work" className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-3 pb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            HOW WE WORK
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            The Five-Stage
            <br />
            Framework.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            We work alongside founders to diagnose, design, build, implement, and scale the operational machine.
          </p>
        </div>

        <div className="space-y-6">
          {FRAMEWORK_STAGES.map((stg) => (
            <div
              key={stg.number}
              className="backdrop-blur-xl bg-white/25 hover:bg-white/45 border border-neutral-200/50 hover:border-neutral-900 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02),inset_0_1px_1px_0_rgba(255,255,255,0.7)] hover:shadow-[0_16px_45px_rgb(0,0,0,0.05)]"
            >
              <div className="md:col-span-4 space-y-1">
                <span className="font-mono text-xs font-bold text-neutral-400 block mb-1">
                  STAGE {stg.number}
                </span>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950">
                  {stg.name}
                </h3>
                <p className="text-xs font-bold text-neutral-700">
                  {stg.summary}
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {stg.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {stg.keyOutputs.map((out) => (
                    <span
                      key={out}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100/80 backdrop-blur-md text-xs font-mono font-medium text-neutral-900 border border-neutral-200/70"
                    >
                      <Check className="w-3 h-3 text-neutral-950" />
                      <span>{out}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Philosophy */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200 text-center space-y-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
          OUR PHILOSOPHY
        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold uppercase tracking-[-0.03em] leading-[0.96] text-neutral-950">
          BUILD THE COMPANY.
          <br />
          NOT JUST THE PRODUCT.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          A good product can create momentum. The right people, processes and systems help turn that momentum into a company built for the future.
        </p>
      </section>

      {/* 4. Stage Adaptability */}
      <section className="py-16 sm:py-24 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto border-b border-neutral-200">
        <div className="space-y-3 pb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            WHO WE HELP
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-[-0.03em] leading-[0.98] text-neutral-950">
            Stage Adaptability.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((grp) => (
            <div
              key={grp.title}
              className="backdrop-blur-xl bg-white/25 hover:bg-white/45 border border-neutral-200/50 hover:border-neutral-900 rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02),inset_0_1px_1px_0_rgba(255,255,255,0.7)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.05)] hover:-translate-y-0.5"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-neutral-400 block">
                  {grp.phase}
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-neutral-950">
                  {grp.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {grp.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100/80">
                <p className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  Primary Focus
                </p>
                <p className="text-xs font-semibold text-neutral-900 mt-1">
                  {grp.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 sm:py-32 px-3 sm:px-8 lg:px-12 w-full max-w-[1536px] mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold uppercase tracking-[-0.03em] leading-[0.96] text-neutral-950">
          Your next stage
          <br />
          starts with
          <br />
          structure.
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
