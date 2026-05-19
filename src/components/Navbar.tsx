import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/", isAnchor: false },
  { name: "About", href: "/#about", isAnchor: true },
  { name: "Gallery", href: "/#gallery", isAnchor: true },
  { name: "Services", href: "/services", isAnchor: false },
  { name: "Contact", href: "/#contact", isAnchor: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
    e.preventDefault();

    if (!isAnchor) {
      navigate(href);
      if (isOpen) setIsOpen(false);
      return;
    }

    const targetId = href.split('#')[1];
    
    const isOnMainPage = 
      location.pathname === "/" || 
      location.pathname === "/about" || 
      location.pathname === "/gallery" || 
      location.pathname === "/contact";
    
    if (!isOnMainPage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex items-center justify-between">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => {
          if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            navigate("/");
          }
        }}
        className="flex items-center gap-3 relative z-[110] cursor-pointer"
      >
        <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm">
          <HeartHandshake size={18} className="text-black" />
        </div>

        <div>
          <h1 className="text-lg md:text-xl font-semibold tracking-wide text-black uppercase">
            VELORA
          </h1>
          <p className="text-[10px] uppercase tracking-[0.35em] text-black font-bold">
            Atelier
          </p>
        </div>
      </motion.div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center" onMouseLeave={() => setHoveredIndex(null)}>
        <div className="flex items-center gap-1.5 bg-white/45 backdrop-blur-2xl rounded-full p-1.5 shadow-[0_25px_50px_-12px_rgba(83,49,0,0.22),_inset_0_2px_4px_rgba(255,255,255,0.7)] border-[2px] border-brand-brown/70 h-[52px] ring-1 ring-brand-brown/15 relative">
          <AnimatePresence>
            {navLinks.map((link, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href, !!link.isAnchor)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className="px-5 h-full flex items-center justify-center rounded-full text-[12px] font-extrabold uppercase tracking-[0.16em] transition-colors duration-300 cursor-pointer min-w-[105px] relative select-none group"
                  style={{
                    color: isHovered ? "#ffffff" : "#533100"
                  }}
                >
                  {/* Sliding 3D Pill Bar Shape */}
                  {isHovered && (
                    <motion.div
                      layoutId="activeHoverBar"
                      className="absolute inset-[2px] rounded-full bg-gradient-to-b from-[#802525] to-[#533100] shadow-[0_8px_20px_-3px_rgba(83,49,0,0.45),_inset_0_1.5px_2px_rgba(255,255,255,0.5),_0_2px_4px_rgba(0,0,0,0.15)] border border-white/20 z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* 3D Glass Light Reflections Sheen */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-[2px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10 overflow-hidden"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "linear",
                      }}
                    />
                  )}

                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">{link.name}</span>
                </a>
              );
            })}
          </AnimatePresence>

          <div className="w-px h-6 bg-brand-brown/20 mx-2" />
          <button
            onClick={() => navigate("/book")}
            style={{ width: "110px" }}
            className="bg-brand-brown hover:bg-brand-red text-white rounded-full h-full text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_6px_20px_rgba(83,49,0,0.35)] flex items-center justify-center cursor-pointer relative overflow-hidden group/btn"
          >
            <span className="relative z-15">Book Now</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <div className="md:hidden relative z-[110]">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm relative"
        >
          {/* Hamburger Icon */}
          <Menu
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
            size={24}
          />
          {/* X Icon */}
          <X
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
            size={24}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[105] shadow-2xl flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href, !!link.isAnchor)}
              style={{
                transitionDelay: isOpen ? `${150 + i * 70}ms` : "0ms",
              }}
              className={`text-3xl font-serif italic text-black transition-all duration-500 cursor-pointer ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div
          className={`mt-auto transition-all duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
        >
          <button
            onClick={() => {
              navigate("/book");
              toggleMenu();
            }}
            className="w-full bg-black text-white rounded-full py-5 text-sm uppercase tracking-widest font-bold"
          >
            Start Your Journey
          </button>
          
          <div className="mt-8 pt-8 border-t border-black/5 flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Inquiries</p>
            <p className="text-sm font-medium">atelier@velora.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
