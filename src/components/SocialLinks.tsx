
import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = "" }) => {
  // Map platform names to their respective icons
  const getIcon = (platform: string, size = 20) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram size={size} />;
      case 'youtube':
        return <Youtube size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors duration-300"
          aria-label={`Visit ${link.platform}`}
        >
          {getIcon(link.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
