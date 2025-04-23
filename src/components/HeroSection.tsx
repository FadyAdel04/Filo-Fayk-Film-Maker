import React, { useEffect } from "react";
import SocialLinks from "./SocialLinks";
import { ArrowDown } from "lucide-react";
import "aos/dist/aos.css"; // Import AOS styles

interface HeroSectionProps {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    profileImage: string;
    social: Array<{
      platform: string;
      url: string;
    }>;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  useEffect(() => {
    // Initialize AOS when component mounts
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
        mirror: true,
      });
    });
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 overflow-hidden"
    >
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
          <p
            className="text-lg md:text-xl text-primary font-semibold"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            👋 Hello & welcome!
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm <span className="text-primary">{personalInfo.name}</span> <br />
            <span className="text-white">{personalInfo.title}</span>
          </h1>
          <p
            className="text-lg text-gray-300 max-w-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {personalInfo.description}
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <SocialLinks links={personalInfo.social} />
          </div>
          <button
            onClick={scrollToWork}
            className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 scale-hover"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
        </div>

        {/* Image - Right Side */}
        <div
          className="flex justify-center relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative z-10 rounded-xl overflow-hidden w-full max-w-md shadow-xl">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
          </div>
          <div
            className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            data-aos="fade"
            data-aos-delay="400"
          ></div>
          <div
            className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            data-aos="fade"
            data-aos-delay="500"
          ></div>
        </div>

        {/* Scroll down indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow hidden md:block"
        >
          <ArrowDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
