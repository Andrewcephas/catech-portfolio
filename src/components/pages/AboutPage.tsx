import { Code, Palette, Smartphone, Globe, GraduationCap, Sparkles, Award, Users, Clock } from "lucide-react";

const AboutPage = () => {
  const services = [
    { icon: <Code size={14} />, title: "Web Dev", desc: "Web apps" },
    { icon: <Smartphone size={14} />, title: "Mobile", desc: "Apps" },
    { icon: <Palette size={14} />, title: "UI/UX", desc: "Design" },
    { icon: <Globe size={14} />, title: "Digital", desc: "Solutions" }
  ];

  const education = [
    { period: "2022-2026", title: "University", school: "Kisii University", status: "In Progress" },
    { period: "2018-2022", title: "High School", school: "Misuuni", status: "Completed" },
    { period: "2009-2017", title: "Primary", school: "Kaliani", status: "Completed" }
  ];

  return (
    <div className="h-full flex flex-col p-1.5">
      <div className="text-center mb-2">
        <div className="w-16 h-16 mx-auto mb-1.5">
          <img src="/lovable-uploads/with computer.png" alt="Andrew" className="w-full h-full object-cover rounded-lg border border-[#ff9900]" />
        </div>
        <h2 className="text-sm font-bold text-gray-800">Andrew Cephas Ngumbau</h2>
        <p className="text-xs text-[#017020] font-medium">CEO, Catech Solutions</p>
        <p className="text-xs text-gray-500 mt-0.5">"Design meets code"</p>
      </div>

      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-50 p-1.5 rounded-lg border border-gray-100 hover:border-[#ff9900]/30 transition-all">
            <div className="text-[#ff9900] mb-0.5">{s.icon}</div>
            <h3 className="text-xs font-semibold text-gray-800">{s.title}</h3>
            <p className="text-[9px] text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-1.5 rounded-lg mb-2 border border-gray-100">
        <h3 className="text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
          <GraduationCap size={11} className="text-[#ff9900]"/>Education
        </h3>
        {education.map((e, i) => (
          <div key={i} className="flex items-center gap-1.5 mb-0.5">
            <div className={`w-1.5 h-1.5 rounded-full ${e.status === 'In Progress' ? 'bg-[#ff9900] animate-pulse' : 'bg-[#017020]'}`} />
            <div className="flex-1">
              <p className="text-xs text-gray-700">{e.title} - {e.school}</p>
              <p className="text-[9px] text-gray-500">{e.period}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-600 mb-2 leading-relaxed">
        My journey began in 2018 after high school. Since joining Kisii University in 2022, 
        I've been developing expertise in both design and development.
      </p>

      <div className="grid grid-cols-4 gap-1">
        {[
          { value: "50+", label: "Projects", icon: <Sparkles size={10} className="text-[#ff9900]"/> },
          { value: "3+", label: "Years", icon: <Clock size={10} className="text-[#017020]"/> },
          { value: "30+", label: "Clients", icon: <Users size={10} className="text-[#ff9900]"/> },
          { value: "24/7", label: "Support", icon: <Award size={10} className="text-[#017020]"/> },
        ].map((stat, i) => (
          <div key={i} className="text-center p-1 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex justify-center mb-0.5">{stat.icon}</div>
            <p className="text-xs font-bold text-gray-800">{stat.value}</p>
            <p className="text-[8px] text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;