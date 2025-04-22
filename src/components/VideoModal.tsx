
import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    videoUrl: string;
    description: string;
  } | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  // Google Drive URL parsing to add parameters
  const getVideoSrc = () => {
    let url = video.videoUrl;
    
    // Add parameters for controls
    if (url.includes('drive.google.com')) {
      // Add autoplay parameter if not already present
      if (!url.includes('autoplay=')) {
        url += (url.includes('?') ? '&' : '?') + 'autoplay=1';
      }
      
      // Add mute parameter based on state
      if (isMuted) {
        url = url.replace(/mute=0/g, 'mute=1');
        if (!url.includes('mute=')) {
          url += '&mute=1';
        }
      } else {
        url = url.replace(/mute=1/g, 'mute=0');
        if (!url.includes('mute=')) {
          url += '&mute=0';
        }
      }
    }
    
    return url;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (iframeRef.current) {
      // This is a bit limited for iframes, but we'll do our best
      if (isPlaying) {
        // Attempt to pause by reloading without autoplay
        const currentSrc = iframeRef.current.src;
        iframeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
      } else {
        // Attempt to play by reloading with autoplay
        const currentSrc = iframeRef.current.src;
        iframeRef.current.src = currentSrc.replace('autoplay=0', 'autoplay=1');
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        className="bg-card rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in"
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <h3 className="text-xl font-semibold text-white">{video.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="relative flex-grow overflow-hidden bg-black">
          <iframe 
            ref={iframeRef}
            src={getVideoSrc()} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[300px] md:min-h-[450px]"
          ></iframe>
          
          {/* Custom controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-center">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-primary"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="text-white hover:text-primary"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
        
        {video.description && (
          <div className="p-4 border-t border-gray-800">
            <p className="text-gray-300">{video.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
