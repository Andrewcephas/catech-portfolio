
import { useState } from "react";
import BookLayout from "@/components/BookLayout";
import Navigation from "@/components/Navigation";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#017020] to-[#013015] text-white overflow-hidden">
      <Navigation />
      <BookLayout currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Chatbot />
    </div>
  );
};

export default Index;
