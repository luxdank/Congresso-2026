import { motion } from "motion/react";
import { Play, Calendar, MapPin, ChevronDown } from "lucide-react";
import adevipLogo from "../assets/images/adevip_logo.svg";

interface HeroProps {
  onOpenVideo: () => void;
  bgImageUrl: string;
}

export default function Hero({ onOpenVideo, bgImageUrl }: HeroProps) {
  const scrollToRSVP = () => {
    const element = document.getElementById("rsvp-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black py-20 px-4"
    >
      {/* Background Image with Parallax Style */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt="Ano da Reconstrução Background"
          className="w-full h-full object-cover opacity-35 scale-105 pointer-events-none filter brightness-50"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial overlay for darkness vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#050505_100%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Discrete Antique Clock SVG rotating slowly in background to represent God's Time */}
      <div className="absolute z-1 opacity-10 pointer-events-none md:right-10 md:top-1/2 md:-translate-y-1/2 right-1/2 top-1/2 -translate-x-1/2 md:translate-x-0 w-[420px] h-[420px] md:w-[600px] md:h-[600px] max-w-[85vw] max-h-[85vw] rounded-full border border-gold-800 flex items-center justify-center animate-[float-slow_20s_infinite_linear]">
        {/* SVG Clock Dial and Hands */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-gold-500 animate-[spin_120s_linear_infinite]"
        >
          {/* Dial Center */}
          <circle cx="100" cy="100" r="3" fill="currentColor" />
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1, 5" />
          
          {/* Roman Numerals */}
          <text x="100" y="24" textAnchor="middle" fontSize="10" fontFamily="serif" fill="currentColor">XII</text>
          <text x="178" y="103" textAnchor="middle" fontSize="10" fontFamily="serif" fill="currentColor">III</text>
          <text x="100" y="184" textAnchor="middle" fontSize="10" fontFamily="serif" fill="currentColor">VI</text>
          <text x="24" y="103" textAnchor="middle" fontSize="10" fontFamily="serif" fill="currentColor">IX</text>
          
          {/* Roman Numerals in between */}
          <text x="140" y="42" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">I</text>
          <text x="168" y="70" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">II</text>
          <text x="168" y="136" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">IV</text>
          <text x="140" y="166" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">V</text>
          <text x="60" y="166" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">VII</text>
          <text x="32" y="136" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">VIII</text>
          <text x="32" y="70" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">X</text>
          <text x="60" y="42" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">XI</text>

          {/* Hour and Minute Hands */}
          <line x1="100" y1="100" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="origin-[100px_100px] animate-[spin_60s_linear_infinite]" />
          <line x1="100" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="origin-[100px_100px] animate-[spin_720s_linear_infinite]" />
          
          {/* Fine gear detail */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2, 2" />
          <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1, 1" />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col justify-between min-h-[60vh] gap-10">
        <div className="my-auto flex flex-col items-center">
          
          {/* ADEVIP Logo Image Component */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={adevipLogo}
              alt="ADEVIP Logo"
              className="h-10 md:h-12 w-auto object-contain mx-auto filter brightness-110 drop-shadow-[0_0_15px_rgba(226,197,138,0.25)] select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.45em] font-mono text-gold-500 font-bold mt-3.5 pl-1.5 opacity-90">Assembleia de Deus • Mocidade</span>
          </motion.div>

          {/* Main Congress Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl font-black text-white tracking-widest mt-2 uppercase select-none drop-shadow-md"
          >
            CONGRESSO <span className="text-gold-gradient block sm:inline">JOVEM</span> 2K26
          </motion.h1>

          {/* Subtitle / Theme */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-4 text-bronze-gradient"
          >
            <div className="h-0.5 w-[50px] bg-gradient-to-r from-transparent to-gold-500" />
            <h2 className="font-serif text-lg md:text-3xl font-bold tracking-[0.25em] md:tracking-[0.4em] uppercase text-gold-200">
              ANO DA RECONSTRUÇÃO
            </h2>
            <div className="h-0.5 w-[50px] bg-gradient-to-l from-transparent to-gold-500" />
          </motion.div>

          {/* Biblic Verse Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 max-w-2xl px-6 py-6 md:py-8 border border-gold-800/25 bg-zinc-950/50 backdrop-blur-md rounded-2xl relative group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-black font-semibold text-[10px] px-3.5 py-1 tracking-widest uppercase rounded-full glow-gold">
              NEEMIAS 6:3
            </div>
            {/* Bronze ornate vectors */}
            <div className="absolute top-2 left-2 text-gold-800/40 font-serif text-3xl">“</div>
            <p className="font-editorial text-lg md:text-2xl text-gold-50/95 italic font-light tracking-wide px-4 leading-relaxed">
              &ldquo;Estou fazendo uma grande obra e não poderei descer.&rdquo;
            </p>
            <div className="absolute bottom-2 right-2 text-gold-800/40 font-serif text-3xl">”</div>
          </motion.div>

          {/* Buttons Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-rsvp-btn"
              onClick={scrollToRSVP}
              className="relative overflow-hidden w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black hover:text-black font-bold tracking-wider text-sm rounded-lg transition-all focus:outline-none cursor-pointer shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              QUERO PARTICIPAR
            </button>

            <button
              id="hero-video-btn"
              onClick={onOpenVideo}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-neutral-950/80 text-gold-300 font-bold tracking-wider text-sm rounded-lg border border-gold-500/40 hover:bg-gold-500 hover:text-black transition-all cursor-pointer focus:outline-none"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 group-hover:bg-transparent">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </span>
              ASSISTIR AO CONVITE
            </button>
          </motion.div>

          {/* Hero details badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400 font-semibold border-t border-zinc-900 pt-6"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold-400" />
              <span>04 E 05 DE JULHO DE 2026</span>
            </div>
            <div className="hidden md:block h-1 w-1 rounded-full bg-zinc-700" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span>ADEVIP — BELFORD ROXO</span>
            </div>
          </motion.div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
          className="mx-auto flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const element = document.getElementById("info-section");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] tracking-widest text-[#aa7c11] uppercase font-bold">Descobrir Mais</span>
          <ChevronDown className="h-4 w-4 text-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
