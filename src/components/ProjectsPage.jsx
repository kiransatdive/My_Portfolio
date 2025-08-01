// Projects.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Employee Tracker System",
    description:
      "Developed a secure Employee Management System with role-based access and CRUD operations.",
    tech: [
      "Java",
      "Hibernate",
      "Spring Boot",
      "Angular",
      "TailwindCSS",
      "Typescript",
      "SQL",
      "JWT",
    ],
    icon: "/employee.jpg",
  },
  {
    title: "SAMSTRACK",
    description:
      "Built a scalable backend for real-time attendance tracking using Java, Spring Boot, and Hibernate.",
    tech: [
      "Java",
      "Hibernate",
      "Spring Boot",
      "Angular",
      "TailwindCSS",
      "Typescript",
      "SQL",
      "JWT",
    ],
    icon: "/attendence.png",
  },
];

const upcomingProjects = [
  {
    title: "Infinity AI",
    description:
      "Build Smarter Sites with AI Agents. Turn visitors into customers with real-time automated assistance.",
    tech: [
      "HTML",
      "JavaScript",
      "Framer Motion",
      "React",
      "TailwindCSS",
      "AI Agent",
      "n8n",
      "OpenAI",
    ],
    icon: "/ai.jpg",
  },
  {
    title: "More Projects Coming Soon...",
    description:
      "I get ideas all day 🙄. All of them are updated here as soon as I start working on them.",
    tech: [],
    icon: "/chat.png",
  },
];

export default function Projects() {
  return (
    <>
      <section className="bg-white text-black max-w-5xl mx-auto px-6 py-18">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here –{" "}
          <a href="/blog" className="text-blue-600 ">
            checkout my blog
          </a>{" "}
          while you're here. <br />I write about technology, learning and memes.
        </p>

        {/* Full Stack Projects */}
        <h2 className="text-4xl font-bold mt-10 mb-6">Full-Stack</h2>
        <div className="grid sm:grid-cols-2 gap-6 cursor-pointer ">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-6 shadow-[4px_6px_20px_rgba(173,216,230,0.2)] border border-gray-200"
            >
              {project.icon && (
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-10 h-10 mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <a
        href="https://github.com/kiransatdive"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg py-2 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:text-black  transition-all flex justify-center items-center gap-2 mx-auto w-fit"
      >
        See all at
        <FaGithub className="text-black w-5 h-5" />
      </a>

      {/* Upcoming Projects */}
      <section className="bg-white text-black max-w-5xl mx-auto px-6 py-2">
        <h2 className="text-4xl font-bold mb-6">Upcoming Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6 cursor-pointer">
          {upcomingProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-6 shadow-[4px_6px_20px_rgba(173,216,230,0.2)] border border-gray-200"
            >
              {project.icon && (
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-10 h-10 mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
     
    </>
  );
}
