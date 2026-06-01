"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Video, PlayCircle, ShoppingBag, Eye, Award, Music, 
  Share2, Code, Zap, Globe, Cpu, ChevronRight, X, Clock, HelpCircle 
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  shortDesc: string;
  details: string;
  techStack: string;
  turnaround: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    icon: <Video className="w-5 h-5 text-red-500" />,
    title: "AI Video Production",
    category: "Cine-Synthesis",
    shortDesc: "Hyper-realistic virtual commercial video generations optimized for modern marketing workflows.",
    details: "Using state-of-the-art cinematic video structures, we synthesize Hollywood-grade video materials tailored to your script. Skip camera rentals, actor bookings, or drone operation. We output pristine continuous video scenes at up to 4K fidelity.",
    techStack: "Veo 3.1 Pro / Stable Video Diffusion",
    turnaround: "3 Business Days"
  },
  {
    icon: <PlayCircle className="w-5 h-5 text-red-500" />,
    title: "AI Commercials",
    category: "Cine-Synthesis",
    shortDesc: "High-converting corporate synthetic ads and luxury video commercial visual materials.",
    details: "Tailored to modern digital visual ads standards, we deploy simulated actor avatars and neural voice matches to create highly professional corporate communication spots, product visual teasers, and agency promotional campaigns.",
    techStack: "Veo 3.1 / Gen-3 Alpha",
    turnaround: "4 Days"
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-red-500" />,
    title: "AI Product Ads",
    category: "Cine-Synthesis",
    shortDesc: "Futuristic zero-gravity product visuals, dynamic light sweeps, and cinematic showcases.",
    details: "Display your physically unreleased or custom prototype models in hyper-artistic, majestic environments. Complete with cinematic lighting sweeps, fluid rotations, and futuristic particle visual effects that trigger intense conversion rates.",
    techStack: "Imagen 3 / Midjourney v6 API",
    turnaround: "2 Business Days"
  },
  {
    icon: <Eye className="w-5 h-5 text-red-500" />,
    title: "AI Logo Design",
    category: "Visual Identity",
    shortDesc: "Vectorized high-end brand logos designed with meticulous geometric grids.",
    details: "Utilizing deep aesthetic convolutional systems combined with vectorized custom refinement, we produce ultra-luxury minimal brand marks and responsive geometric logo files optimized for corporate and app branding.",
    techStack: "Bespoke Geometric Diffusion Engine",
    turnaround: "1-2 Days"
  },
  {
    icon: <Award className="w-5 h-5 text-red-500" />,
    title: "AI Branding",
    category: "Visual Identity",
    shortDesc: "Complete corporate identity packages, color spaces, and high-end brand guidelines.",
    details: "Instantly build fully responsive visual identities tailored to your industry code. Includes matching corporate slide formats, color spaces, digital vectors, corporate letterhead profiles, and fully integrated typography stylesheets.",
    techStack: "AXON-BRAND Core Model Suite",
    turnaround: "4 Days"
  },
  {
    icon: <Music className="w-5 h-5 text-red-500" />,
    title: "AI Music & Songs",
    category: "Aura Synthesis",
    shortDesc: "Cinematic orchestral tracks, ambient tracks, and neural audio brand themes.",
    details: "Synthesize full-length musical assets, cinematic corporate themes, social media hooks, or spatial soundscapes tailored strictly to your campaign's visual mood. Full royalty clearance is packed directly inside the export file.",
    techStack: "Lyria 3 Pro / AudioCraft Engine",
    turnaround: "1 Business Day"
  },
  {
    icon: <Share2 className="w-5 h-5 text-red-500" />,
    title: "Social Media Marketing",
    category: "Scale Vectors",
    shortDesc: "Automotive-tier campaign scheduling, continuous lead capture, and copy writing.",
    details: "Optimize your organic social media channels across key vectors. We formulate complete daily scripts, caption copies, custom graphics, and short dynamic clips designed to trigger high-engagement loops.",
    techStack: "Gemini 3.5 Pro Strategic Model",
    turnaround: "Continuously Managed"
  },
  {
    icon: <Code className="w-5 h-5 text-red-500" />,
    title: "Website Design",
    category: "Scale Vectors",
    shortDesc: "High-converting, liquid-fast glassmorphic client landing engines and platforms.",
    details: "We build ultra-premium Next.js landing systems designed with meticulous custom grids, smooth cinematic framer-motion transitions, and real-time custom API linkages to engage customers directly inside your campaign vectors.",
    techStack: "Next.js 15 / Tailwind v4 / React 19",
    turnaround: "6-8 Days"
  },
  {
    icon: <Zap className="w-5 h-5 text-red-500" />,
    title: "Motion Graphics",
    category: "Cine-Synthesis",
    shortDesc: "Sleek 2D/3D interface indicators, digital haptic effects, and overlay visualizers.",
    details: "Enhance your video commercials or digital platforms with highly refined mechanical graphics, UI overlays, glowing haptic guides, HUD vectors, and abstract corporate data visuals.",
    techStack: "Adobe After Effects AI / Cinema 4D",
    turnaround: "2 Days"
  },
  {
    icon: <Globe className="w-5 h-5 text-red-500" />,
    title: "Digital Advertising",
    category: "Scale Vectors",
    shortDesc: "Data-driven advertising campaign management, creative assets, and lead tracking.",
    details: "Deploy high-efficiency conversion funnels. We test creative variations, configure automatic retargeting models, and optimize your lead-generation metrics with bespoke marketing strategies.",
    techStack: "AXON-ADS Analytics Pipeline",
    turnaround: "Immediate Launch"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-zinc-950 px-6 relative border-t border-zinc-900 font-sans-custom">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center md:text-left md:flex items-end justify-between border-b border-white/5 pb-8">
          <div className="space-y-4">
            <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
              02. BUSINESS SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-display-custom font-black uppercase text-white tracking-widest leading-none">
              SYNTHETIC AGENCY suite
            </h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono-custom uppercase tracking-wider max-w-sm mt-4 md:mt-0 leading-normal">
            Replacing legacy agencies with 10x high-velocity visual modules and strategic AI frameworks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className="group p-5 bg-zinc-900/40 border border-zinc-850 hover:border-red-600/30 rounded-xl hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 bg-zinc-950 rounded-lg flex items-center justify-center border border-zinc-800 group-hover:border-red-500/30 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <span className="font-mono-custom text-[8px] text-zinc-500 group-hover:text-red-500 transition-colors uppercase tracking-widest">
                    {srv.category}
                  </span>
                </div>
                
                <h3 className="text-white text-xs uppercase font-mono-custom font-extrabold tracking-widest pt-2">
                  {srv.title}
                </h3>
                
                <p className="text-zinc-400 text-[11px] leading-relaxed font-sans-custom">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className="text-[10px] uppercase font-mono-custom text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn Delivery Specifications</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Lightbox Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg p-6 bg-zinc-950 border border-white/10 rounded-2xl glassmorphism-red shadow-[0_0_50px_rgba(255,0,0,0.2)] font-sans-custom space-y-6 z-50"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-red-600/10 border border-red-500 rounded">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-mono-custom uppercase font-extrabold tracking-widest">
                      {selectedService.title}
                    </h4>
                    <span className="text-[9px] font-mono-custom text-zinc-500 uppercase tracking-widest">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1 px-2 text-[10px] uppercase font-mono-custom bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-xs leading-relaxed text-zinc-300">
                <p>{selectedService.details}</p>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono-custom text-[11px]">
                  <div className="p-3 rounded bg-zinc-900 border border-zinc-850">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-widest block">DEPOLOYED MODELS:</span>
                    <span className="text-red-500 font-bold block mt-1">{selectedService.techStack}</span>
                  </div>
                  <div className="p-3 rounded bg-zinc-900 border border-zinc-850">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-widest block">TURNAROUND WINDOW:</span>
                    <span className="text-white font-bold block mt-1">{selectedService.turnaround}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 bg-red-600 text-white hover:bg-red-700 font-mono-custom font-bold text-[10px] uppercase tracking-wider rounded shadow flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Inquire about this Campaign</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
