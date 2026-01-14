import React, { useState } from 'react';
import { Search, Play, Star, GraduationCap, Zap, Award, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseHub({ onSelectCourse }) {
  const [filter, setFilter] = useState("Grade 1");
  const [search, setSearch] = useState("");

  const levels = ["Grade 1", "Grade 2", "Professionals", "Parenting"];
  
  const courses = [
    // --- GRADE 1 ---
    { id: 1, title: "Grundschule Mathematik", instructor: "Frau Schmidt", level: "Grade 1", rating: 4.8, students: "1.2k", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400", aiFit: "98%", topic: "Numbers to 20" },
    { id: 2, title: "Deutsch: Erstlesen", instructor: "Herr Müller", level: "Grade 1", rating: 4.9, students: "950", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400", aiFit: "92%", topic: "Phonics" },
    { id: 3, title: "English: Fun & Games", instructor: "Mrs. Baker", level: "Grade 1", rating: 4.7, students: "2.1k", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400", aiFit: "95%", topic: "Basic Vocab" },
    { id: 4, title: "Sachkunde: Heimatkunde", instructor: "Dr. Weber", level: "Grade 1", rating: 4.8, students: "1.1k", image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=400", aiFit: "89%", topic: "Local Environment" },

    // --- GRADE 2 ---
    { id: 5, title: "Mathematik: Das 1x1", instructor: "Frau Schmidt", level: "Grade 2", rating: 4.9, students: "1.5k", image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400", aiFit: "94%", topic: "Multiplication" },
    { id: 6, title: "English: Storytelling", instructor: "Mrs. Baker", level: "Grade 2", rating: 4.8, students: "1.8k", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400", aiFit: "91%", topic: "Sentences" },

    // --- PROFESSIONALS ---
    { id: 7, title: "Finanzmanagement (DE)", instructor: "Dr. Scholz", level: "Professionals", rating: 5.0, students: "3k", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", aiFit: "99%", topic: "Excel/Tax" },
    { id: 8, title: "AI Business Strategy", instructor: "Markus Kraft", level: "Professionals", rating: 4.9, students: "2.2k", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400", aiFit: "97%", topic: "Efficiency" },

    // --- PARENTING ---
    { id: 9, title: "School Readiness", instructor: "Elena Wagner", level: "Parenting", rating: 4.8, students: "4k", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400", aiFit: "90%", topic: "Preparation" }
  ];

  const filteredCourses = courses.filter(c => 
    c.level === filter && c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 italic font-serif">
            German <span className="text-indigo-600 not-italic font-sans">Curriculum Hub</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2">
            <Globe size={14} className="text-indigo-500" /> State Verified Standards • 2026 Ready
          </p>
        </div>

        {/* Search with Pulse effect */}
        <div className="relative max-w-md w-full">
          <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full" />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search Math, English, Professional..." 
            className="relative w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-[2rem] outline-none shadow-xl focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grade Filters - More like a high-end menu */}
      <div className="flex gap-4 mb-14 overflow-x-auto pb-4 scrollbar-hide">
        {levels.map(lvl => (
          <button 
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={`px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
              filter === lvl 
              ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105' 
              : 'bg-white text-slate-400 border-slate-100 hover:border-indigo-300'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* The Horizontal Slider */}
      <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide -mx-4 px-4">
        {filteredCourses.length > 0 ? filteredCourses.map(course => (
          <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="min-w-[360px] bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all group"
          >
            {/* Image & AI Label */}
            <div className="h-56 relative overflow-hidden">
              <img src={course.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
              
              {/* AI FIT BADGE (The differentiator) */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                <Zap size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">AI Fit: {course.aiFit}</span>
              </div>

              <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl transform scale-50 group-hover:scale-100 transition-transform">
                    <Play size={32} fill="currentColor" />
                 </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-black text-2xl text-slate-800 leading-tight mb-1 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">{course.topic}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-8 text-slate-400 font-bold text-xs">
                 <GraduationCap size={16} className="text-slate-300" />
                 {course.instructor}
              </div>

              {/* Progress Bar (Visualizing Mastery) */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[9px] font-black uppercase text-slate-300">
                  <span>Curriculum Mastery</span>
                  <span>92% Potential</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-[85%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-1 text-emerald-500 font-black text-sm">
                  <Star size={14} fill="currentColor" /> {course.rating}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase">
                  <Award size={12} /> German Verified
                </div>
              </div>
            </div>
          </motion.div>
        )) : (
          <div className="w-full py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
            <BookOpen size={48} className="mb-4 opacity-20" />
            <p className="font-bold">No courses found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}