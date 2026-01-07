import { motion } from "framer-motion";
import { Shield, Eye, Lock, Scale, HeartHandshake } from "lucide-react";

const principles = [
  { icon: <Lock />, title: "Data Sovereignty", desc: "User data is encrypted with zero-knowledge protocols. You own your data." },
  { icon: <Eye />, title: "Explainable AI (XAI)", desc: "Our algorithms provide a 'Why' log for every recommendation made." },
  { icon: <Scale />, title: "Bias Mitigation", desc: "Weekly audits ensure learning paths are free from demographic bias." },
  { icon: <HeartHandshake />, title: "Human-in-the-loop", desc: "AI assists the journey, but human tutors provide the emotional intelligence." }
];

export default function EthicsSection() {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on a Moral Foundation.</h2>
          <p className="text-slate-400 text-xl leading-relaxed">
            We believe education technology should be transparent. Our framework follows the UNESCO Recommendation on the Ethics of Artificial Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-indigo-400 mb-4">{p.icon}</div>
              <h4 className="text-xl font-bold mb-3">{p.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}