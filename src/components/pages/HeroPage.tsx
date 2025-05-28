
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";

const HeroPage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Graphic Designer & Creative Innovator";

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
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,CV - Graphic Designer\nName: Creative Professional\nSkills: Adobe Creative Suite, Design, Branding\nContact: info@catech.co.ke';
    link.download = 'CV_Graphic_Designer.txt';
    link.click();
  };

  const handleViewWork = () => {
    // Scroll to projects section
    const projectsPage = 3; // Index of projects page
    // This would be handled by parent component
    console.log('Navigate to projects page:', projectsPage);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
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

      {/* Profile image */}
      <div className="relative mb-8 animate-fade-in">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#ff9900] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center animate-pulse">
          <div className="w-3 h-3 bg-[#ff9900] rounded-full"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="z-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
          Specialized in Adobe Creative Suite and modern design principles.
        </p>

        {/* Social links */}
        <div className="flex justify-center space-x-4 mb-8">
          {[
            { icon: Github, href: "https://github.com", color: "hover:bg-gray-800" },
            { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600" },
            { icon: Mail, href: "mailto:info@catech.co.ke", color: "hover:bg-[#ff9900]" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-gray-200 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:text-white animate-fade-in`}
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleViewWork}
            className="px-6 py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in flex items-center justify-center"
            style={{ animationDelay: '1.6s' }}
          >
            <Eye size={16} className="mr-2" />
            View My Work
          </button>
          <button 
            onClick={handleDownloadCV}
            className="px-6 py-3 border-2 border-[#017020] text-[#017020] rounded-full font-semibold transition-all duration-300 hover:bg-[#017020] hover:text-white animate-fade-in flex items-center justify-center"
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
