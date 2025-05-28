
import { useState } from "react";
import BookLayout from "@/components/BookLayout";
import Chatbot from "@/components/Chatbot";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#017020] to-[#013015] text-white overflow-hidden relative">
      <AnimatedBackground />
      <ThemeToggle />
      <BookLayout currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Chatbot />
    </div>
  );
};

export default Index;
