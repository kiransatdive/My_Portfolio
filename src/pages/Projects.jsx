import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Blog from "./Blog";

const projects = [
  {
    title: "Employee Tracker System",
    description:
      "Developed a secure Employee Management System with role-based access and CRUD operations.",
    tech: [
      "Java", "Hibernate", "Springboot", "Angular", "TailwindCSS", "Typescript", "SQL", "JWT"
    ],
    icon: "/public/employee.jpg",
  },
  {
    title: "SAMSTRACK",
    description:
      "Built a scalable backend for real-time attendance tracking using Java, Spring Boot, and Hibernate.",
    tech: [
      "Java", "Hibernate", "Springboot", "Angular", "TailwindCSS", "Typescript", "SQL", "JWT"
    ],
    icon: "/public/attendence.png",
  },
];

const upcommingprojects = [
  {
    title: "Infinity AI",
    description:
      "Build Smarter Sites with AI Agents. Turn visitors into customers with real-time automated assistance.",
    tech: [
      "Html", "Javascript", "FarmerMotion", "React", "TailwindCSS", "AI Agent", "n8n", "Open AI"
    ],
    icon: "/public/ai.jpg",
  },
  {
    title: "More Projects Coming Soon...",
    description: "I get ideas all day 🙄. All of them are updated here as soon as I start working on them.",
    tech: [],
    icon: "/public/chat.png",
  },
];

const Projects = () => {
  return (
    <>
      <div className="max-w-5xl px-6  mx-auto bg-white">
        <h1 className="text-black text-4xl font-bold">Projects</h1>
      </div>

      <div className="flex flex-col-reverse items-center justify-between px-6 py-6 bg-white text-black max-w-5xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-8 shadow-[4px_6px_20px_rgba(173,216,230,0.3)] border border-gray-200"
            >
              {project.icon && (
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-10 h-10 mb-4"
                />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-sm px-2 py-0.5 bg-gray-100 text-gray-800 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl px-6 py-6 mx-auto bg-white">
        <h1 className="text-black text-4xl font-bold">Upcoming Projects</h1>
      </div>

      <div className="flex flex-col-reverse items-center justify-between px-6 bg-white text-black max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {upcommingprojects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-8 shadow-[4px_6px_20px_rgba(173,216,230,0.3)] border border-gray-200"
            >
              {project.icon && (
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-10 h-10 mb-4"
                />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700  mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-sm px-2 py-0.5 bg-gray-100 text-gray-800 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
