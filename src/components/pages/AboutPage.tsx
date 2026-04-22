import { Code, Palette, Smartphone, Globe, GraduationCap, Sparkles, Award, Users, Clock } from "lucide-react";

const AboutPage = () => {
  const services = [
    { icon: <Code size={16} />, title: "Graphic Design", desc: "Branding, logos, and visual identity" },
    { icon: <Smartphone size={16} />, title: "Web Development", desc: "Full-stack web applications" },
    { icon: <Palette size={16} />, title: "UI/UX Design", desc: "User-centered design solutions" },
    { icon: <Globe size={16} />, title: "Software Solutions", desc: "Custom systems and applications" }
  ];

  const journey = [
    { period: "2024 - Present", title: "Founder & Graphic Designer", institution: "CATECH Solutions", description: "Delivered digital solutions for 100+ clients.", status: "Active" },
    { period: "2022 - 2026", title: "BSIT Student", institution: "Kisii University", description: "BSc in Information Technology.", status: "In Progress" },
    { period: "Before 2022", title: "Self-taught Designer", institution: "Freelance", description: "Graphic design & web development.", status: "Completed" }
  ];

  return (
    <div className="h-full overflow-y-auto space-y-6 p-4">
      {/* Header */}
      <div className="text-center">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-3">
          <div className="absolute inset-0 bg-[var(--brand-primary)] opacity-10 rounded-full" />
          <img src="/lovable-uploads/catech.jpg" alt="Andrew Cephas Ngumbau" loading="lazy" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Andrew Cephas Ngumbau
        </h2>
        <p className="text-base sm:text-lg text-[var(--brand-primary)] font-semibold mt-1">Founder, CATECH Solutions</p>
        <div className="bg-gray-50 rounded-xl p-4 mt-4 max-w-xl mx-auto border border-gray-100">
          <p className="text-base sm:text-lg text-gray-700">
            Creative Graphic Designer and IT student with hands-on experience in branding, web design, and software development. Building systems that make an impact.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className="bg-[var(--brand-primary)]/5 p-4 rounded-3xl border border-gray-200 hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all">
            <div className="text-[var(--brand-primary)] mb-3">{service.icon}</div>
            <h3 className="text-base font-bold text-gray-800">{service.title}</h3>
            <p className="text-base text-gray-600 mt-1">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Professional Journey */}
      <div className="bg-[var(--brand-primary)]/5 rounded-3xl p-4 border border-[var(--brand-primary)]/20">
        <h3 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
          <GraduationCap size={18} className="text-[var(--brand-primary)]" />
          My Journey
        </h3>
        <div className="space-y-3">
          {journey.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 bg-white/80 rounded-3xl p-4 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-[var(--brand-secondary)]/20 text-[var(--brand-secondary)]' : item.status === 'In Progress' ? 'bg-[var(--brand-primary)]/20 text-[var(--brand-primary)]' : 'bg-gray-200 text-gray-600'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-base text-[var(--brand-primary)] font-medium">{item.institution}</p>
              <p className="text-base text-gray-500">{item.period} — {item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Journey */}
      <div className="bg-[var(--brand-primary)]/5 rounded-3xl p-4 border border-[var(--brand-primary)]/20">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4 items-start">
          <div className="relative w-full h-28 sm:h-36 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[var(--brand-primary)]/20 rounded-3xl border border-[var(--brand-primary)]" />
            <img src="/lovable-uploads/with computer.png" loading="lazy" alt="Creative workspace" className="w-full h-full object-cover rounded-3xl" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--brand-primary)] mb-2">My Creative Journey</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              I blend artistry with technical precision to build visually stunning and highly functional digital solutions. 
              At CATECH Solutions, I help businesses elevate their online presence.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "100+", label: "Clients Served", icon: <Users size={18} className="text-[var(--brand-primary)]"/> },
          { value: "7+", label: "Years Experience", icon: <Clock size={18} className="text-[var(--brand-secondary)]"/> },
          { value: "50+", label: "Projects Completed", icon: <Sparkles size={18} className="text-[var(--brand-primary)]"/> },
          { value: "24/7", label: "Support Available", icon: <Award size={18} className="text-[var(--brand-secondary)]"/> },
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-3xl border border-gray-200 hover:shadow-xl hover:border-[var(--brand-primary)]/20 transition-all">
            <div className="mb-3 flex justify-center">{stat.icon}</div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-base text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;