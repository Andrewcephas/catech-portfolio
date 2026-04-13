import { Mail, Phone, Globe, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open('mailto:ngumbaucephas2@gmail.com', '_blank');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="h-full flex flex-col p-1.5">
      <h2 className="text-sm font-bold text-gray-800 mb-2 text-center">Contact Me</h2>
      
      <div className="space-y-1.5 mb-2">
        <button onClick={() => window.open('mailto:ngumbaucephas2@gmail.com', '_blank')} 
          className="w-full p-2 bg-gray-50 rounded-lg flex items-center gap-2 border border-gray-100">
          <Mail size={14} className="text-[#ff9900]" />
          <span className="text-xs">ngumbaucephas2@gmail.com</span>
        </button>
        <button onClick={() => window.open('tel:+254793614592', '_blank')} 
          className="w-full p-2 bg-gray-50 rounded-lg flex items-center gap-2 border border-gray-100">
          <Phone size={14} className="text-[#017020]" />
          <span className="text-xs">+254 793 614 592</span>
        </button>
        <button onClick={() => window.open('https://catech.co.ke', '_blank')} 
          className="w-full p-2 bg-gray-50 rounded-lg flex items-center gap-2 border border-gray-100">
          <Globe size={14} className="text-[#ff9900]" />
          <span className="text-xs">catech.co.ke</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-1.5">
        <input type="text" placeholder="Your Name" required
          className="w-full p-2 text-xs border border-gray-200 rounded-lg" />
        <input type="email" placeholder="Your Email" required
          className="w-full p-2 text-xs border border-gray-200 rounded-lg" />
        <textarea placeholder="Message" rows={2} required
          className="w-full p-2 text-xs border border-gray-200 rounded-lg resize-none" />
        <button type="submit" 
          className="w-full py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white text-xs rounded-lg flex items-center justify-center gap-1">
          <Send size={12} /> Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;