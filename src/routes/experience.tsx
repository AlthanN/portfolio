import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    title: "Undergraduate Course Assistant",
    period: "January 2026–Present",
    responsibilities: [
      "Provides academic assistance to a class with over 100+ students, teaching fundamentals of C, assembly, and system design",
      "Led weekly discussion sessions and graded work in a timely manner",
      "Communicated with professors and peers to ensure a smooth learning environment"
    ]
  },
  {
    id: 2,
    title: "Software Engineer @ UMass CodeCollab",
    period: "May 2025-Present",
    responsibilities: [
      "Developed an interactive, visually polished website template using Tailwind CSS with React",
      "Collaborated with a team of 5 in weekly meetings to brainstorm, plan, and implement new features",
      "Designed a reusable portfolio project template, enabling users to fork and customize their own website, deployed on Vercel"
    ]
  },
  {
    id: 3,
    title: "Front End Intern @ BHS Flipped Internship",
    period: "April 2024–June 2024",
    responsibilities: [
      "Designed an art portfolio website for a graduated student",
      "Underwent project-based learning with Angular using HTML, CSS, and Typescript",
      "Met weekly with 6 interns and 2 mentors to discuss and implement feedback"
    ]
  },
  
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#a7d3cd] min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mx-auto mb-12 text-[#2d2d2d]">
        My Experience
      </h2> 
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {experienceData.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="bg-[white] p-6 rounded-md border border-[#000000] shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-between items-center mb-4 text-black">
                <p className="text-2xl font-bold">{experience.title}</p>
                <p className="text-lg font-bold">{experience.period}</p>
              </div>
              <ul className="text-lg list-disc list-outside pl-4">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}