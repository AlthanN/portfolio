import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "react-simple-typewriter";
import AboutSection from "../routes/about";
import ProjectsSection from "../routes/project";
import ExperienceSection from "../routes/experience";
import InteractiveBackground from "../interactivebackground";
import Skills from "./skills";
import Footer from "./footer";
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
          
          /* appearance animation */
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold mb-6 ">Althan Nguyen</h1>
          <h1 className="text-3xl font-extrabold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#305252]">
              <Typewriter
                words={[
                  "Althan Nguyen",
                  "a CodeCollab Dev",
                  "Full Stack Developer", 
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
            I am currently studying Computer Science with a minor in 
            Economics at the University of Massachusetts at Amherst. I'm interested in Full Stack development 
            and enjoy working on every aspect of a project, from brainstorming ideas all the way to deployment.

          </p>
        </motion.div>

      </section>


      {/* Experience Section */}
      <ExperienceSection />

      <Skills />

      {/* Projects Section */}
      <ProjectsSection />

      <Footer/>
    </div>
  );
}
