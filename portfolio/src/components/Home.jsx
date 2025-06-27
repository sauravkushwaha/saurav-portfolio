import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const typingWords = [" Frontend Development", " Backend Development", " MERN Development"];
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const current = typingWords[currentWordIndex];
    const speed = isDeleting ? 50 : 120;
    let timeout;

    if (!isDeleting && typedWord === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typedWord === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }, 500);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? current.slice(0, typedWord.length - 1)
          : current.slice(0, typedWord.length + 1);
        setTypedWord(nextText);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedWord, isDeleting, currentWordIndex, isInView]);

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const fadeLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-950"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={fadeLeft}
        initial="hidden"
        animate={controls}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Saurav
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
          I'm a passionate Web Developer <br />specializing in 
          <span className="text-blue-500">{typedWord}|</span>
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        variants={fadeRight}
        initial="hidden"
        animate={controls}
      >
        <img
          src="/portfo.png"
          alt="Developer"
          className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] object-cover rounded-full  bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;