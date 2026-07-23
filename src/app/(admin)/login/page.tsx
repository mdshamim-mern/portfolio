"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        document.cookie = "token=admin_access_token; path=/; max-age=86400;";
        window.location.href = "/dashboard";
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-gray-100 flex items-center justify-center min-h-screen p-4 overflow-y-auto">
      <Link 
        href="/" 
        className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all font-bold text-sm z-10"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative z-10">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
        
        {error && <p className="text-red-500 text-sm text-center mb-4 font-medium">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}