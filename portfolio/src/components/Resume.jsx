import React from "react";
import { motion } from "framer-motion";

// Up-down animation
const fadeIn = (delay = 0) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay },
    },
  };
};

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-5 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Resume</h2>

        {/* Work Experience */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-4 border-b pb-1 border-gray-300 dark:border-gray-700">
            Work Experience
          </h1>
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow"
          >
            <h4 className="text-xl font-bold">Infosys</h4>
            <ul className="text-lg">
              System Engineer{" "}
              <span className="text-sm font-light">(May/2022 - Aug/2023)</span>
            </ul>
            <li className="text-sm">
              Project Microsoft Concierge (Solved Average 60 ticket related to
              Microsoft admin center)
            </li>
            <li className="text-sm">
              Resolved technical tickets related to Microsoft Admin center,
              enhancing performance and customer satisfaction.
            </li>
            <li className="text-sm">
              Gained experience in debugging, issue tracking, and efficient
              ticket queue management.
            </li>
            <li className="text-sm">
              Show qualities like problem solving, collaboration, planning,
              agile, productivity and communication
            </li>
          </motion.div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1 border-gray-300 dark:border-gray-700">
            Achievements
          </h3>
          <motion.div
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow mb-4"
          >
            <h4 className="font-bold text-lg">
              Secretary
              <span className="text-sm font-light">
                {" "}
                (July/2019 - June/2020)
              </span>
            </h4>
            <h4>Art and Event Management Wing of the JUET Youth Club</h4>
            <li className="text-sm">
              Organized Annual fest, events, conducted tech talks and managed
              team communication and coordination.
            </li>
          </motion.div>

          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow"
          >
            <h4 className="font-bold text-lg">
              Coordinator
              <span className="text-sm font-light">
                {" "}
                (July/2018 - June/2019)
              </span>
            </h4>
            <h4>Art and Event Management Wing of the JUET Youth Club</h4>
            <li className="text-sm">
              Led a team of volunteers for major college-level events, fest and
              workshops.
            </li>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1 border-gray-300 dark:border-gray-700">
            Education
          </h3>
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow mb-4"
          >
            <h4 className=" font-bold text-lg">
              Bachelor of Technology
              <span className="text-sm font-light">
                {" "}
                (July/2017 - June/2021)
              </span>
            </h4>
            <h4>
              Jaypee University of Engineering & Technology, Guna, Madhya
              Pradesh
            </h4>
            <h4 className="text-sm">Computer Science Engineering</h4>
          </motion.div>

          <motion.div
            variants={fadeIn(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow mb-4"
          >
            <h4 className="font-bold">
              Senior Secondary School
              <span className="text-sm font-light"> (2016)</span>
            </h4>
            <p className="text-sm">
              Pt. Deen Dayal Upadhyaya Sanatan Dharma Vidyalaya Kanpur, Uttar
              Pradesh
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow"
          >
            <h4 className="font-bold">
              Secondary School
              <span className="text-sm font-light"> (2014)</span>
            </h4>
            <p className="text-sm">
              Pt. Deen Dayal Upadhyaya Sanatan Dharma Vidyalaya Kanpur, Uttar
              Pradesh
            </p>
          </motion.div>
        </div>

        {/* Certificates */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-4 border-b pb-1 border-gray-300 dark:border-gray-700">
    Certificates
  </h3>

  {[
    {
      title: "AI tool & ChatGPT workshop | Be10x",
      link: "https://drive.google.com/file/d/1RJpijqSgUg1zweDMLH6zNl8kaozi30-9/view?usp=sharing",
    },
    {
      title: "React JS Course | Simplilearn | skillUp",
      link: "https://certificates.simplicdn.net/share/8530125_88997341751018345708.pdf",
    },
    {
      title: "Front-End Web Development with React | Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/78AKG3TTB2JU",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap | Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/38PBSSWL4BSL",
    },
    {
      title: "Fundamentals of digital marketing | Google",
      link: "https://drive.google.com/file/d/1p8BbKgCx_dbW95rJ6gtxXn-QqbaUEUH5/view",
    },
    {
      title: "Python,Flask Framework And Django Course For Beginners | Udmey",
      link: "https://www.udemy.com/certificate/UC-5881423d-ef34-4692-add2-45bd8a30392d/",
    },
    {
      title: "Build Responsive Website HTML, CSS, JS and Bootstrap | Educba",
      link: "https://www.educba.com/certificate/?c=I9OAKGHOY",
    },

  ].map((cert, i) => (
    <motion.div
      key={i}
      variants={fadeIn(0.7 + i * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-950 p-4 rounded shadow mb-4"
    >
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        {cert.title}
      </a>
    </motion.div>
  ))}

  {/* Resume Download */}
  <motion.div
    variants={fadeIn(1.3)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-10"
  >
    <a
      href="/Saurav_Resume.pdf"
      download
      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300 mt-10"
    >
      Download Resume
    </a>
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default Resume;
