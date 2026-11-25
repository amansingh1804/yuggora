import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, User, Mail, Building, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';
import { SmokeyBackground } from './SmokeyBackground';

interface TalkModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPillar?: string;
}

export const TalkModal: React.FC<TalkModalProps> = ({ isOpen, onClose, initialPillar }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSize: '10–30',
    primaryPillars: initialPillar ? [initialPillar] : ['revenue', 'operations'],
    currentBottleneck: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePillarToggle = (pillar: string) => {
    setFormData((prev) => {
      const exists = prev.primaryPillars.includes(pillar);
      return {
        ...prev,
        primaryPillars: exists
          ? prev.primaryPillars.filter((p) => p !== pillar)
          : [...prev.primaryPillars, pillar],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Enter a valid corporate email';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (formData.primaryPillars.length === 0) {
      errs.primaryPillars = 'Select at least one focus';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dim backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col backdrop-blur-2xl bg-zinc-950/85 border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.25)] p-5 sm:p-7 text-white my-auto z-10 overflow-hidden">
        {/* Interactive WebGL Smokey Background Effect */}
        <SmokeyBackground color="#2563EB" className="rounded-2xl sm:rounded-3xl" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {isSubmitted ? (
          <div className="relative z-10 py-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Brief Received.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. We will review <span className="font-semibold text-white">{formData.companyName}</span>'s profile and reply within 24 hours.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/15 max-w-sm mx-auto text-left text-xs text-neutral-300 space-y-1.5 shadow-inner">
              <div className="flex justify-between">
                <span className="text-neutral-400">Team Stage:</span>
                <span className="font-semibold text-white">{formData.teamSize} people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Infrastructure:</span>
                <span className="font-semibold text-white">
                  {formData.primaryPillars.map((p) => p.toUpperCase()).join(', ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Email:</span>
                <span className="font-mono text-white text-[11px]">yuggoraofficial@gmail.com</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-2 px-7 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="relative z-10 overflow-y-auto pr-1 -mr-1 custom-scrollbar">
            <div className="space-y-0.5 mb-4 sm:mb-5">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-blue-400">
                START A CONVERSATION
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Talk to Yuggora
              </h2>
              <p className="text-[11px] sm:text-xs text-neutral-300 leading-snug">
                Tell us about your startup and where you are currently experiencing friction.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Team Size (Horizontal scroll/flex row with compact pills) */}
              <div>
                <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-1.5">
                  Current Team Size
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { label: '5–10', sub: 'Growing', value: '5–10' },
                    { label: '10–30', sub: 'Scaling', value: '10–30' },
                    { label: '30–50+', sub: 'Expansion', value: '30–50+' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, teamSize: option.value })}
                      className={`px-2.5 py-1.5 sm:py-2 rounded-full border text-center transition-all duration-300 backdrop-blur-md flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 ${
                        formData.teamSize === option.value
                          ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.45)]'
                          : 'bg-white/10 hover:bg-white/15 border-white/15 text-neutral-300 hover:text-white'
                      }`}
                    >
                      <span className="text-[11px] sm:text-xs font-bold leading-tight">{option.label}</span>
                      <span className={`text-[9px] sm:text-[10px] ${formData.teamSize === option.value ? 'text-blue-100' : 'text-neutral-400'}`}>
                        {option.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Infrastructure Focus (Compact 4-column pills) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    Infrastructure To Build
                  </label>
                  {errors.primaryPillars && (
                    <span className="text-[10px] text-red-400 font-medium">
                      {errors.primaryPillars}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'people', label: 'People' },
                    { id: 'revenue', label: 'Revenue' },
                    { id: 'operations', label: 'Ops' },
                    { id: 'growth', label: 'Growth' },
                  ].map((item) => {
                    const isSelected = formData.primaryPillars.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handlePillarToggle(item.id)}
                        className={`py-1.5 px-1 sm:px-2 rounded-full border text-center text-[11px] sm:text-xs font-semibold transition-all duration-300 backdrop-blur-md ${
                          isSelected
                            ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.45)]'
                            : 'bg-white/10 hover:bg-white/15 border-white/15 text-neutral-300 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email (Compact side-by-side or stacked on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-0.5">
                <div className="relative">
                  <input
                    type="text"
                    id="talk_fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder=" "
                    className="block py-1.5 sm:py-2 px-0 w-full text-xs sm:text-sm text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer transition-colors"
                  />
                  <label
                    htmlFor="talk_fullName"
                    className="absolute text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Your Name *</span>
                  </label>
                  {errors.fullName && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.fullName}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="talk_workEmail"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder=" "
                    className="block py-1.5 sm:py-2 px-0 w-full text-xs sm:text-sm text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer transition-colors"
                  />
                  <label
                    htmlFor="talk_workEmail"
                    className="absolute text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Work Email *</span>
                  </label>
                  {errors.workEmail && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.workEmail}</p>
                  )}
                </div>
              </div>

              {/* Company & Roadblock */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="talk_companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder=" "
                    className="block py-1.5 sm:py-2 px-0 w-full text-xs sm:text-sm text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer transition-colors"
                  />
                  <label
                    htmlFor="talk_companyName"
                    className="absolute text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <Building className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Company Name *</span>
                  </label>
                  {errors.companyName && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.companyName}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="talk_bottleneck"
                    value={formData.currentBottleneck}
                    onChange={(e) => setFormData({ ...formData, currentBottleneck: e.target.value })}
                    placeholder=" "
                    className="block py-1.5 sm:py-2 px-0 w-full text-xs sm:text-sm text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer transition-colors"
                  />
                  <label
                    htmlFor="talk_bottleneck"
                    className="absolute text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Roadblock (Optional)</span>
                  </label>
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-1 sm:pt-2 flex flex-row items-center justify-between gap-3">
                <span className="text-[10px] text-neutral-400 leading-tight">
                  Confidential founder brief.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shadow-[0_0_18px_rgba(37,99,235,0.4)] hover:shadow-[0_0_24px_rgba(37,99,235,0.6)] active:scale-95 disabled:opacity-50 shrink-0"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Brief</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
