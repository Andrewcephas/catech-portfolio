
import { Star, Quote } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Kenya",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b993?w=100&h=100&fit=crop",
      rating: 5,
      text: "Andrew delivered exceptional branding materials for our startup. His attention to detail and creative vision exceeded our expectations. The final designs perfectly captured our company's essence.",
      project: "Complete Brand Identity"
    },
    {
      name: "Michael Chen", 
      role: "CEO",
      company: "Digital Solutions Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Working with Andrew was a pleasure. He not only designed a beautiful website but also developed it flawlessly. His hybrid skills in design and development are rare and valuable.",
      project: "Website Design & Development"
    },
    {
      name: "Grace Wanjiku",
      role: "Small Business Owner",
      company: "Grace Boutique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Andrew created stunning print materials for my boutique. From business cards to brochures, everything was perfectly designed and delivered on time. Highly recommended!",
      project: "Print Design Package"
    },
    {
      name: "David Mutua",
      role: "Project Manager",
      company: "Nairobi Tech Hub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      text: "Andrew's professionalism and reliability are outstanding. He consistently delivers high-quality work and communicates effectively throughout the project lifecycle.",
      project: "UI/UX Design"
    },
    {
      name: "Emma Kariuki",
      role: "Creative Director", 
      company: "Brandhub Agency",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 5,
      text: "As a fellow creative, I can appreciate Andrew's artistic eye and technical skills. His ability to bridge design and development makes him an invaluable partner for any project.",
      project: "Brand Guidelines"
    },
    {
      name: "James Ochieng",
      role: "Startup Founder",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Andrew transformed our vague ideas into a concrete visual identity. His creativity and problem-solving skills helped us stand out in a competitive market.",
      project: "Complete Branding"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-[#ff9900] fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-40 h-28 mx-auto mb-4 transform -rotate-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=150&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Client Testimonials
        </h2>
        <p className="text-gray-600">What my clients say about working with me</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
        {[
          { value: "50+", label: "Happy Clients", color: "text-[#ff9900]" },
          { value: "98%", label: "Satisfaction", color: "text-[#017020]" },
          { value: "5.0", label: "Avg Rating", color: "text-[#ff9900]" },
          { value: "24h", label: "Response Time", color: "text-[#017020]" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff9900] flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-[#017020] text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-[#ff9900]/20" size={24} />
                  <p className="text-gray-700 leading-relaxed mb-3 pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 text-gray-700 rounded-full text-sm border border-[#ff9900]/20">
                    Project: {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center p-6 bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl border border-[#ff9900]/20 animate-fade-in">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Work Together?</h3>
        <p className="text-gray-600 mb-4">Join these satisfied clients and let's create something amazing</p>
        <button className="px-6 py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;
