// Import images or use actual URLs if hosted online
import MernEcommerce from "../assets/images/Mern-Ecommerce.png"; // Example image path
import FakeStoreApi from "../assets/images/Ecommerce-FakestoreApi.png"; // Example image path
import JobListing from "../assets/images/jobListingSite.png"; // Example image path
import ImageSearch from "../assets/images/image-search.png"; // Example image path

const projects = [
  {
    title: "MERN E-Commerce Web App",
    description: "A responsive website built using React.",
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
    title: "Fake Store Api With React",
    description: "A Node.js API for managing e-commerce products.",
    skills: ["React", "Tailwind", "Javascript", "JSON", "API"],
    image: FakeStoreApi,
    images: [FakeStoreApi],
    type: "Api", // API-based project
  },
  {
    title: "MERN Stack Job Search Portal",
    description: "A mobile app for task management.",
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
    description: "Image Search App using React and Unsplash Api",
    skills: ["Unsplash Api", "Tailwind", "React"],
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
