import ImageGallery from "./hero/ImageGallery";
import TypewriterText from "./hero/TypewriterText";
import JourneyTimeline from "./hero/JourneyTimeline";
import ActionButtons from "./hero/ActionButtons";
import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube, Mail, Phone, Globe, Sparkles, Linkedin as LinkedIn, Instagram as Insta, Youtube as YT, Facebook as FB } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroPageProps {
  onNavigateToProjects?: () => void;
}

const HeroPage = ({ onNavigateToProjects }: HeroPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<Array<{id: number, icon: React.ReactNode, x: number, y: number, delay: number}>>([]);
  
  const profileImages = [
    "/lovable-uploads/with computer.png",
    "/lovable-uploads/NANO BANANA KAMBA.png",
    "/lovable-uploads/NANO BANANA.png",
    "/lovable-uploads/logo catech.png",
  ];

  const icons = [
    <Sparkles size={16} />,
    <Github size={16} />,
    <Globe size={16} />,
    <Sparkles size={16} />,
  ];

  useEffect(() => { 
    setIsVisible(true);
    const newIcons = icons.map((icon, i) => ({
      id: i,
      icon,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      delay: Math.random() * 2,
    }));
    setFloatingIcons(newIcons);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIcons(prev => prev.map(icon => ({
        ...icon,
        y: icon.y > 90 ? 10 : icon.y + Math.random() * 5,
        x: icon.x + (Math.random() - 0.5) * 3,
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const cvContent = `CATECH SOLUTIONS - CREATIVE PROFESSIONAL
============================================

Name: Andrew Cephas Ngumbau
Email: ngumbaucephas2@gmail.com
Phone: +254 793 614 592
Website: portfolio.catech.co.ke
GitHub: github.com/Andrewcephas
LinkedIn: linkedin.com/in/andrew-ngumbau-8309a833a

EDUCATION:
---------
• 2022 - 2026: Kisii University (Bachelor's - In Progress)
• 2018 - 2022: Misuuni High School (C+ Grade)
• 2009 - 2017: Kaliani Primary School (343 Marks)

SKILLS:
-------
• Adobe Creative Suite (Photoshop, Illustrator, InDesign)
• Web Development (React, Node.js, HTML/CSS)
• UI/UX Design (Figma, Adobe XD)
• Data Science & Analytics
• Python Programming
• Graphics Design & Branding
• Digital Marketing

EXPERIENCE:
-----------
• 5+ Years in Graphics Design (2018-Present)
• 3+ Years in Web Development (2021-Present)
• Skills Development: 2023-Present
• 50+ Completed Projects
• 30+ Satisfied Clients

PROJECTS:
---------
• E-commerce Platform: https://ecommerce.catech.co.ke/
• KSUCU Management System: ksucu-mc.co.ke

SERVICES:
--------
• Logo Design & Branding
• Web Application Development
• UI/UX Design
• Data Analysis & Visualization
• Print Design
• Digital Marketing Materials

Contact: ngumbaucephas2@gmail.com`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andrew_Cephas_Ngumbau_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleViewWork = () => {
    if (onNavigateToProjects) onNavigateToProjects();
    else { const e = new CustomEvent('navigateToPage', { detail: 3 }); window.dispatchEvent(e); }
  };

  return (
    <div className={`relative h-full p-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute text-[#ff9900] animate-pulse"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              opacity: 0.5,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 relative z-10">
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <ImageGallery images={profileImages} />
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left mb-1">
            <span className="bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
              GET TO KNOW ME
            </span>
          </h1>
          
          <TypewriterText text="Graphic Designer & Creative Innovator" />
          
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2 text-center sm:text-left">
            My journey began in 2018 when I discovered my passion for design through Adobe Photoshop.
            What started as curiosity quickly evolved into expertise across the entire Adobe Creative Suite.
            Since 2023, I've been actively developing my skills while pursuing my degree at Kisii University.
            Today, I blend creativity with technology to deliver exceptional digital experiences.
          </p>
          
          <JourneyTimeline />
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 my-2">
            <a href="https://github.com/Andrewcephas" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#333] hover:text-white rounded-full transition-all" title="GitHub"><Github size={14} /></a>
            <a href="https://www.linkedin.com/in/andrew-ngumbau-8309a833a" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#0077b5] hover:text-white rounded-full transition-all" title="LinkedIn"><Linkedin size={14} /></a>
            <a href="https://www.instagram.com/catechlifestyle/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#e4405f] hover:text-white rounded-full transition-all" title="Instagram"><Instagram size={14} /></a>
            <a href="https://www.tiktok.com/@andrewcephas" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all" title="TikTok"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg></a>
            <a href="https://www.facebook.com/ademaster.master" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#1877f2] hover:text-white rounded-full transition-all" title="Facebook"><Facebook size={14} /></a>
            <a href="https://www.youtube.com/@catechlifestyle" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#ff0000] hover:text-white rounded-full transition-all" title="YouTube"><Youtube size={14} /></a>
            <a href="https://www.pinterest.com/CATECHSOLUTIONS8GRAPHICS" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#e60023] hover:text-white rounded-full transition-all" title="Pinterest"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.24 9.38 7.88 11.11-.11-.94-.21-2.4.04-3.44.23-.97 1.5-6.17 1.5-6.17s-.38-.77-.38-1.91c0-1.79 1.04-3.12 2.33-3.12 1.1 0 1.63.82 1.63 1.81 0 1.1-.7 2.75-1.06 4.27-.3 1.28.64 2.32 1.9 2.32 2.28 0 4.04-2.4 4.04-5.87 0-3.07-2.2-5.22-5.35-5.22-3.64 0-5.78 2.73-5.78 5.55 0 1.1.42 2.27.95 2.91.1.12.12.23.09.35l-.34 1.36c-.05.21-.18.25-.41.15-1.53-.71-2.48-2.88-2.48-4.64 0-3.78 2.75-7.26 7.92-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15.89.27 1.84.42 2.82.42 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg></a>
            <a href="mailto:ngumbaucephas2@gmail.com" className="p-1.5 bg-gray-100 hover:bg-[#ff9900] hover:text-white rounded-full transition-all" title="Email"><Mail size={14} /></a>
            <a href="tel:+254793614592" className="p-1.5 bg-gray-100 hover:bg-[#017020] hover:text-white rounded-full transition-all" title="Call"><Phone size={14} /></a>
            <a href="https://portfolio.catech.co.ke" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#017020] hover:text-white rounded-full transition-all" title="Website"><Globe size={14} /></a>
          </div>
          
          <ActionButtons onViewWork={handleViewWork} onDownloadCV={handleDownloadCV} />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;