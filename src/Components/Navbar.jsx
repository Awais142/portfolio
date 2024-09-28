import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-600 dark:bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="text-white text-2xl font-bold dark:text-gray-200">
          <a href="#home">MyLogo</a>
        </div>

        {/* Center Section - Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white dark:text-gray-200 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-emerald-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-300">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-emerald-300">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section - Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-white dark:text-gray-200 text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="#hireme"
            className="bg-white dark:bg-gray-700 dark:text-gray-200 text-teal-600 py-2 px-6 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition duration-300 hidden md:block"
          >
            Hire Me
          </a>

          <button
            onClick={toggleMenu}
            className="text-white dark:text-gray-200 md:hidden text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-teal-600 dark:bg-gray-800 text-white dark:text-gray-200 space-y-4 py-4 text-center">
          <li>
            <a
              href="#home"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#hireme"
              className="bg-white dark:bg-gray-700 dark:text-gray-200 text-teal-600 py-2 px-6 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
