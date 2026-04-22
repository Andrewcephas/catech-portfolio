import { ExternalLink, Github, Eye, Palette, Code, Globe, ShoppingCart, DollarSign, Mic } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Finance Management System",
      desc: "Built a system for tracking income, expenses, and financial reports for businesses.",
      icon: <DollarSign size={32} />,
      technologies: ["MERN Stack", "Flask", "MongoDB"],
      category: "Software Development",
      link: "#"
    },
    {
      title: "Sign-to-Speech System",
      desc: "Real-time sign language to speech translation system using computer vision.",
      icon: <Mic size={32} />,
      technologies: ["Python", "Machine Learning", "Computer Vision"],
      category: "Research Project",
      link: "#"
    },
    {
      title: "CATECH Solutions Website",
      desc: "Complete brand identity design and website for my creative design agency.",
      icon: <Globe size={32} />,
      technologies: ["Adobe Illustrator", "React", "Tailwind CSS"],
      category: "Branding & Web",
      link: "https://catech.co.ke"
    },
    {
      title: "E-commerce Platform",
      desc: "Full-featured e-commerce website with product catalog and payment integration.",
      icon: <ShoppingCart size={32} />,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      link: "https://ecommerce.catech.co.ke"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-[var(--brand-primary)]/20 transition-all duration-300 group reveal-on-scroll ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-secondary)]/10 rounded-xl flex items-center justify-center text-[var(--brand-secondary)] group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] text-xs font-bold rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-[var(--brand-primary)] transition-colors uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md mx-auto sm:mx-0">
                {project.desc}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest border border-gray-100 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-bold uppercase tracking-widest">
                  <Eye size={16} />
                  View Details
                </button>
                <button className="p-2.5 border-2 border-gray-100 text-gray-500 rounded-lg hover:bg-gray-50 hover:border-[var(--brand-secondary)] transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;