import { useState } from 'react';
import { Plus, Edit3, Trash2, Eye, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  dateCreated: string;
}

const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Catech Solutions Branding',
      description: 'Complete brand identity design for tech company',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop',
      tech: ['Illustrator', 'Photoshop', 'InDesign'],
      liveUrl: 'https://portfolio.catech.co.ke',
      githubUrl: 'https://github.com/Andrewcephas',
      dateCreated: '2024-01-15'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    tech: [] as string[],
    liveUrl: '',
    githubUrl: ''
  });

  const categories = ['All', 'Branding', 'Web Design', 'Print Design', 'Logo Design', 'UI/UX'];

  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.category) {
      const project: Project = {
        id: Date.now().toString(),
        ...newProject,
        dateCreated: new Date().toISOString().split('T')[0]
      };
      setProjects([project, ...projects]);
      setNewProject({
        title: '',
        description: '',
        category: '',
        image: '',
        tech: [],
        liveUrl: '',
        githubUrl: ''
      });
      setShowAddForm(false);
    }
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="h-full space-y-6 overflow-y-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-brand-orange">Project Manager</h2>
          <p className="text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green-hover transition-all duration-200 transform hover:scale-105"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter size={16} className="text-muted-foreground" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-brand-orange text-white'
                : 'bg-muted text-muted-foreground hover:bg-brand-orange/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Add Project Form */}
      {showAddForm && (
        <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">Add New Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            />
            <select
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">Select Category</option>
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="md:col-span-2 p-3 border border-border rounded-lg bg-background text-foreground resize-none"
              rows={3}
            />
            <input
              type="url"
              placeholder="Image URL"
              value={newProject.image}
              onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            />
            <input
              type="text"
              placeholder="Technologies (comma separated)"
              onChange={(e) => setNewProject({ 
                ...newProject, 
                tech: e.target.value.split(',').map(t => t.trim()).filter(t => t) 
              })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            />
            <input
              type="url"
              placeholder="Live URL (optional)"
              value={newProject.liveUrl}
              onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            />
            <input
              type="url"
              placeholder="GitHub URL (optional)"
              value={newProject.githubUrl}
              onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
              className="p-3 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleAddProject}
              className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green-hover transition-colors"
            >
              Add Project
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-card-foreground">{project.title}</h3>
                <span className="text-xs bg-brand-orange/20 text-brand-orange px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs text-muted-foreground">+{project.tech.length - 3}</span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 p-2 bg-brand-orange/10 text-brand-orange rounded hover:bg-brand-orange/20 transition-colors">
                  <Eye size={14} className="mx-auto" />
                </button>
                <button className="flex-1 p-2 bg-brand-green/10 text-brand-green rounded hover:bg-brand-green/20 transition-colors">
                  <Edit3 size={14} className="mx-auto" />
                </button>
                <button className="flex-1 p-2 bg-destructive/10 text-destructive rounded hover:bg-destructive/20 transition-colors">
                  <Trash2 size={14} className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectManager;