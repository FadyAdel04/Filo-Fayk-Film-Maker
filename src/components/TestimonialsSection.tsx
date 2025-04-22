
import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alice Chen",
    title: "Producer, Orion Films",
    feedback:
      "John took our footage and crafted a story that truly resonated with our audience. The edits were smooth, stylish, and delivered quickly.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    name: "David Kim",
    title: "Music Artist",
    feedback:
      "My music video looks incredible! The transitions, pacing, and color work are some of the best I've ever seen.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Rao",
    title: "Marketing Lead, Sparkle Co.",
    feedback:
      "Super creative, communicative and highly professional. The commercial was a hit—thank you so much!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-[#9b87f5]/10 via-[#7E69AB]/20 to-background/90" id="testimonials">
    <div className="section-container max-w-3xl mx-auto">
      <h2 className="section-title text-4xl md:text-5xl text-primary mb-12 font-bold animate-fade-in">
        Testimonials
      </h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent>
          {testimonials.map((testi, idx) => (
            <CarouselItem key={idx} className="flex justify-center">
              <div
                className="relative w-full max-w-md bg-card/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-transform animate-fade-in"
                style={{
                  animationDelay: `${idx * 120}ms`,
                }}
              >
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-primary/40 object-cover"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={20}
                      className={`mx-0.5 ${
                        starIdx < testi.rating
                          ? "text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                      strokeWidth={2}
                      fill={
                        starIdx < testi.rating ? "#facc15" : "none"
                      }
                    />
                  ))}
                </div>
                <p className="italic text-lg text-foreground/90 mb-4">
                  "{testi.feedback}"
                </p>
                <span className="font-semibold text-primary">{testi.name}</span>
                <span className="text-xs text-muted-foreground">
                  {testi.title}
                </span>
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-violet-400 opacity-40"></span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default TestimonialsSection;
