"use client"; // Indicating that this is a client-side component

import * as React from "react";
import { cn } from "../../lib/utils"; // Utility function for conditional class names
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Input component definition
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100; // Radius for the hover effect
  const [visible, setVisible] = React.useState(false); // State to control hover visibility

  let mouseX = useMotionValue(0); // Motion value for mouse X position
  let mouseY = useMotionValue(0); // Motion value for mouse Y position

  // Handle mouse move to update mouseX and mouseY
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm 
           file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
           focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400`,
          className
        )}
        ref={ref}
        {...props} // Spread any additional props
      />
    </motion.div>
  );
});

Input.displayName = "Input"; // Set display name for debugging

export { Input }; // Export the Input component
