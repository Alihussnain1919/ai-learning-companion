import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Star, ShieldCheck, Video, CheckCircle2, Zap, X } from "lucide-react";
import { useState } from "react";

export default function BookingScreen({ onConfirmCall, onBackToMain }) {
  const [selectedDate, setSelectedDate] = useState("Jan 14");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingType, setBookingType] = useState(null); // 'standard' or 'immediate'
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleStandardConfirm = () => {
    setShowSuccess(true);
    // After 3 seconds, automatically go to main page
    setTimeout(() => {
      onBackToMain();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <button onClick={onBackToMain} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-10 font-semibold">
          <ArrowLeft size={20} /> Return to Home
        </button>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT: TUTOR PROFILE */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-sm sticky top-28">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" className="w-32 h-32 mx-auto rounded-[2.5rem] shadow-xl mb-6 object-cover" alt="Tutor" />
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Dr. Julia Davis</h3>
                <p className="text-indigo-600 font-semibold text-sm">Microeconomics Specialist</p>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 size={18} className="text-indigo-600" /> AI Verified Expert</div>
                <div className="flex items-center gap-3 text-sm text-slate-600"><Video size={18} className="text-indigo-600" /> HD Video Enabled</div>
              </div>
            </div>
          </div>

          {/* RIGHT: SELECTION */}
          <div className="lg:col-span-3 space-y-6">
            {/* CHOICE BOXES */}
            <div className="grid md:grid-cols-2 gap-4">
              <button 
                onClick={() => setBookingType('standard')}
                className={`p-6 rounded-3xl border-2 text-left transition-all ${bookingType === 'standard' ? 'border-indigo-600 bg-indigo-50' : 'border-white bg-white'}`}
              >
                <Calendar className="mb-3 text-indigo-600" />
                <p className="font-bold">Standard Booking</p>
                <p className="text-xs text-slate-500">Pick a time for later</p>
              </button>
            <button 
        onClick={onConfirmCall} // This must match the prop name in App.jsx
        className="p-6 rounded-3xl border-2 border-white bg-white text-left hover:border-amber-400 transition-all group shadow-sm"
      >
        <div className="flex justify-between items-start mb-3">
          <Zap className="text-amber-500 group-hover:animate-pulse" />
          <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">POPULAR</span>
        </div>
        <p className="font-bold">Immediate Call</p>
        <p className="text-xs text-slate-500">Launch now (+$5.00 fee)</p>
      </button>
            </div>

            {/* CALENDAR (Only shows if standard is selected) */}
            <AnimatePresence>
              {bookingType === 'standard' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-sm space-y-8"
                >
                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 block">Select Date</label>
                    <div className="flex gap-2">
                      {["Jan 14", "Jan 15", "Jan 16"].map(d => (
                        <button key={d} onClick={() => setSelectedDate(d)} className={`px-4 py-3 rounded-xl font-bold text-sm ${selectedDate === d ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>{d}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 block">Available Slots</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map(t => (
                        <button key={t} onClick={() => setSelectedTime(t)} className={`p-3 rounded-xl border font-bold text-sm ${selectedTime === t ? 'bg-slate-900 text-white' : 'bg-white hover:border-indigo-600'}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <button 
                    disabled={!selectedTime}
                    onClick={handleStandardConfirm}
                    className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg disabled:opacity-50"
                  >
                    Confirm Booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[200] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-10 rounded-[3rem] max-w-sm w-full text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
              <h3 className="text-xl font-bold mb-2">Session Booked!</h3>
              <p className="text-slate-500 text-sm mb-6">Your session for {selectedDate} at {selectedTime} is confirmed. Redirecting to home...</p>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3 }} className="bg-green-500 h-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}