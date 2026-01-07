import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Globe, Users } from "lucide-react";

export default function Pricing({ onSelectAI, onSelectTutor, onSelectEnterprise }) {
  const plans = [
    {
      name: "Starter (Self-Paced)",
      price: "$19",
      description: "Perfect for students looking for AI-driven academic support.",
      features: ["Adaptive Study Paths", "Real-time AI Feedback", "Ethics & Privacy Dashboard", "Basic Analytics"],
      buttonText: "Launch AI Agent",
      action: onSelectAI,
      highlight: false,
      icon: <Zap className="text-indigo-600" />
    },
    {
      name: "Tutor Marketplace",
      price: "Commission",
      description: "One-on-one mentorship with specialized domain experts.",
      features: ["Verified Human Tutors", "AI-Human Synergy Data", "Immediate Connect Option", "Video Whiteboard"],
      buttonText: "Find a Tutor",
      action: onSelectTutor,
      highlight: true,
      icon: <Users className="text-white" />
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Invest in Your <span className="text-indigo-600">Potential.</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent pricing models designed to scale with your learning journey, 
            backed by our commitment to ethical data use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[3.5rem] flex flex-col transition-all duration-300 ${
                plan.highlight 
                ? "bg-slate-900 text-white shadow-2xl shadow-indigo-200 ring-4 ring-indigo-500/20" 
                : "bg-white border border-slate-200 shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Highly Recommended
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-white/10' : 'bg-indigo-50'}`}>
                  {plan.icon}
                </div>
                <div className="text-right">
                  <p className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'text-indigo-300' : 'text-slate-400'}`}>
                    {plan.price === "$19" ? "per month" : "per session"}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <Check size={18} className={plan.highlight ? "text-indigo-400" : "text-indigo-600"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.action}
                className={`w-full py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-lg ${
                  plan.highlight 
                  ? "bg-indigo-600 text-white hover:bg-white hover:text-slate-900" 
                  : "bg-slate-900 text-white hover:bg-indigo-600"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Vision Note */}
        <div className="mt-20 flex flex-col items-center justify-center text-center p-8 border-t border-slate-100">
           <ShieldCheck className="text-indigo-600 mb-4" size={32} />
           <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.3em] mb-2">Ethics Compliance</p>
           <p className="text-sm text-slate-500 max-w-lg italic">
             "Our business model ensures that even in our free-tier, your data remains yours. We never monetize personal learning patterns to third parties."
           </p>
        </div>
      </div>
    </section>
  );
}