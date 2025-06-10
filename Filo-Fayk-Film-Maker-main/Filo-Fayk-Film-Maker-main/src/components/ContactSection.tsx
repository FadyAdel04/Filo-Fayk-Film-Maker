import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import SocialLinks from './SocialLinks';

interface ContactSectionProps {
  email: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ email, socialLinks }) => {
  const { toast } = useToast();

  return (
    <section id="contact" className="bg-card py-24 flex justify-center items-center">
      <div className="section-container text-center" data-aos="fade-up">
        <h2 className="section-title" data-aos="zoom-in" data-aos-delay="100">Get In Touch</h2>
        
        <div className="grid md:grid-cols-1 gap-12 items-start justify-center text-center" data-aos="fade-up" data-aos-delay="200">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="400">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out if you're interested in working together or have any questions about my services.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2 text-gray-200">Email</h4>
              <a 
                href={`mailto:${email}`} 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {email}
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-200">Connect with me</h4>
              <SocialLinks links={socialLinks} className="justify-center" />
            </div>
            
            <div className="bg-secondary/50 p-5 rounded-lg mt-6 border border-gray-700" data-aos="zoom-in" data-aos-delay="500">
              <p className="text-gray-300 italic">
                "Video editing isn't just about cutting clips together; it's about crafting a narrative that resonates with viewers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
