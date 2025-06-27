import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 flex md:flex-row justify-center items-center">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} This Template is made with ❤ by Saurav Kushwaha
        </p>
      </div>
    </footer>
  );
};

export default Footer;