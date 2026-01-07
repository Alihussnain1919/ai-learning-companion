import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lightbulb, CheckCircle2, Timer, HelpCircle, Sparkles, XCircle, ChevronLeft, ChevronRight } from "lucide-react";

const quizData = [
  {
    id: 1,
    title: "Market Dynamics",
    text: "If the price of a substitute good (like coffee) increases, what happens to the demand for the primary good (like tea)?",
    options: [
      { id: "a", text: "The demand for tea decreases." },
      { id: "b", text: "The demand for tea increases.", correct: true },
      { id: "c", text: "The demand remains unchanged." },
      { id: "d", text: "The supply of tea decreases." }
    ],
    correctFeedback: "Excellent! You've mastered the concept of Cross-Price Elasticity. When Coffee gets expensive, Tea becomes the hero. Your economic intuition is spot on!",
    wrongFeedback: "Not quite, but this is a tricky one! Remember: Substitutes are competitors. If one becomes expensive, people run to the other. Tea demand actually goes up!"
  },
  {
    id: 2,
    title: "Macro-Policy",
    text: "Which of the following is a tool used by Central Banks to control inflation?",
    options: [
      { id: "a", text: "Increasing Interest Rates", correct: true },
      { id: "b", text: "Decreasing Taxes" },
      { id: "c", text: "Increasing Government Spending" },
      { id: "d", text: "Lowering the Minimum Wage" }
    ],
    correctFeedback: "Perfect! By raising rates, the bank makes borrowing harder, which cools down the economy and lowers inflation. Great job!",
    wrongFeedback: "Almost! Taxes are handled by the government (Fiscal Policy). Central Banks use Interest Rates to control the 'heat' of the economy."
  }
];

export default function PracticeScreen({ goBack }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Stores answers for all questions
  const [submittedStatus, setSubmittedStatus] = useState({}); // Stores which questions are submitted
  const [displayedText, setDisplayedText] = useState("");
  
  const currentQuestion = quizData[currentIdx];
  const isCurrentSubmitted = submittedStatus[currentIdx];
  const userChoice = selectedAnswers[currentIdx];

  // Logic for the Typewriter Feedback
  useEffect(() => {
    if (isCurrentSubmitted) {
      const isCorrect = currentQuestion.options.find(o => o.id === userChoice)?.correct;
      const fullFeedback = isCorrect ? currentQuestion.correctFeedback : currentQuestion.wrongFeedback;
      
      let i = 0;
      setDisplayedText("");
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + fullFeedback.charAt(i));
        i++;
        if (i >= fullFeedback.length) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }
  }, [isCurrentSubmitted, currentIdx]);

  const handleSubmit = () => {
    setSubmittedStatus({ ...submittedStatus, [currentIdx]: true });
  };

  const handleNext = () => {
    if (currentIdx < quizData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  // Calculate overall progress percentage
  const progressPercent = ((currentIdx + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-12 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header & Progress Bar */}
        <div className="mb-10 space-y-6">
          <div className="flex justify-between items-center">
            <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all font-bold uppercase text-[10px] tracking-widest">
              <ArrowLeft size={16} /> Quit Session
            </button>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-500">
              <Timer size={14} className="text-indigo-500" /> 08:45 Remaining
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
              <span>Overall Progress</span>
              <span>Question {currentIdx + 1} of {quizData.length}</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                className="h-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 relative z-10"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em]">{currentQuestion.title}</p>
            {isCurrentSubmitted && (
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
                  currentQuestion.options.find(o => o.id === userChoice)?.correct 
                  ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {currentQuestion.options.find(o => o.id === userChoice)?.correct ? '✓ Correct' : '✕ Incorrect'}
                </span>
            )}
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-10">{currentQuestion.text}</h2>

          <div className="space-y-4 mb-10">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.id}
                disabled={isCurrentSubmitted}
                onClick={() => setSelectedAnswers({...selectedAnswers, [currentIdx]: opt.id})}
                className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex justify-between items-center
                  ${userChoice === opt.id ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-100 hover:border-indigo-200'}
                  ${isCurrentSubmitted && opt.correct ? 'border-emerald-500 bg-emerald-50' : ''}
                  ${isCurrentSubmitted && userChoice === opt.id && !opt.correct ? 'border-rose-500 bg-rose-50' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border ${userChoice === opt.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200'}`}>
                    {opt.id.toUpperCase()}
                  </span>
                  <span className="font-bold text-slate-700">{opt.text}</span>
                </div>
                {isCurrentSubmitted && opt.correct && <CheckCircle2 className="text-emerald-500" size={20} />}
                {isCurrentSubmitted && userChoice === opt.id && !opt.correct && <XCircle className="text-rose-500" size={20} />}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
            <button 
              onClick={handlePrev} 
              disabled={currentIdx === 0}
              className="p-4 rounded-2xl bg-slate-50 text-slate-400 disabled:opacity-30 hover:bg-slate-100 transition-all"
            >
              <ChevronLeft />
            </button>
            
            <button 
              className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all disabled:opacity-50 shadow-lg"
              onClick={handleSubmit}
              disabled={!userChoice || isCurrentSubmitted}
            >
              Submit Answer
            </button>

            <button 
              onClick={handleNext}
              disabled={currentIdx === quizData.length - 1 || !isCurrentSubmitted}
              className="px-8 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 disabled:opacity-30 transition-all flex items-center gap-2"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* --- AI FEEDBACK POPUP --- */}
        <AnimatePresence>
          {isCurrentSubmitted && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-32 right-6 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden z-[100]"
            >
              <div className={`p-4 text-white flex items-center gap-2 ${
                currentQuestion.options.find(o => o.id === userChoice)?.correct ? 'bg-emerald-600' : 'bg-slate-900'
              }`}>
                <div className="bg-white/20 p-1.5 rounded-lg"><Sparkles size={14} /></div>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {currentQuestion.options.find(o => o.id === userChoice)?.correct ? 'Tutor Appreciation' : 'Learning Moment'}
                </span>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {displayedText}
                  <span className="inline-block w-1 h-3 bg-indigo-500 ml-1 animate-pulse" />
                </p>
                {currentIdx === quizData.length - 1 && (
                    <button onClick={goBack} className="mt-4 w-full py-3 bg-slate-100 rounded-xl text-[10px] font-black uppercase text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                      Finish & Return Home
                    </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}