import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import AppHeader from "@/components/AppHeader";

import HeroPage from "@/components/pages/HeroPage";
import AboutPage from "@/components/pages/AboutPage";
import SkillsPage from "@/components/pages/SkillsPage";
import TechStack from "@/components/pages/TechStack";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ContactPage from "@/components/pages/ContactPage";
import { ChevronUp, Sparkles, ArrowRight } from "lucide-react";
import ColorSwitcher from "@/components/ColorSwitcher";

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

    // Intersection Observer for reveal-on-scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // If the user wants infinite, we can remove it here, but usually it's better to keep it for performance
          // unless they specifically want it to re-animate every time.
          // The user said "infinitely when scrolling to come in", so let's allow re-animation.
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[var(--brand-primary)] selection:text-white digital-grid overflow-x-hidden w-full max-w-full">
      <AnimatedBackground />
      <AppHeader activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative z-10 pt-16">
        <section
          id="welcome"
          ref={(el) => sectionRefs.current.welcome = el}
          className="min-h-[80vh] flex items-center justify-center px-4 py-10"
        >
          <WelcomePage onStart={() => scrollToSection('hero')} />
        </section>

        <section
          id="hero"
          ref={(el) => sectionRefs.current.hero = el}
          className="min-h-[70vh] flex items-center justify-center px-4 py-8"
        >
          <div className="max-w-6xl w-full mx-auto">
            <HeroPage onNavigateToProjects={handleNavigateToProjects} />
          </div>
        </section>

        <section
          id="about"
          ref={(el) => sectionRefs.current.about = el}
          className="min-h-fit flex items-center justify-center px-4 py-8"
        >
          <div className="max-w-4xl w-full mx-auto text-center">
            <AboutPage />
          </div>
        </section>

        {/* Dynamic Tech Banner - Ultra Sleek */}
        <div className="w-full bg-gray-950/90 overflow-hidden py-1.5 border-y border-gray-800">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-gray-400 font-light uppercase tracking-[0.4em] text-[10px] sm:text-xs">
            <span>Graphic Design • Full-Stack Development • UI/UX Strategy • CATECH Solutions • Creative Branding • Modern Web Apps • Binary Excellence • IT Professional</span>
            <span>Graphic Design • Full-Stack Development • UI/UX Strategy • CATECH Solutions • Creative Branding • Modern Web Apps • Binary Excellence • IT Professional</span>
          </div>
        </div>

        <section
          id="skills"
          ref={(el) => sectionRefs.current.skills = el}
          className="min-h-[60vh] flex items-center justify-center px-4 py-8"
        >
          <div className="max-w-6xl w-full mx-auto text-center">
            <SkillsPage />
          </div>
        </section>

        <TechStack />

        <section
          id="projects"
          ref={(el) => sectionRefs.current.projects = el}
          className="min-h-[60vh] flex items-center justify-center px-4 py-8"
        >
          <div className="max-w-6xl w-full mx-auto">
            <ProjectsPage />
          </div>
        </section>

        <section
          id="contact"
          ref={(el) => sectionRefs.current.contact = el}
          className="min-h-[60vh] flex items-center justify-center px-4 py-8"
        >
          <div className="max-w-2xl w-full mx-auto">
            <ContactPage />
          </div>
        </section>

        <section
          id="end"
          ref={(el) => sectionRefs.current.end = el}
          className="min-h-[50vh] flex items-center justify-center px-4 py-8"
        >
          <EndPage />
        </section>

        {/* Simple Professional Footer */}
        <footer className="w-full py-12 px-4 bg-gray-900 text-center">
          <a 
            href="https://catech.co.ke" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block p-8 border-2 border-white/20 rounded-2xl hover:border-[var(--brand-secondary)] transition-all group"
          >
            <p className="text-xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[var(--brand-secondary)]">
              Powered by CATECH Solutions & Graphics
            </p>
            <p className="text-sm font-mono text-gray-400">catech.co.ke</p>
          </a>
        </footer>
      </main>

      {/* Color Switcher at the bottom right */}
      <div className="fixed bottom-8 right-4 sm:right-8 z-40">
        <ColorSwitcher />
      </div>

      {/* Back to Top Button moved slightly left */}
      <button
        onClick={() => scrollToSection('welcome')}
        className="fixed bottom-8 right-16 sm:right-24 p-3 bg-[var(--brand-primary)] text-white rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-40"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

const WelcomePage = ({ onStart }: { onStart: () => void }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto reveal-on-scroll slide-up">
    <div className="relative mb-6 reveal-on-scroll zoom-in">
      <div className="absolute -inset-4 bg-[var(--brand-primary)] rounded-lg opacity-20 blur-2xl animate-pulse"></div>
      
      {/* Decorative Orbiting Elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-[var(--brand-secondary)] opacity-20 blur-xl animate-spin-slow rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[var(--brand-primary)] opacity-20 blur-xl animate-bounce-slow rounded-full"></div>
      
      <div className="w-full max-w-sm aspect-[4/3] relative mx-auto overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-gray-50 z-10">
        <img
          src="/lovable-uploads/with computer.png"
          alt="Andrew Ngumbau"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-2 right-2 w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center border-4 border-white">
          <Sparkles size={16} className="text-white" />
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-sm font-semibold tracking-[0.4em] uppercase text-[var(--brand-primary)] mb-2 reveal-on-scroll slide-down">
        Creative Professional
      </p>
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter reveal-on-scroll slide-up">
        I am <br className="sm:hidden" />
        <span className="text-[var(--brand-primary)]">Andrew Ngumbau</span>
      </h1>
      <p className="text-2xl sm:text-3xl text-gray-800 font-bold tracking-tight reveal-on-scroll slide-up" style={{ transitionDelay: '0.1s' }}>
        Founder of CATECH Solutions
      </p>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-snug mt-2 reveal-on-scroll slide-up" style={{ transitionDelay: '0.2s' }}>
        I am a Creative Director & Full-Stack Developer transforming bold ideas into powerful digital experiences.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-bold uppercase tracking-widest text-gray-500">
      <span className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg border border-gray-100 shadow-sm hover:border-[var(--brand-primary)] transition-all">
        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-pulse"></div>
        Brand Design
      </span>
      <span className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg border border-gray-100 shadow-sm hover:border-[var(--brand-secondary)] transition-all">
        <div className="w-2 h-2 bg-[var(--brand-secondary)] rounded-full animate-pulse"></div>
        Web Development
      </span>
      <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full"></div>
        Digital Strategy
      </span>
    </div>

    <button
      onClick={onStart}
      className="mt-8 px-12 py-5 bg-[var(--brand-primary)] text-white rounded-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 text-xl group uppercase tracking-widest shadow-xl"
    >
      <span>Start Experience</span>
      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
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
      <a href="https://www.linkedin.com/in/Andrew-ngumbau-8309a833a" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all">
        LinkedIn
      </a>
    </div>
    <div className="text-sm text-gray-500">
      <p><strong>Andrew Ngumbau Ngumbau</strong> · Founder & CEO, Catech Solutions</p>
      <p className="mt-2">ngumbaucephas2@gmail.com · +254 793 614 592</p>
    </div>
  </div>
);

export default Index;