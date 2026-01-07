import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight } from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Dr. Julia Davis",
    role: "Macroeconomics Expert",
    tags: ["Graduate", "Professional"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    rating: "5.0",
    bio: "Ph.D. in Economics with 10+ years of mentoring professional learners."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "K-12 Math Mentor",
    tags: ["Young Learners", "Calculus"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    rating: "4.9",
    bio: "Specializing in early childhood cognitive development and advanced mathematics."
  }
];

export default function TutorMarketplace({ onViewProfile }) {
  return (
    <section id="tutors" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Expert Mentorship</h2>
            <p className="text-slate-500 text-lg leading-relaxed">AI identifies the gap; our elite tutors bridge it.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <motion.div key={tutor.id} whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] p-8 border border-slate-200">
              <div className="relative mb-8">
                <img src={tutor.image} className="w-full h-72 object-cover rounded-[2.5rem] shadow-lg" alt={tutor.name} />
                <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-2xl flex items-center gap-1 text-sm font-black shadow-xl">
                  <Star size={16} className="text-amber-400 fill-amber-400" /> {tutor.rating}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{tutor.name}</h3>
              <p className="text-sm text-slate-500 mb-8">{tutor.role}</p>
              <button onClick={() => onViewProfile(tutor)} className="w-full py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all">
                View Expert Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}