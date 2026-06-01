"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Terminal, ChevronRight, Play, Award, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Node particle array
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const numParticles = Math.min(Math.floor((width * height) / 12000), 100);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    // Capture cursor coordinates
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      // Render connected lines
      ctx.strokeStyle = "rgba(255, 0, 0, 0.04)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections to cursor
        if (mouse.x > -1000) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.strokeStyle = `rgba(255, 0, 0, ${1 - dist / 180})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.strokeStyle = "rgba(255, 0, 0, 0.04)"; // revert
          }
        }

        // Render point
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update vectors
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wall collisions
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center pt-20">
      {/* Dynamic neural backdrop */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 z-0 cyber-grid-overlay opacity-45 pointer-events-none" />

      {/* Luxury Red Ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-red-600/10 rounded-full blur-[100px] md:blur-[180px] z-0 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[250px] h-[250px] bg-red-600/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-none flex flex-col items-center">
        
        {/* Futuristic Agency Tag Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 text-[10px] md:text-xs text-red-500 font-mono-custom tracking-widest uppercase glow-red-sm"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
          <span>AXON MATRIX RE-LINKED: VERSION 2035 v4.1</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display-custom font-black tracking-tight text-white leading-none max-w-4xl uppercase"
        >
          THE FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-zinc-600 font-mono-custom glow-text-red">
            CREATIVE CONTENT
          </span>{" "}
          <br />Starts Here
        </motion.h1>

        {/* Cinematic Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-zinc-400 text-sm md:text-lg max-w-2xl mt-6 font-sans-custom leading-relaxed"
        >
          AI Videos, AI Branding, AI Songs, AI Marketing & Digital Innovation. 
          We synthesize Hollywood-grade creative deliverables and neural systems at 10x velocity.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full px-4"
        >
          <button
            id="hero-book-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-mono-custom text-xs font-bold uppercase tracking-widest rounded border border-transparent hover:border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book A Free Consultation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-850 hover:border-white text-zinc-300 hover:text-white font-mono-custom text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Portfolio</span>
            <Play className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-500 transition-colors" />
          </a>
        </motion.div>

        {/* Trust Stats indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-16 text-zinc-500 text-[10px] md:text-xs font-mono-custom uppercase tracking-widest select-none border-t border-white/5 pt-8 w-full max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-red-600" />
            <span>ENCRYPTED AGENCY CLIENTS</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-red-600" />
            <span>GLOBAL TOP 10 CREATIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>NEURAL SCALE COMPUTING</span>
          </div>
        </motion.div>

      </div>
      
      {/* Down arrow marker */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-30 animate-bounce">
        <span className="text-[10px] font-mono-custom uppercase text-zinc-400 tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
