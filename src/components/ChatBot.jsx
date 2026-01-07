import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, Loader2 } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your EduAI assistant. I'm optimized for accuracy and low-cost search. How can I help?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);
const handleSend = async () => {
  if (!input.trim()) return;
  
  const userMessage = { role: "user", content: input };
  setMessages(prev => [...prev, userMessage]);
  const currentInput = input;
  setInput("");
  setLoading(true);

  try {
    const API_KEY = import.meta.env.VITE_PPLX_API_KEY;

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // 1. USE THE LOWEST PRICE MODEL
        model: "sonar", 
        messages: [
          { 
            role: "system", 
            content: "Be extremely concise. Answer in 1-2 sentences only." 
          },
          { role: "user", content: currentInput }
        ],
        // 2. LIMIT TOKENS (This directly saves money)
        max_tokens: 100, 
        temperature: 0.1,
        // 3. OPTIONAL: Standard search domain filters if needed
        search_domain_filter: ["edu", "gov", "org"], 
        stream: false
      }),
    });

    const data = await response.json();
    const aiText = data.choices[0].message.content;
    
    // Log usage to console so you can track your spending
    console.log("Tokens used:", data.usage.total_tokens);

    setMessages(prev => [...prev, { role: "assistant", content: aiText }]);
  } catch (error) {
    console.error("Chat Error:", error);
    setMessages(prev => [...prev, { role: "assistant", content: "I'm in energy-saving mode. Try again shortly!" }]);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-[360px] h-[520px] rounded-[2.5rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4"
          >
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-2 rounded-xl"><Bot size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm">EduAI Tutor</h4>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Secure Mode Active</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-700 rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold animate-pulse">
                  <Loader2 size={14} className="animate-spin" /> Verifying sources...
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t flex flex-col gap-2">
              <div className="flex gap-2">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a specific question..."
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600 transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-slate-900 text-white p-3 rounded-xl hover:bg-indigo-600 transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-slate-400 text-center uppercase tracking-tighter">
                Fact-Checked by Perplexity AI | Optimized for Credits
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white p-5 rounded-full shadow-2xl border-4 border-white"
      >
        <MessageSquare size={28} />
      </motion.button>
    </div>
  );
}