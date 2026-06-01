"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import AiConsultation from "@/components/AiConsultation";
import { Cpu, Terminal } from "lucide-react";

export default function Home() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Absolute high-end site-wide header */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Hero presentation visual grid */}
      <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Statistical count meters */}
      <Stats />

      {/* Brand background explanation block */}
      <About />

      {/* Detailed services portfolio */}
      <Services />

      {/* Case studies filter cards */}
      <Portfolio />

      {/* Rotating client review entries */}
      <Testimonials />

      {/* Discovery -> Delivery pipeline */}
      <Process />

      {/* Six benefit pillars bento grid */}
      <WhyChooseUs />

      {/* Corporate consultation capture form & map grid */}
      <Contact />

      {/* Complete copyright links */}
      <Footer />

      {/* Side-floating virtual concierge panel */}
      <AiAssistant
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenConsultation={() => {
          setIsAssistantOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Custom campaign blueprint analyzer modal */}
      <AiConsultation
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Persistent floating dynamic AI toggle bubble in the bottom right */}
      <button
        id="persistent-ai-bubble"
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full cursor-pointer bg-red-600 border border-red-500 hover:bg-red-700 text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,0,0,0.8)] transition-all hover:scale-105 active:scale-95 group animate-bounce"
        style={{ animationDuration: "3s" }}
        title="Deploy AI Concierge Strategy Module"
      >
        <Cpu className="w-5 h-5 text-white animate-pulse" />
        <span className="absolute right-14 bg-zinc-950 border border-zinc-900 text-[10px] font-mono-custom text-red-500 hover:text-white uppercase px-2 py-1 rounded shadow-lg tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          AI STRATEGIST
        </span>
      </button>

    </main>
  );
}
