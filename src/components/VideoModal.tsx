import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

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

  // Get embed-ready Google Drive video link
  const buildDriveUrl = () => {
    let baseUrl = video.videoUrl;

    if (baseUrl.includes('/view')) {
      baseUrl = baseUrl.replace('/view', '/preview');
    }

    return baseUrl;
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
            src={buildDriveUrl()} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[300px] md:min-h-[450px]"
          ></iframe>
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
