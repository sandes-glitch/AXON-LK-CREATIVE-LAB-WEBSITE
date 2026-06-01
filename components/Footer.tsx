"use client";

import React from "react";
import { Terminal, Shield, Cpu, ChevronRight } from "lucide-react";

export default function Footer() {
  const footerLinksLeft = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" }
  ];

  const footerLinksRight = [
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" }
  ];

  const servicesLinks = [
    "AI Video Production",
    "AI Commercial Ad campaigns",
    "AI Product Assets",
    "AI Music & Audio Styling",
    "Futuristic Next.js Platforms"
  ];

  return (
    <footer id="footer" className="py-16 bg-black border-t border-zinc-900 overflow-hidden font-sans-custom">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Branding and description */}
        <div className="md:col-span-5 space-y-4">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center bg-black border border-red-600 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-white glow-red-sm">
              <span className="text-red-600 font-mono-custom font-extrabold text-sm group-hover:text-white transition-colors duration-300">
                A
              </span>
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
          <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
            AXON CREATIVE LAB is a next-generation creative agency specializing in AI-powered content creation, branding, marketing, and digital innovation. Synthesizing visual prestige since 2026.
          </p>
        </div>

        {/* Center column: Quick links */}
        <div className="md:col-span-3 space-y-4 font-mono-custom text-xs">
          <h4 className="text-white uppercase tracking-widest font-extrabold text-[10px] text-zinc-400">
            SYSTEM DIRECTORY
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <ul className="space-y-2">
              {footerLinksLeft.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-505 text-zinc-500 hover:text-red-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {footerLinksRight.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-red-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Services list */}
        <div className="md:col-span-4 space-y-4 font-mono-custom text-xs">
          <h4 className="text-white uppercase tracking-widest font-extrabold text-[10px] text-zinc-400">
            DELIVERED METHODOLOGIES
          </h4>
          <ul className="space-y-2 text-zinc-500">
            {servicesLinks.map((srv) => (
              <li key={srv} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-red-600" />
                <span>{srv}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom licensing and info sheets */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-custom text-zinc-500 uppercase tracking-wider">
        <div className="flex flex-wrap items-center gap-4">
          <span>&copy; {new Date().getFullYear()} AXON CREATIVE LAB. ALL RIGHTS RESERVED.</span>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-650 text-zinc-600">
          <Shield className="w-3.5 h-3.5 text-red-600" />
          <span>CYBERNETIC CODENAME: AXON-COMO-35</span>
        </div>
      </div>
    </footer>
  );
}
