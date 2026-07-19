import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger"; // তিন ধরনের বাটন স্টাইল সাপোর্ট করবে
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  
  // ভ্যারিয়েন্ট অনুযায়ী বাটনের কালার সেট করার জন্য
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-blue-600 text-white hover:bg-blue-700 shadow-md";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-900 text-white hover:bg-gray-800 shadow-md";
  } else if (variant === "danger") {
    variantClasses = "bg-red-600 text-white hover:bg-red-700 shadow-md";
  }

  return (
    <button
      className={`px-6 py-3 rounded-lg font-bold transition duration-300 w-full md:w-auto ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}