import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 md:px-10 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hello! I'm{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Saurav Kushwaha
          </span>
          , a passionate <span className="font-semibold">Web Developer</span>{" "}
          skilled in building responsive and interactive websites. I love
          solving real-world problems through clean and efficient code.
        </motion.p>

        <motion.p
          className="mt-4 text-base leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I have hands-on experience with technologies like{" "}
          <span className="font-medium">
            HTML, CSS, Tailwind CSS, JavaScript
          </span>{" "}
          and building full-stack applications with the{" "}
          <span className="font-medium">MERN stack</span>. I'm on a mission to
          create powerful and helpful tools for developers and learners — just
          like Arivra.
        </motion.p>
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        className="max-w-xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950  p-6 rounded-lg shadow-lg text-Black dark:text-gray-100 mt-10">
          <div className="grid grid-cols-[140px_auto] gap-y-3 text-sm sm:text-base leading-relaxed ">
            <div className="font-semibold items-start flex">Profile:</div>
            <div className=" items-start flex text-Black dark:text-gray-100 ">
              Web Developer (MERN Stack)
            </div>
        
            <div className="font-semibold items-start flex">Education:</div>
            <div className="text-Black dark:text-gray-100 items-start flex">
              Bachelor of Technology 
            </div>
            <div className="font-semibold items-start flex">Language:</div>
            <div className="text-Black dark:text-gray-100  items-start flex">English, Hindi</div>
            <div className="font-semibold items-start flex">Frontend:</div>
            <div className="text-Black dark:text-gray-100 items-start flex">
              React.js, HTML, CSS, Tailwind, JavaScript
            </div>
            <div className="font-semibold items-start flex">Backend:</div>
            <div className="text-Black dark:text-gray-100  items-start flex ">
              Node.js, Express, MongoDB, JWT Auth
            </div>
            <div className="font-semibold items-start flex">Other Skills:</div>
            <div className="text-Black dark:text-gray-100  items-start flex">
              Git, GitHub, Render, Netlify, Postman, Vercel
            </div>
            <div className="font-semibold items-start flex">Interests:</div>
            <div className="text-Black dark:text-gray-100  items-start flex">
              Problem Solving, UI Design, Anime
            </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
