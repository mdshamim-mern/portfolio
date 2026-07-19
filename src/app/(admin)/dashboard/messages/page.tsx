import { FaEnvelopeOpenText, FaLaptopCode } from "react-icons/fa";
import { connectToDB } from "@/lib/db";
import Message from "@/models/Message";

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  await connectToDB();
  const messages = await Message.find({}).sort({ createdAt: -1 });

  return (
    <div className="p-8 lg:p-10">
      <h1 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
        <FaEnvelopeOpenText className="text-sky-500" /> User Messages
      </h1>
      
      <div className="grid gap-6">
        {messages.map((m: any) => (
          <div 
            key={m._id.toString()} 
            className={`p-6 rounded-3xl border transition-all ${
              m.isRead 
                ? 'bg-slate-50 border-slate-200' 
                : 'bg-white shadow-sm border-sky-100'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{m.name}</h3>
                <a href={`mailto:${m.email}`} className="text-sm text-sky-500 font-medium hover:underline block mb-2">
                  {m.email}
                </a>
                
                {m.projectType && (
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg">
                    <FaLaptopCode className="text-slate-400" />
                    {m.projectType}
                  </div>
                )}
              </div>
              
              {!m.isRead && (
                <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
            
            <p className="text-slate-600 bg-slate-50 p-4 rounded-xl text-sm leading-relaxed border border-slate-100">
              {m.message}
            </p>
          </div>
        ))}

        {messages.length === 0 && (
          <p className="text-slate-500 font-medium">No messages yet.</p>
        )}
      </div>
    </div>
  );
}

