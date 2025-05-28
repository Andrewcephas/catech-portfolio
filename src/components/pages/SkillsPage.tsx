
const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-[#ff9900] to-[#ff9900]/70",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind", level: 92 },
      ]
    },
    {
      title: "Backend", 
      color: "from-[#017020] to-[#017020]/70",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ]
    }
  ];

  return (
    <div className="h-full space-y-6">
      {/* Header with Code Image */}
      <div className="text-center mb-6 animate-fade-in">
        <div className="w-full h-24 rounded-xl overflow-hidden border-2 border-[#ff9900] mb-4">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=150&fit=crop"
            alt="Code Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/20 to-[#017020]/20"></div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
      </div>

      {/* Skills Categories */}
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`
              bg-gradient-to-r ${category.color} p-0.5 rounded-xl
              animate-fade-in
            `}
            style={{ animationDelay: `${categoryIndex * 0.3}s` }}
          >
            <div className="bg-white rounded-xl p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-[#ff9900] text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="animate-slide-up">
        <p className="text-gray-700 text-center mb-4 text-sm">Technologies I work with</p>
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech, index) => (
            <span
              key={tech}
              className={`
                px-3 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 
                border border-[#ff9900]/30 rounded-full text-xs text-gray-700
                hover:border-[#ff9900] hover:scale-105 transition-all duration-300
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
