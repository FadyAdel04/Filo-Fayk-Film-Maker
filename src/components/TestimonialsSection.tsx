import React, { useEffect } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import 'aos/dist/aos.css';

const testimonials = [
  {
    avatar: "../../public/assets/r1.jpg",
  },
  {
    avatar: "../../public/assets/r2.jpg",
  },
  {
    avatar: "../../public/assets/r3.jpg",
  },
  {
    avatar: "../../public/assets/r4.jpg",
  },
  {
    avatar: "../../public/assets/r5.jpg",
  },
  {
    avatar: "../../public/assets/r6.jpg",
  },
  {
    avatar: "../../public/assets/r7.jpg",
  },
  {
    avatar: "../../public/assets/r8.jpg",
  },
  {
    avatar: "../../public/assets/r9.jpg",
  },
  {
    avatar: "../../public/assets/r10.jpg",
  },
  {
    avatar: "../../public/assets/r11.jpg",
  },
  {
    avatar: "../../public/assets/r12.jpg",
  },
  {
    avatar: "../../public/assets/r13.jpg",
  },
  {
    avatar: "../../public/assets/r14.jpg",
  },
  {
    avatar: "../../public/assets/r15.jpg",
  },
  {
    avatar: "../../public/assets/r16.jpg",
  },
  {
    avatar: "../../public/assets/r17.jpg",
  },
  {
    avatar: "../../public/assets/r18.jpg",
  },
  {
    avatar: "../../public/assets/r19.jpg",
  },
  {
    avatar: "../../public/assets/r20.jpg",
  },
  {
    avatar: "../../public/assets/r21.jpg",
  },
  {
    avatar: "../../public/assets/r22.jpg",
  },
  {
    avatar: "../../public/assets/r23.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    });
  }, []);

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
      <div className="section-container max-w-6xl mx-auto">
        <h2 
          className="section-title text-4xl md:text-5xl text-primary mb-12 font-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Customer Reviews
          <span 
            className="block text-white text-xl mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            What my clients say about my work
          </span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CarouselContent>
            {testimonialsGroups.map((group, groupIdx) => (
              <CarouselItem key={groupIdx}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {group.map((testi, idx) => (
                    <div
                      key={idx}
                      className="relative group p-1 rounded-lg border-2 border-[#ff2436] overflow-hidden hover:border-primary transition-all duration-300"
                      data-aos="zoom-in"
                      data-aos-delay={200 + (idx * 50)}
                    >
                      <img
                        src={testi.avatar}
                        alt="Testimonial"
                        className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="hidden md:flex absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-gray-700"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <CarouselNext 
            className="hidden md:flex absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-gray-700"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;