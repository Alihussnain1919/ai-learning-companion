import { useState } from "react";
import { Brain, Globe, ChevronDown } from "lucide-react"; // Added missing icons

export default function Navbar({ setView, currentView }) {
  // Added the missing state for the language dropdown
  const [langOpen, setLangOpen] = useState(false);

  const handleNav = (sectionId) => {
    if (currentView !== "landing") {
      setView("landing");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md h-20 flex items-center border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setView('landing'); window.scrollTo(0,0); }}>
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg"><Brain size={24} /></div>
          <span className="text-xl font-black">EduAI</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
          <button onClick={() => { setView('landing'); window.scrollTo(0,0); }}>Vision</button>
          <button onClick={() => handleNav('courses')}>Courses</button>
          <button onClick={() => handleNav('features')}>Features</button>
          <button onClick={() => handleNav('tutors')}>Tutors</button>
          <button onClick={() => handleNav('ethics')}>Ethics</button>
          <button onClick={() => handleNav('pricing')}>Pricing</button>
        </div>

        {/* Right Side: Language & Auth */}
        <div className="flex items-center gap-6">
          
          {/* Language Selector */}
          <div className="relative group">
            <button 
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
              className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm"
            >
              <Globe size={18} />
              <span className="hidden sm:block">EN</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown List */}
            {langOpen && (
              <div 
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
                className="absolute right-0 top-full pt-2 w-32 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    German
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-5 py-2.5 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-all">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}