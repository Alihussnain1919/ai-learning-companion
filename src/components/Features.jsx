import { Brain, Target, LineChart } from "lucide-react";

export default function Features() {
  const data = [
    { icon: <Brain />, title: "Predictive Analytics", desc: "Our AI forecasts where you will struggle before you even start the lesson." },
    { icon: <Target />, title: "Adaptive Curriculam", desc: "The platform rewrites itself daily based on your retention rates." },
    { icon: <LineChart />, title: "Skill Heatmaps", desc: "Visual proof of mastery across 50+ specialized domain areas." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {data.map((f, i) => (
          <div key={i} className="p-10 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <div className="text-indigo-600 mb-6 bg-indigo-50 w-fit p-4 rounded-2xl">{f.icon}</div>
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}