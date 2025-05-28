
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com", color: "text-[#ff9900]" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-[#017020]" },
    { icon: MapPin, label: "Location", value: "New York, NY", color: "text-[#ff9900]" },
  ];

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-sm">Let's discuss your next project</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className={`
              flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 
              rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`p-2 rounded-full bg-white ${info.color}`}>
              <info.icon size={16} />
            </div>
            <div>
              <p className="font-medium text-gray-800 text-sm">{info.label}</p>
              <p className="text-gray-600 text-xs">{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors text-sm resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
        >
          <Send size={16} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
