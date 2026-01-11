import React, { useEffect, useRef, useState } from "react";

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, shopping cart, payment processing, and admin dashboard. Built with modern web technologies for optimal performance and user experience.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features. Includes task assignments, due dates, progress tracking, and notifications.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w-600",
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/yourusername/taskapp"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, historical data visualization, and customizable alerts. Features interactive maps and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w-600",
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleProjects(prev => {
              if (!prev.includes(id)) {
                return [...prev, id];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-[#305252]">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
          <div className="w-24 h-1 bg-[#305252] mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              data-id={project.id}
              className={`
                grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
                transition-all duration-700 ease-out
                ${visibleProjects.includes(project.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
                }
                ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
              `}
            >
              {/* Project Image */}
              <div className={`
                relative overflow-hidden rounded-2xl shadow-2xl
                transform transition-transform duration-500 hover:scale-[1.02]
                ${visibleProjects.includes(project.id) ? 'scale-100' : 'scale-95'}
              `}>
                <div className="aspect-video bg-gradient-to-br from-[#b7d5d4] to-[#305252]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-[#b7d5d4]', 'to-[#305252]');
                    }}
                  />
                </div>
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className={`
                transition-all duration-500 delay-200
                ${visibleProjects.includes(project.id) ? 'opacity-100' : 'opacity-0'}
              `}>
                {/* Project Number */}
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-[#305252] mr-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px w-16 bg-[#305252]"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#b7d5d4]/30 text-[#305252] rounded-full text-sm font-medium 
                               border border-[#b7d5d4] hover:bg-[#b7d5d4]/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-3 bg-[#305252] text-white rounded-full 
                               font-semibold overflow-hidden transition-all duration-300
                               hover:bg-[#244141] hover:shadow-lg hover:shadow-[#305252]/30
                               active:scale-95"
                    >
                      <span className="relative z-10">View Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a3747e] to-[#305252] 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-transparent text-[#305252] rounded-full 
                               font-semibold border-2 border-[#305252]
                               hover:bg-[#305252] hover:text-white transition-all duration-300
                               active:scale-95"
                    >
                      View Code
                    </a>
                  )}
                </div>

                {/* Decorative element */}
                <div className="mt-12 h-px w-32 bg-gradient-to-r from-[#305252] to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;