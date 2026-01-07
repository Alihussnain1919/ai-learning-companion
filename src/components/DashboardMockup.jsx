import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, ArrowLeft, Brain, User, MessageSquare,
  ShieldCheck, Target, TrendingUp, Calendar, BookOpen,ChevronRight
} from "lucide-react";
import SnowBackground from "./SnowBackground";
import ConceptMap from "./ConceptMap";

// Ensure this path matches: src/data/universityData.js
import { universityData } from "../data/universityData";

export default function DashboardMockup({ goBack, onBook, onStartPractice }) {
  const [mastery, setMastery] = useState(45);
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeInsight, setActiveInsight] = useState(null);

  const handleAdjust = () => {
    setIsAdjusted(true);
    setTimeout(() => setMastery(65), 500);
  };

  // Filter Logic
  const filteredUnis = filter === "All"
    ? universityData
    : universityData.filter(u => u.region === filter);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-12">
      <SnowBackground />
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER AREA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 mb-2 transition-all font-semibold">
              <ArrowLeft size={18} /> Back to Landing
            </button>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Student Workspace</h1>
          </div>

          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl shadow-inner flex items-center justify-center text-white font-bold">JD</div>
            <div className="pr-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Learner</p>
              <p className="text-sm font-bold text-slate-800">John Doe</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* --- LEFT COLUMN: 8 COLUMNS WIDE --- */}
          <div className="lg:col-span-8 space-y-8">

            {/* 1. COGNITIVE PROGRESS MAP */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600"><TrendingUp size={120} /></div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Target className="text-indigo-600" size={20} /> Cognitive Progress Map</h2>

              <div className="space-y-8 relative z-10">
                <div>
                  <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                    <span>Economic Theory</span>
                    <span className="text-indigo-600">{mastery}% Mastery</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${mastery}%` }}
                      transition={{ type: "spring", stiffness: 50 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  {isAdjusted ? "✓ AI has optimized your integrations module based on visual preference." : "AI is analyzing your response time patterns..."}
                </p>
              </div>
            </div>
  {/* 2. AI KNOWLEDGE ARCHITECTURE (The Concept Map) */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                <ConceptMap />
            </div>
            {/* 2. ACTIVITY & RESOURCES GRID */}
       {/* 2. ACTIVITY & RESOURCES GRID */}
<div className="grid md:grid-cols-2 gap-8">
  
<div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative">
      <h4 className="font-bold mb-6 flex items-center gap-2">
        <BookOpen size={18} className="text-indigo-600" /> AI-Curated Path
      </h4>

      <div className="space-y-4">
        {/* 1. AI VIDEO ANALYZER (Out of the Box) */}
        <div 
          onClick={() => setActiveInsight(activeInsight === 'video' ? null : 'video')}
          className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-700 text-sm font-bold">Video: Elasticity in 2026</span>
            <span className="text-[8px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded uppercase">AI Vision</span>
          </div>
          <AnimatePresence>
            {activeInsight === 'video' && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-3 pt-3 border-t border-emerald-100 space-y-2">
                <p className="text-[10px] text-slate-500 italic">"AI detected a knowledge gap at 04:20. Here is the key takeaway:"</p>
                <div className="bg-white p-2 rounded-lg text-[11px] font-bold text-emerald-700">
                  💡 In 2026 markets, price elasticity is volatile due to algorithm-driven consumer shifts.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. AI RESEARCHER (Out of the Box) */}
        <div 
          onClick={() => setActiveInsight(activeInsight === 'article' ? null : 'article')}
          className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all cursor-pointer"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-700 text-sm font-bold">Article: Macro-Policy Ethics</span>
            <Brain size={14} className="text-purple-400" />
          </div>
          <AnimatePresence>
            {activeInsight === 'article' && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-3 pt-3 border-t border-purple-100">
                <p className="text-[10px] text-purple-600 font-bold mb-2 uppercase tracking-tighter">Neural Summary (3 Points):</p>
                <ul className="text-[10px] text-slate-500 space-y-1 list-disc pl-4">
                  <li>Interest rates are no longer the only lever for inflation.</li>
                  <li>Ethical policy-making requires transparent AI auditing.</li>
                  <li>Debt cycles are accelerating by 14% annually.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. ADAPTIVE QUIZ (The primary call to action) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={onStartPractice}
          className="p-5 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl text-white shadow-lg cursor-pointer group relative overflow-hidden"
        >
          <Zap size={40} className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform" />
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-indigo-200">Session Ready</span>
              <h5 className="font-bold text-sm">Adaptive Elasticity Quiz</h5>
            </div>
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
              <ChevronRight size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  {/* WEEKLY STREAK SECTION (Keep your original code here) */}
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between">
      <h4 className="font-bold mb-4 flex items-center gap-2"><Calendar size={18} className="text-indigo-600" /> Learning Streak</h4>
      <div className="flex justify-between items-end h-24 gap-2">
        {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
          <motion.div 
            key={i} 
            initial={{ height: 0 }} 
            animate={{ height: `${h}%` }} 
            className={`w-full rounded-t-lg ${i === 6 ? 'bg-indigo-600' : 'bg-slate-200'}`} 
          />
        ))}
      </div>
      <p className="text-center text-xs font-black text-slate-400 mt-4 tracking-widest uppercase">Last 7 Days Activity</p>
  </div>
</div>

            {/* 2.5 UNIVERSITY ADMISSION HUB (FILTERABLE) */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Zap className="text-indigo-600" size={20} /> Admissions Hub 2026
                </h2>
                <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                  {["All", "USA", "Europe", "Asia"].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setFilter(reg)}
                      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${filter === reg ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-indigo-400'
                        }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredUnis.map((uni, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={uni.name}
                      onClick={() => window.open(uni.url, "_blank")}
                      className="group p-5 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{uni.name}</h4>
                        <span className="px-2 py-1 bg-white border border-slate-200 text-slate-500 text-[9px] font-black rounded-lg uppercase tracking-tighter">
                          {uni.region}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Calendar size={14} className="text-indigo-400" />
                          <span className="font-medium">Deadline:</span>
                          <span className="text-slate-900 font-bold">{uni.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <ShieldCheck size={14} className="text-indigo-400" />
                          <span className="font-medium">Reqs:</span>
                          <span className="text-slate-700 font-semibold truncate max-w-[150px]">{uni.tests}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200/50 flex justify-between items-center">
                        <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${uni.status === "Closed" ? 'text-rose-500' : 'text-emerald-600'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${uni.status === "Closed" ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                          {uni.status}
                        </span>
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">Visit Portal →</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* 3. ETHICS TRANSPARENCY LOG */}
            <div className="bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100">
              <h4 className="text-emerald-700 font-bold flex items-center gap-2 text-sm mb-4">
                <ShieldCheck size={18} /> Explainable AI (XAI) Transparency Log
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-[11px] text-emerald-800/70 font-medium uppercase tracking-wider">
                <div className="bg-white/50 p-3 rounded-xl border border-emerald-100">Data Source: Anonymized interaction logs</div>
                <div className="bg-white/50 p-3 rounded-xl border border-emerald-100">Bias Check: Passed (Jan 7, 2026)</div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: 4 COLUMNS WIDE --- */}
          <div className="lg:col-span-4 space-y-8">

            {/* AI AGENT CARD */}
            <div className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="flex items-center gap-2 mb-6 text-indigo-300">
                <Brain size={24} /> <span className="text-xs font-black uppercase tracking-[0.2em]">Live Agent</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Adjustment</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                "Your engagement peaks during visual tasks. Should I restructure your path to be 80% video-based?"
              </p>
              <button
                onClick={handleAdjust}
                disabled={isAdjusted}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-xl ${isAdjusted ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-[1.02]'}`}
              >
                {isAdjusted ? "Path Optimized" : "Accept Optimization"}
              </button>
            </div>

            {/* TUTOR CARD */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" className="w-full h-full rounded-3xl object-cover" alt="Tutor" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <h4 className="font-bold text-slate-900">Dr. Julia Davis</h4>
              <p className="text-xs text-slate-400 font-bold uppercase mb-6">Expert in Macro-Theory</p>

              <button
                onClick={onBook}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg"
              >
                <MessageSquare size={16} /> Book Human Support
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}