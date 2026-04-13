
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Andrewcephas", 
      color: "bg-gray-800", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/andrew-ngumbau-8309a833a", 
      color: "bg-blue-600", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:ngumbaucephas2@gmail.com", 
      color: "bg-[#ff9900]", 
      label: "Email" 
    },
  ];

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 ${social.color} text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg`}
          title={social.label}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
