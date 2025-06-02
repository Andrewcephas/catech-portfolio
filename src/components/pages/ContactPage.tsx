
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ngumbaucephas2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "ngumbaucephas2@gmail.com", 
      color: "text-[#ff9900]",
      action: () => window.open('mailto:ngumbaucephas2@gmail.com', '_blank')
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+254 793 614 592", 
      color: "text-[#017020]",
      action: () => window.open('tel:+254793614592', '_blank')
    },
    { 
      icon: MapPin, 
      label: "Website", 
      value: "catech.co.ke", 
      color: "text-[#ff9900]",
      action: () => window.open('https://catech.co.ke', '_blank')
    },
  ];

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Let's Work Together
        </h2>
        <p className="text-gray-600">Ready to bring your creative vision to life?</p>
      </div>

      {/* Contact info cards */}
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            onClick={info.action}
            className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in border border-gray-200`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`p-3 rounded-full bg-white ${info.color} shadow-md`}>
              <info.icon size={20} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{info.label}</p>
              <p className="text-gray-600">{info.value}</p>
            </div>
            <div className="text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive contact form */}
      <div className="bg-gradient-to-br from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MessageCircle className="text-[#ff9900]" size={24} />
          Send Message
        </h3>
        
        {submitted && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
            ✅ Email client opened! Your message is ready to send.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Tell me about your project... *"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors resize-none bg-white"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'}`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Opening Email...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Quick response promise */}
      <div className="text-center p-4 bg-gradient-to-r from-[#017020]/10 to-[#ff9900]/10 rounded-lg border border-[#017020]/20 animate-fade-in">
        <p className="text-gray-700">
          <span className="font-semibold text-[#017020]">Quick Response Guarantee:</span> 
          I typically respond within 24 hours!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
