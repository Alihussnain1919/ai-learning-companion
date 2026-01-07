import { motion } from "framer-motion";
import { ArrowLeft, Star, ShieldCheck, GraduationCap, Award, Globe, Video } from "lucide-react";

export default function TutorProfile({ tutor, onBack, onBook }) {
  // If no tutor is selected, don't show anything to prevent errors
  if (!tutor) return null;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Banner */}
      <div className="h-64 bg-gradient-to-r from-indigo-600 to-violet-700 relative">
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all border border-white/20"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Side Card: Profile & Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-slate-100 text-center">
              <img 
                src={tutor.image} 
                className="w-48 h-48 rounded-[2.5rem] object-cover mx-auto mb-6 shadow-xl border-4 border-white" 
                alt={tutor.name} 
              />
              <h2 className="text-2xl font-black text-slate-900 mb-1">{tutor.name}</h2>
              <p className="text-indigo-600 font-bold text-sm mb-4">{tutor.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-8">
                <Star size={18} fill="currentColor" />
                <span className="text-slate-900 font-bold ml-1">{tutor.rating}</span>
                <span className="text-slate-400 font-medium text-xs">(Verified Expert)</span>
              </div>

              <button 
                onClick={onBook}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-indigo-600 transition-all mb-4"
              >
                Book a Session
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" /> Identity Verified by AI
              </div>
            </div>
          </div>

          {/* Main Content: Bio & Skills */}
          <div className="lg:col-span-2 pt-32 lg:pt-40">
            <div className="space-y-12">
              <section>
                <h3 className="text-sm font-black text-indigo-600 uppercase tracking-[0.3em] mb-4 text-left">Biography</h3>
                <p className="text-slate-600 leading-relaxed text-lg text-left">
                  {tutor.bio || "Specializing in advanced academic concepts and cognitive skill development. This mentor focuses on bridging the gap between theory and practical application using AI-driven insights."}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">Education</h4>
                    <p className="text-sm text-slate-500">Ph.D. / Specialized Master's Graduate</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Video size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">Platform Ready</h4>
                    <p className="text-sm text-slate-500">Equipped with AI-Tutor Synergy Tools</p>
                  </div>
                </div>
              </div>

              <section className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-indigo-600" /> Specialized Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tutor.tags && tutor.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}