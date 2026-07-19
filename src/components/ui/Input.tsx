import React, { InputHTMLAttributes } from "react";

// InputProps ইন্টারফেস দিয়ে আমরা বলে দিচ্ছি যে সাধারণ ইনপুট ফিল্ডের যা যা প্রোপার্টি থাকে (যেমন type, name, value), তার সবই এটা সাপোর্ট করবে
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      {/* লেবেল অংশ */}
      <label htmlFor={id} className="text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      
      {/* ইনপুট ফিল্ড */}
      <input
        id={id}
        className="border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 w-full"
        {...props}
      />
    </div>
  );
}