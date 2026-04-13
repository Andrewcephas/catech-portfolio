
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications with React Native and Flutter"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with great user experience"
    },
    {
      icon: <Globe size={32} />,
      title: "Digital Solutions",
      description: "Providing comprehensive digital solutions for businesses and startups"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating digital experiences that are not only functional but also beautiful and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">My Journey</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege of working 
                with diverse clients and projects. My passion lies in transforming ideas into digital 
                reality and creating solutions that make a difference.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies 
                and best practices in the industry. When I'm not coding, you can find me exploring 
                new technologies or contributing to open-source projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-purple-500 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-green-500 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
