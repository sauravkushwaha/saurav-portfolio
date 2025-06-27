import React, { useState, useEffect } from "react";
import { X, AlignRight, Sun, Moon } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const activeGradient =
    "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent";
  const linkStyle =
    "cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent";

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow"
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-10 py-3">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Saurav Kushwaha
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-800 dark:text-white font-medium items-center">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeGradient}
              className={linkStyle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeGradient}
              className={linkStyle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeGradient}
              className={linkStyle}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeGradient}
              className={linkStyle}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeGradient}
              className={linkStyle}
            >
              Contact
            </Link>
          </li>
          <div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 gap-2"
            >
              {isDarkMode ? (
                <Sun
                  size={20}
                  className="text-yellow-400 transition duration-300 hover:scale-110"
                />
              ) : (
                <Moon
                  size={20}
                  className="text-blue-300 transition duration-300 hover:scale-110"
                />
              )}
            </button>
          </div>
        </ul>

        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <AlignRight />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-12 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-10">
            <ul className="flex flex-col space-y-4 text-gray-800 dark:text-white font-medium">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={toggleMenu}
                  activeClass={activeGradient}
                  className={linkStyle + " block"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={toggleMenu}
                  activeClass={activeGradient}
                  className={linkStyle + " block"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={toggleMenu}
                  activeClass={activeGradient}
                  className={linkStyle + " block"}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={toggleMenu}
                  activeClass={activeGradient}
                  className={linkStyle + " block"}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={toggleMenu}
                  activeClass={activeGradient}
                  className={linkStyle + " block"}
                >
                  Contact
                </Link>
              </li>
              <button
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full hover:bg-gray-100 rounded-md min-[864px]:hidden"
              >
                {isDarkMode ? (
                  <>
                    <span>Light Mode</span>
                    <Sun size={20} className="text-yellow-400" />
                  </>
                ) : (
                  <>
                    <span>Dark Mode</span>
                    <Moon size={20} className="text-blue-300" />
                  </>
                )}
              </button>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
