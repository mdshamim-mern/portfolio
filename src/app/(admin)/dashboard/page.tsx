import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaEnvelope, FaChartBar, FaFolderOpen } from "react-icons/fa";
import { getDashboardStats } from "@/actions/dashboardActions";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const { totalProjects, unreadMessages, profileViews } = stats.data;

  return (
    <div className="p-8 lg:p-10">
      
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Welcome back, Shamim! 👋</h1>
          <p className="text-sm text-slate-500 mt-1">Here is what's happening with your portfolio today.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-700">Md Shamim</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
          
          <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-sky-500 shrink-0">
            <Image
              src="/images/shamim_formal.jpg"
              alt="Md. Shamim"
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500">
            <FaFolderOpen className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total Projects</p>
            <h3 className="text-3xl font-black text-slate-800">{totalProjects}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Unread Messages</p>
            <h3 className="text-3xl font-black text-slate-800">{unreadMessages}</h3>
          </div>
          <div className="absolute top-0 right-0 w-2 h-full bg-green-400"></div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500">
            <FaChartBar className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Profile Views</p>
            <h3 className="text-3xl font-black text-slate-800">{profileViews}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FaPlus className="text-sky-500" /> Quick Add Project
          </h3>
          <p className="text-slate-500 text-sm mb-6">Start setting up a new project for your portfolio to showcase to clients.</p>
          <Link href="/dashboard/add-project" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-sky-500/30">
            Create New Project
          </Link>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FaEnvelope className="text-sky-500" /> Recent Inquiries
          </h3>
          <p className="text-slate-500 text-sm mb-6">You have some unchecked messages from potential clients. Review them now.</p>
          <Link href="/dashboard/messages" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-slate-800/30">
            View All Messages
          </Link>
        </div>
      </div>

    </div>
  );
}