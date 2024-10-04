import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
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
    <nav className=" bg-gradient-to-r from-slate-100 to-slate-100 dark:from-gray-700 dark:to-slate-800 p-4 top-0 left-0 right-0 z-50 sticky ">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-transparent">
        {/* Left Section - Logo */}
        <div className="text-black text-2xl font-bold dark:text-gray-200">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-emerald-300 cursor-pointer"
          >
            MyLogo
          </Link>
        </div>

        {/* Center Section - Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-black  dark:text-white text-lg font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer hover:underline-offset-4 hover:text-rose-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer hover:underline-offset-4 hover:text-rose-400"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer hover:underline-offset-4 hover:text-rose-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer hover:underline-offset-4 hover:text-rose-400"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer hover:underline-offset-4 hover:text-rose-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section - Theme Toggle and Hire Me Button */}
        <div className="flex items-center space-x-4 z-50">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-gray-200 text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hire Me Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="dark:bg-slate-500 bg-slate-100 dark:text-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-all cursor-pointer hidden md:block bg-transparent border border-black dark:border-white"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-white dark:text-gray-200 md:hidden text-2xl focus:outline-none z-50"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-rose-400 dark:bg-gray-800 text-white dark:text-gray-200 space-y-4 py-4 text-center">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>

          {/* Hire Me Button in Mobile Menu */}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all cursor-pointer"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
