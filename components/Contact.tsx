"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Send, Phone, Mail, MapPin, MessageSquare, 
  Linkedin, Twitter, Youtube, CheckCircle2, Shield, AlertTriangle 
} from "lucide-react";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple futuristic map simulator drawing cyber coordinates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let h = (canvas.height = 300);

    const locations = [
      { name: "BLR HQ", x: w * 0.35, y: h * 0.45, active: true },
      { name: "SF EDGE", x: w * 0.75, y: h * 0.25, active: false },
      { name: "LON NOD", x: w * 0.55, y: h * 0.35, active: false }
    ];

    const drawMap = () => {
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(0, 0, w, h);

      // Draw faint wire grids
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      for (let i = 0; i < w; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let i = 0; i < h; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }

      // Draw global geographic connection curves
      ctx.strokeStyle = "rgba(255, 0, 0, 0.05)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(locations[0].x, locations[0].y);
      ctx.bezierCurveTo(w/2, h/6, w/2, h/2, locations[1].x, locations[1].y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(locations[0].x, locations[0].y);
      ctx.bezierCurveTo(w/2, h/1.5, w/2, h/3, locations[2].x, locations[2].y);
      ctx.stroke();

      // Render nodes
      locations.forEach((loc) => {
        ctx.fillStyle = loc.active ? "#ff0000" : "#333333";
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, loc.active ? 4.5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Target rings
        if (loc.active) {
          ctx.strokeStyle = "rgba(255, 0, 0, 0.3)";
          ctx.beginPath();
          ctx.arc(loc.x, loc.y, 8 + Math.sin(Date.now() / 200) * 3, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Labels
        ctx.fillStyle = loc.active ? "#ffffff" : "#666666";
        ctx.font = "8px monospace";
        ctx.fillText(loc.name, loc.x + 8, loc.y + 3);
      });

      // Simple grid text coords
      ctx.fillStyle = "rgba(255, 0, 0, 0.25)";
      ctx.font = "7px monospace";
      ctx.fillText(`COORD SYNC: ACTIVE [37.77, -122.41]`, 10, h - 10);

      animId = requestAnimationFrame(drawMap);
    };

    drawMap();

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.parentElement?.clientWidth || 400;
      h = canvas.height = 300;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    // Generate an clean corporate pre-filled WhatsApp link with clear details of agency inquire interest
    const message = encodeURIComponent(`Greetings AXON CREATIVE LAB, I would like to explore creative campaigns. Please engage strategies.`);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-black px-6-custom relative border-t border-zinc-900 font-sans-custom">
      <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left column: Quick contacts details & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="font-mono-custom text-[10px] text-red-500 font-bold uppercase tracking-widest border border-red-500/10 bg-red-500/5 px-2.5 py-1 rounded-sm">
              07. CONTACT US
            </span>
            <h2 className="text-3xl md:text-5xl font-display-custom font-black uppercase text-white tracking-widest">
              SECURE EXPANSION
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Formulate campaign targets directly with our Solutions team. Or bypass wait-lists by triggering instant WhatsApp communication.
            </p>
          </div>

          <div className="space-y-4 font-mono-custom text-xs">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-red-500/10 transition-colors">
              <div className="w-8 h-8 rounded bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-500 text-[8px] uppercase tracking-widest block">SECURE EMAIL:</span>
                <a href="mailto:sandeshettia051@gmail.com" className="hover:text-red-500 text-white transition-colors">
                  sandeshettia051@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-red-500/10 transition-colors">
              <div className="w-8 h-8 rounded bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-500 text-[8px] uppercase tracking-widest block">VOICE FREQUENCY:</span>
                <span className="text-white">+91 98765 43210</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-red-500/10 transition-colors">
              <div className="w-8 h-8 rounded bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-500 text-[8px] uppercase tracking-widest block">SYNAPSE BASE:</span>
                <span className="text-white">AXON LABS HO, METROPOLIS ONE</span>
              </div>
            </div>
          </div>

          {/* Canvas Interactive Map */}
          <div className="rounded-xl overflow-hidden border border-zinc-850 flex flex-col">
            <div className="bg-zinc-950 p-2.5 px-4 text-[9px] font-mono-custom text-zinc-500 uppercase border-b border-zinc-850 flex items-center justify-between">
              <span>AXON INTRA-GLOBAL MAP DIRECTORY</span>
              <span className="text-red-500 animate-pulse">● BLR SIGNAL</span>
            </div>
            <div className="w-full h-[300px] bg-zinc-950 relative">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest">
              GLOBAL BROADCAST DIRECTIONS
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-red-500 text-zinc-400 rounded-lg flex items-center justify-center transition-all"
                title="LinkedIn Directory"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-red-500 text-zinc-400 rounded-lg flex items-center justify-center transition-all"
                title="Twitter Grid"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-red-500 text-zinc-400 rounded-lg flex items-center justify-center transition-all"
                title="YouTube Broadcast"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right column: Form intake section */}
        <div className="lg:col-span-7 bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-850 hover:border-zinc-800 transition-all">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500 rounded-full mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-display-custom font-black uppercase text-white tracking-widest">
                  SYNAPSE PACK RECEIVED
                </h3>
                <p className="text-zinc-400 text-xs">
                  We have successfully registered your creative vision. A tactical analyst will analyze your parameters and follow up at <strong className="text-red-500">{formEmail}</strong>.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormName("");
                  setFormEmail("");
                  setFormPhone("");
                  setFormCompany("");
                  setFormDetails("");
                  setIsSubmitted(false);
                }}
                className="px-5 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded font-mono-custom text-xs uppercase"
              >
                Reset Intake
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-white text-sm uppercase font-mono-custom tracking-widest font-extrabold">
                  CLIENT VISIONS FORM INGEST
                </h3>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider">
                  Fill precise parameters to schedule agency synthesis cycles
                </p>
              </div>

              <div className="h-[1px] bg-white/5" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alexis Carter"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-1">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. director@nexus.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    placeholder="e.g. Nexus Automotive"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-1">
                  Project Details / Creative Vision <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formDetails}
                  onChange={(e) => setFormDetails(e.target.value)}
                  placeholder="Tell us about the virtual commercials, branding Guidelines, soundscapes, or neomorphic development targets you need."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-xs text-white focus:outline-none focus:border-red-600 font-sans-custom resize-none transition-all"
                />
              </div>

              {/* Secure terms indicator */}
              <div className="flex items-center gap-2 text-[10px] font-sans-custom text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Your transmissions are secured using military-grade RSA-2048 encryption algorithms.</span>
              </div>

              {/* Button block */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-5 py-3 border border-green-600/30 text-green-500 hover:bg-green-600 hover:text-white rounded font-mono-custom text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>DIRECT WHATSAPP SYNC</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono-custom font-extrabold text-xs uppercase tracking-widest rounded shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>DISPATCH SYSTEM INTAKE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
