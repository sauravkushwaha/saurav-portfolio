import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Let's Connect
        </h2>
        <p className="mb-10 text-lg">
          Have a project idea or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-left text-sm sm:text-base">
          <div className="flex items-center gap-3 hover:scale-105 transition">
            <Mail className="text-blue-600" />
            <a href="mailto:saurav9695@gmail.com" className="hover:underline">
              Example@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition">
            <Phone className="text-green-600" />
            <span>+91 XXXXX XXXXX</span>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition">
            <MapPin className="text-pink-600" />
            <span>Uttar Pradesh, India</span>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-10 text-xl">
          {[
            {
              Icon: Github,
              text: "Github",
              href: "https://github.com/sauravKushwaha",
            },
            {
              Icon: Linkedin,
              text: "Linkedin",
              href: "https://www.linkedin.com/in/sauravkushwaha/",
            },
            {
              Icon: Facebook,
              text: "Facebook",
              href: "https://www.facebook.com/saurav.kushwaha.199907",
            },
          ].map(({ Icon, text, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 flex items-center gap-1 border px-3 py-1 rounded-lg hover:shadow-md transition border-transparent hover:border-gradient-to-r from-blue-500 to-purple-600"
              whileHover={{ scale: 1.1 }}
            >
              <Icon />
              {text}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;