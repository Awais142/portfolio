import React from "react";
import { Label } from "../Components/ui/label"; // Ensure you have these components
import { Input } from "../Components/ui/input"; // Ensure you have these components
import { cn } from "../lib/utils"; // Your utility function for class names
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"; // Importing React Icons

export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl w-full mx-auto rounded-lg p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg mt-12">
      <h2 className="text-5xl font-bold mb-8 mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section with Contact Information */}
        <div className="md:w-1/2 w-full flex flex-col space-y-4 p-4 bg-gray-100 dark:bg-gray-800 text-neutral-700 dark:text-neutral-300 rounded-lg shadow-md">
          <p className="">
            We would love to hear from you! Feel free to reach out via phone or
            email, or connect with us on social media.
          </p>
          <div className="flex items-center">
            <FaPhone className="text-neutral-600 w-5 h-5 mr-2" />
            <span>+1 (234) 567-8901</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-neutral-600 w-5 h-5 mr-2" />
            <span>example@example.com</span>
          </div>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-neutral-600 w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-neutral-600 w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-neutral-600 w-5 h-5" />
            </a>
            {/* Add another social icon if needed */}
            <a
              href="https://www.other-social.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-neutral-600 w-5 h-5" />{" "}
              {/* Replace with actual icon */}
            </a>
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="md:w-1/2 w-full flex flex-col space-y-4 p-4 dark:bg-gray-800 bg-gray-200 rounded-lg">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" placeholder="John Doe" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="example@example.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="Your message here..."
                className="border placeholder:text-neutral-400 dark:placeholder:text-neutral-600 rounded-md p-2 w-full h-32 bg-gray-50 dark:bg-zinc-800 dark:text-white focus-visible:ring-0 focus-visible:outline-none"
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br from-gray-700 dark:from-zinc-900 dark:to-zinc-700 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

// Don't forget to export the component
export default ContactForm;
