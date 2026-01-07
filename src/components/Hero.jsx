import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero({ onExplore }) {
  return (

    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] -mr-48 -mt-48 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
        >
          {/* This badge will now be visible below the navbar */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-indigo-200">
            <Sparkles size={14} /> 2026 Academic Innovation
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Learning that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Evolves</span> with You.
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
            Our AI-powered companion maps your unique cognitive patterns to build a personalized path, connecting you with human experts the moment you need them.
          </p>

          <div className="flex flex-wrap gap-5">
            <button 
              onClick={onExplore}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-600 transition-all hover:scale-105 shadow-2xl shadow-slate-200"
            >
              Launch AI Agent <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Image Part */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-square bg-slate-100 rounded-[4rem] relative overflow-hidden group border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
              alt="Collaboration" 
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl">
             <p className="text-indigo-600 font-black text-2xl tracking-tighter">98.4%</p>
             <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Personalization Index</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}