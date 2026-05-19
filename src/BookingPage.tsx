import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Send, Calendar, MapPin, Users, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer.tsx";

import Navbar from "./components/Navbar.tsx";

export default function BookingPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="relative w-full min-h-screen flex items-center justify-center font-sans overflow-hidden bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center px-6"
        >
          <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center mx-auto mb-8 text-black border border-white/60 shadow-sm">
            <CheckCircle2 size={40} strokeWidth={1} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-gradient mb-4 uppercase">Gratitude.</h2>
          <p className="text-black text-lg max-w-md mx-auto leading-relaxed mb-10 font-normal">
            Our lead director has received your vision. We will reach out within 48 hours to orchestrate our first private consultation.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="bg-black text-white rounded-full px-8 py-3 text-[10px] uppercase tracking-widest font-bold shadow-lg hover:bg-black/80 transition-colors"
          >
            Return to Atelier
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen font-sans selection:bg-black/10 selection:text-black bg-white">
      <Navbar />

      <div className="relative z-10 w-full pt-32 pb-10 px-4 sm:px-6 md:px-10">
          {/* Content Container */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="text-center mb-12"
          >
            <p className="section-label mb-5 justify-center">
              Reserve Your Date
            </p>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-brand-black font-bold uppercase mb-6 drop-shadow-sm">
              Begin Your <br />
              <em className="italic font-normal lowercase text-brand-red">Legacy Story</em>
            </h1>
            <p className="text-brand-brown text-sm md:text-base max-w-xl mx-auto leading-relaxed font-bold drop-shadow-sm">
              Reserve your date and share your vision with us. We only accept a limited number of weddings each season to ensure extraordinary attention to detail.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
             initial={{ opacity: 0, y: 60, rotateX: 20, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             whileHover={{ rotateY: 1, rotateX: -1 }}
             className="w-full liquid-glass rounded-[3rem] p-8 md:p-14 mb-20 shadow-2xl backdrop-blur-3xl border border-black/10 [transform-style:preserve-3d] bg-white"
             onSubmit={(e) => {
               e.preventDefault();
               setSubmitted(true);
             }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-brand-black">
              {/* Personal Details */}
              <div className="space-y-8">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Partner One Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Julian Aubrey"
                    className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors placeholder:text-brand-brown/40"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Partner Two Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Elena Vance"
                    className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors placeholder:text-brand-brown/40"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors placeholder:text-brand-brown/40"
                  />
                </div>
              </div>

              {/* Event Details */}
               <div className="space-y-8">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Desired Season / Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-red" />
                    <input 
                      type="text" 
                      placeholder="Autumn 2026"
                      className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors placeholder:text-brand-brown/40"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Location / Destination</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-red" />
                    <input 
                      type="text" 
                      placeholder="Lake Como, Italy"
                      className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors placeholder:text-brand-brown/40"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">Estimated Guest Count</label>
                  <div className="relative">
                    <Users size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-red" />
                    <select className="w-full bg-transparent border-b border-brand-red py-3 text-lg outline-none focus:border-brand-black transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-white">Select Range</option>
                      <option value="elopement" className="bg-white">Elopement (2-10)</option>
                      <option value="intimate" className="bg-white">Intimate (10-50)</option>
                      <option value="classic" className="bg-white">Classic (50-150)</option>
                      <option value="grand" className="bg-white">Grand (150+)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-brown mb-3 block group-focus-within:text-brand-red transition-colors font-bold">The Vision</label>
              <textarea 
                rows={4}
                placeholder="Tell us about the atmosphere you wish to create..."
                className="w-full bg-transparent border border-brand-red/30 rounded-2xl p-4 text-base outline-none focus:border-brand-red transition-colors placeholder:text-brand-brown/40 resize-none font-normal"
              />
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3 text-brand-black">
                 <Heart size={16} className="text-brand-red" />
                 <p className="text-xs italic font-bold text-brand-brown">Every detail is an intentional choice.</p>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto rounded-full bg-brand-red text-white px-12 py-5 text-sm font-semibold hover:scale-[1.03] transition-transform cursor-pointer flex items-center justify-center gap-3 shadow-2xl"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>

        {/* Footer (Full) */}
        <Footer />
      </div>
    </main>
);
}
