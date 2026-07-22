import { FaEnvelopeOpenText, FaLaptopCode, FaCheckCircle, FaClock } from "react-icons/fa";
import { connectToDB } from "@/lib/db";
import Message from "@/models/Message";

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  await connectToDB();
  const messages = await Message.find({}).sort({ createdAt: -1 });

  return (
    <div className="p-8 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-3 bg-sky-100 rounded-xl text-sky-500 shadow-sm">
              <FaEnvelopeOpenText />
            </div>
            Client Messages
          </h1>
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 shadow-sm inline-flex items-center gap-2 w-fit">
            Total Inquiries: <span className="text-sky-500 text-lg">{messages.length}</span>
          </div>
        </div>
        
        <div className="grid gap-6">
          {messages.map((m: any) => (
            <div 
              key={m._id.toString()} 
              className={`relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-md ${
                m.isRead 
                  ? 'bg-white border border-slate-200 shadow-sm' 
                  : 'bg-white border-2 border-sky-200 shadow-sm shadow-sky-100/50'
              }`}
            >
              {!m.isRead && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </div>
              )}

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                    {m.name}
                    {m.isRead && <FaCheckCircle className="text-emerald-500 text-sm" title="Read" />}
                  </h3>
                  <a href={`mailto:${m.email}`} className="text-sm text-sky-500 font-semibold hover:text-sky-600 hover:underline transition-colors">
                    {m.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 flex-wrap">
                  {m.projectType && (
                    <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                      <FaLaptopCode className="text-slate-500 text-sm" />
                      {m.projectType}
                    </div>
                  )}
                  {!m.isRead && (
                    <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      New Message
                    </span>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
                <p className="text-slate-600 pl-5 py-1 text-base leading-relaxed">
                  {m.message}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <FaClock className="text-slate-300" />
                {m.createdAt ? new Date(m.createdAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                }) : 'Recently received'}
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-4 border border-slate-100">
                <FaEnvelopeOpenText className="text-4xl text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No Messages Yet</h3>
              <p className="text-slate-500 font-medium">When clients contact you through your portfolio, their messages will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}