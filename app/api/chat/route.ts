import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini SDK with custom user-agent and server-side secret
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json();

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        text: "I am ready to assist you! Please note that the GEMINI_API_KEY is not configured yet, so I am running in local offline demo mode. Let me know how I can help you design or book your creative consultation at AXON CREATIVE LAB!"
      });
    }

    // Format historical messages for context
    const chatHistory = Array.isArray(messages) ? messages : [];
    
    // Create an interactive system instruction reflecting the 2035 futuristic branding of Axon Creative Lab
    const systemInstruction = `You are AXON CONCIERGE, an ultra-advanced AI creative strategist and client solutions system for "AXON CREATIVE LAB" in the year 2035.
We are a premium, futuristic luxury creative agency. 

Our Services include:
- AI Video Production & AI Commercials
- AI Product Ads & Motion Graphics
- AI Logo Design & AI Branding
- AI Music Production & Song Generation
- AI Voiceovers & Advanced Digital Copywriting
- Web Design & Creative Tech Strategies

Your characteristics:
1. Highly professional, luxury/prestige tone, cinematic, and technically visionary.
2. Direct, concise, and structured. Avoid lengthy fluff or conversational filler.
3. Your goal is to intrigue the visitor with how they can exploit AI video, branding, and audio to scale.
4. Encourage them to use the "Consultation Blueprint Generator" (Smart Lead Recommendation Tool) or book an online session directly on this page.
5. Refer to AXON as a leading luxury creative force in the 2035 landscape.
`;

    // Prepare contents array
    const contents = chatHistory.map((m: any) => ({
      role: m.role === "assistant" ? "model" as const : "user" as const,
      parts: [{ text: m.content }],
    }));

    // Append current user message
    contents.push({
      role: "user" as const,
      parts: [{ text: userMessage }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return NextResponse.json({
      text: response.text || "My neural systems are configuring. Please ask again in a moment.",
    });
  } catch (error: any) {
    console.error("AXON Chat Error:", error);
    return NextResponse.json(
      { error: "An error occurred during transaction processing: " + (error.message || error) },
      { status: 500 }
    );
  }
}
