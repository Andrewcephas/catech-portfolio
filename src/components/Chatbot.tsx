
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
      text: "Hi! I'm your design assistant. I can help you with questions about graphic design, Adobe software, or project inquiries. What would you like to know?", 
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
    
    if (lowerMessage.includes('adobe') || lowerMessage.includes('photoshop') || lowerMessage.includes('illustrator')) {
      return "I'm proficient in the entire Adobe Creative Suite! I specialize in Photoshop for photo editing, Illustrator for vector graphics, and InDesign for layout design. What specific Adobe software are you interested in?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return "Pricing depends on the project scope and complexity. For logos, I typically charge $200-500. For complete branding packages, it's $800-2000. Would you like to discuss your specific project for a detailed quote?";
    }
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('examples')) {
      return "You can view my portfolio by navigating to the Projects page in this portfolio, or visit catech.co.ke for more examples. I've worked on branding, print design, digital graphics, and more!";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach me at info@catech.co.ke or +254 700 123 456. You can also use the contact form on the Contact page. I typically respond within 24 hours!";
    }
    
    if (lowerMessage.includes('logo') || lowerMessage.includes('brand')) {
      return "I love creating unique logos and brand identities! My process includes research, concept development, multiple revisions, and final file delivery in all formats. What type of business or project do you need branding for?";
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('timeline') || lowerMessage.includes('deadline')) {
      return "Project timelines vary: Simple logos take 3-5 days, complete branding packages take 1-2 weeks, and print materials take 2-7 days. Rush jobs are possible with premium pricing. What's your timeline?";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! I'm excited to help with your design needs. Are you looking for logo design, branding, print materials, or digital graphics?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! I'd love to discuss this further. You can reach out via the contact form or email me at info@catech.co.ke for a detailed conversation.",
      "Thanks for asking! For specific project details and pricing, I'd recommend we have a proper consultation. Feel free to contact me through the contact page!",
      "I'm here to help with all your design needs! For the best assistance with your question, let's connect via email at info@catech.co.ke or through the contact form.",
      "Great question! I'd be happy to provide more detailed information. Check out my portfolio page or contact me directly to discuss your specific requirements."
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
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = { 
        text: botResponse, 
        isBot: true, 
        timestamp: new Date() 
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
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
                <h3 className="font-bold">Design Assistant</h3>
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

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about design services..."
                className="flex-1 p-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff9900] bg-gray-50"
                disabled={isTyping}
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
