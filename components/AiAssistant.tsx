"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Send, X, ArrowDownRight, RefreshCw, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function AiAssistant({ isOpen, onClose, onOpenConsultation }: AiAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: "Greetings, vanguard. I am the AXON Strategic Concierge. I have digitized our agency’s cumulative knowledge up to the year 2035 to counsel you on AI Video, Sonic Synthesis, Virtual Branding, and interactive design. How shall we revolutionize your brand today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorText, setErrorText] = useState("");
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about AI Video & Commercials",
    "How does AI Music and Soundscapes work?",
    "Show me your creative workflow scale",
    "Tailor a campaign blueprint for my business"
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    setErrorText("");
    const userMsgId = `user-msg-${messages.length}`;
    const newMsg: Message = {
      id: userMsgId,
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: history,
          userMessage: text
        })
      });

      if (!res.ok) {
        throw new Error("Neural link failed to synchronize.");
      }

      const data = await res.json();
      
      const assistantMsgId = `assistant-msg-${messages.length + 1}`;
      setMessages(prev => [
        ...prev,
        {
          id: assistantMsgId,
          role: "assistant",
          content: data.text || "I was unable to retrieve a response. Please re-engage.",
          timestamp: new Date()
        }
      ]);
    } catch (err: any) {
      console.error(err);
      setErrorText("Communication grid offline. Re-routing through local contingency protocols...");
      
      // Local demo responsefallback
      setTimeout(() => {
        const assistantMsgId = `fallback-msg-${messages.length + 2}`;
        let fallbackReply = "My neural link is currently offline, but here is AXON's digital stance: we combine high-performance generative models to slash active production timelines by 90%. I encourage you to use our Consultation Strategy Module above to build a real-time customized PDF-ready proposal, or reach out to our team at sandeshettia051@gmail.com!";
        
        if (text.toLowerCase().includes("video")) {
          fallbackReply = "At AXON, our AI Video Production cuts out expensive cameras. We synthesize hyper-cinematic footage utilizing state-of-the-art cinematic tools, ideal for digital commercials, immersive ads, and social campaigns in half the typical time.";
        } else if (text.toLowerCase().includes("music") || text.toLowerCase().includes("song") || text.toLowerCase().includes("voice")) {
          fallbackReply = "Our Sonic Synthesis suite creates matching neural tracks and synthetic voices bespoke for your product demos, commercials, or interactive web canvases. No copyrighted licensing issues—just pure tailored sonic identity.";
        } else if (text.toLowerCase().includes("campaign") || text.toLowerCase().includes("blueprint") || text.toLowerCase().includes("recommend")) {
          fallbackReply = "Excellent! Please click on the 'Book Consultation' option or use the consultation engine at the top to describe your business and receive a custom tactical blueprint instantaneously.";
        }

        setMessages(prev => [
          ...prev,
          {
            id: assistantMsgId,
            role: "assistant",
            content: fallbackReply,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "initial",
        role: "assistant",
        content: "Neural buffer purged. Let us begin a fresh directive. What futuristic content strategy shall we synthesize?",
        timestamp: new Date()
      }
    ]);
    setErrorText("");
  };

  const formattedTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Box */}
          <motion.div
            initial={{ opacity: 0, x: 250, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 250, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-4 bottom-4 right-4 z-50 w-full max-w-md glassmorphism border border-white/20 rounded-2xl flex flex-col shadow-[0_0_50px_rgba(255,0,0,0.15)] overflow-hidden font-sans-custom bg-black/95"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-950/80">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg bg-red-600/10 border border-red-500 flex items-center justify-center glow-red-sm">
                  <Cpu className="w-4 h-4 text-red-500 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div>
                  <h3 className="text-white text-xs uppercase font-mono-custom tracking-widest font-extrabold flex items-center gap-1.5">
                    AXON SYSTEM <span>01</span>
                  </h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono-custom">
                    Strategic AI Concierge
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearHistory}
                  className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                  title="Purge Neural Buffer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed font-sans-custom relative ${
                      m.role === "user"
                        ? "bg-red-600 text-white shadow-[0_2px_15px_rgba(255,0,0,0.25)] rounded-tr-none"
                        : "bg-zinc-900/80 text-zinc-200 border border-zinc-800 rounded-tl-none"
                    }`}
                  >
                    <div>{m.content}</div>
                    <div
                      className={`text-[8px] font-mono-custom mt-1.5 block text-right ${
                        m.role === "user" ? "text-white/70" : "text-zinc-500"
                      }`}
                    >
                      {formattedTime(m.timestamp)}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900/80 text-zinc-400 border border-zinc-800 rounded-xl rounded-tl-none p-3 text-xs flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="font-mono-custom text-[10px] uppercase tracking-widest">
                      Processing blueprint models...
                    </span>
                  </div>
                </div>
              )}

              {errorText && (
                <div className="bg-red-600/10 border border-red-500/30 text-red-400 p-2.5 rounded-lg text-[11px] flex items-center gap-2 font-mono-custom">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{errorText}</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions (Hidden if user engaged deeply) */}
            {messages.length < 3 && (
              <div className="p-3 bg-zinc-950/60 border-t border-white/5">
                <p className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-2 px-1">
                  TACTICAL ACCELERATORS:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(p)}
                      className="text-[10px] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-2 py-1 rounded-md text-left transition-all"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 border-t border-white/10 bg-zinc-950/90 flex flex-col gap-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputMessage);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Inquire about 2035 creative setups..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600/60 font-sans-custom transition-all"
                />
                <button
                  type="submit"
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <div className="flex items-center justify-between px-1 text-[9px] font-mono-custom text-zinc-500 uppercase">
                <span>ONLINE - AXON-CORE</span>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-red-500 hover:text-white hover:underline uppercase"
                >
                  Generate Blueprint
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
