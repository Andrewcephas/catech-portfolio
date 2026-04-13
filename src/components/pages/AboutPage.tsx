import { Code, Palette, Smartphone, Globe, GraduationCap, Sparkles, Award, Users, Clock } from "lucide-react";

const AboutPage = () => {
  const services = [
    { icon: <Code size={16} />, title: "Web Development", desc: "Building responsive web applications" },
    { icon: <Smartphone size={16} />, title: "Mobile Apps", desc: "Creating cross-platform mobile applications" },
    { icon: <Palette size={16} />, title: "UI/UX Design", desc: "Designing beautiful user interfaces" },
    { icon: <Globe size={16} />, title: "Digital Solutions", desc: "Comprehensive digital solutions for businesses" }
  ];

  const education = [
    { period: "2022 - 2026", title: "University Education", institution: "Kisii University", description: "Currently pursuing Bachelor's degree in technology and innovation", status: "In Progress" },
    { period: "2018 - 2022", title: "Secondary Education", institution: "Misuuni High School", description: "Completed Kenya Certificate of Secondary Education (KCSE) - C+ Grade", status: "Completed" },
    { period: "2009 - 2017", title: "Primary Education", institution: "Kaliani Primary School", description: "Completed Kenya Certificate of Primary Education (KCPE) - 343 Marks", status: "Completed" }
  ];

  return (
    <div className="h-full overflow-y-auto space-y-3 p-2">
      {/* Header */}
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-2 transform rotate-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-xl border-2 border-[#ff9900]"></div>
          <img src="/lovable-uploads/andrew green.png" alt="Andrew Cephas Ngumbau" loading="lazy" className="w-full h-full object-cover rounded-xl" />
        </div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          Andrew Cephas Ngumbau
        </h2>
        <p className="text-xs text-[#017020] font-semibold">CEO, Catech Solutions</p>
        <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-lg p-2 mt-2">
          <p className="text-xs text-gray-700 font-medium">
            <strong className="text-[#017020]">"I bridge the gap between user-friendly design and robust, scalable code."</strong>
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-2">
        {services.map((service, index) => (
          <div key={index} className="bg-gradient-to-br from-[#ff9900]/10 to-[#017020]/10 p-2 rounded-lg border border-[#ff9900]/20 hover:scale-105 transition-transform">
            <div className="text-[#ff9900] mb-1">{service.icon}</div>
            <h3 className="text-xs font-bold text-gray-800">{service.title}</h3>
            <p className="text-[10px] text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Educational Background */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-lg p-3 border border-[#017020]/20">
        <h3 className="text-sm font-bold text-[#017020] mb-2 flex items-center gap-1">
          <GraduationCap size={14} className="text-[#ff9900]" />
          Educational Journey
        </h3>
        <div className="space-y-2">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className={`w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0 ${edu.status === 'In Progress' ? 'bg-[#ff9900] animate-pulse' : 'bg-[#017020]'}`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-gray-800">{edu.title}</h4>
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${edu.status === 'In Progress' ? 'bg-[#ff9900]/20 text-[#ff9900]' : 'bg-[#017020]/20 text-[#017020]'}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="text-[10px] text-[#017020] font-medium">{edu.institution}</p>
                <p className="text-[9px] text-gray-500">{edu.period} - {edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Journey */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <div className="w-12 h-12 transform -rotate-2 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border border-[#017020]"></div>
            <img src="/lovable-uploads/happy easter.png" loading="lazy" alt="Creative workspace" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#017020] mb-1 flex items-center gap-1">
              <span>My Creative Journey</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              My journey began in 2018 after completing high school at Misuuni High School with a C+ grade.
              Since joining Kisii University in 2022, I've been on a continuous path of learning and growth,
              developing expertise in both design and development.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              What sets me apart is my ability to think both artistically and technically. Whether crafting
              a visual identity or building a web application, I approach each project with the same passion
              for excellence and attention to detail.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { value: "50+", label: "Projects", icon: <Sparkles size={14} className="text-[#ff9900]"/> },
          { value: "3+", label: "Years Experience", icon: <Clock size={14} className="text-[#017020]"/> },
          { value: "30+", label: "Happy Clients", icon: <Users size={14} className="text-[#ff9900]"/> },
          { value: "24/7", label: "Dedicated Support", icon: <Award size={14} className="text-[#017020]"/> },
        ].map((stat, index) => (
          <div key={index} className="text-center p-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-all">
            <div className={`${stat.value.includes('+') ? 'text-[#ff9900]' : 'text-[#017020]'} mb-1 flex justify-center`}>{stat.icon}</div>
            <div className={`text-sm font-bold ${stat.value.includes('+') ? 'text-[#ff9900]' : 'text-[#017020]'}`}>{stat.value}</div>
            <div className="text-[10px] text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;