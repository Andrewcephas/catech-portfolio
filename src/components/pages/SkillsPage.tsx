import { useState } from "react";
import { Code, Palette, Layers, Database, Figma, Code2, Database2, Github, Globe } from "lucide-react";

const iconMap: Record<string, any> = {
  "Adobe Photoshop": <svg viewBox="0 0 24 24" width="20" height="20" fill="#31A8FF"><path d="M11.72 0h.56l-1.04 1.52L12.52 0h1.14L12.21 1.95l.49-.45h-1.7l-.53.82h1.38l-.51.8H12.1l-.52.81h1.7l-.49.82-1.06.45 1.08 1.52h-.56l-.48-.73H11.3l-.52.82H10.8l.51-.81-.51.81h-1.14l-.49.82h1.14l.48-.73H10.3l.5.73-.52.82h1.14l.52-.82.49-.45h1.7l.53.82.51-.8h-1.38l.5-.81h1.14l.51-.81-.51.81h-1.14l-.5-.81H11.3l.48.73.52-.81-.51.81h-.49z"/></svg>,
  "Adobe Illustrator": <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF9A00"><path d="M11.72 0h.56l-1.04 1.52L12.52 0h1.14L12.21 1.95l.49-.45h-1.7l-.53.82h1.38l-.51.8H12.1l-.52.81h1.7l-.49.82-1.06.45 1.08 1.52h-.56l-.48-.73H11.3l-.52.82H10.8l.51-.81-.51.81h-1.14l-.49.82h1.14l.48-.73H10.3l.5.73-.52.82h1.14l.52-.82.49-.45h1.7l.53.82.51-.8h-1.38l.5-.81h1.14l.51-.81-.51.81h-1.14l-.5-.81H11.3l.48.73.52-.81-.51.81h-.49z"/></svg>,
  "Figma": <Figma size={20} className="text-pink-500" />,
  "Canva": <svg viewBox="0 0 24 24" width="20" height="20" fill="#00C4CC"><circle cx="12" cy="12" r="10" fill="#00C4CC"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text></svg>,
  "HTML": <Code2 size={20} className="text-orange-500" />,
  "CSS": <Code2 size={20} className="text-blue-500" />,
  "JavaScript": <Code size={20} className="text-yellow-500" />,
  "React.js": <svg viewBox="0 0 24 24" width="20" height="20" fill="#61DAFB"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/></svg>,
  "Python": <svg viewBox="0 0 24 24" width="20" height="20" fill="#3776AB"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 3v6l5 3-1 1.67L11 13V5h1z"/></svg>,
  "MERN Stack": <Layers size={20} className="text-green-500" />,
  "Flask": <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 2L4 8v12h16V8L12 2z" fill="none" stroke="#000" strokeWidth="2"/><path d="M8 22V12l4 3 4-3v10" fill="none" stroke="#000" strokeWidth="2"/></svg>,
  "Tailwind CSS": <svg viewBox="0 0 24 24" width="20" height="20" fill="#06B6D4"><path d="M12 0l-2 4h4l-2-4zM12 6l-2 4h4l-2-4zM12 12l-2 4h4l-2-4zM12 18l-2 4h4l-2-4zM18 0l-2 4h4l-2-4zM18 6l-2 4h4l-2-4z"/></svg>,
  "Node.js": <svg viewBox="0 0 24 24" width="20" height="20" fill="#339933"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4l6 3.5v7L12 18l-6-3.5v-7L12 4z"/></svg>,
  "Networking": <Globe size={20} className="text-gray-500" />,
  "System Security": <svg viewBox="0 0 24 24" width="20" height="20" fill="#DC2626"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.47-3.11 8.68-7 9.93-3.89-1.25-7-5.46-7-9.93v-5.7l7-3.12z"/></svg>,
  "MongoDB": <svg viewBox="0 0 24 24" width="20" height="20" fill="#47A248"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 3c4.2 0 7.58 3.39 7.58 7.58 0 1.75-.6 3.35-1.6 4.58l-1.3-1.3c.7-.87 1.1-1.95 1.1-3.08 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.13 0 2.21-.4 3.08-1.1l1.3 1.3c-1.23 1-2.83 1.6-4.58 1.6-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.78 5.78-5.78z"/></svg>,
  "WordPress": <svg viewBox="0 0 24 24" width="20" height="20" fill="#21759B"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 3c4.2 0 7.58 3.39 7.58 7.58 0 1.75-.6 3.35-1.6 4.58l-1.3-1.3c.7-.87 1.1-1.95 1.1-3.08 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.13 0 2.21-.4 3.08-1.1l1.3 1.3c-1.23 1-2.83 1.6-4.58 1.6-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.78 5.78-5.78zM3.5 12l6 3.5v5L12 18l-2.5 1.5v-5L3.5 12zm17 0v5l-2.5 1.5v-5L20.5 12z"/></svg>,
  "GitHub": <Github size={20} className="text-gray-800" />,
  "UI/UX Design": <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="8" r="2"/><path d="M8 12v4M12 12v4M16 12v4" stroke="currentColor" strokeWidth="2"/></svg>,
};

const defaultIcon = <Code size={20} className="text-gray-500" />;

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, label: "Design Tools", icon: <Palette size={18} /> },
    { id: 1, label: "Technical Skills", icon: <Code size={18} /> },
    { id: 2, label: "Frameworks", icon: <Layers size={18} /> },
    { id: 3, label: "Other", icon: <Database size={18} /> },
  ];

  const skills = [
    {
      category: "Design Tools",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "UI/UX Design"]
    },
    {
      category: "Technical Skills",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Python"]
    },
    {
      category: "Frameworks",
      items: ["MERN Stack", "Flask", "Tailwind CSS", "React.js", "Node.js"]
    },
    {
      category: "Other",
      items: ["Networking", "System Security", "MongoDB", "WordPress", "GitHub"]
    }
  ];

  return (
    <div className="space-y-6 px-4">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium text-sm ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {skills[activeTab].items.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px]"
          >
            <span className="flex-shrink-0">{iconMap[skill] || defaultIcon}</span>
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;