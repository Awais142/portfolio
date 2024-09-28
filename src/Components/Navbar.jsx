import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; // Importing FaBars for Hamburger and FaTimes for Close

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  // Set theme on load
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

  // Toggle dark/light mode
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-600 dark:bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="text-white text-2xl font-bold dark:text-gray-200 poppins-extrabold">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Center Section - Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white dark:text-gray-200 text-lg font-medium poppins-extrabold">
          <li>
            <Link to="/" className="hover:text-emerald-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-emerald-300">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-emerald-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-emerald-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-emerald-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section - Hire Me Button & Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white dark:text-gray-200 text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hire Me Button */}
          <a
            href="#hireme"
            className="bg-white dark:bg-gray-700 dark:text-gray-200 text-teal-600 py-2 px-6 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition duration-300 hidden md:block"
          >
            Hire Me
          </a>

          {/* Hamburger Icon - Mobile */}
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
            <Link
              to="/"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-emerald-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>

          {/* Mobile Hire Me Button */}
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
