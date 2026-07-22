"use client";

import Link from "next/link";
import { FaHome, FaPlus, FaEnvelope, FaChartBar, FaSignOutAlt, FaFolderOpen, FaCog } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <style dangerouslySetInnerHTML={{ __html: `footer { margin-left: 16rem; }` }} />
      
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-20 shadow-2xl">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-500/30">
            S
          </div>
          <div>
            <h2 className="text-white font-bold text-lg tracking-wide">Shamim<span className="text-sky-400">.dev</span></h2>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20 transition-all font-medium">
            <FaChartBar className="text-lg" />
            Dashboard
          </Link>
          <Link href="/dashboard/add-project" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl transition-all font-medium">
            <FaPlus className="text-lg" />
            Add New Project
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl transition-all font-medium">
            <FaFolderOpen className="text-lg" />
            Manage Projects
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl transition-all font-medium flex-wrap justify-between">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              Messages
            </div>
            <span className="bg-sky-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">New</span>
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl transition-all font-medium">
            <FaCog className="text-lg" />
            Profile Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl transition-all text-sm font-medium">
            <FaHome className="text-lg" />
            Go to Website
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all text-sm font-medium">
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>

    </div>
  );
}