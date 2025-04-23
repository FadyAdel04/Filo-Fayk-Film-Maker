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

import r1 from "../images/r1.jpg";
import r2 from "../images/r2.jpg";
import r3 from "../images/r3.jpg";
import r4 from "../images/r4.jpg";
import r5 from "../images/r5.jpg";
import r6 from "../images/r6.jpg";
import r7 from "../images/r7.jpg";
import r8 from "../images/r8.jpg";
import r9 from "../images/r9.jpg";
import r10 from "../images/r10.jpg";
import r11 from "../images/r11.jpg";
import r12 from "../images/r12.jpg";
import r13 from "../images/r13.jpg";
import r14 from "../images/r14.jpg";
import r15 from "../images/r15.jpg";
import r16 from "../images/r16.jpg";
import r17 from "../images/r17.jpg";
import r18 from "../images/r18.jpg";
import r19 from "../images/r19.jpg";
import r20 from "../images/r20.jpg";
import r21 from "../images/r21.jpg";
import r22 from "../images/r22.jpg";
import r23 from "../images/r23.jpg";

const testimonials = [
  {
    avatar: r1,
  },
  {
    avatar: r2,
  },
  {
    avatar: r3,
  },
  {
    avatar: r4,
  },
  {
    avatar: r5,
  },
  {
    avatar: r6,
  },
  {
    avatar: r7,
  },
  {
    avatar: r8,
  },
  {
    avatar: r9,
  },
  {
    avatar: r10,
  },
  {
    avatar: r11,
  },
  {
    avatar: r12,
  },
  {
    avatar: r13,
  },
  {
    avatar: r14,
  },
  {
    avatar: r15,
  },
  {
    avatar: r16,
  },
  {
    avatar: r17,
  },
  {
    avatar: r18,
  },
  {
    avatar: r19,
  },
  {
    avatar: r20,
  },
  {
    avatar: r21,
  },
  {
    avatar: r22,
  },
  {
    avatar: r23,
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