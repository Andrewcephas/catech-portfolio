import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Catech Solutions Branding",
      description: "Complete brand identity design for tech company including logo, color scheme, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop",
      tech: ["Illustrator", "Photoshop", "InDesign"],
      liveUrl: "https://catech.co.ke",
      githubUrl: "https://github.com/catechsolutions",
      featured: true
    },
    {
      title: "Print Design Portfolio",
      description: "Collection of brochures, flyers, business cards and marketing materials for various clients.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop",
      tech: ["InDesign", "Photoshop", "Illustrator"],
      liveUrl: "https://catech.co.ke/portfolio",
      githubUrl: "https://github.com/catechsolutions",
      featured: true
    },
    {
      title: "Logo Design Collection",
      description: "Various logo designs for different industries including tech startups, restaurants, and retail brands.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      tech: ["Illustrator", "Photoshop"],
      liveUrl: "https://catech.co.ke/logos",
      githubUrl: "https://github.com/catechsolutions",
      featured: false
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MySQL"],
      liveUrl: "https://ecommerce.catech.co.ke",
      githubUrl: "https://github.com/catechsolutions/ecommerce",
      featured: true
    }
  ];

  const handleViewAll = () => {
    window.open('https://catech.co.ke/portfolio', '_blank');
  };

  return (
    <div className="h-full space-y-8 overflow-y-auto p-4 md:p-6">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-[#f97316] to-[#22c55e] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-white/70 text-sm md:text-base">Showcasing my creative design work and development projects</p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10 hover:border-white/30 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Large Project image */}
            <div className="w-full h-48 md:h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {project.featured && (
                <div className="absolute top-3 right-3 z-20 bg-[#f97316] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  Featured
                </div>
              )}
            </div>

            {/* Project details */}
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#f97316] transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed text-sm">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/10 hover:border-[#f97316]/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#f97316] to-[#f97316]/80 text-white rounded-xl hover:from-[#f97316] hover:to-[#22c55e] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 flex items-center justify-center border border-white/10"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all projects button */}
      <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <button
          onClick={handleViewAll}
          className="group px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#22c55e] text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl hover:shadow-[#f97316]/30 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          View All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;