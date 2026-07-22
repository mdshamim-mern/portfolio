import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      
      <input
        id={id}
        className="border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 w-full"
        {...props}
      />
    </div>
  );
}