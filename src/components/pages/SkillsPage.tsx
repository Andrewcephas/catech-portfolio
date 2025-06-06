
import { useEffect, useState } from "react";
import { Palette, Code, Monitor, Settings } from "lucide-react";

const SkillsPage = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: "🎨 Design Skills",
      icon: <Palette size={24} />,
      color: "from-[#ff9900] to-[#ff9900]/70",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 88 },
        { name: "Adobe After Effects", level: 85 },
        { name: "Figma", level: 82 },
        { name: "UI/UX Design", level: 88 },
      ]
    },
    {
      title: "💻 Development Skills",
      icon: <Code size={24} />,
      color: "from-[#017020] to-[#017020]/70",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Version Control (Git)", level: 85 },
      ]
    },
    {
      title: "🔧 Tools & Software",
      icon: <Settings size={24} />,
      color: "from-[#ff9900] to-[#017020]",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Adobe Creative Suite", level: 95 },
        { name: "Figma", level: 85 },
        { name: "GitHub", level: 88 },
        { name: "WordPress", level: 82 },
        { name: "Database (MySQL)", level: 75 },
      ]
    },
    {
      title: "🌐 Specializations",
      icon: <Monitor size={24} />,
      color: "from-[#017020] to-[#ff9900]",
      skills: [
        { name: "Brand Identity Design", level: 92 },
        { name: "Print Design", level: 88 },
        { name: "Web Graphics", level: 86 },
        { name: "Prototyping", level: 80 },
        { name: "Design Systems", level: 78 },
        { name: "Accessibility (WCAG)", level: 75 },
      ]
    }
  ];

  const designTools = [
    "Photoshop", "Illustrator", "InDesign", "After Effects",
    "Premiere Pro", "XD", "Lightroom", "Figma", "Sketch"
  ];

  const devTools = [
    "VS Code", "Git", "GitHub", "Webpack", "npm", "React DevTools",
    "Chrome DevTools", "Postman", "MySQL Workbench"
  ];

  useEffect(() => {
    const animateSkills = () => {
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          const skillKey = skill.name;
          let currentValue = 0;
          const increment = skill.level / 50;

          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= skill.level) {
              currentValue = skill.level;
              clearInterval(timer);
            }

            setAnimatedSkills(prev => ({
              ...prev,
              [skillKey]: Math.round(currentValue)
            }));
          }, 50);
        });
      });
    };

    const timeout = setTimeout(animateSkills, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 animate-fade-in">
        <div className="relative w-full h-32 rounded-xl overflow-hidden border-2 border-[#ff9900] mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20"></div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop"
            alt="Skills workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/30 to-[#017020]/30 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">Skills & Expertise</h2>
          </div>
        </div>
        <p className="text-gray-600">Bridging the gap between design and development</p>
      </div>

      {/* Skills categories */}
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`bg-gradient-to-r ${category.color} p-0.5 rounded-xl animate-fade-in`}
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-[#ff9900]">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const animatedValue = animatedSkills[skill.name] || 0;
                  return (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-[#ff9900] font-bold">
                          {animatedValue}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${animatedValue}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Mastery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
        {/* Design Tools */}
        <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 rounded-xl p-6 border border-[#ff9900]/20">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="text-[#ff9900]" size={20} />
            Design Tools Mastery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {designTools.map((tool, index) => (
              <div
                key={tool}
                className={`bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in border border-[#ff9900]/20`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-xs font-semibold text-gray-700">{tool}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="bg-gradient-to-r from-[#017020]/10 to-[#ff9900]/10 rounded-xl p-6 border border-[#017020]/20">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Code className="text-[#017020]" size={20} />
            Development Tools
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {devTools.map((tool, index) => (
              <div
                key={tool}
                className={`bg-white rounded-lg p-2 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in border border-[#017020]/20`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-xs font-semibold text-gray-700">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Approach */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">My Professional Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-[#ff9900] text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-800 mb-2">User-Centered</h4>
            <p className="text-gray-600 text-sm">Every design decision is made with the end user in mind</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-[#017020] text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-800 mb-2">Performance</h4>
            <p className="text-gray-600 text-sm">Optimized code and assets for lightning-fast experiences</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-[#ff9900] text-2xl mb-2">♿</div>
            <h4 className="font-semibold text-gray-800 mb-2">Accessible</h4>
            <p className="text-gray-600 text-sm">Following WCAG guidelines for inclusive design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
