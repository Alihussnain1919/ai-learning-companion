import React from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle } from 'lucide-react';

export default function CourseContent({ course, onBack, onFinish }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Video Area */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl group flex items-center justify-center">
               <img src={course.image} className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" />
               <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
               </button>
            </div>
            
            <div className="mt-8">
              <h1 className="text-4xl font-black text-slate-900 mb-2">{course.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{course.level}</span>
                <div className="flex items-center gap-1 text-emerald-600 font-black"><Star size={16} fill="currentColor" /> {course.rating}</div>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg">{course.desc}</p>
            </div>
          </div>

          {/* Sidebar - Course Actions */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
               <h3 className="font-black text-slate-900 mb-6 uppercase tracking-tighter">Your Instructor</h3>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    {course.instructor[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{course.instructor}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest tracking-tighter">Verified Expert</p>
                  </div>
               </div>
               <button onClick={onFinish} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-200 mb-4">
                 Subscribe & Start
               </button>
               <button className="w-full py-4 border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-white transition-all">
                 Download Materials (.PDF)
               </button>
            </div>

            <div className="p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100">
               <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                 <CheckCircle size={18} /> Curriculum Goal
               </h4>
               <p className="text-sm text-emerald-700 opacity-80">This course satisfies Section 4.2 of the German State Standards for {course.level}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}