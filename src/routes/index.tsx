import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "react-simple-typewriter";
import AboutSection from "../routes/about";
import ProjectsSection from "../routes/project";
import ExperienceSection from "../routes/experience";
import InteractiveBackground from "../interactivebackground";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: RouteComponentMainPage,
});


function RouteComponentMainPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Landing Page Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
      >
        <motion.div
          className="-translate-y-12"
          /* appearance animation */
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#d18495]">
              <Typewriter
                words={[
                  "Althan Nguyen",
                  "a CodeCollab Dev",
                  "a Designer",
                  "a Developer",
                  "a Student",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg text-[#2d2d2d] max-w-xl">
            Welcome to my personal portfolio built with CodeCollab. Explore my
            work and connect with me.
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="mt-24">
          <a href="#about" className="animate-bounce text-3xl text-[#a3747e]">
            ↓
          </a>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}
