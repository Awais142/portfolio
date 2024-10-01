import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaWhatsapp,
  FaEnvelope,
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
    { id: 2, icon: <FaGithub />, title: "Github", link: "https://github.com" },
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
      icon: <FaEnvelope />,
      title: "Email",
      link: "mailto:someone@example.com",
    },
    {
      id: 6,
      icon: <FaTwitter />,
      title: "Twitter",
      link: "https://twitter.com",
    },
    {
      id: 7,
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://linkedin.com",
    },
    {
      id: 8,
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
            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black text-white dark:text-black dark:bg-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {title}
            </span>
            <span className="text-black dark:text-white rounded-xl hover:scale-125 transition-transform duration-300">
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
