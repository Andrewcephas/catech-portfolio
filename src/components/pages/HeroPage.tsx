import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";

const HeroPage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Graphic Designer & Creative Innovator";

  const profileImages = [
    "/lovable-uploads/f04b0568-f72c-43fd-8e57-133cc4af1de6.png",
    "/lovable-uploads/d5191dc1-6bf2-4df9-b973-0cc8e5047aaf.png",
    "/lovable-uploads/a28bc92e-ea57-43b0-be33-8ce891c2f057.png",
    "/lovable-uploads/cff0335c-00cc-4e3e-b24b-d64290ddc074.png",
    "/lovable-uploads/b88e02b7-e05f-4aaf-b88d-e5c1bb7b2d6b.png",
    "/lovable-uploads/fd9a0405-6960-42c1-a42c-f9bf83cef1f8.png",
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

Name: Andrew Cephas Ngumbau
Email: ngumbaucephas2@gmail.com
Phone: +254 793 614 592
Website: ceo.catech.co.ke

EDUCATION:
----------
• 2022 - 2026: Kisii University (Current)
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
• KSUCU Management System: ksucu-mc.co.ke (Frontend Client Project Management System - Under Development)

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
    link.download = 'Andrew_Cephas_Ngumbau_CV.txt';
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

      {/* Enhanced 3D Rotating Image Gallery - Professional and bigger */}
      <div className="relative mb-4 md:mb-6 animate-scale-in">
        <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] mx-auto">
          {/* Main rotating container with enhanced circular layout */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-rotate-gallery preserve-3d">
                {profileImages.map((image, index) => {
                  const angle = (index * 360) / profileImages.length;
                  const radius = 180; // Increased radius for bigger circle
                  return (
                    <div
                      key={index}
                      className="absolute rounded-2xl overflow-hidden border-4 border-[#ff9900] shadow-2xl backface-hidden"
                      style={{
                        width: '200px',
                        height: '250px',
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-100px', // Half of width
                        marginTop: '-125px', // Half of height
                      }}
                    >
                      <img
                        src={image}
                        alt={`Profile ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                        style={{
                          objectPosition: 'center top', // Focus on face area
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced reflection with proper positioning */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 md:h-60 opacity-20 overflow-hidden"
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
                    const radius = 180;
                    return (
                      <div
                        key={`reflection-${index}`}
                        className="absolute rounded-2xl overflow-hidden border-4 border-[#ff9900]/20 backface-hidden"
                        style={{
                          width: '200px',
                          height: '250px',
                          transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                          left: '50%',
                          top: '50%',
                          marginLeft: '-100px',
                          marginTop: '-125px',
                        }}
                      >
                        <img
                          src={image}
                          alt={`Reflection ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                          style={{
                            objectPosition: 'center top',
                            imageRendering: 'crisp-edges'
                          }}
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
          Hello, I'm Andrew Cephas Ngumbau
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
          Since 2023, I've been actively developing my skills while pursuing my degree at Kisii University.
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
              <span className="block font-bold text-[#ff9900]">2019-2022</span>
              <span className="text-ellipsis-2">Adobe Suite Mastery</span>
            </div>
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#017020]">2022</span>
              <span className="text-ellipsis-2">University Started</span>
            </div>
            <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded text-center">
              <span className="block font-bold text-[#017020]">2023-2024</span>
              <span className="text-ellipsis-2">Skills Development</span>
            </div>
          </div>
        </div>

        {/* Social links - Responsive sizing */}
        <div className="flex justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
          {[
            { icon: Github, href: "https://github.com", color: "bg-gray-800", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", color: "bg-blue-600", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ngumbaucephas2@gmail.com", color: "bg-[#ff9900]", label: "Email" },
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
