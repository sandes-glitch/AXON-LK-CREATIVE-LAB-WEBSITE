"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Eye, Flag, Shield, History, Layers } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2026",
    title: "Vessel Launch",
    description: "AXON was initialized as a specialized core team of elite coders, directors, and neural prompt architects focused on replacing legacy agency tooling."
  },
  {
    year: "2029",
    title: "Cinema Synthesis Engine v2",
    description: "Deployed custom high-fidelity virtual commercial generation matrices, enabling virtual commercials in full spatial depth with minimal camera setup."
  },
  {
    year: "2032",
    title: "Global Spatial Scaling",
    description: "Scaled content operations across major global conglomerates. Replaced standard branding frameworks with real-time adaptive AI logo and sonic synthesis pipelines."
  },
  {
    year: "2035",
    title: "Autonomous Agent Paradigm",
    description: "Configured full serverless dynamic client strategy agents (AXON-CORE), providing instant custom strategies and complete project deliveries within hours."
  }
];

export default function About() {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(3);

  const values = [
    {
      icon: <Cpu className="w-5 h-5 text-red-600 animate-pulse" />,
      title: "AI Innovation",
      text: "Integrating latest modern thinking-grade models to optimize standard creative execution protocols."
    },
    {
      icon: <Shield className="w-5 h-5 text-red-600" />,
      title: "Prestige Security",
      text: "Absolute enterprise cryptographic data insulation and legal AI safety clearances for peace of mind."
    },
    {
      icon: <Layers className="w-5 h-5 text-red-600" />,
      title: "Visual Quality",
      text: "Zero generic slop. We design with rigid precision, meticulous negative spacing, and custom-tailored graphics."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden font-sans-custom">
      
      {/* Red ambient decorative light circle */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left column: Brand statements */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
            01. WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-display-custom font-black tracking-tight uppercase text-white">
            REACHING THE <br />
            <span className="text-red-600 font-mono-custom">2035 SCALE</span> Paradigm
          </h2>
          
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans-custom">
            AXON CREATIVE LAB is a next-generation creative agency specializing in AI-powered content creation, branding, marketing, and digital innovation. We help global brands scale through cutting-edge technology, replacing cumbersome traditional pipelines with high-efficiency synthetic solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4 text-red-600" />
                <h4 className="text-white text-xs font-mono-custom uppercase font-extrabold tracking-widest">
                  OUR MISSION
                </h4>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed">
                Synthesize high-performing synthetic visual resources at unparalleled speed to empower future enterprise expansion.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-red-600" />
                <h4 className="text-white text-xs font-mono-custom uppercase font-extrabold tracking-widest">
                  OUR VISION
                </h4>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed">
                Redefine global creative agency paradigms by pairing raw human artistic genius with state-of-the-art synthetic models.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Interactive values & timeline */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Values Cards */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-mono-custom uppercase tracking-widest font-extrabold text-zinc-500">
              CORE PRINCIPLES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((val, i) => (
                <div
                  key={i}
                  className="p-4 bg-zinc-900/40 border border-zinc-850 rounded-xl hover:border-red-600/30 hover:bg-zinc-900/80 transition-all duration-300"
                >
                  <div className="mb-3">{val.icon}</div>
                  <h4 className="text-white text-xs uppercase font-mono-custom font-bold tracking-wider mb-1">
                    {val.title}
                  </h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xs font-mono-custom uppercase tracking-widest font-extrabold text-zinc-500 flex items-center gap-2">
                <History className="w-4 h-4 text-red-600 animate-pulse" />
                <span>INTERACTIVE CHRONOLOGY TIMELINE</span>
              </h3>
              <span className="text-[10px] font-mono-custom text-red-500">
                CLICK ERA
              </span>
            </div>

            {/* Slider links */}
            <div className="flex items-center justify-between bg-zinc-950 p-2 rounded-lg border border-zinc-900">
              {TIMELINE_DATA.map((evt, idx) => (
                <button
                  key={evt.year}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`flex-1 py-2 font-mono-custom text-center text-xs tracking-widest transition-all rounded-md cursor-pointer ${
                    selectedTimelineIndex === idx
                      ? "bg-red-600 text-white font-bold shadow-[0_2px_10px_rgba(255,0,0,0.3)]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {evt.year}
                </button>
              ))}
            </div>

            {/* Timline Event Description Box */}
            <div className="bg-zinc-900/80 rounded-xl p-5 border border-zinc-800 relative min-h-[140px] flex flex-col justify-center">
              <div className="absolute top-4 right-4 text-5xl font-mono-custom font-black font-extrabold text-white/5 tracking-wider select-none">
                {TIMELINE_DATA[selectedTimelineIndex].year}
              </div>
              <div className="space-y-2 relative z-10">
                <h4 className="text-red-500 text-xs font-mono-custom uppercase tracking-widest font-bold">
                  {TIMELINE_DATA[selectedTimelineIndex].title}
                </h4>
                <p className="text-zinc-300 text-xs leading-relaxed max-w-xl font-sans-custom">
                  {TIMELINE_DATA[selectedTimelineIndex].description}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
