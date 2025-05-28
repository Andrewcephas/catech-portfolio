
import { useEffect, useState } from "react";

const SkillsPage = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "Design Software",
      color: "from-[#ff9900] to-[#ff9900]/70",
      skills: [
        { name: "Photoshop", level: 95 },
        { name: "Illustrator", level: 90 },
        { name: "InDesign", level: 88 },
        { name: "After Effects", level: 85 },
      ]
    },
    {
      title: "Creative Skills", 
      color: "from-[#017020] to-[#017020]/70",
      skills: [
        { name: "Branding", level: 92 },
        { name: "Logo Design", level: 94 },
        { name: "Print Design", level: 88 },
        { name: "Web Graphics", level: 86 },
      ]
    }
  ];

  useEffect(() => {
    const animateSkills = () => {
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          const skillKey = skill.name;
          let currentValue = 0;
          const increment = skill.level / 50; // Animation duration control
          
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

    // Start animation after component mounts
    const timeout = setTimeout(animateSkills, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 animate-fade-in">
        <div className="w-full h-32 rounded-xl overflow-hidden border-2 border-[#ff9900] mb-4 relative">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop"
            alt="Design Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/30 to-[#017020]/30 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">Skills & Expertise</h2>
          </div>
        </div>
      </div>

      {/* Skills categories */}
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`bg-gradient-to-r ${category.color} p-0.5 rounded-xl animate-fade-in`}
            style={{ animationDelay: `${categoryIndex * 0.3}s` }}
          >
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const animatedValue = animatedSkills[skill.name] || 0;
                  return (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-[#ff9900] font-bold text-lg">
                          {animatedValue}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
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

      {/* Adobe Creative Suite showcase */}
      <div className="animate-slide-up bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 rounded-xl p-6 border border-[#ff9900]/20">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Adobe Creative Suite Mastery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "XD", "Lightroom", "Acrobat"].map((software, index) => (
            <div
              key={software}
              className={`bg-white rounded-lg p-3 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border border-[#ff9900]/20`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xs font-semibold text-gray-700">{software}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
