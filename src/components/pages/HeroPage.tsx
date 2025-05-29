
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";

const HeroPage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Graphic Designer & Creative Innovator";

  const profileImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
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

      {/* 3D Rotating Image Gallery - Fixed container */}
      <div className="relative mb-8 animate-scale-in">
        <div className="relative w-64 h-64 mx-auto overflow-hidden">
          {/* Main rotating container with proper boundaries */}
          <div
            className="absolute inset-0 flex items-center justify-center perspective-1000"
          >
            <div className="relative w-32 h-32">
              <div
                className="absolute inset-0 animate-rotate-gallery preserve-3d"
              >
                {profileImages.map((image, index) => (
                  <div
                    key={index}
                    className="absolute w-20 h-20 rounded-lg overflow-hidden border-2 border-[#ff9900] shadow-xl backface-hidden"
                    style={{
                      transform: `rotateY(${index * (360 / profileImages.length)}deg) translateZ(60px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-40px',
                      marginTop: '-10px',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reflection - positioned closer and contained */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 opacity-40 overflow-hidden"
            style={{
              transform: 'translateX(-50%) scaleY(-0.6)',
              filter: 'blur(1px)',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 100%)'
            }}
          >
            <div
              className="absolute inset-0 flex items-start justify-center"
            >
              <div className="relative w-32 h-32">
                <div
                  className="absolute inset-0 animate-rotate-gallery preserve-3d"
                >
                  {profileImages.map((image, index) => (
                    <div
                      key={`reflection-${index}`}
                      className="absolute w-20 h-20 rounded-lg overflow-hidden border-2 border-[#ff9900]/30 backface-hidden"
                      style={{
                        transform: `rotateY(${index * (360 / profileImages.length)}deg) translateZ(60px)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-40px',
                        marginTop: '-40px',
                      }}
                    >
                      <img
                        src={image}
                        alt={`Reflection ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center animate-pulse z-10">
            <div className="w-3 h-3 bg-[#ff9900] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="z-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          Hello, I'm a Creative Professional
        </h1>

        <div className="h-12 mb-6">
          <p className="text-xl lg:text-2xl text-gray-700 font-light">
            {displayText}
            <span className="animate-pulse text-[#ff9900]">|</span>
          </p>
        </div>

        <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed px-4">
          My journey began in 2018 when I discovered my passion for design through Adobe Photoshop.
          What started as curiosity quickly evolved into expertise across the entire Adobe Creative Suite.
          Over the years, I've expanded into web development, mastering the MERN stack, Python, and UI/UX design.
          Today, I blend creativity with technology to deliver exceptional digital experiences and data-driven solutions.
        </p>

        {/* My Journey Timeline */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-[#017020] mb-4">My Growth Journey</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded">
              <span>2018: Started with Photoshop</span>
              <span className="text-[#ff9900] font-bold">Foundation</span>
            </div>
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded">
              <span>2019-2020: Mastered Adobe Suite</span>
              <span className="text-[#ff9900] font-bold">Creative Phase</span>
            </div>
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded">
              <span>2021: Web Development & MERN</span>
              <span className="text-[#017020] font-bold">Tech Expansion</span>
            </div>
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-2 rounded">
              <span>2022-2024: UI/UX & Data Science</span>
              <span className="text-[#017020] font-bold">Professional Growth</span>
            </div>
          </div>
        </div>

        {/* Social links */}
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
