import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { 
  HeartHandshake, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-black mt-32 mb-8"
    >
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
        {/* LEFT */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6 text-black text-gradient readable-headline cursor-pointer" onClick={() => navigate("/")}>
            <HeartHandshake size={24} />
            <span className="text-xl font-semibold tracking-wide">
              VELORA
            </span>
          </div>

          <p className="text-sm leading-relaxed max-w-sm font-normal readable-body">
            VELORA is a boutique wedding planning and design studio
            dedicated to creating cinematic celebrations for modern couples
            worldwide.
          </p>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* STUDIO */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-black font-semibold mb-4">
                The Studio
              </h4>

              <ul className="text-xs space-y-2">
                <li>
                  <button onClick={() => navigate("/")} className="hover:text-black transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/")} className="hover:text-black transition-colors text-left">
                    About Velora
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/services")} className="hover:text-black transition-colors text-left">
                    Our Services
                  </button>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-black font-semibold mb-4">
                Explore
              </h4>

              <ul className="text-xs space-y-2">
                <li>
                  <button onClick={() => navigate("/services")} className="hover:text-black transition-colors">
                    Full Planning
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/services")} className="hover:text-black transition-colors">
                    Creative Direction
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/book")} className="hover:text-black transition-colors">
                    Booking
                  </button>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-black font-semibold mb-4">
                Connect
              </h4>

              <ul className="text-xs space-y-2">
                <li>
                  <button onClick={() => navigate("/book")} className="hover:text-black transition-colors">
                    Inquire Now
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-black font-bold">
           © 2026 VELORA WEDDING ATELIER. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-black font-bold">
            Follow the Journey:
          </span>

          <div className="flex items-center gap-4">
            <a href="#" className="text-black hover:opacity-70 transition-opacity">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">
              <Twitter size={16} />
            </a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
