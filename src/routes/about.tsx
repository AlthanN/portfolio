// src/routes/about.tsx
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white text-[#2d2d2d] min-h-screen px-6 py-16"
    >
      <h2 className="text-5xl font-semibold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Bio box - padding to left*/}
        <motion.div className="bg-[#f5f1f1] p-6 md:p-8  max-w-xl text-left font-mono text-sm shadow-md ml-18">
          <p>
            I am Althan Nguyen, a Computer Science Major at the University of
            Massachusetts Amherst. I am passionate on making a difference and
            use technology and innovation as tools for meaningful, positive
            change
          </p>
        </motion.div>

        {/* Image (personal image or can be removed) */}
        <motion.img
          src="/codeLogo.png"
          alt="profile"
          className="w-72 h-auto rounded-md shadow-md"
        />
      </div>

      {/* Skills Section */}
      <h3 className="text-5xl font-semibold text-center mb-12 mt-20">Skills</h3>
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
          { name: "VSCode", logo: "/icons/vscode.svg" }

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
            className="group bg-[#f5f1f1] hover:bg-[#f7c5d3] transition-colors duration-300 p-4 rounded-xl border border-[#000000] shadow-md flex flex-col items-center text-center"
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
