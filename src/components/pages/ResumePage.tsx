
import { Download, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const ResumePage = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Progress",
      institution: "Kisii University",
      period: "2022 - 2026",
      status: "In Progress",
      description: "Pursuing comprehensive education in technology and innovation"
    },
    {
      degree: "Secondary Education",
      institution: "Misuuni High School",
      period: "2018 - 2022",
      status: "Completed - C+ Grade",
      description: "Kenya Certificate of Secondary Education (KCSE)"
    },
    {
      degree: "Primary Education",
      institution: "Kaliani Primary School",
      period: "2009 - 2017",
      status: "Completed - 343 Marks",
      description: "Kenya Certificate of Primary Education (KCPE)"
    }
  ];

  const experience = [
    {
      role: "Freelance Designer & Developer",
      company: "Catech Solutions",
      period: "2018 - Present",
      location: "Nairobi, Kenya",
      achievements: [
        "Delivered 50+ design and development projects",
        "Built responsive websites and e-commerce platforms",
        "Maintained 98% client satisfaction rate",
        "Specialized in Adobe Creative Suite and web technologies"
      ]
    },
    {
      role: "Skills Development & Learning",
      company: "Self-Directed Learning",
      period: "2023 - Present",
      location: "University & Online",
      achievements: [
        "Enhanced technical skills while studying at Kisii University",
        "Developed expertise in modern web technologies",
        "Created comprehensive project portfolio",
        "Built client management systems and e-commerce solutions"
      ]
    }
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      url: "https://ecommerce.catech.co.ke/",
      description: "Full-featured e-commerce solution with modern design"
    },
    {
      name: "KSUCU Management System",
      url: "https://ksucu-mc.co.ke/",
      description: "Frontend client project management system (Under Development)"
    }
  ];

  const skills = {
    design: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "UI/UX Design"],
    development: ["HTML/CSS", "JavaScript", "React", "Node.js", "WordPress", "Responsive Design"],
    tools: ["Git", "VS Code", "Adobe Creative Suite", "Figma", "Sketch"]
  };

  const handleDownload = () => {
    const cvContent = `
ANDREW CEPHAS NGUMBAU - CREATIVE PROFESSIONAL
============================================

Personal Information:
--------------------
Name: Andrew Cephas Ngumbau
Email: ngumbaucephas2@gmail.com
Phone: +254 793 614 592
Website: ceo.catech.co.ke

Education:
----------
• 2022 - 2026: Kisii University (Bachelor's Degree - In Progress)
• 2018 - 2022: Misuuni High School (KCSE - C+ Grade)
• 2009 - 2017: Kaliani Primary School (KCPE - 343 Marks)

Professional Experience:
-----------------------
• 2018 - Present: Freelance Designer & Developer at Catech Solutions
• 2023 - Present: Active Skills Development (University & Self-Directed)
• 50+ Completed Projects
• 30+ Satisfied Clients

Key Projects:
-------------
• E-commerce Platform: https://ecommerce.catech.co.ke/
• KSUCU Management System: https://ksucu-mc.co.ke/ (Under Development)

Skills:
-------
Design: Photoshop, Illustrator, InDesign, After Effects, Figma, UI/UX Design
Development: HTML/CSS, JavaScript, React, Node.js, WordPress, Responsive Design
Tools: Git, VS Code, Adobe Creative Suite, Figma, Sketch

Services:
---------
• Logo Design & Branding
• Web Application Development
• UI/UX Design
• E-commerce Solutions
• Print Design
• Digital Marketing Materials

Contact for professional creative solutions!
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andrew_Cephas_Ngumbau_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-40 h-28 mx-auto mb-4 transform rotate-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-lg border-2 border-[#ff9900] border-opacity-100"></div>
          <img
            loading="lazy"
            src="/lovable-uploads/andrew green.png"
            alt="Andrew Cephas Ngumbau"
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

      {/* Projects Section */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <ExternalLink className="text-[#ff9900]" size={24} />
          Featured Projects
        </h3>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{project.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-3 py-1 bg-[#ff9900] text-white rounded-full text-xs hover:bg-[#e6870a] transition-colors"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-xl p-6 border border-[#017020]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="text-[#ff9900]" size={24} />
          Education
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
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
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
