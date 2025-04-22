
import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-card py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
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
              <SocialLinks links={socialLinks} className="justify-start" />
            </div>
            
            <div className="bg-secondary/50 p-5 rounded-lg mt-6 border border-gray-700">
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
