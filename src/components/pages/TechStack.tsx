import { Code, Database, Layers, Globe, Github, Palette, Figma } from "lucide-react";

const iconMap: Record<string, any> = {
  "React": <svg viewBox="0 0 24 24" width="20" height="20" fill="#61DAFB"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" width="20" height="20" fill="#3178C6"><rect width="24" height="24" rx="3" fill="#3178C6"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TS</text></svg>,
  "Node.js": <svg viewBox="0 0 24 24" width="20" height="20" fill="#339933"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4l6 3.5v7L12 18l-6-3.5v-7L12 4z"/></svg>,
  "Tailwind CSS": <svg viewBox="0 0 24 24" width="20" height="20" fill="#06B6D4"><path d="M12 0l-2 4h4l-2-4zM12 6l-2 4h4l-2-4zM12 12l-2 4h4l-2-4zM12 18l-2 4h4l-2-4z"/></svg>,
  "Figma": <Figma size={20} className="text-pink-500" />,
  "Adobe": <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF0000"><rect width="24" height="24" rx="3" fill="#FF0000"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Ai</text></svg>,
  "GitHub": <Github size={20} className="text-gray-800" />,
  "Vite": <svg viewBox="0 0 24 24" width="20" height="20" fill="#646CFF"><polygon points="12,2 22,12 12,22 2,12" fill="#646CFF"/></svg>,
  "WordPress": <Globe size={20} className="text-blue-600" />,
  "MongoDB": <svg viewBox="0 0 24 24" width="20" height="20" fill="#47A248"><ellipse cx="12" cy="10" rx="8" ry="6" fill="#47A248"/><path d="M12 16v6" stroke="#47A248" strokeWidth="3"/></svg>,
  "Supabase": <svg viewBox="0 0 24 24" width="20" height="20" fill="#3ECF8E"><rect width="24" height="24" rx="3" fill="#3ECF8E"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SB</text></svg>,
  "Stripe": <svg viewBox="0 0 24 24" width="20" height="20" fill="#635BFF"><rect width="24" height="24" rx="3" fill="#635BFF"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text></svg>,
};

const defaultIcon = <Code size={20} className="text-gray-500" />;

const TechStack = () => {
  const techItems = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", 
    "Figma", "Adobe", "GitHub", "Vite",
    "WordPress", "MongoDB", "Supabase", "Stripe"
  ];

  return (
    <div className="py-8 px-4">
      <div className="text-center mb-6 reveal-on-scroll slide-up">
        <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
        <p className="text-gray-500 text-sm">Technologies I work with</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {techItems.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all reveal-on-scroll zoom-in"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <span className="flex-shrink-0">{iconMap[tech] || defaultIcon}</span>
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;