
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm your digital assistant from Catech Solutions. I can help you with questions about our services including data science, graphics design, web development, UI/UX design, Figma, Adobe Creative Suite, MERN stack development, Python programming, and more. How can I assist you today?", 
      isBot: true, 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Data Science related queries
    if (lowerMessage.includes('data science') || lowerMessage.includes('analytics') || lowerMessage.includes('machine learning') || lowerMessage.includes('ai')) {
      return "Excellent! We specialize in data science solutions including machine learning, data analytics, predictive modeling, and AI implementation. We work with Python, R, TensorFlow, and various data visualization tools. What specific data science challenge are you looking to solve?";
    }
    
    // Web Development queries
    if (lowerMessage.includes('web development') || lowerMessage.includes('website') || lowerMessage.includes('mern') || lowerMessage.includes('react')) {
      return "Great choice! We're experts in web development using the MERN stack (MongoDB, Express, React, Node.js). We build responsive, scalable web applications, e-commerce sites, and custom web solutions. What type of web project do you have in mind?";
    }
    
    // Graphics Design queries
    if (lowerMessage.includes('graphics') || lowerMessage.includes('design') || lowerMessage.includes('adobe') || lowerMessage.includes('photoshop') || lowerMessage.includes('illustrator')) {
      return "Perfect! We're specialists in graphics design using the complete Adobe Creative Suite including Photoshop, Illustrator, InDesign, After Effects, and Premiere Pro. We create logos, branding, print materials, digital graphics, and motion graphics. What design project can we help you with?";
    }
    
    // UI/UX Design queries
    if (lowerMessage.includes('ui') || lowerMessage.includes('ux') || lowerMessage.includes('figma') || lowerMessage.includes('user interface') || lowerMessage.includes('user experience')) {
      return "Fantastic! We excel in UI/UX design using Figma, Adobe XD, and other modern design tools. We create user-centered designs, wireframes, prototypes, and complete design systems. Our process includes user research, usability testing, and iterative design. What UI/UX project are you working on?";
    }
    
    // Python queries
    if (lowerMessage.includes('python') || lowerMessage.includes('django') || lowerMessage.includes('flask') || lowerMessage.includes('automation')) {
      return "Excellent! Python is one of our core technologies. We develop web applications with Django/Flask, automation scripts, data analysis tools, API integrations, and machine learning solutions. We also create desktop applications and handle system integrations. What Python project do you need help with?";
    }
    
    // Pricing queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote') || lowerMessage.includes('budget')) {
      return "Our pricing is competitive and project-based. Web development: $500-5000+, Graphics design: $50-500+, UI/UX projects: $300-2000+, Data science consulting: $100-200/hour. Python development varies by complexity. For an accurate quote, let's discuss your specific requirements!";
    }
    
    // Portfolio queries
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('examples') || lowerMessage.includes('projects')) {
      return "Check out our portfolio right here in this website! Navigate to the Projects page to see our recent work in web development, graphics design, and data science. You can also visit catech.co.ke for our complete portfolio and case studies. Which type of project interests you most?";
    }
    
    // Contact queries
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return "Great! You can reach us at info@catech.co.ke or call +254 700 123 456. We're also available on WhatsApp. You can use the contact form on our Contact page here. We typically respond within 2-4 hours during business hours. What's the best way to reach you?";
    }
    
    // Technology stack queries
    if (lowerMessage.includes('technology') || lowerMessage.includes('stack') || lowerMessage.includes('tools')) {
      return "Our tech stack includes: Frontend (React, Next.js, HTML5, CSS3, JavaScript, TypeScript), Backend (Node.js, Python, Django, Flask), Databases (MongoDB, PostgreSQL, MySQL), Design (Adobe Creative Suite, Figma, Sketch), Data Science (Python, R, TensorFlow, Pandas), and Cloud (AWS, Google Cloud, Azure). What technology are you interested in?";
    }
    
    // Timeline queries
    if (lowerMessage.includes('time') || lowerMessage.includes('timeline') || lowerMessage.includes('deadline') || lowerMessage.includes('delivery')) {
      return "Our typical timelines: Simple websites (1-2 weeks), Complex web apps (4-12 weeks), Logo design (2-5 days), Complete branding (1-3 weeks), UI/UX design (2-6 weeks), Data science projects (2-8 weeks), Python development (1-6 weeks). Rush projects available with premium pricing. What's your target timeline?";
    }
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good')) {
      return "Hello! Welcome to Catech Solutions! 🎉 We're a full-service digital agency specializing in data science, web development, graphics design, UI/UX, and Python development. We'd love to help bring your ideas to life. What project are you considering?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's a great question! At Catech Solutions, we handle diverse projects across data science, web development, graphics design, UI/UX, and Python programming. Could you tell me more about what you're looking for specifically?",
      "Thanks for reaching out! We'd love to discuss your project in detail. Our team specializes in cutting-edge technology and creative solutions. Feel free to email us at info@catech.co.ke for a comprehensive consultation!",
      "Interesting! We work with clients on various technology and design challenges. Whether it's building a web app, creating stunning graphics, analyzing data, or developing Python solutions, we're here to help. What's your main goal?",
      "I'd be happy to provide more specific information about our services! We're experts in modern web technologies, creative design, and data solutions. Let's connect via info@catech.co.ke to discuss your project requirements in detail."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { 
      text: input, 
      isBot: false, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = { 
        text: botResponse, 
        isBot: true, 
        timestamp: new Date() 
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#ff9900] to-[#017020] text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 ${isOpen ? 'rotate-180' : ''}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ff9900] to-[#017020] text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">Catech Assistant</h3>
                <p className="text-sm opacity-90">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? 'bg-[#ff9900]' : 'bg-[#017020]'}`}>
                    {message.isBot ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${message.isBot 
                      ? 'bg-white text-gray-800 border border-gray-200' 
                      : 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-[#ff9900] rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input with black text */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 p-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff9900] bg-gray-50 text-black"
                disabled={isTyping}
                style={{ color: '#000000' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
