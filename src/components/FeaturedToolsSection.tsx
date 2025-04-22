
import React from "react";
import { Palette, Music, Film, Sparkles, Mic, Paintbrush } from "lucide-react";

const tools = [
  {
    title: "Color Grading",
    description: "Make every frame cinematic and vibrant with expert grading.",
    icon: <Palette size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#9b87f5]/30 to-[#ffe29f]/30"
  },
  {
    title: "Sound Design",
    description: "Craft immersive soundscapes for maximum emotional impact.",
    icon: <Music size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#fad0c4]/50 to-[#ffd1ff]/40"
  },
  {
    title: "Cinematic Cuts",
    description: "Professional editing for storytelling that flows and excites.",
    icon: <Film size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#e0c3fc]/40 to-[#8ec5fc]/30"
  },
  {
    title: "Special Effects",
    description: "Add a touch of magic, from subtle glows to jaw-dropping VFX.",
    icon: <Sparkles size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#ffecd2]/50 to-[#fcb69f]/30"
  },
  {
    title: "Voice Enhancement",
    description: "Crystal-clear voiceovers and interviews, perfectly balanced.",
    icon: <Mic size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#f3e7e9]/40 to-[#eadcfb]/40"
  },
  {
    title: "Motion Graphics",
    description: "Dynamic titles and animated overlays for engaging content.",
    icon: <Paintbrush size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#d9afd9]/30 to-[#97d9e1]/30"
  }
];

const FeaturedToolsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-t from-background/80 via-[#fae5fa]/10 to-background/95" id="features">
    <div className="section-container max-w-5xl mx-auto">
      <h2 className="section-title text-3xl md:text-4xl text-primary mb-10 font-bold animate-fade-in">
        Featured Tools & Techniques
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.map((tool, idx) => (
          <div
            key={tool.title}
            className={`w-full rounded-2xl shadow-lg ${tool.bg} p-8 flex flex-col items-center text-center transition-transform hover:scale-105 animate-fade-in`}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="mb-4">{tool.icon}</div>
            <span className="font-bold text-lg text-primary mb-1">{tool.title}</span>
            <p className="text-md text-muted-foreground">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedToolsSection;

