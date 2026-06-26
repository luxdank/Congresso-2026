import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Flame, ChevronUp, Bell } from "lucide-react";

import ParticleBackground from "./components/ParticleBackground";
import adevipLogo from "./assets/images/adevip_logo.svg";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Speakers from "./components/Speakers";
import Countdown from "./components/Countdown";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";
import InvitationModal from "./components/InvitationModal";

// Import images so Vite processes and bundles them correctly
import heroBg from "./assets/images/reconstruction_hero_bg_1780945821211.png";
import ernany from "./assets/images/ernany_salatiel_1780945842030.jpeg";
import edelson from "./assets/images/edelson_sales_1780945854156.jpeg";
import nicolly from "./assets/images/nicolly_speaker_1780945866574.jpeg";
import stael from "./assets/images/stael_richard_1780945881786.jpeg";
import priscila from "./assets/images/priscila_farias_1780945894533.jpeg";
import debora from "./assets/images/debora_barbosa_1780945908477.png";
import geracaoEleita from "./assets/images/geracao_eleita_1780945921385.png";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Asset image paths using correct Vite bundled references
  const imagePaths = {
    heroBg,
    ernany,
    edelson,
    nicolly,
    stael,
    priscila,
    debora,
    geracaoEleita,
  };

  // Listen to scrolling to style Navigation bar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft atmospheric background player
  useEffect(() => {
    // Elegant, peaceful spiritual instrumental synth pads
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/123/123-200.wav"); 
    // We can use a beautiful royalty free ambient pad or soft space noise
    // To make it fully seamless we configure volume and loops
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleBackgroundAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay restriction: ", err);
      });
    }
    setIsPlayingAudio(!isPlayingAudio);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="landing-app-root" className="relative min-h-screen bg-[#050505] text-zinc-100 overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* Absolute Dynamic Particle Background throughout the scroll stack */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* ================= OPTIONAL FLOATING WIDGETS ================= */}
      
      {/* 1. Background Music Controller (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          id="music-toggle-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleBackgroundAudio}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono font-bold tracking-widest cursor-pointer backdrop-blur-md shadow-2xl transition-all focus:outline-none ${
            isPlayingAudio
              ? "bg-gold-500 border-gold-400 text-black shadow-gold-500/10"
              : "bg-zinc-950/80 border-zinc-800 text-gold-300 hover:border-gold-500/40"
          }`}
          title="Música ambiente para oração e leitura"
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="h-4 w-4 animate-bounce" />
              <span>PAD TOCANDO</span>
            </>
          ) : (
            <>
              <VolumeX className="h-4 w-4 text-zinc-500" />
              <span>AMBIENTE PAD</span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Scroll to top button (Bottom Right) */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-40">
          <motion.button
            id="scroll-top-btn"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 border border-gold-600/30 text-gold-400 cursor-pointer shadow-2xl hover:border-gold-400 focus:outline-none"
            aria-label="Voltar ao início"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        </div>
      )}

      {/* ================= STICKY HEADER NAVIGATION BAR ================= */}
      <header
        id="navbar-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg border-zinc-900 py-3 shadow-lg"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo ADEVIP */}
          <div
            className="flex flex-col items-start justify-center cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={adevipLogo}
              alt="ADEVIP Logo"
              className="h-6 md:h-7 w-auto object-contain brightness-110"
              referrerPolicy="no-referrer"
            />
            <span className="text-[7.5px] uppercase tracking-[0.34em] text-gold-500 block font-mono pl-0.5 mt-0.5 opacity-90">Bel-Roxo / RJ</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            <button
              id="nav-link-init"
              onClick={() => scrollToSection("hero-section")}
              className="text-zinc-300 hover:text-gold-300 transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              id="nav-link-info"
              onClick={() => scrollToSection("info-section")}
              className="text-zinc-300 hover:text-gold-300 transition-colors cursor-pointer"
            >
              Contato & Data
            </button>
            <button
              id="nav-link-preach"
              onClick={() => scrollToSection("speakers-section")}
              className="text-zinc-300 hover:text-gold-300 transition-colors cursor-pointer"
            >
              Preletores
            </button>
            <button
              id="nav-link-countdown"
              onClick={() => scrollToSection("countdown-section")}
              className="text-zinc-300 hover:text-gold-300 transition-colors cursor-pointer"
            >
              Tempo
            </button>
          </nav>

          {/* Nav Actions (CTA Button) */}
          <div className="flex items-center gap-4">
            <button
              id="navbar-rsvp-btn"
              onClick={() => scrollToSection("rsvp-section")}
              className="relative overflow-hidden px-5 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-black font-extrabold text-[11px] tracking-widest uppercase cursor-pointer transition-all focus:outline-none flex items-center gap-1.5"
            >
              <Flame className="h-3.5 w-3.5 fill-current" />
              <span>RSVP</span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= COMPONENT PORTALS ================= */}
      <main className="relative z-10">
        
        {/* 1. Hero / Home Section */}
        <Hero
          onOpenVideo={() => setIsModalOpen(true)}
          bgImageUrl={imagePaths.heroBg}
        />

        {/* 2. Event Information Section */}
        <EventInfo />

        {/* 3. Speakers and Worship Preachers */}
        <Speakers paths={imagePaths} />

        {/* 4. Countdown Timer Section */}
        <Countdown />

        {/* 5. RSVP Input Form section */}
        <RSVPForm />

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= VIDEO MODAL ================= */}
      <InvitationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
