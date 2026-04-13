import { useState, useEffect } from "react";
import BookLayout from "@/components/BookLayout";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Page } from "@/types";

import HeroPage from "@/components/pages/HeroPage";
import AboutPage from "@/components/pages/AboutPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ResumePage from "@/components/pages/ResumePage";
import GuitarPage from "@/components/pages/GuitarPage";
import BlogPage from "@/components/pages/BlogPage";
import ContactPage from "@/components/pages/ContactPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | 'fade'>('fade');

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const pages: Page[] = [
    { title: "Welcome", component: <WelcomePage onStart={() => navigateToPage(1)} /> },
    { title: "Home", component: <HeroPage onNavigateToProjects={() => navigateToPage(4)} /> },
    { title: "About", component: <AboutPage /> },
    { title: "Skills", component: <SkillsPage /> },
    { title: "Projects", component: <ProjectsPage /> },
    { title: "Resume", component: <ResumePage /> },
    { title: "Guitar", component: <GuitarPage /> },
    { title: "Blog", component: <BlogPage /> },
    { title: "Contact", component: <ContactPage /> },
    { title: "End", component: <EndPage /> },
  ];

  const navigateToPage = (pageIndex: number) => {
    if (pageIndex > currentPage) setDirection('next');
    else if (pageIndex < currentPage) setDirection('prev');
    else setDirection('fade');
    setCurrentPage(pageIndex);
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden relative">
      <AnimatedBackground />
      <main className="relative z-10 h-screen w-screen">
        <BookLayout currentPage={currentPage} setCurrentPage={navigateToPage} pages={pages} direction={direction} />
      </main>
    </div>
  );
};

const WelcomePage = ({ onStart }: { onStart: () => void }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-6">
    <div className="w-28 h-28 mb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900] to-[#017020] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-[#ff9900] to-[#017020] rounded-full opacity-40"></div>
      <img 
        src="/lovable-uploads/catech.jpg" 
        alt="Andrew Cephas Ngumbau"
        className="w-full h-full object-cover rounded-full border-4 border-[#ff9900]"
      />
    </div>
    <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
      Welcome
    </h1>
    <h2 className="text-xl font-bold text-gray-800 mb-1">Andrew Cephas Ngumbau</h2>
    <p className="text-sm text-[#017020] font-medium mb-4">CEO, Catech Solutions</p>
    <p className="text-sm text-gray-600 mb-6 max-w-xs leading-relaxed">
      Creative Designer & Developer<br/>
      Bridging the gap between user-friendly design and robust, scalable code
    </p>
    <button 
      onClick={onStart}
      className="px-8 py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
    >
      <span>Open Book</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </button>
    <div className="mt-8 text-xs text-gray-400">
      <p>Designer • Developer • Creator</p>
    </div>
  </div>
);

const EndPage = () => (
  <div className="h-full flex flex-col items-center justify-center text-center p-4">
    <div className="text-4xl mb-3">🙏</div>
    <h2 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h2>
    <p className="text-sm text-gray-600 mb-4">For viewing my portfolio</p>
    <div className="text-xs text-gray-500 space-y-1 mb-3">
      <p><strong>Andrew Cephas Ngumbau</strong></p>
      <p>CEO, Catech Solutions</p>
      <p>ngumbaucephas2@gmail.com</p>
      <p>+254 793 614 592</p>
    </div>
    <div className="flex gap-3 mt-2 text-xs">
      <a href="https://catech.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] hover:underline">Website</a>
      <a href="https://youtube.com/@catechlifestyle" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] hover:underline">YouTube</a>
      <a href="https://www.linkedin.com/in/andrew-ngumbau-8309a833a" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] hover:underline">LinkedIn</a>
      <a href="https://www.instagram.com/catechlifestyle/" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] hover:underline">Instagram</a>
      <a href="https://github.com/Andrewcephas" className="text-[#ff9900] hover:underline">GitHub</a>
    </div>
  </div>
);

export default Index;