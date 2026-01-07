import { motion } from "framer-motion";
import { Link2, BookOpen, CheckCircle, Zap, ShieldAlert, Activity } from "lucide-react";

export default function ConceptMap() {
  const nodes = [
    { 
      id: 1, name: "Basic Math", status: "completed", x: 10, y: 10, 
      detection: "98% Stability", icon: <CheckCircle size={14} /> 
    },
    { 
      id: 2, name: "Supply & Demand", status: "completed", x: 50, y: 15, 
      detection: "Strong Trace", icon: <Activity size={14} /> 
    },
    { 
      id: 3, name: "Equilibrium", status: "current", x: 25, y: 65, 
      detection: "Processing...", icon: <Zap size={14} /> 
    },
    { 
      id: 4, name: "Macro Policy", status: "locked", x: 70, y: 65, 
      detection: "Gap Detected", icon: <ShieldAlert size={14} /> 
    },
  ];

  return (
    <div className="p-8 min-h-[350px] relative overflow-hidden">
      {/* Background Grid Lines to make it look like a technical blueprint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <h4 className="font-bold mb-10 flex items-center gap-2 text-slate-800 relative z-10">
        <Link2 size={18} className="text-indigo-600" /> Neural Knowledge Architecture
      </h4>
      
      <div className="relative h-48 w-full">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="absolute group"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {/* AI DETECTION LABEL (The "Power" part) */}
            <div className="absolute -top-8 left-0 transition-all opacity-0 group-hover:opacity-100 group-hover:-top-10">
               <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm whitespace-nowrap ${
                  node.status === 'completed' ? 'bg-emerald-500 text-white' :
                  node.status === 'current' ? 'bg-indigo-600 text-white animate-pulse' :
                  'bg-rose-500 text-white'
               }`}>
                 AI Detect: {node.detection}
               </span>
            </div>

            {/* MAIN NODE */}
            <div className={`p-4 rounded-2xl shadow-xl border-2 flex items-center gap-3 whitespace-nowrap backdrop-blur-md transition-all ${
              node.status === 'completed' ? 'bg-white/90 border-emerald-200 text-emerald-700' :
              node.status === 'current' ? 'bg-indigo-600 border-indigo-400 text-white shadow-indigo-200 shadow-2xl scale-110' :
              'bg-white/40 border-slate-200 text-slate-400 grayscale'
            }`}>
              <div className={`${node.status === 'current' ? 'animate-spin-slow' : ''}`}>
                {node.icon}
              </div>
              <span className="text-xs font-black tracking-tight uppercase">{node.name}</span>
            </div>

            {/* CONNECTOR LINE (Visual only) */}
            {node.id < 4 && (
              <div className="absolute top-1/2 left-full w-8 h-[1px] bg-slate-200 -z-10 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex gap-4 relative z-10">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase">
          <div className="w-2 h-2 rounded-full bg-emerald-500" /> Synaptic Bond
        </div>
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase">
          <div className="w-2 h-2 rounded-full bg-indigo-500" /> Active Processing
        </div>
      </div>
    </div>
  );
}