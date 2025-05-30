
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";

const HeroPage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Graphic Designer & Creative Innovator";

  const profileImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    "/lovable-uploads/6fe90ea1-1e3b-443b-838b-e8df66c96450.png",
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

  return (
    <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden animate-fade-in pt-2 md:pt-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-12 h-12 md:w-24 md:h-24 rounded-full opacity-5 bg-gradient-to-r from-[#ff9900] to-[#017020] animate-bounce-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced 3D Rotating Image Gallery - Much bigger and circular */}
      <div className="relative mb-4 md:mb-6 animate-scale-in">
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto overflow-visible">
          {/* Main rotating container with enhanced circular layout */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-rotate-gallery preserve-3d">
                {profileImages.map((image, index) => {
                  const angle = (index * 360) / profileImages.length;
                  const radius = 150; // Increased radius for bigger circle
                  return (
                    <div
                      key={index}
                      className="absolute w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-[#ff9900] shadow-2xl backface-hidden"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-64px', // Half of w-32
                        marginTop: '-64px', // Half of h-32
                      }}
                    >
                      <img
                        src={image}
                        alt={`Profile ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced reflection with proper positioning */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 md:h-48 opacity-20 overflow-hidden"
            style={{
              transform: 'translateX(-50%) scaleY(-0.4)',
              filter: 'blur(3px)',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 100%)'
            }}
          >
            <div className="absolute inset-0 flex items-start justify-center perspective-1000">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 animate-rotate-gallery preserve-3d">
                  {profileImages.map((image, index) => {
                    const angle = (index * 360) / profileImages.length;
                    const radius = 150;
                    return (
                      <div
                        key={`reflection-${index}`}
                        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-[#ff9900]/20 backface-hidden"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                          left: '50%',
                          top: '50%',
                          marginLeft: '-64px',
                          marginTop: '-64px',
                        }}
                      >
                        <img
                          src={image}
                          alt={`Reflection ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-[#017020] rounded-full flex items-center justify-center animate-pulse z-10">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ff9900] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main content with enhanced responsiveness */}
      <div className="z-10 animate-slide-up px-4" style={{ animationDelay: '0.5s' }}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          Hello, I'm a Creative Professional
        </h1>

        <div className="h-8 md:h-12 mb-4 md:mb-6">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light responsive-text">
            {displayText}
            <span className="animate-pulse text-[#ff9900]">|</span>
          </p>
        </div>

        <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl leading-relaxed px-2 md:px-4 text-sm md:text-base responsive-text">
          My journey began in 2018 when I discovered my passion for design through Adobe Photoshop.
          What started as curiosity quickly evolved into expertise across the entire Adobe Creative Suite.
          Over the years, I've expanded into web development, mastering the MERN stack, Python, and UI/UX design.
          Today, I blend creativity with technology to deliver exceptional digital experiences and data-driven solutions.
        </p>

        {/* Compact Journey Timeline */}
        <div className="mb-4 md:mb-6 max-w-2xl mx-auto">
          <h3 className="text-base md:text-lg font-semibold text-[#017020] mb-2 md:mb-3">My Growth Journey</h3>
          <div className="grid grid-cols-2 gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#ff9900]">2018</span>
              <span className="text-ellipsis-2">Photoshop Foundation</span>
            </div>
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#ff9900]">2019-2020</span>
              <span className="text-ellipsis-2">Adobe Suite Mastery</span>
            </div>
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#017020]">2021</span>
              <span className="text-ellipsis-2">Web Development</span>
            </div>
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#017020]">2022-2024</span>
              <span className="text-ellipsis-2">UI/UX & Data Science</span>
            </div>
          </div>
        </div>

        {/* Social links - Responsive sizing */}
        <div className="flex justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
          {[
            { icon: Github, href: "/", color: "bg-gray-800", label: "GitHub" },
            { icon: Linkedin, href: "/", color: "bg-blue-600", label: "LinkedIn" },
            { icon: Mail, href: "/", color: "bg-[#ff9900]", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`p-2 md:p-3 ${social.color} text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fade-in`}
              style={{ animationDelay: `${1 + index * 0.2}s` }}
              title={social.label}
            >
              <social.icon size={16} className="md:w-5 md:h-5" />
            </a>
          ))}
        </div>

        {/* Action buttons - Enhanced mobile layout */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <button
            onClick={handleViewWork}
            className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-slow flex items-center justify-center text-sm md:text-base"
            style={{ animationDelay: '1.6s' }}
          >
            <Eye size={14} className="mr-2 md:w-4 md:h-4" />
            View My Work
          </button>
          <button
            onClick={handleDownloadCV}
            className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#017020] text-[#017020] rounded-full font-semibold transition-all duration-300 hover:bg-[#017020] hover:text-white animate-scale-in flex items-center justify-center text-sm md:text-base"
            style={{ animationDelay: '1.8s' }}
          >
            <Download size={14} className="mr-2 md:w-4 md:h-4" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
