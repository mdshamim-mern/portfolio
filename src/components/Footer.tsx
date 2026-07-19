import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-[13px] text-slate-400">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Md Shamim</span>. All Rights Reserved.
        </p>
        
        <Link 
          href="#home"
          className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-semibold hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
        >
          Back to Top <span className="text-lg leading-none group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
        </Link>

      </div>
    </footer>
  );
}