
import { Code, Palette, Smartphone, Globe, GraduationCap, User } from "lucide-react";

const AboutPage = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Building responsive and performant web applications"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps", 
      description: "Creating cross-platform mobile applications"
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Designing beautiful user interfaces"
    },
    {
      icon: <Globe size={24} />,
      title: "Digital Solutions",
      description: "Comprehensive digital solutions for businesses"
    }
  ];

  const educationTimeline = [
    {
      period: "2022 - 2026",
      title: "University Education",
      institution: "Kisii University",
      description: "Currently pursuing Bachelor's degree in technology and innovation",
      status: "In Progress"
    },
    {
      period: "2018 - 2022",
      title: "Secondary Education",
      institution: "Misuuni High School",
      description: "Completed Kenya Certificate of Secondary Education (KCSE) - C+ Grade",
      status: "Completed"
    },
    {
      period: "2009 - 2017",
      title: "Primary Education",
      institution: "Kaliani Primary School",
      description: "Completed Kenya Certificate of Primary Education (KCPE) - 343 Marks",
      status: "Completed"
    }
  ];

  return (
    <div className="h-full overflow-y-auto space-y-8">
      {/* Header with Professional Bio */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="relative w-32 h-32 mx-auto mb-4 transform rotate-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-2xl border-2 border-[#ff9900] border-opacity-100"></div>
          <img 
            src="/lovable-uploads/f04b0568-f72c-43fd-8e57-133cc4af1de6.png"
            alt="Andrew Cephas Ngumbau"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-3">
          Andrew Cephas Ngumbau
        </h2>
        <p className="text-lg text-[#017020] font-semibold mb-3">Creative Designer & Developer</p>
        <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-4 border border-[#ff9900]/20">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#017020]">"I bridge the gap between user-friendly design and robust, scalable code."</strong>
            <br/><br/>
            As a hybrid creative professional currently studying at Kisii University, I combine artistic vision with technical expertise to deliver 
            exceptional digital experiences. Since 2023, I've been actively developing my skills in both design and development, 
            creating solutions that make a real impact.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br from-[#ff9900]/10 to-[#017020]/10 
              p-4 rounded-xl border border-[#ff9900]/20
              hover:border-[#ff9900] hover:scale-105
              transition-all duration-300 animate-fade-in
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-[#ff9900] mb-2">{service.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">{service.title}</h3>
            <p className="text-gray-600 text-xs">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Educational Background */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-xl p-6 border border-[#017020]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-[#017020] mb-4 flex items-center gap-2">
          <GraduationCap className="text-[#ff9900]" size={24} />
          Educational Journey
        </h3>
        <div className="space-y-4">
          {educationTimeline.map((edu, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${edu.status === 'In Progress' ? 'bg-[#ff9900]' : 'bg-[#017020]'} flex-shrink-0`}></div>
                {index < educationTimeline.length - 1 && (
                  <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{edu.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-[#ff9900]/10 text-[#ff9900]' 
                      : 'bg-[#017020]/10 text-[#017020]'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <p className="text-[#017020] text-sm font-medium">{edu.institution}</p>
                <p className="text-gray-600 text-xs">{edu.period}</p>
                <p className="text-gray-600 text-xs mt-1">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Journey */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 animate-slide-up">
        <div className="flex items-start space-x-4">
          <div className="relative w-24 h-24 transform -rotate-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
            <img 
              src="/lovable-uploads/a28bc92e-ea57-43b0-be33-8ce891c2f057.png"
              alt="Creative workspace"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#017020] mb-3 flex items-center gap-2">
              <User className="text-[#ff9900]" size={24} />
              My Creative Journey
            </h3>
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
              My journey began in 2018 after completing high school at Misuuni High School with a C+ grade. 
              Since joining Kisii University in 2022, I've been on a continuous path of learning and growth, 
              developing expertise in both design and development.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              What sets me apart is my ability to think both artistically and technically. Whether crafting 
              a visual identity or building a web application, I approach each project with the same passion 
              for excellence and attention to detail.
            </p>
          </div>
        </div>
      </div>

      {/* Skills & Expertise Highlight */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Core Expertise</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#ff9900] mb-2">🎨 Design Skills</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Adobe Creative Suite Mastery</li>
              <li>• Brand Identity Development</li>
              <li>• Print & Digital Design</li>
              <li>• UI/UX Design Principles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#017020] mb-2">💻 Technical Skills</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Web Development</li>
              <li>• Responsive Design</li>
              <li>• Frontend Technologies</li>
              <li>• Digital Asset Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "50+", label: "Projects", color: "text-[#ff9900]" },
          { value: "6+", label: "Years Experience", color: "text-[#017020]" },
          { value: "30+", label: "Happy Clients", color: "text-[#ff9900]" },
          { value: "24/7", label: "Dedicated Support", color: "text-[#017020]" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`
              text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 
              rounded-lg border border-gray-200 hover:shadow-lg
              transition-all duration-300 animate-fade-in
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
