import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

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
    const { companyName, industry, projectGoal, targetAudience, scale } = await req.json();

    if (!projectGoal) {
      return NextResponse.json({ error: "Project description is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Return a professional mock sample of a premium proposal in case API key is missing
      return NextResponse.json({
        agencySlogan: `HYPER-SCALING ${companyName?.toUpperCase() || "YOUR BRAND"} FOR THE 2035 METROPOLIS`,
        overallConcept: "Deploy high-fidelity synthetic video commercials combined with a neural soundscape and minimalist digital nodes.",
        recommendedServices: [
          {
            title: "AI Video Production & Virtual Cinematic Ads",
            turnaround: "3 Days",
            whyNeeded: `Create Hollywood-level product showcases showing your ${industry || "products"} in zero-gravity environments without expensive shooting.`
          },
          {
            title: "AI Branding & Dynamic Logo Synthesis",
            turnaround: "2 Days",
            whyNeeded: "Formulate a sleek, high-end branding identity to speak directly to premium audiences worldwide."
          },
          {
            title: "Dynamic AI Music & Immersive Voice Synthesis",
            turnaround: "1 Day",
            whyNeeded: "Produce an exclusive custom synth ambient corporate theme and premium artificial voiceovers."
          }
        ],
        strategicAdmonition: "Legacy mediums are obsolete. The modern customer consumes simulated cinematic realities. This proposal prepares your expansion into cyber-active channels.",
        totalEstimatedDuration: "6 Business Days",
        impactScore: 98
      });
    }

    const systemInstruction = `You are AXON CORE PLANNING SYSTEM, the strategic engine of AXON CREATIVE LAB.
Your job is to generate a highly customized, ultra-premium creative execution blueprint for a brand.
You must return your output strictly in the requested JSON structure. Keep description fields concise, elegant, futuristic, and business-focused.`;

    const prompt = `Formulate a creative agency production strategy for:
- Company Name: ${companyName || "Anonymous Innovation LLC"}
- Industry: ${industry || "Emerging Tech"}
- Project Description / Key Goal: ${projectGoal}
- Target Audience: ${targetAudience || "Tech-forward premium consumers"}
- Scope Scale: ${scale || "Global Impact"}

Recommend exactly 3 hyper-targeted high-tech campaigns from our suite (AI Video Production, AI Music & Audio styling, AI Logo & Branding design, Digital Web platforms or Cinematic Motion graphics) that will deliver maximum ROI.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.8,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["agencySlogan", "overallConcept", "recommendedServices", "strategicAdmonition", "totalEstimatedDuration", "impactScore"],
          properties: {
            agencySlogan: {
              type: Type.STRING,
              description: "A super punchy, futuristic 2035-style high-end digital agency slogan customized for this client in all uppercase."
            },
            overallConcept: {
              type: Type.STRING,
              description: "A 1-2 sentence luxury strategic overview blending state-of-the-art neural content with their specific value proposition."
            },
            recommendedServices: {
              type: Type.ARRAY,
              description: "Exactly three custom service recommendations tailored to this project.",
              items: {
                type: Type.OBJECT,
                required: ["title", "turnaround", "whyNeeded"],
                properties: {
                  title: {
                    type: Type.STRING,
                    description: "Brand-aligned service name (e.g. 'Virtual Commercial Ads', 'AI Product Aesthetics', 'Neural Brand Identity', etc.)"
                  },
                  turnaround: {
                    type: Type.STRING,
                    description: "Turnaround suggestion, e.g. '2 Days', '4 Days'."
                  },
                  whyNeeded: {
                    type: Type.STRING,
                    description: "A strong, luxury-focused explanation of how this campaign attracts their exact target audience."
                  }
                }
              }
            },
            strategicAdmonition: {
              type: Type.STRING,
              description: "A high-end, inspiring philosophical statement describing the future of branding in cyberculture."
            },
            totalEstimatedDuration: {
              type: Type.STRING,
              description: "Estimated cumulative timeframe for these three services, e.g. '5-7 Business Days'."
            },
            impactScore: {
              type: Type.INTEGER,
              description: "A projected marketing efficiency scoring percentage relative to old manual techniques (e.g. 96 to 99)."
            }
          }
        }
      }
    });

    const recommendationText = response.text || "{}";
    return NextResponse.json(JSON.parse(recommendationText.trim()));
  } catch (error: any) {
    console.error("AXON Proposal Generator Error:", error);
    return NextResponse.json(
      { error: "Plan generation failed to synchronize: " + (error.message || error) },
      { status: 500 }
    );
  }
}
