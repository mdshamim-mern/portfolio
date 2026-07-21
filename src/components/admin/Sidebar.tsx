"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartBar, FaPlus, FaFolderOpen, FaEnvelope, FaGlobe, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <FaChartBar /> },
    { name: "Add New Project", href: "/dashboard/add-project", icon: <FaPlus /> },
    { name: "Manage Projects", href: "/dashboard/projects", icon: <FaFolderOpen /> },
    { name: "Messages", href: "/dashboard/messages", icon: <FaEnvelope /> },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `footer { margin-left: 16rem; }` }} />
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col min-h-screen fixed z-20">
        <div className="p-6 border-b border-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded text-white flex items-center justify-center font-bold text-xl">S</div>
          <div>
            <h2 className="text-xl font-bold leading-none">Shamim<span className="text-blue-400">.dev</span></h2>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase mt-1 block">Admin Panel</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2 mt-4">
          {navLinks.map((link) => {
            const isActive = link.href === "/dashboard" 
              ? pathname === "/dashboard" 
              : pathname.startsWith(link.href);
              
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium flex items-center gap-3 ${
                  isActive 
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]" 
                    : "text-gray-400 hover:bg-gray-800 hover:text-white border border-transparent"
                }`}
              >
                {link.icon} {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-800 flex flex-col gap-2">
          <Link 
            href="/" 
            className="px-4 py-3 rounded-lg hover:bg-gray-800 transition font-medium text-gray-400 hover:text-white flex items-center gap-3"
          >
            <FaGlobe /> Go to Website
          </Link>
          <button 
            type="button"
            onClick={handleLogout} 
            className="px-4 py-3 rounded-lg hover:bg-red-500/10 transition font-medium text-red-400 hover:text-red-300 flex items-center gap-3 w-full text-left"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}