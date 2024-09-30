"use client"; // Indicating that this is a client-side component

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label"; // Importing Radix UI label component
import { cn } from "../../lib/utils"; // Utility function for conditional class names

// Label component definition
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", // Default styles
      className // Additional custom styles
    )}
    {...props} // Spread any additional props
  />
));

Label.displayName = LabelPrimitive.Root.displayName; // Set display name for debugging

export { Label }; // Export the Label component
