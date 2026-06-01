"use client";

import React from "react";
import { Zap, Clock, Star, BarChart3, Feather, Globe2, LucideIcon } from "lucide-react";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    icon: <Zap className="w-5 h-5 text-red-500 animate-pulse" />,
    title: "AI-Powered Innovation",
    description: "Configuring the latest Google GenAI, Imagen, and image/music architectures to automate and scale content operations without friction."
  },
  {
    icon: <Clock className="w-5 h-5 text-red-500" />,
    title: "Fast Turnaround",
    description: "Completing visual templates, vectorized brand guides, or full virtual commercials in 3 days. Up to 10x faster than antiquated human agencies."
  },
  {
    icon: <Star className="w-5 h-5 text-red-500" />,
    title: "Premium Quality",
    description: "Maintaining strict visual aesthetic rules, balanced layouts, zero generic placeholders, and high styling standards fit for luxury ventures."
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-red-500" />,
    title: "Data-Driven Results",
    description: "Optimizing all visual assets for click engagement, watch times, and direct retention, backing your visual assets with cold mathematical data."
  },
  {
    icon: <Feather className="w-5 h-5 text-red-500" />,
    title: "Creative Excellence",
    description: "Combining raw human design principles, typography balance, and geometric symmetry with structural AI assistance."
  },
  {
    icon: <Globe2 className="w-5 h-5 text-red-500" />,
    title: "Global Reach",
    description: "Synthesizing localized digital assets in up to 30 distinct languages, establishing sovereign creative footholds worldwide."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-zinc-950 px-6 relative border-t border-zinc-900 font-sans-custom">
      
      {/* Accent light element */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10-custom">
        
        {/* Title block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
            06. WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-display-custom font-black uppercase text-white tracking-widest leading-none">
            WHY BRANDS EXPLOIT AXON
          </h2>
          <p className="text-zinc-500 text-xs font-mono-custom uppercase tracking-wider max-w-sm mx-auto">
            Engineered from the ground up to synthesize premium digital content without overhead or delays.
          </p>
        </div>

        {/* Six Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFIT_CARDS.map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/30 border border-zinc-850 hover:border-red-600/30 rounded-xl hover:bg-zinc-900/80 transition-all duration-300 space-y-4"
            >
              <div className="w-10 h-10 bg-zinc-950 rounded-lg flex items-center justify-center border border-zinc-800">
                {val.icon}
              </div>
              <h3 className="text-white text-xs uppercase font-mono-custom font-extrabold tracking-widest">
                {val.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans-custom">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
