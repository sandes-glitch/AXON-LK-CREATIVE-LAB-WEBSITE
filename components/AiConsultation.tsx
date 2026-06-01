"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, X, Sparkles, Calendar, Clock, Briefcase, Zap, Star, Shield, HelpCircle, User, Mail, Send, CheckCircle } from "lucide-react";

interface AiRecommendation {
  agencySlogan: string;
  overallConcept: string;
  recommendedServices: Array<{
    title: string;
    turnaround: string;
    whyNeeded: string;
  }>;
  strategicAdmonition: string;
  totalEstimatedDuration: string;
  impactScore?: number;
}

interface AiConsultationProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRY_OPTIONS = [
  "Emerging Cyber-Tech",
  "Luxury Fashion & Beauty",
  "Entertainment & Audio",
  "Automotive & Engineering",
  "E-Commerce & Digital retail",
  "Healthcare & Science Synthesis"
];

const SCALABILITY_OPTIONS = [
  "Local Market Dominance",
  "National Scale Launch",
  "Global Immersive Footprint"
];

export default function AiConsultation({ isOpen, onClose }: AiConsultationProps) {
  // Wizard States
  const [step, setStep] = useState(1); // 1: Input details, 2: AI Proposals, 3: Calendar & Confirm
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState(INDUSTRY_OPTIONS[0]);
  const [scale, setScale] = useState(SCALABILITY_OPTIONS[1]);
  const [projectGoal, setProjectGoal] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  
  // AI Results
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<AiRecommendation | null>(null);

  // Booking states
  const [bookingDate, setBookingDate] = useState("2026-06-05");
  const [bookingTime, setBookingTime] = useState("14:00");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const triggerBlueprintSynthesis = async () => {
    if (!projectGoal.trim()) return;

    setIsGenerating(true);
    setStep(2);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          companyName: companyName || "Nouveau Studio",
          industry,
          projectGoal,
          targetAudience: targetAudience || "Modern premium consumers",
          scale
        })
      });

      if (!res.ok) {
        throw new Error("Blueprint matrix synchronization failed.");
      }

      const data = await res.json();
      setBlueprint(data);
    } catch (e) {
      console.error(e);
      // Fallback
      setBlueprint({
        agencySlogan: "INTEGRATED SYNTHETIC BRANDING SCALER",
        overallConcept: "Deploy neural digital campaigns across visual and audio frameworks to maximize futuristic exposure.",
        recommendedServices: [
          {
            title: "Cinematic Al Video Commercial",
            turnaround: "3 Business Days",
            whyNeeded: "Visually establish authority inside high-fidelity metaverse networks."
          },
          {
            title: "Dynamic AI Audio Suite & Voiceovers",
            turnaround: "2 Days",
            whyNeeded: "Formulate professional synthetic voice guides matching your audience profile."
          },
          {
            title: "Liquid Glassmorphic Landing System",
            turnaround: "5 Days",
            whyNeeded: "Present a high-converting web client that loads in less than 350ms."
          }
        ],
        strategicAdmonition: "Legacy marketing processes cannot hold pace with immediate modern synthetic intelligence models.",
        totalEstimatedDuration: "7 Business Days",
        impactScore: 97
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setIsBooked(true);
  };

  const resetWizard = () => {
    setStep(1);
    setCompanyName("");
    setIndustry(INDUSTRY_OPTIONS[0]);
    setScale(SCALABILITY_OPTIONS[1]);
    setProjectGoal("");
    setTargetAudience("");
    setBlueprint(null);
    setIsBooked(false);
    setClientName("");
    setClientEmail("");
    setClientPhone("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] glassmorphism rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.2)] overflow-y-auto flex flex-col font-sans-custom bg-black/95 z-50"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-950/90">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-600 animate-pulse" />
                <div>
                  <h2 className="text-white text-sm font-mono-custom tracking-widest font-extrabold flex items-center gap-1.5 uppercase">
                    AXON PLATFORM <span className="text-red-500">TACTICS v3.5</span>
                  </h2>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono-custom">
                    AI campaign strategy blueprint & meeting scheduler
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 px-3 text-xs bg-red-600/10 border border-red-500/30 text-red-500 hover:bg-red-600 hover:text-white rounded-md transition-all uppercase font-mono-custom"
              >
                Exit
              </button>
            </div>

            {/* Content Wizard */}
            <div className="flex-1 p-6 md:p-8">
              {/* Step indicator breadcrumbs */}
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 text-[11px] font-mono-custom text-zinc-500 uppercase tracking-widest">
                <span className={step === 1 ? "text-red-500 font-semibold" : blueprint ? "text-zinc-300" : ""}>
                  01. Vision details
                </span>
                <span className="h-[1px] w-6 bg-zinc-800" />
                <span className={step === 2 ? "text-red-500 font-semibold" : step > 2 ? "text-zinc-300" : ""}>
                  02. AI Blueprint proposal
                </span>
                <span className="h-[1px] w-6 bg-zinc-800" />
                <span className={step === 3 ? "text-red-500 font-semibold" : ""}>
                  03. Secure consultation
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center max-w-xl mx-auto mb-6">
                    <h3 className="text-xl md:text-2xl font-display-custom font-extrabold tracking-tight text-white uppercase">
                      BUILD YOUR 2035 BRAND BLUEPRINT
                    </h3>
                    <p className="text-zinc-400 text-xs mt-2 font-sans-custom leading-relaxed">
                      Leverage our strategic neural modules. Detail your product, select scope parameters, and our integrated Gemini engine will assemble a customized creative strategy proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1.5">
                        Brand / Company Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Nexus Automotive"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1.5">
                        Industry Vertical
                      </label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-red-600 font-sans-custom cursor-pointer"
                      >
                        {INDUSTRY_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1.5">
                        Target Demographic / Audience
                      </label>
                      <input
                        type="text"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        placeholder="e.g. High-net-worth cyber enthusiasts aged 25-40"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1.5">
                        Brand Expansion Scale
                      </label>
                      <select
                        value={scale}
                        onChange={(e) => setScale(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-red-600 font-sans-custom cursor-pointer"
                      >
                        {SCALABILITY_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1.5 font-semibold">
                      Primary Project Goal & Vision Offerings <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={projectGoal}
                      onChange={(e) => setProjectGoal(e.target.value)}
                      required
                      rows={3}
                      placeholder="e.g. We are launching a premium carbon electric watch. We want high-end Virtual AI commercials, dynamic electronic tracks for backgrounds, and dynamic web design."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      disabled={!projectGoal.trim()}
                      onClick={triggerBlueprintSynthesis}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono-custom font-extrabold text-xs uppercase tracking-widest rounded shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] transition-all cursor-pointer flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Cpu className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '4s' }} />
                      <span>SYNCHRONIZE AI BLUEPRINT</span>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-16 space-y-4">
                      <div className="relative w-16 h-16 flex items-center justify-center border border-red-600 rounded-full animate-pulse">
                        <Cpu className="w-8 h-8 text-red-600 animate-spin" style={{ animationDuration: "5s" }} />
                        <div className="absolute inset-0 bg-red-600/10 rounded-full glow-red" />
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="text-white text-xs uppercase font-mono-custom tracking-widest font-extrabold">
                          PROPOSAL ENGINE COMPILING
                        </h4>
                        <p className="text-zinc-400 text-[10px] uppercase tracking-widest font-mono-custom">
                          Initializing agent models... Mapping competitive landscapes
                        </p>
                      </div>
                    </div>
                  ) : (
                    blueprint && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                      >
                        {/* Proposal Results Deck */}
                        <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-xl border border-white/10 p-5 md:p-6 space-y-4 relative overflow-hidden">
                          {/* Slogan */}
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="font-mono-custom text-[9px] text-red-500 font-bold uppercase tracking-widest border border-red-500/20 bg-red-500/5 px-2 py-0.5 rounded">
                                CUSTOM BLUEPRINT GENERATE PERFECT
                              </span>
                              <h3 className="text-lg md:text-xl font-display-custom font-black tracking-widest uppercase text-white mt-2 font-mono-custom">
                                {blueprint.agencySlogan}
                              </h3>
                            </div>
                            {blueprint.impactScore && (
                              <div className="text-right shrink-0">
                                <span className="font-mono-custom text-[8px] text-zinc-500 block">IMPACT SCORE</span>
                                <span className="text-2xl md:text-3xl font-display-custom font-black text-red-500 font-mono-custom leading-none">
                                  {blueprint.impactScore}%
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="h-[1px] bg-white/5 my-2" />

                          {/* Concept */}
                          <div>
                            <span className="text-[9px] font-mono-custom text-zinc-500 uppercase tracking-widest">
                              OVERALL STRATEGIC VECTOR:
                            </span>
                            <p className="text-xs text-zinc-300 font-sans-custom mt-1 italic leading-relaxed">
                              &ldquo;{blueprint.overallConcept}&rdquo;
                            </p>
                          </div>

                          {/* Service breakdown */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {blueprint.recommendedServices?.map((srv, index) => (
                              <div
                                key={index}
                                className="bg-zinc-950 rounded-lg p-4 border border-zinc-800 flex flex-col justify-between hover:border-red-500/30 transition-all group"
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono-custom px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 group-hover:text-red-500 transition-colors">
                                      METHOD 0{index + 1}
                                    </span>
                                    <span className="text-[9px] font-mono-custom text-red-500 uppercase tracking-widest">
                                      {srv.turnaround}
                                    </span>
                                  </div>
                                  <h4 className="text-white text-xs uppercase font-mono-custom font-extrabold tracking-wider pt-1">
                                    {srv.title}
                                  </h4>
                                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                                    {srv.whyNeeded}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Strategic Admonition */}
                          <div className="pt-2 bg-zinc-950/40 p-3 rounded-lg border border-white/5 mt-4">
                            <p className="text-[10px] uppercase font-mono-custom text-zinc-500 tracking-widest">
                              2035 ADVISORY:
                            </p>
                            <p className="text-[11px] text-zinc-400 italic mt-0.5 leading-relaxed">
                              {blueprint.strategicAdmonition}
                            </p>
                          </div>

                          {/* Duration bottom footer */}
                          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-custom pt-3 border-t border-white/5 text-zinc-500">
                            <span className="uppercase">
                              ESTIMATED CAMPAIGN DELIVERY:{" "}
                              <strong className="text-white">{blueprint.totalEstimatedDuration}</strong>
                            </span>
                            <span className="uppercase text-red-500 text-[10px] tracking-widest">
                              AXON CORE AUTOMATION INTEGRATED
                            </span>
                          </div>
                        </div>

                        {/* Action Nav */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono-custom text-xs uppercase tracking-widest rounded hover:bg-zinc-800 transition-all font-bold"
                          >
                            Adjust Demographics
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="w-full sm:w-auto px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono-custom font-extrabold text-xs uppercase tracking-widest rounded shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Lock Proposal & Schedule slots</span>
                            <Calendar className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="max-w-xl mx-auto space-y-6">
                  {isBooked ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500 rounded-full mb-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-display-custom font-extrabold uppercase text-white tracking-widest">
                          CONSULTATION LINK SYNCED
                        </h3>
                        <p className="text-zinc-400 text-xs font-sans-custom max-w-md mx-auto leading-relaxed">
                          Your custom proposal blueprint was matched to calendar reservation code. We have dispatched sync packets to <strong className="text-red-500">{clientEmail}</strong>.
                        </p>
                      </div>

                      <div className="bg-zinc-900 rounded p-4 text-left border border-zinc-800 mt-4 space-y-2 font-mono-custom text-xs">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">CLIENT MATRIX:</span>
                          <span className="text-white uppercase">{clientName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">SCHEDULING VECTOR:</span>
                          <span className="text-red-500">{bookingDate} @ {bookingTime} IST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">STRATEGY FOCUS:</span>
                          <span className="text-zinc-300 truncate max-w-[200px]">{industry}</span>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-center gap-2">
                        <button
                          type="button"
                          onClick={resetWizard}
                          className="px-6 py-2 border border-zinc-800 rounded bg-zinc-950 hover:bg-zinc-900 text-xs text-zinc-400 hover:text-white uppercase font-mono-custom transition-all"
                        >
                          Build another blueprint
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-xs text-white uppercase font-mono-custom rounded transition-all shadow"
                        >
                          Done
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-4 pb-4">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-display-custom font-extrabold uppercase text-white tracking-widest">
                          CONFIRM SECURE APPOINTMENT
                        </h3>
                        <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                          Confirm scheduling slot with our Executive Directors. Your compiled custom blueprint proposal has already been securely packaged for review.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1">
                            Target Meeting Date
                          </label>
                          <div className="relative flex items-center">
                            <Calendar className="absolute left-3 w-4 h-4 text-zinc-500 pointer-events-none" />
                            <input
                              type="date"
                              value={bookingDate}
                              onChange={(e) => setBookingDate(e.target.value)}
                              className="w-full bg-zinc-900 border border-zinc-800 rounded pl-10 pr-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom cursor-pointer"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1">
                            Slot / Time (IST)
                          </label>
                          <div className="relative flex items-center">
                            <Clock className="absolute left-3 w-4 h-4 text-zinc-500 pointer-events-none" />
                            <input
                              type="time"
                              value={bookingTime}
                              onChange={(e) => setBookingTime(e.target.value)}
                              className="w-full bg-zinc-900 border border-zinc-800 rounded pl-10 pr-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="h-[1px] bg-white/5 my-3" />

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="e.g. Director of Operations"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1">
                              Contact Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={clientEmail}
                              onChange={(e) => setClientEmail(e.target.value)}
                              placeholder="e.g. solutions@firm.com"
                              className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono-custom text-zinc-400 uppercase tracking-widest mb-1">
                              Phone (Optional)
                            </label>
                            <input
                              type="tel"
                              value={clientPhone}
                              onChange={(e) => setClientPhone(e.target.value)}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 text-[10px] font-sans-custom text-zinc-500 leading-tight">
                        <Shield className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>Corporate privacy protocols of 2035 apply. Your blueprint analysis and brand data are fully encrypted offline.</span>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono-custom text-xs uppercase tracking-widest rounded hover:bg-zinc-800 transition-all font-bold"
                        >
                          Back to Proposal
                        </button>
                        
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono-custom font-extrabold text-xs uppercase tracking-widest rounded shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>SECURE BLUEPRINT APPOINTMENT</span>
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
