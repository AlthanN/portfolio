// src/routes/about.tsx
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <section
      id="about"
      className="text-[#2d2d2d] min-h-screen px-6 py-16 lg:py-8"
    >

      {/* Skills Section */}
      <h3 className="text-5xl font-semibold text-center mb-16 mt-2">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {[
          { name: "Java", logo: "/icons/java.svg" },
          { name: "React", logo: "/icons/react.svg" },
          { name: "Python", logo: "/icons/py.svg" },
          { name: "TypeScript", logo: "/icons/ts.svg" },
          { name: "JavaScript", logo: "/icons/js.svg" },
          { name: "HTML", logo: "/icons/html.svg" },
          { name: "CSS", logo: "/icons/css.svg" },
          { name: "Node.js", logo: "/icons/nodejs.svg" },
          { name: "Git & GitHub", logo: "/icons/git.svg" },
          { name: "SQL", logo: "/icons/sql.svg" },
          { name: "Angular", logo: "/icons/angular.svg" },
          { name: "VSCode", logo: "/icons/vscode.svg" },
          

        ].map((skill, index) => (
          <motion.div
            /* spring animation */
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="group bg-[#f5f7fa] hover:bg-[#a7d3cd] transition-colors duration-300 p-4 rounded-xl border border-[#000000] shadow-md flex flex-col items-center text-center"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-mono text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
