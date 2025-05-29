
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";

const HeroPage = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullText = "Graphic Designer & Creative Innovator";

  const profileImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  ];

  const colorSchemes = [
    { border: '#ff9900', glow: 'rgba(255, 153, 0, 0.5)' },
    { border: '#017020', glow: 'rgba(1, 112, 32, 0.5)' },
    { border: '#ff6b6b', glow: 'rgba(255, 107, 107, 0.5)' },
    { border: '#4ecdc4', glow: 'rgba(78, 205, 196, 0.5)' },
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, []);

  const handleDownloadCV = () => {
    const cvContent = `
CATECH SOLUTIONS - CREATIVE PROFESSIONAL
========================================

Name: Creative Professional
Email: info@catech.co.ke
Phone: +254 700 123 456
Website: www.catech.co.ke

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
• 5+ Years in Graphics Design
• 3+ Years in Web Development
• 50+ Completed Projects
• 30+ Satisfied Clients

SERVICES:
---------
• Logo Design & Branding
• Web Application Development
• UI/UX Design
• Data Analysis & Visualization
• Print Design
• Digital Marketing Materials

Contact us for professional creative solutions!
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Catech_Solutions_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleViewWork = () => {
    console.log('Navigate to projects page');
  };

  const currentColor = colorSchemes[currentImageIndex];

  return (
    <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden animate-fade-in">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-24 h-24 rounded-full opacity-5 bg-gradient-to-r from-[#ff9900] to-[#017020] animate-bounce-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Rotating Profile Image with Reflection */}
      <div className="relative mb-8 animate-scale-in perspective-1000">
        <div 
          className="w-48 h-48 relative transform-gpu transition-all duration-1000 preserve-3d hover:rotate-y-180"
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main Image */}
          <div 
            className="w-full h-full rounded-full overflow-hidden border-4 shadow-2xl backface-hidden absolute"
            style={{
              borderColor: currentColor.border,
              boxShadow: `0 0 30px ${currentColor.glow}, 0 10px 30px rgba(0,0,0,0.3)`
            }}
          >
            <img 
              src={profileImages[currentImageIndex]}
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>
          
          {/* Back face */}
          <div 
            className="w-full h-full rounded-full overflow-hidden border-4 shadow-2xl backface-hidden absolute rotate-y-180"
            style={{
              borderColor: currentColor.border,
              boxShadow: `0 0 30px ${currentColor.glow}`
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#ff9900] to-[#017020] flex items-center justify-center">
              <div className="text-white font-bold text-lg">CATECH</div>
            </div>
          </div>
        </div>
        
        {/* Reflection */}
        <div 
          className="w-48 h-24 absolute top-48 left-0 rounded-full overflow-hidden opacity-30"
          style={{
            background: `linear-gradient(to bottom, ${currentColor.glow}, transparent)`,
            transform: 'scaleY(-1)',
            filter: 'blur(2px)'
          }}
        >
          <img 
            src={profileImages[currentImageIndex]}
            alt="Reflection"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center animate-pulse">
          <div className="w-3 h-3 bg-[#ff9900] rounded-full"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="z-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          Hello, I'm a Creative
        </h1>
        
        <div className="h-12 mb-6">
          <p className="text-xl lg:text-2xl text-gray-700 font-light">
            {displayText}
            <span className="animate-pulse text-[#ff9900]">|</span>
          </p>
        </div>

        <p className="text-gray-600 mb-8 max-w-lg leading-relaxed px-4">
          Passionate about creating stunning visual designs and bringing creative visions to life. 
          Specialized in Adobe Creative Suite, web development, and modern design principles.
        </p>

        {/* Social links - Always visible */}
        <div className="flex justify-center space-x-4 mb-8">
          {[
            { icon: Github, href: "https://github.com", color: "bg-gray-800", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", color: "bg-blue-600", label: "LinkedIn" },
            { icon: Mail, href: "mailto:info@catech.co.ke", color: "bg-[#ff9900]", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${social.color} text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fade-in`}
              style={{ animationDelay: `${1 + index * 0.2}s` }}
              title={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleViewWork}
            className="px-6 py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-slow flex items-center justify-center"
            style={{ animationDelay: '1.6s' }}
          >
            <Eye size={16} className="mr-2" />
            View My Work
          </button>
          <button 
            onClick={handleDownloadCV}
            className="px-6 py-3 border-2 border-[#017020] text-[#017020] rounded-full font-semibold transition-all duration-300 hover:bg-[#017020] hover:text-white animate-scale-in flex items-center justify-center"
            style={{ animationDelay: '1.8s' }}
          >
            <Download size={16} className="mr-2" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
