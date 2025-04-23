import React from "react";
import { Scissors, Palette, MoveRight, Image, Subtitles, Smartphone } from "lucide-react";

const tools = [
  {
    title: "Professional Video Editing",
    description: "Editing and formatting videos in a professional manner that suits various types of projects.",
    icon: <Scissors size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#9b87f5]/30 to-[#ffe29f]/30"
  },
  {
    title: "Color Correction & Enhancement",
    description: "Transforming videos into works with a distinctive and delightful visual style.",
    icon: <Palette size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#fad0c4]/50 to-[#ffd1ff]/40"
  },
  {
    title: "Transition Design",
    description: "Creating smooth and impactful transitions between scenes to highlight the flow of the visual narrative.",
    icon: <MoveRight size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#e0c3fc]/40 to-[#8ec5fc]/30"
  },
  {
    title: "Special Touches",
    description: "Inserting logos, images, and professional subtitles to enhance your content.",
    icon: <Image size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#ffecd2]/50 to-[#fcb69f]/30"
  },
  {
    title: "Subtitle Creation",
    description: "Creating subtitles for films, series, or any other visual content.",
    icon: <Subtitles size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#f3e7e9]/40 to-[#eadcfb]/40"
  },
  {
    title: "Format Conversion",
    description: "Converting videos to meet the needs of various platforms and devices.",
    icon: <Smartphone size={48} className="text-primary" />,
    bg: "bg-gradient-to-br from-[#d9afd9]/30 to-[#97d9e1]/30"
  }
];

const FeaturedToolsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-t from-background/80 via-[#fae5fa]/10 to-background/95" id="features">
    <div className="section-container max-w-5xl mx-auto fade-in">
      <h2 className="section-title text-3xl md:text-4xl text-primary mb-10 font-bold fade-in">
        Featured Tools & Techniques
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.map((tool, idx) => (
          <div
            key={tool.title}
            className={`w-full rounded-2xl shadow-lg ${tool.bg} p-8 flex flex-col items-center text-center transition-transform scale-hover fade-in`}
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