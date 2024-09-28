import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// This function merges class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
