import { Mail, Phone, Globe, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:ngumbaucephas2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ngumbaucephas2@gmail.com",
      action: () => window.open('mailto:ngumbaucephas2@gmail.com', '_blank'),
      color: "var(--brand-primary)",
      tooltip: "Click to send an email"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+254 793 614 592",
      action: () => window.open('tel:+254793614592', '_blank'),
      color: "var(--brand-secondary)",
      tooltip: "Click to call"
    },
    {
      icon: <Globe size={24} />,
      title: "Website",
      value: "catech.co.ke",
      action: () => window.open('https://catech.co.ke', '_blank'),
      color: "var(--brand-primary)",
      tooltip: "Click to visit website"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                onClick={method.action}
                className={`bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 hover:shadow-xl hover:border-[var(--brand-secondary)] transition-all duration-300 cursor-pointer group reveal-on-scroll zoom-in flex flex-col items-center text-center`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <div style={{ color: method.color }}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{method.title}</h3>
                <p className="text-gray-600 font-medium break-all">{method.value}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{method.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 reveal-on-scroll slide-up" style={{ transitionDelay: '0.3s' }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-primary)]/50 focus:border-[var(--brand-primary)] transition-all text-gray-800"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-primary)]/50 focus:border-[var(--brand-primary)] transition-all text-gray-800"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-primary)]/50 focus:border-[var(--brand-primary)] transition-all text-gray-800 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="submit"
                className="w-full py-4 bg-[var(--brand-primary)] text-white rounded-lg hover:shadow-lg hover:shadow-[var(--brand-primary)]/25 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold"
              >
                <Send size={20} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Fill the form and click to send message</p>
            </TooltipContent>
          </Tooltip>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;