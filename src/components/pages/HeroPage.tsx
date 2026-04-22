import ImageGrid from "./hero/ImageGrid";
import ActionButtons from "./hero/ActionButtons";
import { Github, Linkedin, Mail, Phone, ArrowRight, Sparkles, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroPageProps {
  onNavigateToProjects?: () => void;
}

const HeroPage = ({ onNavigateToProjects }: HeroPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const profileImages = [
    "/lovable-uploads/catech.jpg",
    "/lovable-uploads/with computer.png",
    "/lovable-uploads/NANO BANANA KAMBA.png",
    "/lovable-uploads/logo catech.png",
  ];

  useEffect(() => { 
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    const cvContent = `CATECH SOLUTIONS - CREATIVE PROFESSIONAL
============================================

Name: Andrew Cephas Ngumbau
Email: ngumbaucephas2@gmail.com
Phone: +254 793 614 592
Website: catech.co.ke
GitHub: github.com/Andrewcephas
LinkedIn: linkedin.com/in/andrew-ngumbau-8309a833a

PROFESSIONAL SUMMARY
----------------
Creative Graphic Designer and IT student with hands-on experience in branding, web design, and software development. Founder of CATECH Solutions and graphics, delivering digital solutions to 100+ clients. Experienced in building real-world systems including finance management and real-time sign-to-speech applications.

SKILLS
------
Design Tools: Adobe Photoshop, Adobe Illustrator, Figma, Canva
Technical Skills: HTML, CSS, JavaScript, React.js, Python (Beginner)
Frameworks & Tools: MERN Stack, Flask
Other: Networking Basics, System Security

EXPERIENCE
----------
Founder & Graphic Designer
CATECH Solutions & Graphics - Nakuru, Kenya
April 2024 - Present
- Delivered branding and digital solutions for 100+ clients
- Developed full-stack web applications using MERN and Flask
- Led projects from concept to deployment

PROJECTS
--------
- Finance Management System: Tracking income, expenses, and financial reports
- Real-Time Sign-to-Speech System: Translate sign language to speech
- catech.co.ke
- portfolio.catech.co.ke
- ecommerce.catech.co.ke

EDUCATION
--------
Bachelor of Science in Information Technology
Kisii University - Main Campus
Expected Graduation: 2026

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
    <div className={`relative min-h-screen py-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}> 
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -top-10 w-72 h-72 rounded-full bg-[var(--brand-primary)]/10 blur-3xl animate-float" />
        <div className="absolute right-4 top-12 w-64 h-64 rounded-full bg-[var(--brand-secondary)]/10 blur-3xl animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base font-medium tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                Your Tech Partner for Success
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Founder, <span className="text-[var(--brand-primary)]">CATECH Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Creative Graphic Designer and IT student with hands-on experience in branding, web design, and software development. Delivering digital solutions to 100+ clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Andrewcephas" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all text-gray-800" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-ngumbau-8309a833a" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all text-blue-700" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/catechlifestyle" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all text-pink-600" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@catechlifestyle" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all text-red-600" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href="mailto:ngumbaucephas2@gmail.com" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all text-gray-600" title="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+254793614592" className="p-3 bg-white shadow-sm rounded-full border border-gray-200 hover:shadow-lg transition-all" title="Call">
                <Phone size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleViewWork}
                className="px-8 py-4 bg-[var(--brand-primary)] text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                View My Work
                <Sparkles size={18} />
              </button>
              <button 
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all"
              >
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Ready to start a project?</span>
              <a href="mailto:ngumbaucephas2@gmail.com" className="text-[var(--brand-primary)] font-medium hover:underline flex items-center gap-1">
                Let's talk <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Image Grid - Right Side */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[40px] bg-[var(--brand-primary)]/10 blur-3xl" />
            <ImageGrid images={profileImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;