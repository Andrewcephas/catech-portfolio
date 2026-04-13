import { ExternalLink, Github } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    { title: "Catech Solutions", desc: "Brand identity", img: "/lovable-uploads/logo catech.png" },
    { title: "E-commerce", desc: "Full电商 platform", img: "/lovable-uploads/NANO BANANA.png" },
    { title: "Portfolio", desc: "This website", img: "/lovable-uploads/with computer.png" },
  ];

  return (
    <div className="h-full flex flex-col p-1.5">
      <h2 className="text-sm font-bold text-gray-800 mb-2 text-center">Projects</h2>
      
      <div className="space-y-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <img src={p.img} alt={p.title} className="w-full h-16 object-cover rounded mb-1.5" />
            <h3 className="text-xs font-bold text-gray-800">{p.title}</h3>
            <p className="text-[10px] text-gray-500">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;