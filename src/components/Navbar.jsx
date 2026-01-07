import { Brain } from "lucide-react";

export default function Navbar({ setView, currentView }) {
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
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setView('landing'); window.scrollTo(0,0); }}>
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg"><Brain size={24} /></div>
          <span className="text-xl font-black">EduAI</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
          <button onClick={() => { setView('landing'); window.scrollTo(0,0); }}>Vision</button>
          <button onClick={() => handleNav('features')}>Features</button>
          <button onClick={() => handleNav('tutors')}>Tutors</button>
          <button onClick={() => handleNav('ethics')}>Ethics</button>
          <button onClick={() => handleNav('pricing')}>Pricing</button>
        </div>

        <button onClick={() => setView('dashboard')} className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-600 transition-all">
          Launch AI
        </button>
      </div>
    </nav>
  );
}