
import { Code, Palette, Smartphone, Globe } from "lucide-react";

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

  return (
    <div className="h-full overflow-y-auto space-y-8">
      {/* Header with Image */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-3 border-[#ff9900] shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=200&fit=crop"
            alt="Coding"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          About Me
        </h2>
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

      {/* Journey Section with Images */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 animate-slide-up">
        <div className="flex items-start space-x-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-[#017020] flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop"
              alt="Workspace"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#017020] mb-3">My Journey</h3>
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working 
              with diverse clients and projects. My passion lies in transforming ideas into digital reality.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies 
              and best practices in the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "50+", label: "Projects", color: "text-[#ff9900]" },
          { value: "5+", label: "Years", color: "text-[#017020]" },
          { value: "30+", label: "Clients", color: "text-[#ff9900]" },
          { value: "24/7", label: "Support", color: "text-[#017020]" },
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
