import { useState, useEffect } from "react";
import BookLayout from "@/components/BookLayout";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Page } from "@/types";

import HeroPage from "@/components/pages/HeroPage";
import AboutPage from "@/components/pages/AboutPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ContactPage from "@/components/pages/ContactPage";
import DesignGeneratorPage from "@/components/pages/DesignGeneratorPage";
import ResumePage from "@/components/pages/ResumePage";
import TestimonialsPage from "@/components/pages/TestimonialsPage";
import GuitarPage from "@/components/pages/GuitarPage";
import BlogPage from "@/components/pages/BlogPage";
import GamePage from "@/components/pages/GamePage";
import ProjectManager from "@/components/ProjectManager";

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
    { title: "Home", component: <HeroPage onNavigateToProjects={() => navigateToPage(3)} /> },
    { title: "About", component: <AboutPage /> },
    { title: "Skills", component: <SkillsPage /> },
    { title: "Projects", component: <ProjectsPage /> },
    { title: "Resume", component: <ResumePage /> },
    { title: "Testimonials", component: <TestimonialsPage /> },
    { title: "Guitar", component: <GuitarPage /> },
    { title: "Blog", component: <BlogPage /> },
    { title: "Games", component: <GamePage /> },
    { title: "Contact", component: <ContactPage /> },
    { title: "Design", component: <DesignGeneratorPage /> },
    { title: "Manage", component: <ProjectManager /> },
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

const EndPage = () => (
  <div className="h-full flex flex-col items-center justify-center text-center p-4">
    <div className="text-4xl mb-3">🙏</div>
    <h2 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h2>
    <p className="text-sm text-gray-600 mb-4">For viewing my portfolio</p>
    <div className="text-xs text-gray-500 space-y-1">
      <p><strong>Andrew Cephas Ngumbau</strong></p>
      <p>CEO, Catech Solutions</p>
      <p>ngumbaucephas2@gmail.com</p>
      <p>+254 793 614 592</p>
    </div>
    <div className="flex gap-3 mt-4">
      <a href="https://linkedin.com/in/andrew-cephas-ngumbau-543166243" className="text-xs text-[#ff9900] hover:underline">LinkedIn</a>
      <a href="https://github.com/Andrewcephas" className="text-xs text-[#ff9900] hover:underline">GitHub</a>
      <a href="https://catech.co.ke" className="text-xs text-[#ff9900] hover:underline">Website</a>
    </div>
  </div>
);

export default Index;