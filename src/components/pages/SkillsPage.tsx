import { useEffect, useState } from "react";
import { Palette, Code, Settings, Monitor } from "lucide-react";

const SkillsPage = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      title: "Design",
      icon: <Palette size={14} />,
      color: "from-[#ff9900] to-[#ff9900]/70",
      barColor: "bg-[#ff9900]",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 88 },
        { name: "Figma", level: 82 },
      ]
    },
    {
      title: "Development",
      icon: <Code size={14} />,
      color: "from-[#017020] to-[#017020]/70",
      barColor: "bg-[#017020]",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Git", level: 85 },
      ]
    },
    {
      title: "Tools",
      icon: <Settings size={14} />,
      color: "from-[#ff9900] to-[#017020]",
      barColor: "bg-gradient-to-r from-[#ff9900] to-[#017020]",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Adobe Suite", level: 95 },
        { name: "GitHub", level: 88 },
        { name: "WordPress", level: 82 },
      ]
    },
    {
      title: "Special",
      icon: <Monitor size={14} />,
      color: "from-[#017020] to-[#ff9900]",
      barColor: "bg-gradient-to-r from-[#017020] to-[#ff9900]",
      skills: [
        { name: "Branding", level: 92 },
        { name: "Print", level: 88 },
        { name: "UI/UX", level: 86 },
        { name: "Prototyping", level: 80 },
      ]
    }
  ];

  const designTools = ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "XD", "Lightroom", "Figma", "Sketch"];
  const devTools = ["VS Code", "Git", "GitHub", "Webpack", "npm", "React", "Chrome", "Postman", "MySQL"];

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach(cat => cat.skills.forEach((skill, i) => {
        setAnimatedSkills(prev => ({...prev, [skill.name]: skill.level}));
      }));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col p-2 overflow-y-auto">
      <div className="text-center mb-3">
        <h2 className="text-base font-bold text-gray-800">Skills & Expertise</h2>
        <p className="text-xs text-gray-500">Bridging design and development</p>
      </div>

      <div className="space-y-2 mb-3">
        {skillCategories.map((cat, ci) => (
          <div key={ci} className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[#ff9900]">{cat.icon}</span>
              <span className="text-xs font-bold text-gray-700">{cat.title}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cat.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs text-gray-600">{skill.name}</span>
                    <span className="text-xs font-medium text-[#ff9900]">{animatedSkills[skill.name] || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div className={`h-full ${cat.barColor} rounded-full transition-all duration-700`} style={{width: `${animatedSkills[skill.name] || 0}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
          <h3 className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1"><Palette size={12} className="text-[#ff9900]"/>Design Tools</h3>
          <div className="grid grid-cols-3 gap-1">
            {designTools.map(tool => (
              <div key={tool} className="bg-white p-1 rounded text-center text-[10px] text-gray-600 border border-gray-100">{tool}</div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
          <h3 className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1"><Code size={12} className="text-[#017020]"/>Dev Tools</h3>
          <div className="grid grid-cols-3 gap-1">
            {devTools.map(tool => (
              <div key={tool} className="bg-white p-1 rounded text-center text-[10px] text-gray-600 border border-gray-100">{tool}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 bg-gray-50 p-2 rounded-lg border border-gray-100">
        <h3 className="text-xs font-bold text-gray-700 mb-2 text-center">My Professional Approach</h3>
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <div className="bg-white p-1.5 rounded-lg border border-gray-100">
            <div className="text-sm mb-0.5">🎯</div>
            <p className="text-[10px] font-medium text-gray-700">User-Centered</p>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-gray-100">
            <div className="text-sm mb-0.5">⚡</div>
            <p className="text-[10px] font-medium text-gray-700">Performance</p>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-gray-100">
            <div className="text-sm mb-0.5">♿</div>
            <p className="text-[10px] font-medium text-gray-700">Accessible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;