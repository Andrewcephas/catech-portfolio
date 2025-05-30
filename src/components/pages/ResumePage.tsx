
import { Download, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const ResumePage = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Progress",
      institution: "University (8-4-4 System)",
      period: "2021 - Present",
      status: "3rd Year Completed",
      description: "Pursuing comprehensive education in technology and design"
    },
    {
      degree: "Secondary Education",
      institution: "High School",
      period: "2017 - 2020",
      status: "Completed",
      description: "Kenya Certificate of Secondary Education (KCSE)"
    },
    {
      degree: "Primary Education", 
      institution: "Primary School",
      period: "2001 - 2009",
      status: "Completed",
      description: "Kenya Certificate of Primary Education (KCPE)"
    }
  ];

  const experience = [
    {
      role: "Freelance Designer & Developer",
      company: "Catech Solutions",
      period: "2019 - Present",
      location: "Nairobi, Kenya",
      achievements: [
        "Delivered 50+ design and development projects",
        "Built responsive websites and brand identities",
        "Maintained 98% client satisfaction rate",
        "Specialized in Adobe Creative Suite and web technologies"
      ]
    },
    {
      role: "Creative Designer",
      company: "Various Clients",
      period: "2018 - 2019", 
      location: "Remote",
      achievements: [
        "Created brand identities for startups",
        "Designed marketing materials and print designs",
        "Collaborated with international clients",
        "Developed expertise in Photoshop, Illustrator, InDesign"
      ]
    }
  ];

  const skills = {
    design: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "UI/UX Design"],
    development: ["HTML/CSS", "JavaScript", "React", "Node.js", "WordPress", "Responsive Design"],
    tools: ["Git", "VS Code", "Adobe Creative Suite", "Figma", "Sketch"]
  };

  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    alert("Resume download would start here. Connect to a real PDF file.");
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-40 h-28 mx-auto mb-4 transform rotate-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-lg border-2 border-[#ff9900] border-opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=150&fit=crop"
            alt="Professional workspace"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Andrew Cephas Ngumbau
        </h2>
        <p className="text-gray-600 mb-4">Creative Designer & Developer</p>
        <button 
          onClick={handleDownload}
          className="px-6 py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto"
        >
          <Download size={18} />
          Download Resume
        </button>
      </div>

      {/* Education */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="text-[#ff9900]" size={24} />
          Education (8-4-4 System)
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex space-x-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-2 bg-gradient-to-b from-[#ff9900] to-[#017020] rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                <p className="text-[#017020] font-medium">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="px-2 py-1 bg-[#ff9900]/10 text-[#ff9900] rounded text-xs font-medium">
                    {edu.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-xl p-6 border border-[#017020]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Experience</h3>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-800">{exp.role}</h4>
                  <p className="text-[#ff9900] font-semibold">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={category} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-gray-800 mb-3 capitalize">{category}</h4>
            <div className="flex flex-wrap gap-1">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 text-gray-700 rounded text-xs border border-[#ff9900]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
