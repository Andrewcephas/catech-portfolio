import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import AppHeader from "@/components/AppHeader";

import HeroPage from "@/components/pages/HeroPage";
import AboutPage from "@/components/pages/AboutPage";
import SkillsPage from "@/components/pages/SkillsPage";
import TechStack from "@/components/pages/TechStack";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ContactPage from "@/components/pages/ContactPage";
import { ChevronUp, Sparkles } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleNavigateToProjects = () => {
    scrollToSection('projects');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = Object.keys(sectionRefs.current);
      
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AppHeader activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        <section 
          id="welcome" 
          ref={(el) => sectionRefs.current.welcome = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <WelcomePage onStart={() => scrollToSection('hero')} />
        </section>

        <section 
          id="hero" 
          ref={(el) => sectionRefs.current.hero = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl w-full">
            <HeroPage onNavigateToProjects={handleNavigateToProjects} />
          </div>
        </section>

        <section 
          id="about" 
          ref={(el) => sectionRefs.current.about = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl w-full">
            <AboutPage />
          </div>
        </section>

        <section 
          id="skills" 
          ref={(el) => sectionRefs.current.skills = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl w-full">
            <SkillsPage />
          </div>
        </section>

        <TechStack />

        <section 
          id="projects" 
          ref={(el) => sectionRefs.current.projects = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl w-full">
            <ProjectsPage />
          </div>
        </section>

        <section 
          id="contact" 
          ref={(el) => sectionRefs.current.contact = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-2xl w-full">
            <ContactPage />
          </div>
        </section>

        <section 
          id="end" 
          ref={(el) => sectionRefs.current.end = el}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <EndPage />
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('welcome')}
        className="fixed bottom-8 right-8 p-3 bg-[var(--brand-primary)] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-40"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

const WelcomePage = ({ onStart }: { onStart: () => void }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
    <div className="relative mb-8">
      <div className="absolute -inset-4 bg-[var(--brand-primary)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="w-40 h-40 sm:w-48 sm:h-48 relative">
        <img
          src="/lovable-uploads/catech.jpg"
          alt="Andrew Cephas Ngumbau"
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
        />
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[var(--brand-primary)] rounded-full flex items-center justify-center border-4 border-white">
          <Sparkles size={20} className="text-white" />
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <p className="text-sm font-medium tracking-[0.3em] uppercase text-gray-500">
        Welcome to my portfolio
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        Andrew Cephas <span className="text-[var(--brand-primary)]">Ngumbau</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 font-light">
        Creative Director & Full-Stack Developer
      </p>
      <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed mt-4">
        Transforming ideas into powerful digital experiences. I design brands, build web applications, and create solutions that drive real results for businesses.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-6 mt-10 text-base text-gray-500">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full"></div>
        <span>Brand Design</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[var(--brand-secondary)] rounded-full"></div>
        <span>Web Development</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full"></div>
        <span>Digital Strategy</span>
      </div>
    </div>

    <button
      onClick={onStart}
      className="mt-10 px-10 py-4 bg-[var(--brand-primary)] text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 text-lg group"
    >
      <span>Explore My Work</span>
      <Sparkles size={20} className="group-hover:animate-pulse" />
    </button>
  </div>
);

const EndPage = () => (
  <div className="h-full flex flex-col items-center justify-center text-center p-4">
    <div className="relative mb-6">
      <div className="w-24 h-24 bg-[var(--brand-primary)] rounded-full p-1">
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
          <Sparkles size={32} className="text-[var(--brand-primary)]" />
        </div>
      </div>
    </div>
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Visiting!</h2>
    <p className="text-gray-600 mb-6 text-base">I'd love to hear from you. Let's create something amazing together.</p>
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <a href="mailto:ngumbaucephas2@gmail.com" className="px-5 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg font-medium hover:shadow-lg transition-all">
        Get in Touch
      </a>
      <a href="https://www.linkedin.com/in/andrew-ngumbau-8309a833a" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all">
        LinkedIn
      </a>
    </div>
    <div className="text-sm text-gray-500">
      <p><strong>Andrew Cephas Ngumbau</strong> · Founder & CEO, Catech Solutions</p>
      <p className="mt-2">ngumbaucephas2@gmail.com · +254 793 614 592</p>
    </div>
  </div>
);

export default Index;