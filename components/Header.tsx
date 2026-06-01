"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, Globe, Cpu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenAssistant: () => void;
}

export default function Header({ onOpenConsultation, onOpenAssistant }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-us" },
  ];

  return (
    <>
      <header
        id="navbar"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans-custom",
          scrolled
            ? "py-4 glassmorphism border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center bg-black border border-red-600 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-white glow-red-sm">
              <span className="text-red-600 font-mono-custom font-extrabold text-sm group-hover:text-white transition-colors duration-300">
                A
              </span>
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display-custom font-extrabold text-lg tracking-widest text-white leading-none">
                AXON
              </span>
              <span className="font-mono-custom text-[8px] text-red-500 tracking-wider">
                CREATIVE LAB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-mono-custom text-xs text-zinc-400 hover:text-white font-medium uppercase tracking-widest transition-colors py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="ai-concierge-trigger"
              onClick={onOpenAssistant}
              className="flex items-center gap-2 px-3 py-1.5 border border-zinc-800 rounded-md font-mono-custom text-[11px] text-zinc-400 hover:text-red-500 hover:border-red-600/40 transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span>AI CONCIERGE</span>
            </button>
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="relative px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono-custom font-semibold text-xs uppercase tracking-wider rounded border border-transparent hover:border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Consultation</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenAssistant}
              className="p-2 border border-zinc-800 rounded text-red-500"
              title="AI Assistant"
            >
              <Cpu className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-zinc-800 rounded text-white hover:border-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden glassmorphism border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display-custom text-base text-zinc-300 hover:text-red-500 font-semibold tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="h-[1px] bg-zinc-800 w-full" />
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistant();
                }}
                className="flex items-center justify-center gap-2 py-3 border border-zinc-800 rounded font-mono-custom text-xs text-zinc-300"
              >
                <Cpu className="w-4 h-4 text-red-500" />
                <span>AI STRAT CONCIERGE</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-red-600 text-white font-mono-custom text-xs uppercase tracking-widest font-semibold rounded"
              >
                BOOK FREE CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
