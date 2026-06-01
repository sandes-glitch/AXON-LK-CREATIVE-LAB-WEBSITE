"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Compass, Paintbrush, Sliders, CheckCircle, ChevronRight, Play } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery & Audio-Visual Sync",
    icon: <Search className="w-5 h-5 text-red-500 animate-pulse" />,
    subtitle: "Define objectives and establish competitive visual codes.",
    description: "First, we synchronize goals. We deep-dive into your brand's performance markers, specify structural visual directives, and run AI scoping maps to pinpoint maximum conversion opportunities inside your digital channels."
  },
  {
    num: "02",
    title: "Strategy Formulation Model",
    icon: <Compass className="w-5 h-5 text-red-500" />,
    subtitle: "Synthesize custom generative parameters.",
    description: "Here we custom-program standard variables. We select exact model architectures (like Veo, Lyria, or custom logo grids) to fit your industry, outputting a precise tactical storyboard packet and delivery schedule."
  },
  {
    num: "03",
    title: "Creative Synthesis & Production",
    icon: <Paintbrush className="w-5 h-5 text-red-500" />,
    subtitle: "Synthesizing Hollywood-grade visuals and audio.",
    description: "AXON's neural engines go live. We synthesize hyper-cinematic video spot segments, vectorized logo options, bespoke noise-free ambient sounds, and glassmorphic code elements under strict creative guidelines."
  },
  {
    num: "04",
    title: "Performance Optimization Iteration",
    icon: <Sliders className="w-5 h-5 text-red-500" />,
    subtitle: "A/B creative testing and fast loads alignment.",
    description: "We verify delivery matrices. All created videos are frame-optimized, and coding platforms are aligned to standard SEO specifications. We conduct pre-launch A/B visual tests to guarantee top attention metrics."
  },
  {
    num: "05",
    title: "Safe Conglomerate Delivery",
    icon: <CheckCircle className="w-5 h-5 text-red-500" />,
    subtitle: "Deploy standalone final creative formats.",
    description: "We pack and dispatch standalone deliverables. Video segments, vector branding sheets, and high performance files are transferred securely under enterprise NDA parameters. Ready to scale instantly."
  }
];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-24 bg-black px-6 relative border-t border-zinc-900 font-sans-custom">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 select-none">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex items-end justify-between border-b border-white/5 pb-8">
          <div className="space-y-4">
            <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
              05. OUR CREATIVE PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-display-custom font-black uppercase text-white tracking-widest">
              THE WORKFLOW TIMELINE
            </h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono-custom uppercase tracking-wider max-w-sm mt-4 md:mt-0">
            A precise five-stage visual pipeline engineered to bypass outdated high-cost agency delays.
          </p>
        </div>

        {/* Dynamic Timeline Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Timeline Navigation: Vertical Stepper on wide screen, grid on small screen */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {PROCESS_STEPS.map((p, idx) => (
              <button
                key={p.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                  activeStepIndex === idx
                    ? "bg-zinc-900/40 border-red-600/50 shadow-[0_4px_25px_rgba(255,0,0,0.15)] bg-gradient-to-r from-red-600/5 to-transparent"
                    : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20"
                }`}
              >
                <span className={`text-xl font-display-custom font-black font-extrabold ${
                  activeStepIndex === idx ? "text-red-500" : "text-zinc-600 group-hover:text-zinc-300"
                }`}>
                  {p.num}
                </span>

                <div className="flex-1">
                  <h3 className={`text-xs uppercase font-mono-custom font-extrabold tracking-widest ${
                    activeStepIndex === idx ? "text-white" : "text-zinc-400 group-hover:text-white"
                  }`}>
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider truncate max-w-[280px]">
                    {p.subtitle}
                  </p>
                </div>

                <div className="shrink-0">
                  {p.icon}
                </div>
              </button>
            ))}
          </div>

          {/* Stepper details display screen */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-6 relative z-10">
                  
                  {/* Phase tag */}
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-display-custom font-black font-extrabold text-red-500/20 font-mono-custom select-none leading-none">
                      PHASE {PROCESS_STEPS[activeStepIndex].num}
                    </span>
                    <div className="h-[1px] bg-red-500/10 flex-1" />
                  </div>

                  {/* Body Text */}
                  <div className="space-y-3">
                    <h3 className="text-white text-base md:text-lg font-display-custom font-extrabold uppercase tracking-wide">
                      {PROCESS_STEPS[activeStepIndex].title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm font-sans-custom leading-relaxed max-w-xl">
                      {PROCESS_STEPS[activeStepIndex].description}
                    </p>
                  </div>
                </div>

                {/* Micro tech indicators */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-[10px] font-mono-custom text-zinc-500 gap-4 relative z-10">
                  <span className="uppercase tracking-widest">STAGE PROCESS SECURITY: SECURED DATA LINK</span>
                  <span className="text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Play className="w-3 h-3 animate-ping" />
                    <span>AXON-ENGINE ACTIVE</span>
                  </span>
                </div>

                {/* Big watermark lettering in canvas back */}
                <div className="absolute -bottom-8 -right-10 text-[10rem] font-display-custom font-black text-white/[0.01] select-none pointer-events-none uppercase">
                  AXON
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
