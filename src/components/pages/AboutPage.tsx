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
    <div className="h-full overflow-y-auto space-y-4 p-4">
      {/* Header */}
      <div className="text-center reveal-on-scroll zoom-in">
        <div className="relative w-full max-w-[220px] aspect-square mx-auto mb-4 overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-gray-50">
          <img src="/lovable-uploads/with computer.png" alt="Andrew Ngumbau" loading="lazy" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter uppercase">
          Andrew Ngumbau
        </h2>
        <p className="text-sm font-mono text-[var(--brand-primary)] font-bold mt-1 uppercase tracking-widest">{`// IT Student & Creative Director`}</p>
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mt-4 max-w-xl mx-auto border border-gray-100 shadow-sm">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            I blend <span className="font-bold text-gray-900">Technical Precision</span> with <span className="font-bold text-gray-900">Visual Artistry</span>.
            Currently pursuing IT while leading <span className="text-[var(--brand-primary)] font-bold">CATECH Solutions</span> to deliver elite digital experiences.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className={`bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[var(--brand-secondary)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
            <div className="text-[var(--brand-secondary)] mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">{service.icon}</div>
            <h3 className="text-base font-bold text-gray-800">{service.title}</h3>
            <p className="text-base text-gray-600 mt-1">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Professional Journey */}
      <div className="bg-[var(--brand-primary)]/5 rounded-3xl p-4 border border-[var(--brand-primary)]/20 reveal-on-scroll slide-up">
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
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 items-center text-center sm:text-left">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
            <img src="/lovable-uploads/with computer.png" loading="lazy" alt="Creative workspace" className="w-full h-full object-contain" />
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
          { value: "100+", label: "Clients Served", icon: <Users size={18} className="text-[var(--brand-primary)]" /> },
          { value: "7+", label: "Years Experience", icon: <Clock size={18} className="text-[var(--brand-secondary)]" /> },
          { value: "50+", label: "Projects Completed", icon: <Sparkles size={18} className="text-[var(--brand-primary)]" /> },
          { value: "24/7", label: "Support Available", icon: <Award size={18} className="text-[var(--brand-secondary)]" /> },
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-3xl border border-gray-200 hover:shadow-xl hover:border-[var(--brand-primary)]/20 transition-all reveal-on-scroll zoom-in" style={{ transitionDelay: `${index * 0.1}s` }}>
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