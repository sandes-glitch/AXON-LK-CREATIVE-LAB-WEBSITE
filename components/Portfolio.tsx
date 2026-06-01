"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, Video, Filter, ChevronRight, X, Sparkles, TrendingUp, Users, RefreshCw } from "lucide-react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  category: "AI Videos" | "Branding" | "Marketing" | "Motion Graphics" | "Music Production";
  client: string;
  metricLabel: string;
  metricValue: string;
  imageUrl: string;
  shortDesc: string;
  caseStudy: string;
  audience: string;
}

const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "chronos-metropolis",
    title: "Vessel Metropolis 2035",
    category: "AI Videos",
    client: "VESSEL ELECTRIC VEHICLES",
    metricLabel: "AUDIENCE AD RECALL",
    metricValue: "+318%",
    imageUrl: "https://picsum.photos/seed/vessel/800/600",
    shortDesc: "A simulated actor virtual cinematic commercial exploring urban neo-futurist vehicles.",
    caseStudy: "Created entirely within AXON Cine-Synthesis without reserving physical actors or studios. Generative models generated fluid motion frames showing electric cars weaving inside virtual neomorphic structures.",
    audience: "Ultra-high-net-worth tech enthusiasts and green urbanists."
  },
  {
    id: "aetheris-skincare",
    title: "Aetheris Brand Identity",
    category: "Branding",
    client: "AETHERIS COSMETICS",
    metricLabel: "CONVERSION MARGIN",
    metricValue: "94.6%",
    imageUrl: "https://picsum.photos/seed/aetheris/800/600",
    shortDesc: "Geometric grids, color space synthesis, and luxury packaging visual guidelines.",
    caseStudy: "Synthesized dynamic corporate vector styles and minimalist color models. Handed over high-end skincare branding directives within 48 hours, eliminating typical 6-week agency layouts.",
    audience: "Premium aesthetic-focused skincare consumers globally."
  },
  {
    id: "synapse-watches",
    title: "Carbon Synapse 01",
    category: "Marketing",
    client: "SYNAPSE WATCHMAKERS",
    metricLabel: "TOTAL CAMPAIGN VIEWS",
    metricValue: "18.3M",
    imageUrl: "https://picsum.photos/seed/synapse/800/600",
    shortDesc: "An immersive digital ad funnel featuring zero-gravity virtual watch rotations.",
    caseStudy: "Designed premium digital ads illustrating watch parts floating in mechanical assembly space. Distributed interactive ad cards on leading design portals, maximizing conversion values.",
    audience: "Watch collectors, luxury buyers, and engineering leaders."
  },
  {
    id: "titan-engine",
    title: "Titan Hybrid Visualizer",
    category: "Motion Graphics",
    client: "TITAN POWER SYSTEMS",
    metricLabel: "ENGAGEMENT INCREMENT",
    metricValue: "4.2x",
    imageUrl: "https://picsum.photos/seed/titan/800/600",
    shortDesc: "Refined abstract 3D turbine sweeps and mechanical interface HUD elements.",
    caseStudy: "Deployed geometric HUD animations and data overlays mapping power streams. The visualizers were utilized in investor pitches, resulting in instantaneous strategy buy-ins.",
    audience: "Enterprise engineering partners and clean energy funds."
  },
  {
    id: "neural-soundscapes",
    title: "Space Aura Acoustics",
    category: "Music Production",
    client: "AURA RETAIL CENTERS",
    metricLabel: "DWELL TIME METRIC",
    metricValue: "+44%",
    imageUrl: "https://picsum.photos/seed/soundscape/800/600",
    shortDesc: "Generative synth themes crafted to elevate high-end consumer experiences.",
    caseStudy: "Synthesized specialized infinite acoustic tracks designed to lower customer heart rates during physical luxury store shopping, increasing natural spatial exploration metrics.",
    audience: "Luxury retail customers seeking tranquil physical spaces."
  },
  {
    id: "resonance-hydra",
    title: "Liquid Hydra Campaign",
    category: "AI Videos",
    client: "HYDRA ENERGY",
    metricLabel: "LEADS INDEX RECORDED",
    metricValue: "+160%",
    imageUrl: "https://picsum.photos/seed/hydra/800/600",
    shortDesc: "A fluid liquid motion splash video featuring high-concept visual physics.",
    caseStudy: "Simulated liquid flow sweeps using neural fluid models, showcasing an energy elixir item materializing inside crystalline ice peaks without physical prop budgets.",
    audience: "Gen-Z athletic lifestyle markets and extreme fitness cohorts."
  },
  {
    id: "kairo-digital",
    title: "Kairo Sovereign Bank",
    category: "Branding",
    client: "KAIRO VENTURES",
    metricLabel: "STRATEGIC RATING",
    metricValue: "99.2%",
    imageUrl: "https://picsum.photos/seed/kairo/800/600",
    shortDesc: "Adaptive brand layout styling for international trade currency apps.",
    caseStudy: "Formulated complete color libraries, interactive typography scales, and a comprehensive app system styling layout. Ensured visual coherence across European and Asian markets.",
    audience: "Cryptographic investors and international commerce brokers."
  },
  {
    id: "lumina-soles",
    title: "Quantum Sole Ads",
    category: "Marketing",
    client: "LUMINA ACTIVEWEAR",
    metricLabel: "CLICK THROUGH SPEED",
    metricValue: "6.8%",
    imageUrl: "https://picsum.photos/seed/lumina/800/600",
    shortDesc: "Synthetic model footwear commercial with neon neural grids.",
    caseStudy: "Mapped futuristic active shoes in glowing digital spaces. Designed conversion landing cards resulting in immediate order list backlogs within 72 hours of launch.",
    audience: "Streetwear fashionistas, active runners, and neon lifestyle fans."
  }
];

const CATEGORIES = ["All", "AI Videos", "Branding", "Marketing", "Motion Graphics", "Music Production"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PORTFOLIO_DATA.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-black px-6-custom relative border-t border-zinc-900 font-sans-custom">
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Title Deck */}
        <div className="text-center space-y-4">
          <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
            03. FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-display-custom font-black uppercase text-white tracking-widest">
            PORTFOLIO HIGHLIGHTS
          </h2>
          <p className="text-zinc-500 text-xs font-mono-custom uppercase tracking-wider max-w-md mx-auto">
            Live digital proof of premium campaigns conceptualized and delivered inside of AXON.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono-custom text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? "bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(255,0,0,0.3)] font-bold"
                  : "bg-zinc-900/60 border-zinc-850 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-850 hover:border-red-600/35 flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Wide aspect image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
                  <Image
                    src={proj.imageUrl}
                    alt={proj.title}
                    fill
                    referrerPolicy="no-referrer"
                    sizes="(max-w-710px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Category marker float */}
                  <span className="absolute top-3 left-3 font-mono-custom text-[8px] bg-black/80 border border-zinc-800 text-red-500 px-2 py-0.5 rounded tracking-widest uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Info and statistics preview */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-mono-custom text-[8px] text-zinc-500 tracking-wider">
                      {proj.client}
                    </span>
                    <h3 className="text-white text-xs font-mono-custom uppercase font-extrabold tracking-widest group-hover:text-red-500 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Core metric snapshot */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/5">
                    <div>
                      <span className="text-[8px] font-mono-custom text-zinc-500 tracking-wider block">
                        {proj.metricLabel}
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-red-500 transition-colors">
                        {proj.metricValue}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase font-mono-custom text-red-500 flex items-center gap-1">
                      <span>Case details</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Case Study Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Immersive Modal */}
            <motion.div
              initial={{ y: 20, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl glassmorphism shadow-[0_0_60px_rgba(255,0,0,0.15)] overflow-hidden font-sans-custom z-50 max-h-[90vh] flex flex-col"
            >
              {/* Image banner */}
              <div className="relative w-full aspect-[16/9] bg-zinc-950">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Case story structure */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="font-mono-custom text-[9px] text-red-500 font-bold uppercase tracking-widest border border-red-500/20 bg-red-500/5 px-2 py-0.5 rounded">
                      CASE BLUEPRINT PROFILE
                    </span>
                    <h3 className="text-xl md:text-2xl font-display-custom font-black uppercase text-white tracking-widest mt-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-zinc-500 font-mono-custom text-xs uppercase pt-1">
                      CLIENT ID: {selectedProject.client}
                    </p>
                  </div>

                  <div className="bg-zinc-900 rounded-lg p-3 px-4 border border-zinc-800 shrink-0 text-center">
                    <span className="text-[8px] font-mono-custom text-zinc-500 tracking-widest block uppercase">
                      {selectedProject.metricLabel}
                    </span>
                    <span className="text-xl font-display-custom font-bold text-red-500 font-mono-custom">
                      {selectedProject.metricValue}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div className="space-y-4 text-xs leading-relaxed text-zinc-300">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest block">Summary:</span>
                    <p>{selectedProject.shortDesc}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest block">Action Directive:</span>
                    <p>{selectedProject.caseStudy}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest block">Target Audience Demographics:</span>
                    <p className="text-red-500 font-mono-custom text-[11px] uppercase tracking-wider">{selectedProject.audience}</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3 font-mono-custom text-[11px]">
                  <span className="text-zinc-500 uppercase leading-loose text-[9px] tracking-wide">
                    AXON CREATIVE PROOF SECURED
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
