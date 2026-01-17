import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  // Expanded projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "MoodScape",
      description: "Full-stack website that creates a tailored 3D Virtual world based on your top 50 spotify songs",
      technologies: ["React", "PostgreSQL", "Tailwind CSS", "three.js", "JavaScript"],
      image: '/projImage/moodScape.png',
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://devpost.com/software/moodscape-58u7vz/"
    },
    {
      id: 2,
      title: "UMass Food Finder",
      description: "Full-stack website that parses through all dining halls to find a specific craving served within 2 weeks",
      technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
      image: "/projImage/foodFinder.png",
      githubUrl: "https://github.com/yourusername/taskapp",
      liveUrl: "https://devpost.com/software/umass-food-finder",
    },
    {
      id: 3,
      title: "Poker Tracks",
      description: "Computes buy-in prices with ending chip counts to ensure that ending totals are accurate",
      technologies: ["React", "JavaScript", "Figma", "Tailwind CSS"],
      image: "/projImage/pokerTracks.png",
      githubUrl: "https://github.com/AlthanN/Poker-Tracks",
      liveUrl: "https://poker-tracks.vercel.app/",
    },
    {
      id: 4,
      title: "Pokemon Database System",
      description: "A backend project that parses through pokemon rest API to store data into a SQL server, and find specific pokemon information ",
      technologies: ["Python", "SQL", "Pandas", ],
      image: "/projImage/pokemon.png",
      githubUrl: "https://github.com/AlthanN/pokemonDatabase"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "My personal portfolio website that I modified and designed from a template I worked on with CodeCollab",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Tanstack Router"],
      image: "/projImage/portfolio.png",
      githubUrl: "https://github.com/AlthanN/portfolio",
      liveUrl: "",
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
        rootMargin: '0px 0px -50px 0px'
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
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-b bg-[#c4d4d4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-[#305252]">Projects</span>
          </h2>
          
          <div className="w-20 h  -1 bg-[#305252] mx-auto mt-4 md:mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              data-id={project.id}
              className={`
                group relative bg-white rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl transition-all duration-500
                border border-gray-100 hover:border-[#b7d5d4]
                ${visibleProjects.includes(project.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-[#b7d5d4]', 'to-[#305252]');
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Project Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
                
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6">
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#b7d5d4]/20 text-[#305252] rounded-lg
                               text-xs md:text-sm font-medium border border-[#b7d5d4]/40
                               hover:bg-[#b7d5d4]/30 transition-colors duration-200
                               cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#c4d4d4] backdrop-blur-sm rounded-full hover:bg-[#6e9292] 
                               transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="w-5 h-5 text-gray-800" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#c4d4d4] backdrop-blur-sm rounded-full hover:bg-[#6e9292]
                               transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  )}
                  
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#305252]/20 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;