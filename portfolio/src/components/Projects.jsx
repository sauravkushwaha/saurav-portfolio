import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Arivra – Dev Learning Platform",
    description:
      "A full-stack MERN app for developers to learn, build, and evolve. Features admin tutorial posting, search, dark mode, responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/Arivra.png",
    live: "https://arivra.vercel.app/",
    code: "https://github.com/sauravkushwaha/arivra",
  },
  {
    title: "Spotify Clone",
    description:
      "A frontend Spotify UI clone using HTML, CSS, and JS. Responsive layout with play/pause logic.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    image: "/Spotify_cl.png",
    live: "https://spotifyclonesaurav.netlify.app/",
    code: "https://github.com/sauravkushwaha/spotify-clone",
  },
];

// New animation: Fade up
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-950 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-auto object-cover p-2 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-white px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-white font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                  >
                    Live Site
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-white font-medium bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
                  >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;