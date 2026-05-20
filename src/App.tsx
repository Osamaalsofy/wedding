import { useState, useRef, MouseEvent as ReactMouseEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.tsx";

import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Quote,
  Palette,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Luxury Wedding Design",
    details: ["Spatial Curation", "Bespoke Color Theory"],
    description:
      "Curated cinematic wedding experiences crafted with timeless elegance and modern refinement.",
  },
  {
    title: "Destination Planning",
    details: ["Global Concierge", "Venue Buyouts"],
    description:
      "Exclusive destination weddings orchestrated with precision across breathtaking global venues.",
  },
  {
    title: "Creative Direction",
    details: ["3D Spatial Modeling", "Atmospheric Plots"],
    description:
      "From moodboards to CGI-inspired aesthetics, every visual detail is intentionally designed.",
  },
  {
    title: "Floral & Botanical Art",
    details: ["Sculptural Florals", "Sensory Scentscapes"],
    description:
      "Living botanical masterpieces of scale and fragrance designed to complement historic spaces.",
  },
  {
    title: "Technical Production",
    details: ["Ambiance Lighting", "Immersive Acoustics"],
    description:
      "Cinematic lighting architectures and flawless acoustics that direct the day's energy dynamically.",
  },
  {
    title: "Culinary Orchestration",
    details: ["Michelin Gastronomy", "Artisanal Sommeliers"],
    description:
      "Partnering with world-renowned chefs to design high-concept banquets and custom-paired dining.",
  },
];

const gallery = [
  { 
    title: "The Glass Pavilion", 
    location: "Paris, FR", 
    description: "A minimalist masterpiece of light and reflection beneath the stars.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2669"
  },
  { 
    title: "Mediterranean Dusk", 
    location: "Amalfi Coast, IT", 
    description: "Sun-drenched terraces meeting the boundless blue of the Tyrrhenian Sea.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=2670"
  },
  { 
    title: "Eternal Garden", 
    location: "Kyoto, JP", 
    description: "Quiet elegance woven through centuries-old traditions and botanical grace.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=2574"
  },
  { 
    title: "Midnight Opulence", 
    location: "London, UK", 
    description: "Dramatic shadows and rich textures defined by cinematic city lights.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2670"
  }
];

import Navbar from "./components/Navbar.tsx";

export default function App() {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleGalleryScroll = () => {
    if (!sliderRef.current) return;
    const element = sliderRef.current;
    const scrollLeft = element.scrollLeft;
    const itemWidth = element.scrollWidth / gallery.length;
    const newIndex = Math.round(scrollLeft / itemWidth);
    
    if (newIndex !== galleryIndex && newIndex >= 0 && newIndex < gallery.length) {
       setGalleryIndex(newIndex);
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeftStart.current = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const children = sliderRef.current.children;
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <main id="home" className="relative w-full min-h-screen font-sans selection:bg-black/10 selection:text-black bg-white">
      {/* =========================
          NAVBAR
      ========================== */}
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        {/* Hero Content Area - Centered and Transactional */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-center">
            {/* 1. Contained Hero Image ("The Palace Image") - First thing below navbar */}
            <div className="w-full max-w-[1550px] mb-16 md:mb-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[16/10] md:aspect-[21/10] w-full overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] bg-black/5"
              >
                <motion.img 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src="https://raw.githubusercontent.com/Osamaalsofy/wedding/main/src/assets/images/BG.png" 
                  alt="Atelier Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>
            </div>

            {/* 2. Heading Section - Below the Picture */}
            <div className="w-full text-center mb-16 md:mb-24">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.5rem] sm:text-5xl md:text-[80px] lg:text-[80px] xl:text-[80px] leading-[0.9] tracking-[-0.05em] text-brand-black font-bold uppercase"
              >
                Designing
                <br />
                unforgettable
                <br />
                <em className="italic font-normal lowercase text-brand-red">wedding stories</em>
              </motion.h1>
            </div>

        </div>
      </section>

        {/* Content Sections Area */}
        <div className="relative z-10 w-full">
          <section className="w-full bg-[#fdfdfc]">
            <div className="max-w-7xl px-5 md:px-8 mx-auto flex flex-col py-32 md:py-40">
              {/* =========================
                  ABOUT SECTION
              ========================== */}
              <section id="about" className="py-20 flex flex-col items-center">
                <div className="w-full max-w-5xl">
                   <div className="flex flex-col items-center text-center mb-16">
                      <p className="section-label">
                        <span>Founder's Note</span>
                      </p>
                      <h2 className="text-4xl md:text-6xl leading-[1.1] text-brand-black font-bold uppercase tracking-tighter mt-6">
                        Crafting legacies through
                        <br />
                        <em className="italic font-normal lowercase font-serif border-b border-brand-red/10 pb-2 text-brand-red"> intentional design</em>
                      </h2>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 lg:col-start-3 text-center">
                      <p className="text-brand-brown leading-relaxed text-xl md:text-2xl mb-12 font-normal italic font-serif">
                        "At VELORA, we believe the most beautiful weddings are the ones that feel inevitable—where every choice, from the venue to the paper stock, tells a coherent story of the couple's history and future."
                      </p>
                      <div className="grid grid-cols-2 gap-12 mt-16">
                        <div className="border-t border-black/10 pt-8 text-left">
                          <h4 className="text-black font-bold mb-3 uppercase text-[10px] tracking-widest">Philosophy</h4>
                          <p className="text-sm text-black/50 leading-relaxed font-normal italic">Minimalism combined with grand emotional gestures.</p>
                        </div>
                        <div className="border-t border-black/10 pt-8 text-left">
                          <h4 className="text-black font-bold mb-3 uppercase text-[10px] tracking-widest">Approach</h4>
                          <p className="text-sm text-black/50 leading-relaxed font-normal italic">Bespoke orchestration of global luxury resources.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Full Width Image Break */}
          <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
             <img 
               src="https://raw.githubusercontent.com/Osamaalsofy/wedding/main/src/assets/images/Wedding.jpg" 
               alt="Aesthetic Detail"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>

          <section id="services" className="w-full bg-[#fdfdfc] py-32 md:py-48">
            <div className="max-w-7xl px-5 md:px-8 mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  {/* Left Column - Sticky & Editorial with DOOR0.png Gate */}
                  <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 gap-8 self-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-brand-red font-bold mb-4">What we do</p>
                      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-6 text-brand-black">
                        Bespoke
                        <br />
                        Planning &
                        <br />
                        <em className="italic font-normal lowercase font-serif text-brand-red">design</em>
                      </h2>
                      <p className="text-base text-brand-brown leading-relaxed font-serif italic mb-8 max-w-md">
                        Our atelier offers a comprehensive suite of services designed to elevate your wedding into a cinematic masterpiece. From global logistics to creative direction, we handle every nuance.
                      </p>
                    </div>

                    {/* Cinematic Img Frame (DOOR0.png) */}
                    <div className="w-full flex flex-col gap-3 group/door">
                      <div className="w-full aspect-[4/5] overflow-hidden rounded-t-full border border-black/5 shadow-xl bg-neutral-100 relative">
                        <img 
                          src="https://raw.githubusercontent.com/Osamaalsofy/wedding/main/src/assets/images/DOOR0.png"
                          alt="Atelier Entrance Door"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover/door:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover/door:opacity-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />
                      </div>
                      <div className="flex justify-between items-center px-1 font-mono text-[9px] tracking-widest text-black/40">
                        <span>PORTAL / VELORA INTERIOR</span>
                        <span>DOOR 01</span>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/services")}
                      className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all shadow-lg"
                    >
                      View All Services
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Right Column - Deep Content Cards Grid (6 Services) */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:mt-6">
                     {services.map((service, index) => (
                       <motion.div 
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-black/10 transition-all group flex flex-col justify-between"
                       >
                         <div>
                           <div className="font-mono text-xs text-brand-red opacity-60 mb-4 tracking-widest">
                             {String(index + 1).padStart(2, '0')}
                           </div>
                           <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-brand-red transition-colors">{service.title}</h3>
                           <p className="text-xs text-black/50 leading-relaxed italic">{service.description}</p>
                         </div>
                         <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-black/5">
                           {service.details.map((detail) => (
                             <span key={detail} className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 bg-black/[0.03] text-black/40 rounded-full">
                               {detail}
                             </span>
                           ))}
                         </div>
                       </motion.div>
                     ))}
                  </div>
               </div>
            </div>
          </section>

          <section className="w-full bg-white">
            <div className="max-w-7xl px-5 md:px-8 mx-auto flex flex-col py-32 md:py-40">
              {/* =========================
                  GALLERY SECTION
              ========================== */}
              <section id="gallery" className="py-20 overflow-hidden">
                <div className="flex flex-col items-center text-center mb-24">
                  <p className="section-label">
                    <span>Gallery</span>
                  </p>
                  <h2 className="text-4xl md:text-8xl text-brand-black font-bold uppercase tracking-tighter leading-[0.85] mt-6 text-center">
                    Captured through a
                    <br />
                    <em className="italic font-normal lowercase font-serif border-b border-brand-red/10 pb-2 text-brand-red"> cinematic lens</em>
                  </h2>
                  <p className="max-w-xl text-brand-brown leading-relaxed font-normal text-xl mt-12 italic font-serif text-center">
                    Immerse yourself in our portfolio of luxury weddings and editorial
                    celebrations crafted with precision across the globe.
                  </p>
                </div>

                <div className="relative">
                  <div 
                    ref={sliderRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-20 -mx-8 md:-mx-[10vw] px-8 md:px-[10vw] cursor-grab active:cursor-grabbing select-none"
                    onScroll={handleGalleryScroll}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                  >
                    {gallery.map((item, i) => (
                      <div
                        key={item.title}
                        className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[40vw] snap-center flex flex-col"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ once: true }}
                          className="w-full flex flex-col gap-10"
                        >
                          <div className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.1)] bg-neutral-100 group/img">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/5" />
                            
                            <div className="absolute top-10 right-10">
                               <p className="text-[10px] uppercase tracking-[0.6em] text-white font-bold drop-shadow-lg opacity-80">{item.location}</p>
                            </div>
                          </div>

                          <div className="px-4">
                            <motion.h3 
                              className="text-2xl md:text-4xl text-black font-bold tracking-tight uppercase mb-4 leading-tight"
                            >
                              {item.title}
                            </motion.h3>
                            <p className="text-base md:text-lg text-black/50 leading-relaxed font-normal italic font-serif">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* Cinematic Dots Navigation */}
                  <div className="flex flex-col items-center gap-12 mt-8 pb-10">
                    <div className="flex items-center gap-6">
                      {gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => scrollToIndex(i)}
                          className="relative h-12 w-6 flex items-center justify-center group/dot"
                        >
                          <motion.div 
                            animate={{ 
                              height: galleryIndex === i ? 24 : 4,
                              backgroundColor: galleryIndex === i ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)",
                              width: 2
                            }}
                            className="rounded-full transition-colors duration-500"
                          />
                          <AnimatePresence>
                            {galleryIndex === i && (
                              <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute -top-10 text-[9px] font-black uppercase tracking-widest text-black/30 whitespace-nowrap"
                              >
                                {String(i + 1).padStart(2, '0')}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-10 opacity-30">
                      <div className="w-16 h-[1px] bg-black relative overflow-hidden">
                         <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-black/40"
                         />
                      </div>
                      <p className="text-[9px] uppercase tracking-[1em] text-black font-black">Slide to explore</p>
                      <div className="w-16 h-[1px] bg-black relative overflow-hidden">
                         <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-black/40"
                         />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Full Width Image Break */}
          <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2670" 
               alt="Process Visual"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>

          <section className="w-full bg-[#f9f9f8]">
            <div className="max-w-7xl px-5 md:px-8 mx-auto flex flex-col py-32 md:py-40">
              {/* =========================
                  PROCESS SECTION
              ========================== */}
              <section id="process" className="py-20">
                 <div className="flex flex-col items-center text-center mb-24">
                    <p className="section-label">
                       <span>Our Method</span>
                    </p>
                    <h2 className="text-4xl md:text-8xl leading-[0.9] text-black font-bold uppercase tracking-tighter mt-6">
                       The path to your
                       <br />
                       <em className="italic font-normal lowercase font-serif"> dream day</em>
                    </h2>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { step: "01", title: "Conceptualization", desc: "We begin by diving deep into your story, aesthetics, and aspirations to define a core cinematic theme." },
                      { step: "02", title: "Curation & Design", desc: "From European villas to high-fashion caterers, we source the elements that fit your narrative perfectly." },
                      { step: "03", title: "Technical Drafting", desc: "Creating flowcharts, spatial renders, and lighting plots to ensure every technical detail is flawless." },
                      { step: "04", title: "Live Direction", desc: "On the day, we orchestrate the entire production, allowing you to stay present in every moment." }
                    ].map((item) => (
                      <div key={item.step} className="group cursor-default bg-white/40 backdrop-blur-xl border border-brand-brown/20 p-10 rounded-[2.5rem] hover:border-brand-brown/50 transition-all hover:shadow-2xl relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                         <span className="relative z-10 text-xl font-mono text-brand-brown font-bold block mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                           {item.step}
                         </span>
                         <h3 className="relative z-10 text-xl mb-4 font-bold text-brand-black uppercase tracking-tight">{item.title}</h3>
                         <p className="relative z-10 text-sm text-brand-brown leading-relaxed font-normal italic">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </section>
            </div>
          </section>

          <section className="w-full bg-[#f6f6f4]">
            <div className="max-w-7xl px-5 md:px-8 mx-auto flex flex-col py-32 md:py-40">
              {/* =========================
                  TESTIMONIAL SECTION
              ========================== */}
              <section className="py-24">
                 <div className="flex flex-col items-center text-center">
                    <Quote size={48} className="text-black/10 mb-12" />
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-3xl md:text-5xl italic text-brand-black max-w-5xl leading-[1.1] font-serif font-medium tracking-tight"
                    >
                      "VELORA didn't just plan a wedding; they directed a masterpiece. Every moment felt like a frame from our favorite film, perfectly orchestrated and deeply personal."
                    </motion.p>
                    <div className="mt-12 flex flex-col items-center gap-4">
                       <span className="w-12 h-px bg-brand-red/20" />
                       <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.5em] text-brand-red font-bold">SOPHIA & ALEXANDER</p>
                        <p className="text-[10px] text-brand-brown mt-1 uppercase tracking-widest font-bold font-serif italic">Villa Balbiano, Lake Como</p>
                       </div>
                    </div>
                 </div>
              </section>

              {/* =========================
                  CTA SECTION
              ========================== */}
              <section id="contact" className="py-20">
                <div className="liquid-glass rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-12 bg-black text-white shadow-2xl">
                  <div className="max-w-2xl">
                    <p className="text-[20px] uppercase tracking-[0.5em] text-brand-red mb-6 font-bold">
                      Availability
                    </p>
                    <h2 className="text-4xl md:text-6xl leading-[0.9] font-bold uppercase tracking-tighter text-brand-brown">
                      Your once-in-a-lifetime celebration deserves
                      <br />
                      <em className="italic font-normal lowercase font-serif border-b border-brand-red/20 pb-1 text-brand-red"> extraordinary design</em>
                    </h2>
                  </div>

                  <button 
                    onClick={() => navigate("/book")}
                    className="rounded-full bg-white text-black px-12 py-6 text-xs uppercase tracking-[0.2em] font-bold hover:scale-[1.05] transition-transform cursor-pointer shadow-xl"
                   >
                    Schedule Consultation
                  </button>
                </div>
              </section>

              {/* =========================
                  FOOTER
              ========================== */}
              <Footer />
            </div>
          </section>
        </div>
      </main>
    );
}
