import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Dock = () => {
  const icons = [
    {
      id: 1,
      icon: <FaInstagram />,
      title: "Instagram",
      link: "https://instagram.com",
    },
    {
      id: 2,
      icon: <FaGithub />,
      title: "Github",
      link: "https://github.com/Awais142",
    },
    {
      id: 3,
      icon: <FaDribbble />,
      title: "Dribbble",
      link: "https://dribbble.com",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      link: "https://whatsapp.com",
    },
    {
      id: 5,
      icon: <FaTwitter />,
      title: "Twitter",
      link: "https://twitter.com",
    },
    {
      id: 6,
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/awais-akbar-98013a126/",
    },
    {
      id: 7,
      icon: <FaFacebook />,
      title: "Facebook",
      link: "https://facebook.com",
    },
  ];

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-lg border-2 border-black dark:border-white rounded-r-full px-4 py-5 flex flex-col space-y-6 z-50">
      {icons.map(({ id, icon, title, link }, index) => (
        <div key={id}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center text-2xl text-black dark:text-white transition-colors duration-300"
          >
            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-rose-400 text-white dark:text-rose-400 dark:bg-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {title}
            </span>
            <span className="text-black dark:text-white rounded-xl hover:scale-125 hover:text-rose-400 dark:hover:text-rose-400 transition-transform duration-300">
              {React.cloneElement(icon, {
                className: "text-2xl",
              })}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Dock;
