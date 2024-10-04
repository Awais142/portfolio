import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { cn } from "../lib/utils";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({}); // Track validation errors
  const [success, setSuccess] = useState(false); // Success state for feedback

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm()) return; // Prevent submission if form is invalid

    // EmailJS send function
    emailjs
      .send(
        "service_uqrb8g9", // Replace with your EmailJS service ID
        "template_hzr5jy7", // Replace with your EmailJS template ID
        {
          to_name: "Recipient Name", // Customize as needed
          from_name: formData.fullname,
          message: formData.message,
          email: formData.email,
        },
        "LY0qVxiXv_Eyu8AHj" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFormData({ fullname: "", email: "", message: "" }); // Clear form after success
          setErrors({}); // Clear errors after successful submission
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="max-w-6xl w-full mx-auto rounded-lg p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg mt-12">
      <h2 className="text-5xl font-bold mb-8 mx-auto text-center bg-gradient-to-r from-orange-300 to-rose-400 dark:from-rose-400 dark:to-orange-300 bg-clip-text text-transparent">
        Get in Touch
      </h2>

      {success && (
        <div className="text-center text-green-500 mb-4">
          Your message has been sent successfully!
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section with Contact Information */}
        <div className="md:w-1/2 w-full flex flex-col space-y-4 p-4 bg-gray-100 dark:bg-gray-800 text-neutral-700 dark:text-neutral-300 rounded-lg shadow-md">
          <p>
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
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="md:w-1/2 w-full flex flex-col space-y-4 p-4 dark:bg-gray-800 bg-gray-200 rounded-lg">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                name="fullname"
                placeholder="John Doe"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm">{errors.fullname}</span>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                placeholder="example@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className="border-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 rounded-md p-2 w-full h-32 bg-gray-50 dark:bg-zinc-800 dark:text-white focus-visible:ring-0 focus-visible:outline-none"
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-r from-orange-300 to-rose-500 dark:from-rose-500 dark:to-orange-300 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:shadow-lg hover:scale-105 hover:from-rose-300 hover:to-orange-400 active:scale-95 active:shadow-none active:bg-gradient-to-br active:from-orange-800 active:to-rose-700 transition-all duration-200 ease-in-out"
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

// Export the component
export default ContactForm;
