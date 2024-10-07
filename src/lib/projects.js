// Import images or use actual URLs if hosted online
import MernEcommerce from "../assets/images/Mern-Ecommerce.png"; // Example image path
import FakeStoreApi from "../assets/images/Ecommerce-FakestoreApi.png"; // Example image path
import JobListing from "../assets/images/jobListingSite.png"; // Example image path
import ImageSearch from "../assets/images/image-search.png"; // Example image path

const projects = [
  {
    title: "MERN E-Commerce Web App",
    description:
      "I have created this project using the MERN stack, incorporating all essential functionalities of an e-commerce application. Customers can sign up, log in if already registered, browse products, add items to the cart, and mark products as favorites. For non-logged-in users, cart data is stored in local storage, while logged-in users' data is stored in the database. The app features secure authentication, role-based access, and a seamless shopping experience. Admins can create, update, and delete products, as well as manage orders placed by users and update the status of each order.",
    skills: [
      "React",
      "MongoDB",
      "Express",
      "Node Js",
      "Tailwind",
      "JavaScript",
    ],
    image: MernEcommerce,
    images: [MernEcommerce],
    type: "FullStack", // Full-stack app
  },

  {
    title: "Fake Store API With React",
    description:
      "I have created this project using the Fake Store API to simulate an e-commerce application. The Fake Store API provides a collection of products, including details such as pricing, descriptions, and images. This project demonstrates integration with an external API to display and manage products, providing functionality such as adding products to the cart, viewing product details, and filtering through categories. Tailwind CSS was used for styling the front end, and the project leverages React for a dynamic user experience.",
    skills: ["React", "Tailwind", "Javascript", "JSON", "API"],
    image: FakeStoreApi,
    images: [FakeStoreApi],
    type: "Api", // API-based project
  },

  {
    title: "MERN Stack Job Search Portal",
    description:
      "I have created this project using the MERN stack, with full functionality for a job search portal. The portal features role-based authentication, where users can either be job seekers or employers. Job seekers can browse job listings, apply for positions, and manage their applications. Employers (companies) can create, update, and delete job postings, as well as manage applicants. Admins have the ability to manage users, job postings, and other platform functionalities, providing a complete job portal experience.",
    skills: [
      "React",
      "MongoDB",
      "Express",
      "Node Js",
      "Tailwind",
      "JavaScript",
    ],
    image: JobListing,
    images: [JobListing],
    type: "FullStack", // Full-stack app
  },
  {
    title: "Image Search App React",
    description:
      "This is a simple Image Search App built using React and the Unsplash API. Users can search for any topic in the search bar, and the app will fetch and display relevant images through the Unsplash API. The app provides a smooth user experience, with responsive design and fast image rendering, styled using Tailwind CSS.",
    skills: ["Unsplash API", "Tailwind", "React"],
    image: ImageSearch,
    images: [ImageSearch],
    type: "Frontend", // Front-end app
  },
  {
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging.",
    skills: ["Socket.io", "Node.js", "React"],
    image: "",
    images: [],
    type: "FullStack", // Full-stack app
  },
  {
    title: "Next.js Portfolio Website",
    description: "A portfolio website built with Next.js.",
    skills: ["Next.js", "Tailwind CSS"],
    image: "",
    images: [],
    type: "Frontend", // Front-end app
  },
];

export default projects;
