import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatBot from "./components/ChatBot";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TutorMarketplace from "./components/TutorMarketplace";
import TutorProfile from "./components/TutorProfile"; // New
import EthicsSection from "./components/EthicsSection";
import Pricing from "./components/Pricing";
import DashboardMockup from "./components/DashboardMockup";
import BookingScreen from "./components/BookingScreen";
import VideoCall from "./components/VideoCall";
import Footer from "./components/Footer";


export default function App() {
  const [view, setView] = useState("landing"); 
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar setView={setView} currentView={view} />
      
      <main className="pt-20"> 
        <AnimatePresence mode="wait">
          
          {/* LANDING PAGE */}
          {view === "landing" && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero onExplore={() => setView("dashboard")} />
              <div id="features"><Features /></div>
              <TutorMarketplace onViewProfile={(tutor) => {
                setSelectedTutor(tutor);
                setView("profile");
              }} />
              <div id="ethics"><EthicsSection /></div>
              <div id="pricing">
                <Pricing 
                  onSelectAI={() => setView("dashboard")} 
                  onSelectTutor={() => setView("booking")} 
                />
              </div>
              <Footer />
            </motion.div>
          )}

          {/* TUTOR PROFILE VIEW */}
          {view === "profile" && (
            <motion.div key="profile" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
              <TutorProfile 
                tutor={selectedTutor} 
                onBack={() => setView("landing")} 
                onBook={() => setView("booking")} 
              />
            </motion.div>
          )}

          {/* AI AGENT DASHBOARD */}
          {view === "dashboard" && (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <DashboardMockup goBack={() => setView("landing")} onBook={() => setView("booking")} />
            </motion.div>
          )}

          {/* BOOKING SCREEN */}
          {view === "booking" && (
            <motion.div key="booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <BookingScreen onConfirmCall={() => setView("videocall")} onBackToMain={() => setView("landing")} />
            </motion.div>
          )}

          {/* VIDEO CALL */}
          {view === "videocall" && (
            <motion.div key="videocall" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <VideoCall onEnd={() => setView("landing")} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>
      <ChatBot />
    </div>
  );
}