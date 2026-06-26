import { motion } from "motion/react";
import { Mic2, Music, Flame, Sparkles } from "lucide-react";

interface SpeakersProps {
  paths: {
    ernany: string;
    edelson: string;
    nicolly: string;
    stael: string;
    priscila: string;
    debora: string;
    geracaoEleita: string;
  };
}

export default function Speakers({ paths }: SpeakersProps) {
  const preachers = [
    {
      name: "Ernany Salatiel",
      role: "Preletor / Palavra",
      photo: paths.ernany,
      desc: "Ernany Salatiel é um Jovem Pastor , Teólogo, líder de jovens, professor  de hermenêutica e influenciador Cristão. Nossa escolha foi baseada na linguagem natural e de fácil entednimento para Jovens.",
    },
    {
      name: "Edelson Sales",
      role: "Preletor / Palavra",
      photo: paths.edelson,
      desc: "Edelson Salles  é um Pregador da palavra, etinerante com um estilo de pregação bem avivada e enérgica.",
    },
    {
      name: "Nicolly",
      role: "Preletora / Palavra",
      photo: paths.nicolly,
      desc: "Integrante do grupo Geração Eleita, estará minitrando sua primeira mensagem na ADEVIP.  O objetivo é ajudar seu ministério e ao mesmo tempo utiliza-la como exemplo ao demais Jovens.",
    },
  ];

  const worshipList = [
    {
      name: "Stael Richard",
      role: "Ministro de Louvor",
      photo: paths.stael,
    },
    {
      name: "Priscila Farias",
      role: "Ministra de Louvor",
      photo: paths.priscila,
    },
    {
      name: "Débora Barbosa",
      role: "Ministra de Louvor",
      photo: paths.debora,
    },
  ];

  return (
    <section
      id="speakers-section"
      className="relative py-28 bg-black px-4 overflow-hidden"
    >
      {/* Absolute Glow Backgrounds */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gold-950/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-zinc-950/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= PREACHERS SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Mic2 className="h-4 w-4 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-400">Palestrantes Confirmados</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-black text-white"
          >
            Ministrando a <span className="text-gold-gradient">Palavra</span>
          </motion.h2>
          <p className="mt-4 text-sm text-zinc-400">
            Homens e mulheres separados por Deus com ordens proféticas específicas de edificação e reconstrução ministerial.
          </p>
        </div>

        {/* Preachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {preachers.map((p, idx) => (
            <motion.div
              id={`preacher-card-${idx}`}
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-zinc-950 rounded-sm overflow-hidden border border-zinc-800/60 hover:border-gold-500/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold-500/10"
            >
              {/* Photo Frame */}
              <div className="relative aspect-square overflow-hidden bg-zinc-900 border-b border-zinc-800">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Bronze-to-Black Gradient Overlay over Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-950/5 to-black/95" />

                {/* Speaker Floating Role */}
                <span className="absolute bottom-4 left-4 px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest text-gold-400 bg-black/90 border border-gold-600/50 rounded-sm">
                  {p.role}
                </span>
              </div>

              {/* Speaker Metadata */}
              <div className="p-6 text-left">
                <h3 className="font-serif text-2xl font-black text-white tracking-wide group-hover:text-gold-300 transition-colors uppercase">
                  {p.name}
                </h3>
                <div className="h-px w-12 bg-gold-500 mt-2.5 mb-4" />
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= WORSHIP SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Music className="h-4 w-4 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-400">Adoração e Unção</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-black text-white"
          >
            Ministração de <span className="text-bronze-gradient">Louvor</span>
          </motion.h2>
          <p className="mt-4 text-sm text-zinc-400">
            Atmosfera de adoração intensa para guiar nossos corações aos pés do Grande Construtor de nossas vidas.
          </p>
        </div>

        {/* Louvor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {worshipList.map((w, idx) => (
            <motion.div
              id={`worship-card-${idx}`}
              key={w.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative bg-zinc-950 rounded-sm overflow-hidden border border-zinc-900 hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={w.photo}
                  alt={w.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/8 w-full h-full" />

                {/* Content aligned inside bottom layout */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-left flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-gold-400 mb-2">
                    <Flame className="h-3.5 w-3.5" />
                    <span>LOUVOR CONFIRMADO</span>
                  </div>
                  <h3 className="font-serif text-2xl font-black text-white tracking-wider uppercase">
                    {w.name}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mt-1 block">
                    {w.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= GERAÇÃO ELEITA (SPECIAL SECTION DETAILED) ================= */}
        <motion.div
          id="special-praise-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm overflow-hidden border border-gold-400/30 bg-gradient-to-br from-zinc-950 via-zinc-900/40 to-neutral-950 p-0.5 glow-gold"
        >
          {/* Inner card with decorative glowing frame */}
          <div className="relative overflow-hidden rounded-sm bg-neutral-950 py-12 px-6 md:p-16 flex flex-col items-center">
            
            {/* Visual Gold-Shadings background */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold-950/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Narrative Context Block */}
            <div className="w-full max-w-3xl text-center flex flex-col items-center justify-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-gold-600/40 bg-gold-950/20 text-gold-300 text-xs font-semibold w-fit mb-6">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span>CONGRESSO JOVEM 2K26</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                CONJUNTO <span className="text-gold-gradient block sm:inline">GERAÇÃO</span> ELEITA
              </h2>
              
              <p className="mt-4 text-sm md:text-base text-zinc-300 font-light leading-relaxed">
                Um grande coral formado por dezenas de jovens levantados com o mesmo propósito: levantar uma só voz de decreto profético sobre Belford Roxo. O Grande Conjunto Geração Eleita entoará hinos inspiracionais de restauração estrutural, louvores clássicos reformulados e declarações espirituais intensas de vitória.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-6 w-full max-w-md">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">Participação</h4>
                  <p className="text-sm font-bold text-white mt-1">Sábado e Domingo</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">Atuação</h4>
                  <p className="text-sm font-bold text-white mt-1">Grande Voz Ministerial</p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
