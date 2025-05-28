
import { ExternalLink, Github } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-[#ff9900] to-[#ff9900]/70"
    },
    {
      title: "Task Management App", 
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      color: "from-[#017020] to-[#017020]/70"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with modern design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "from-[#ff9900] to-[#017020]"
    }
  ];

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-sm">Some of my recent work</p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              group bg-gradient-to-r ${project.color} p-0.5 rounded-xl
              hover:scale-105 transition-all duration-300 animate-fade-in
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-white rounded-xl p-4 h-full">
              <div className="flex space-x-4">
                {/* Project Image */}
                <div className="w-24 h-16 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Project Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm mb-1 truncate">{project.title}</h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="p-1.5 bg-[#ff9900] text-white rounded hover:bg-[#ff9900]/80 transition-colors">
                      <ExternalLink size={12} />
                    </button>
                    <button className="p-1.5 bg-[#017020] text-white rounded hover:bg-[#017020]/80 transition-colors">
                      <Github size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <button className="px-6 py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
