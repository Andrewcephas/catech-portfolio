import ImageGallery from "./hero/ImageGallery";
import TypewriterText from "./hero/TypewriterText";
import JourneyTimeline from "./hero/JourneyTimeline";
import ActionButtons from "./hero/ActionButtons";
import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube, Mail, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroPageProps {
  onNavigateToProjects?: () => void;
}

const HeroPage = ({ onNavigateToProjects }: HeroPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const profileImages = [
    "/lovable-uploads/with computer.png",
    "/lovable-uploads/NANO BANANA KAMBA.png",
    "/lovable-uploads/NANO BANANA.png",
    "/lovable-uploads/logo catech.png",
  ];

  useEffect(() => { setIsVisible(true); }, []);

  const handleDownloadCV = () => {
    const cvContent = `CATECH SOLUTIONS - CREATIVE PROFESSIONAL

Name: Andrew Cephas Ngumbau
Email: ngumbaucephas2@gmail.com
Phone: +254 793 614 592
Website: catech.co.ke
GitHub: github.com/Andrewcephas
LinkedIn: linkedin.com/in/andrew-cephas-ngumbau-543166243

EDUCATION:
- Kisii University (2022-2026)
- Misuuni High School (2018-2022)
- Kaliani Primary School (2009-2017)

SKILLS:
- Adobe Creative Suite (Photoshop, Illustrator, InDesign)
- Web Development (React, Node.js, HTML/CSS)
- UI/UX Design (Figma)
- Graphics Design & Branding
- Digital Marketing

EXPERIENCE:
- 5+ Years in Graphics Design (2018-Present)
- 3+ Years in Web Development (2021-Present)
- 50+ Completed Projects
- 30+ Satisfied Clients

PROJECTS:
- catech.co.ke
- ecommerce.catech.co.ke

SERVICES:
- Logo Design & Branding
- Web Application Development
- UI/UX Design
- Print Design
- Digital Marketing

Contact: ngumbaucephas2@gmail.com`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andrew_Cephas_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleViewWork = () => {
    if (onNavigateToProjects) {
      onNavigateToProjects();
    } else {
      const event = new CustomEvent('navigateToPage', { detail: 3 });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className={`h-full flex flex-col sm:flex-row gap-2 p-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex-shrink-0 flex flex-col items-center justify-start sm:justify-center">
        <ImageGallery images={profileImages} />
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-base sm:text-lg font-bold text-gray-800 text-center sm:text-left mb-1">
          Hello, I'm Andrew Cephas
        </h1>
        
        <TypewriterText text="Graphic Designer & Creative Innovator" />
        
        <p className="text-xs text-gray-600 leading-relaxed mb-2 text-center sm:text-left">
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
  );
};

export default HeroPage;