
import { ExternalLink, Github } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Catech Solutions Branding",
      description: "Complete brand identity design for tech company",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      tech: ["Illustrator", "Photoshop", "InDesign"],
      color: "from-[#ff9900] to-[#ff9900]/70",
      liveUrl: "https://catech.co.ke",
      githubUrl: "#"
    },
    {
      title: "Print Design Portfolio",
      description: "Collection of brochures, flyers and marketing materials",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop",
      tech: ["InDesign", "Photoshop", "Illustrator"],
      color: "from-[#017020] to-[#017020]/70",
      liveUrl: "#portfolio",
      githubUrl: "#"
    },
    {
      title: "Logo Design Collection",
      description: "Various logo designs for different industries",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      tech: ["Illustrator", "Photoshop"],
      color: "from-[#ff9900] to-[#017020]",
      liveUrl: "#logos",
      githubUrl: "#"
    }
  ];

  const handleViewAll = () => {
    window.open('https://catech.co.ke/portfolio', '_blank');
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-600">Showcasing my creative design work</p>
      </div>

      {/* Projects grid */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-r ${project.color} p-0.5 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-white rounded-xl p-4 h-full">
              <div className="flex space-x-4">
                {/* Project image */}
                <div className="w-32 h-20 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 text-gray-600 rounded text-xs border border-[#ff9900]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#ff9900] text-white rounded hover:bg-[#ff9900]/80 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      <span className="text-xs">View</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#017020] text-white rounded hover:bg-[#017020]/80 transition-colors flex items-center gap-1"
                    >
                      <Github size={14} />
                      <span className="text-xs">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all projects button */}
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <button
          onClick={handleViewAll}
          className="px-8 py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
