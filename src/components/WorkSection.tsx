import React, { useState, useEffect } from "react";
import VideoModal from "./VideoModal";
import { Play } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

interface WorkSectionProps {
  categories: Category[];
  videos: Video[];
}

const WorkSection: React.FC<WorkSectionProps> = ({ categories, videos }) => {
  const [selectedCategory, setSelectedCategory] = useState("Reels");
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      });
    }

    if (selectedCategory === "all") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(
        videos.filter((video) => video.category === selectedCategory)
      );
    }
  }, [selectedCategory, videos]);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="work"
      className="py-24 bg-gradient-to-b from-background to-background/95"
    >
      <div className="section-container fade-in">
        <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
          My Work
        </h2>

        {/* Category Filter */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              data-aos="fade-up"
              data-aos-delay="200"
              className={`btn-category ${
                selectedCategory === category.id
                  ? "active"
                  : "bg-secondary text-gray-300"
              } scale-hover`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={200 + (idx % 3) * 100}
              key={video.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-card cursor-pointer fade-in scale-hover"
              style={{ animationDelay: `${idx * 90}ms` }}
              onClick={() => openVideoModal(video)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={300 + (idx % 3) * 100}
                />
                <div className="gradient-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 text-white scale-hover"
                    data-aos="zoom-in"
                    data-aos-delay={400 + (idx % 3) * 100}
                  >
                    <Play size={28} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3  
                  data-aos="fade-up"
                  data-aos-delay={250 + (idx % 3) * 100}
                  className="text-lg md:text-xl font-semibold text-white">
                  {video.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay={300 + (idx % 3) * 100} 
                  className="text-sm text-gray-400 mt-1 italic capitalize">
                  {video.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredVideos.length === 0 && (
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mt-10 py-8 bg-card/40 rounded-lg fade-in">
            <p className="text-gray-400">No videos found in this category.</p>
          </div>
        )}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeVideoModal}
        video={selectedVideo}
      />
    </section>
  );
};

export default WorkSection;
