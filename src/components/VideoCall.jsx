import { Mic, Video, PhoneOff, Shield, Brain } from "lucide-react";

export default function VideoCall({ onEnd }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full aspect-video bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/10">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" className="w-full h-full object-cover opacity-60" alt="Tutor" />
        
        {/* AI Privacy Badge */}
        <div className="absolute top-8 left-8 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase">
          <Shield size={14} className="text-indigo-400" /> AI Ethics Protocol Active
        </div>

        {/* AI Tutor Context Box */}
        <div className="absolute top-24 left-8 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl text-white shadow-2xl z-20">
          <div className="flex items-center gap-2 mb-3 text-indigo-300 font-bold text-[10px] uppercase tracking-[0.2em]">
             <Brain size={16} /> Tutor Context
          </div>
          <p className="text-xs leading-relaxed opacity-90">"Student struggled with 'Market Shifts'. Recommendation: Focus on visual graphing."</p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/10 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/20 z-20">
          <button className="p-4 bg-white/10 rounded-full text-white"><Mic size={20}/></button>
          <button className="p-4 bg-white/10 rounded-full text-white"><Video size={20}/></button>
          <button onClick={onEnd} className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600 transition-all shadow-xl flex items-center gap-2 font-bold px-8">
            <PhoneOff size={20} /> End Call
          </button>
        </div>
      </div>
    </div>
  );
}