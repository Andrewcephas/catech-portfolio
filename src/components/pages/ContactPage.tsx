import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
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
    
    const subject = `New Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ngumbaucephas2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <Mail size={18} />, 
      label: "Email", 
      value: "ngumbaucephas2@gmail.com", 
      color: "text-[#ff9900]",
      action: () => window.open('mailto:ngumbaucephas2@gmail.com', '_blank')
    },
    { 
      icon: <Phone size={18} />, 
      label: "Phone", 
      value: "+254 793 614 592", 
      color: "text-[#017020]",
      action: () => window.open('tel:+254793614592', '_blank')
    },
    { 
      icon: <MapPin size={18} />, 
      label: "Website", 
      value: "catech.co.ke", 
      color: "text-[#ff9900]",
      action: () => window.open('https://catech.co.ke', '_blank')
    },
  ];

  return (
    <div className="h-full space-y-4 overflow-y-auto p-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Let's Work Together
        </h2>
        <p className="text-gray-500 text-sm">Ready to bring your vision to life?</p>
      </div>

      {/* Contact info */}
      <div className="space-y-2">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            onClick={info.action}
            className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#ff9900]/50 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className={`p-2 rounded-lg bg-gray-100 ${info.color}`}>
              {info.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-700 text-sm">{info.label}</p>
              <p className="text-gray-500 text-xs">{info.value}</p>
            </div>
            <ArrowRight size={16} className="text-gray-300" />
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm">
          <MessageCircle className="text-[#ff9900]" size={18} />
          Send Message
        </h3>
        
        {submitted && (
          <div className="mb-3 p-2 bg-green-50 text-green-700 rounded-lg text-xs flex items-center gap-2">
            <CheckCircle size={14} />
            Email client opened!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#ff9900] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#017020] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Tell me about your project... *"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            rows={3}
            className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#ff9900] focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? 'Opening...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Response promise */}
      <div className="text-center p-3 bg-[#ff9900]/5 rounded-xl border border-[#ff9900]/20">
        <p className="text-gray-600 text-xs">
          <span className="font-semibold text-[#017020]">Quick Response:</span> I respond within 24 hours!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;