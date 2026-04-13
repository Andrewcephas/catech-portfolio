import ImageGallery from "./hero/ImageGallery";
import TypewriterText from "./hero/TypewriterText";
import JourneyTimeline from "./hero/JourneyTimeline";
import ActionButtons from "./hero/ActionButtons";
import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube, Mail, Phone, Globe, Sparkles } from "lucide-react";
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
Website: catech.co.ke
GitHub: github.com/Andrewcephas
LinkedIn: linkedin.com/in/andrew-cephas-ngumbau-543166243

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
            <a href="https://linkedin.com/in/andrew-cephas-ngumbau-543166243" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#0077b5] hover:text-white rounded-full transition-all" title="LinkedIn"><Linkedin size={14} /></a>
            <a href="https://twitter.com/catech_solutions" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#1da1f2] hover:text-white rounded-full transition-all" title="Twitter"><Twitter size={14} /></a>
            <a href="https://instagram.com/catech_solutions" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#e4405f] hover:text-white rounded-full transition-all" title="Instagram"><Instagram size={14} /></a>
            <a href="https://facebook.com/catech.solutions.ke" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#1877f2] hover:text-white rounded-full transition-all" title="Facebook"><Facebook size={14} /></a>
            <a href="https://youtube.com/@catechsolutions" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#ff0000] hover:text-white rounded-full transition-all" title="YouTube"><Youtube size={14} /></a>
            <a href="mailto:ngumbaucephas2@gmail.com" className="p-1.5 bg-gray-100 hover:bg-[#ff9900] hover:text-white rounded-full transition-all" title="Email"><Mail size={14} /></a>
            <a href="tel:+254793614592" className="p-1.5 bg-gray-100 hover:bg-[#017020] hover:text-white rounded-full transition-all" title="Call"><Phone size={14} /></a>
            <a href="https://catech.co.ke" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 hover:bg-[#017020] hover:text-white rounded-full transition-all" title="Website"><Globe size={14} /></a>
          </div>
          
          <ActionButtons onViewWork={handleViewWork} onDownloadCV={handleDownloadCV} />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;