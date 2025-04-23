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
    feedback: "John took our footage and crafted a story that truly resonated with our audience. The edits were smooth, stylish, and delivered quickly.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    name: "David Kim",
    title: "Music Artist",
    feedback: "My music video looks incredible! The transitions, pacing, and color work are some of the best I've ever seen.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Rao",
    title: "Marketing Lead, Sparkle Co.",
    feedback: "Super creative, communicative and highly professional. The commercial was a hit—thank you so much!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark Johnson",
    title: "Director, Creative Studios",
    feedback: "Exceptional work on our corporate video. The attention to detail was outstanding.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Wilson",
    title: "Independent Filmmaker",
    feedback: "The editing style perfectly matched our vision. Would definitely recommend!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "James Lee",
    title: "Content Creator",
    feedback: "Fast turnaround and excellent communication throughout the project.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Emma Davis",
    title: "YouTube Creator",
    feedback: "The quality of work exceeded my expectations. Very professional!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "Michael Brown",
    title: "Agency Director",
    feedback: "Transformed our raw footage into something extraordinary.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Lisa Chen",
    title: "Brand Manager",
    feedback: "The final edit was perfect for our social media campaign.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Robert Taylor",
    title: "Production Manager",
    feedback: "Great attention to detail and quick turnaround times.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Sophie Martin",
    title: "Digital Creator",
    feedback: "The editing style brought our story to life beautifully.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    name: "Tom Wilson",
    title: "Creative Director",
    feedback: "Professional, creative, and excellent communication throughout.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  // Create groups of 6 testimonials for each slide
  const testimonialsGroups = testimonials.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 6);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    return acc;
  }, [] as typeof testimonials[]);

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-[#9b87f5]/10 via-[#7E69AB]/20 to-background/90">
      <div className="section-container max-w-6xl mx-auto fade-in">
        <h2 className="section-title text-4xl md:text-5xl text-primary mb-12 font-bold fade-in">
          Testimonials
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {testimonialsGroups.map((group, groupIdx) => (
              <CarouselItem key={groupIdx}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {group.map((testi, idx) => (
                    <div
                      key={idx}
                      className="relative group"
                    >
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              size={16}
                              className={`${
                                starIdx < testi.rating
                                  ? "text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                              strokeWidth={2}
                              fill={starIdx < testi.rating ? "#facc15" : "none"}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-white/90 line-clamp-2 mb-1 text-center">
                          "{testi.feedback}"
                        </p>
                        <span className="font-semibold text-primary text-center">
                          {testi.name}
                        </span>
                        <span className="text-xs text-muted-foreground text-center">
                          {testi.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
