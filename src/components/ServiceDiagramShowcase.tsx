import React, { useState } from 'react';
import { SERVICE_DIAGRAMS } from '../data/content';
import { ArrowRight, ChevronRight, Layers, Sliders } from 'lucide-react';
import { FluidFieldBackground } from './FluidFieldBackground';

export const ServiceDiagramShowcase: React.FC<{ onOpenTalkModal: () => void }> = ({
  onOpenTalkModal,
}) => {
  const [activePillar, setActivePillar] = useState<string>('people');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentDiagram = SERVICE_DIAGRAMS[activePillar];
  const activeStep = currentDiagram.stages[activeStepIndex] || currentDiagram.stages[0];

  const pillarTabs = [
    { id: 'people', number: '01', label: 'People Architecture' },
    { id: 'revenue', number: '02', label: 'Revenue Engine' },
    { id: 'operations', number: '03', label: 'Operating SOPs' },
    { id: 'growth', number: '04', label: 'Growth Flywheel' },
  ];

  return (
    <div className="w-full space-y-10">
      {/* Pillar Selection Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-4">
        {pillarTabs.map((tab) => {
          const isSelected = activePillar === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActivePillar(tab.id);
                setActiveStepIndex(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white/25 hover:bg-white/50 border border-neutral-200/50 backdrop-blur-md text-neutral-700 hover:text-neutral-950 shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_0_rgba(255,255,255,0.6)]'
              }`}
            >
              <span className={`font-mono text-[10px] ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {tab.number}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Pillar System Overview */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
          <Layers className="w-3.5 h-3.5" />
          <span>SYSTEM SCHEMATIC BLUEPRINT</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-neutral-950">
          {currentDiagram.title}
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
          {currentDiagram.systemSummary}
        </p>

        {/* Key Metrics Strip */}
        <div className="pt-2 flex flex-wrap gap-3">
          {currentDiagram.keyMetrics.map((metric) => (
            <span
              key={metric}
              className="px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Diagrammatic Flow Schematic */}
      <div className="relative border border-white/10 rounded-2xl p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 overflow-hidden shadow-2xl bg-[#030306]">
        {/* WebGL Fluid Field Background */}
        <div className="absolute inset-0 -bottom-2 z-0 pointer-events-none overflow-hidden">
          <FluidFieldBackground className="w-full h-[102%] opacity-95" />
        </div>

        {/* Content Container positioned above WebGL canvas */}
        <div className="relative z-10 space-y-8">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pb-4 border-b border-white/10">
            <span className="tracking-wider">FOUR-STAGE PROCESS FLOW</span>
            <span className="hidden sm:inline tracking-wider">SELECT STAGE TO INSPECT ARCHITECTURAL SPECIFICATION</span>
          </div>

          {/* Process Flow Steps - Glassmorphic Apple Glass Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
            {currentDiagram.stages.map((stg, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl ${
                    isSelected
                      ? 'bg-white/[0.18] border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.4)] ring-1 ring-white/50 text-white'
                      : 'bg-white/[0.06] border-white/10 hover:bg-white/[0.12] hover:border-white/25 shadow-[0_4px_20px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] text-neutral-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded backdrop-blur-md transition-colors ${
                          isSelected
                            ? 'bg-white text-neutral-950 font-black shadow-sm'
                            : 'bg-white/10 text-neutral-300 border border-white/10'
                        }`}
                      >
                        STAGE {stg.step}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {stg.type}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold uppercase tracking-tight text-white drop-shadow-sm">
                      {stg.name}
                    </h4>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className={`text-[11px] font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                      Inspect Specs
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-neutral-400 group-hover:text-white'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Inspector - Glassmorphic Apple Glass Panel */}
          <div className="backdrop-blur-2xl bg-white/[0.08] border border-white/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_16px_40px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.25)] text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                  SYSTEM SPECIFICATION — STAGE {activeStep.step}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white drop-shadow-sm">
                  {activeStep.name}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-200">
                  {activeStep.type}
                </span>
              </div>
            </div>

            {/* Core Rule / Mechanism */}
            <div className="space-y-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                System Execution Rule
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-100 leading-relaxed drop-shadow-sm">
                {activeStep.rule}
              </p>
            </div>

            {/* Inputs & Outputs Architecture Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Inputs Card */}
              <div className="p-5 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300">
                  <Sliders className="w-3.5 h-3.5 text-blue-400" />
                  <span>Required System Inputs</span>
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                  {activeStep.inputs.map((inp) => (
                    <li key={inp} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-blue-400/80 rounded-full shrink-0 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outputs Card */}
              <div className="p-5 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/15 space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
                  <span>Generated System Deliverables</span>
                </div>
                <ul className="space-y-1.5 text-xs text-white font-mono font-medium">
                  {activeStep.outputs.map((out) => (
                    <li key={out} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenTalkModal}
                className="px-6 py-3 rounded-xl bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 shadow-[0_4px_20px_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_25px_0_rgba(255,255,255,0.35)] active:scale-[0.98]"
              >
                <span>Build This System With Yuggora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
