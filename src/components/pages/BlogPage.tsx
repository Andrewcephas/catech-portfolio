
import { Calendar, User, Tag, ExternalLink } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Balancing Design and Development",
      excerpt: "Exploring how to seamlessly blend creative design with functional development to create exceptional user experiences.",
      category: "Design & Development",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      tags: ["Design", "Development", "UX/UI"]
    },
    {
      id: 2,
      title: "Adobe Creative Suite Mastery Tips",
      excerpt: "Professional techniques and workflows for maximizing productivity in Photoshop, Illustrator, and InDesign.",
      category: "Design Tools",
      date: "2024-01-10",
      readTime: "7 min read", 
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=200&fit=crop",
      tags: ["Adobe", "Photoshop", "Illustrator", "Workflow"]
    },
    {
      id: 3,
      title: "Creating Effective Brand Identities",
      excerpt: "A step-by-step guide to developing memorable brand identities that resonate with target audiences.",
      category: "Branding",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
      tags: ["Branding", "Logo Design", "Identity"]
    },
    {
      id: 4,
      title: "Responsive Design Best Practices",
      excerpt: "Essential techniques for creating websites that work beautifully across all devices and screen sizes.",
      category: "Web Development",
      date: "2023-12-28",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop",
      tags: ["Responsive", "CSS", "Mobile-First"]
    },
    {
      id: 5,
      title: "Music and Creativity: Finding Inspiration",
      excerpt: "How playing guitar and musical expression enhances creative thinking in design and problem-solving.",
      category: "Creativity",
      date: "2023-12-20",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      tags: ["Music", "Creativity", "Inspiration"]
    }
  ];

  const categories = ["All", "Design & Development", "Design Tools", "Branding", "Web Development", "Creativity"];

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-40 h-28 mx-auto mb-4 transform rotate-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=150&fit=crop"
            alt="Writing and creativity"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Design & Dev Insights
        </h2>
        <p className="text-gray-600">Sharing knowledge, tutorials, and creative insights</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center animate-slide-up">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#ff9900]/10 hover:to-[#017020]/10 hover:border-[#ff9900] transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <div className="flex items-center space-x-4">
          <div className="relative w-32 h-24 transform -rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-lg border-2 border-[#ff9900] border-opacity-100"></div>
            <img 
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#ff9900] text-white rounded-full text-xs font-medium">
                Featured
              </span>
              <span className="text-gray-500 text-sm">{blogPosts[0].category}</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{blogPosts[0].title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {blogPosts[0].date}
                </span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="px-3 py-1 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full text-xs font-medium hover:scale-105 transition-transform">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-4">
        {blogPosts.slice(1).map((post, index) => (
          <div
            key={post.id}
            className={`bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex space-x-4">
              <div className="relative w-24 h-20 transform rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 bg-[#017020]/10 text-[#017020] rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">{post.title}</h4>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="p-1 text-[#ff9900] hover:bg-[#ff9900]/10 rounded transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="text-center p-6 bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl border border-[#ff9900]/20 animate-fade-in">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Updated</h3>
        <p className="text-gray-600 mb-4">Get the latest insights and tutorials delivered to your inbox</p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:border-[#ff9900] focus:outline-none"
          />
          <button className="px-6 py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
