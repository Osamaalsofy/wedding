import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./Footer.tsx";
import { 
  Compass, 
  Palette, 
  Flower2, 
  MapPin, 
  Users, 
  Zap, 
  Utensils, 
  Music, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "venue",
    title: "Venue Selection",
    description: "From historic European palaces to secluded island retreats, we source venues that serve as the perfect canvas for your story.",
    icon: MapPin,
    details: ["Hidden Gem Research", "Contract Negotiation", "Spatial Planning", "Bilingual Site Visits"]
  },
  {
    id: "design",
    title: "Creative Direction",
    description: "Visual storytelling that transcends trends. We build custom moodboards, color theories, and spatial designs.",
    icon: Palette,
    details: ["Concept Development", "3D Visualization", "Material Sourcing", "Uniform & Dress Styling"]
  },
  {
    id: "florals",
    title: "Floral Artistry",
    description: "Botanical installations that breathe life into grand spaces. We work with world-class florists to create living sculptures.",
    icon: Flower2,
    details: ["Seasonal Sourcing", "Large-scale Installations", "Custom Vessels", "Fragrance Curation"]
  },
  {
    id: "logistics",
    title: "Global Logistics",
    description: "Precision-engineered guest experiences for destination events. We manage the movement of people and resources across borders.",
    icon: Compass,
    details: ["Private Jet Charters", "Concierge Services", "RSVP Management"]
  },
  {
    id: "production",
    title: "Technical Production",
    description: "Cinematic lighting and soundscapes that transform atmosphere. We orchestrate the technical spine of your celebration.",
    icon: Zap,
    details: ["Atmospheric Lighting", "Immersive Audio", "Power Management", "Structure Engineering"]
  },
  {
    id: "culinary",
    title: "Culinary Curation",
    description: "Elevating the dining experience to high art. We partner with Michelin-starred chefs and artisanal purveyors.",
    icon: Utensils,
    details: ["Menu Architecture", "Wine Pairing", "Table Scape Design", "Service Choreography"]
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "Bespoke talent curation, from symphony orchestras to contemporary performance art that surprises and delights.",
    icon: Music,
    details: ["Artist Sourcing", "Legal Clearances", "Technical Riders", "Show Direction"]
  },
  {
    id: "coordination",
    title: "On-Site Management",
    description: "Invisible but omnipresent. Our team provides calm, expert direction, ensuring you remain the protagonist of the day.",
    icon: CheckCircle,
    details: ["Production Running Order", "Vendor Liaison", "Crisis Mitigation", "Schedule Enforcement"]
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black/10 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden flex flex-col items-center">
        {/* Floating Decorative Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 -left-20 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl p-20"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 -right-20 w-96 h-96 bg-black/[0.01] rounded-full blur-3xl p-20"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.7em] text-brand-red font-black mb-10">The Velora Experience</p>
            <h1 className="text-5xl md:text-[120px] font-bold uppercase tracking-tighter leading-[0.8] mb-16 text-brand-black">
              Our
              <br />
              <em className="italic font-normal lowercase font-serif border-b border-brand-red/10 pb-4 text-brand-red">Artistry</em>
            </h1>
            <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-brand-brown leading-relaxed font-serif italic mb-10">
              Transforming your vision into an immersive narrative of timeless luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with 3D Interaction */}
      <section className="py-20 bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 2, 
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-brand-brown/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden perspective-1000 hover:border-brand-brown/60"
              >
                {/* 3D Glassy Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Number Background */}
                <div className="absolute top-10 right-10 text-8xl font-black text-brand-brown/15 select-none group-hover:text-brand-brown/25 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-2xl bg-brand-brown/5 flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 border border-brand-brown/10 group-hover:border-transparent backdrop-blur-md">
                    <service.icon size={28} />
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500 text-brand-black group-hover:text-brand-red line-clamp-1">{service.title}</h3>
                  <p className="text-lg text-brand-brown leading-relaxed font-serif italic mb-10 max-w-md group-hover:text-brand-black/70 transition-colors">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-brown/20 group-hover:bg-brand-red transition-colors" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/60 group-hover:text-brand-black transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Quote Section */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        {/* Distant light spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-serif italic leading-tight mb-16"
          >
            "The magic isn't in the event itself, but in the seamless flow of energy that makes people feel truly seen and celebrated."
          </motion.h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">Our Foundation</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f0f0ee] rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12 text-brand-black">
              Ready to begin your
              <br />
              <em className="italic font-normal lowercase font-serif text-brand-red">extraordinary journey?</em>
            </h2>
            <button
              onClick={() => navigate("/book")}
              className="group flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Start Planning
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
