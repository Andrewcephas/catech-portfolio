
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here to help you learn more about my work. What would you like to know?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for your question! I'd be happy to discuss my projects with you.",
        "That's a great question! Let me tell you more about my experience with that technology.",
        "I love working on challenging projects! Would you like to see some examples?",
        "Feel free to reach out through the contact form for more detailed discussions!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 w-14 h-14 rounded-full 
          bg-gradient-to-r from-[#ff9900] to-[#017020] 
          text-white shadow-lg hover:scale-110 transition-all duration-300
          flex items-center justify-center z-50
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ff9900] to-[#017020] text-white p-4 rounded-t-2xl">
            <h3 className="font-bold">Chat with me!</h3>
            <p className="text-sm opacity-90">Ask about my projects & skills</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`
                  flex ${message.isBot ? 'justify-start' : 'justify-end'}
                  animate-fade-in
                `}
              >
                <div
                  className={`
                    max-w-xs p-3 rounded-2xl text-sm
                    ${message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white'
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff9900]"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full hover:scale-105 transition-transform duration-300"
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
