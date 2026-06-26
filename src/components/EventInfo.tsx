import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Copy, Check, Map } from "lucide-react";

export default function EventInfo() {
  const [copied, setCopied] = useState(false);
  const address = "Estrada Manoel de Sá, 256, Vale do Ipê, Belford Roxo - RJ";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="info-section"
      className="relative py-24 bg-gradient-to-b from-black to-zinc-950 px-4 scroll-mt-10 overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-bronze-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 mb-3"
          >
            INFORMAÇÕES GERAIS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Uma geração chamada para <span className="text-gold-gradient">reconstruir</span>.
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mt-6" />
        </div>

        {/* Bento Grid layout representing dates, times and location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Main Date and Subheading (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-8 md:p-10 rounded-sm bg-zinc-950 border border-zinc-800/60 relative group overflow-hidden flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-75" />
            
            <div>
              <div className="h-12 w-12 rounded-sm bg-gold-950/35 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-8">
                <Calendar className="h-6 w-6" />
              </div>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest block mb-2">QUANDO OCORRERÁ?</span>
              <h3 className="font-serif text-4xl font-black text-white mb-4 uppercase">
                04 e 05
                <span className="text-gold-300 block text-2xl font-serif font-black tracking-wide mt-2">DE JULHO</span>
              </h3>
            </div>

            <div className="border-t border-zinc-900 pt-6 mt-8">
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Dois dias de profunda adoração, ensinamentos impactantes e restauração. Não perca a oportunidade de fazer parte dessa reconstrução.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Schedule Times (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 p-8 md:p-10 rounded-sm bg-zinc-950 border border-zinc-800/60 relative flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300"
          >
            <div>
              <div className="h-12 w-12 rounded-sm bg-gold-950/35 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-8">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest block mb-4">PROGRAMAÇÃO DETALHADA</span>
              
              <div className="space-y-4">
                {/* Sat AM */}
                <div className="flex items-start gap-4 p-3 rounded-sm bg-black/40 border border-zinc-900 hover:border-gold-800/30 transition-all">
                  <div className="px-2.5 py-1 text-center bg-gold-950/45 text-gold-300 font-mono text-xs rounded border border-gold-600/30">
                    SÁB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">09:00h • Abertura</h4>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">Sessão da Manhã & Clamor</p>
                  </div>
                </div>

                {/* Sat PM */}
                <div className="flex items-start gap-4 p-3 rounded-sm bg-black/40 border border-zinc-900 hover:border-gold-800/30 transition-all">
                  <div className="px-2.5 py-1 text-center bg-gold-950/45 text-gold-300 font-mono text-xs rounded border border-gold-600/30">
                    SÁB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">19:00h • Celebração</h4>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">Ministério & Clamor Jovem</p>
                  </div>
                </div>

                {/* Sun PM */}
                <div className="flex items-start gap-4 p-3 rounded-sm bg-black/40 border border-zinc-900 hover:border-gold-800/30 transition-all">
                  <div className="px-2.5 py-1 text-center bg-gold-950/45 text-gold-300 font-mono text-xs rounded border border-gold-600/30">
                    DOM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">18:00h • Encerramento</h4>
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">Grande Ato Profético</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-gold-400/60 mt-4 text-center">
              *Recomendamos chegar com 30 minutos de antecedência.
            </p>
          </motion.div>

          {/* Card 3: Interactive Location Info & Interactive Maps Link (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 p-8 md:p-10 rounded-sm bg-zinc-950 border border-zinc-800/60 relative flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300"
          >
            <div>
              <div className="h-12 w-12 rounded-sm bg-gold-950/35 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-8">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest block mb-2">ONDE SERÁ REALIZADO?</span>
              
              <h3 className="font-serif text-3xl font-black text-white uppercase tracking-wide">ADEVIP</h3>
              <p className="text-zinc-300 text-xs font-medium uppercase tracking-wider leading-relaxed mb-6">
                Estrada Manoel de Sá, 256<br />
                Vale do Ipê, Belford Roxo - RJ
              </p>

              {/* Action utilities */}
              <div className="flex flex-col gap-2.5">
                <button
                  id="copy-address-btn"
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-zinc-900 text-zinc-300 hover:text-gold-300 border border-zinc-800 hover:border-gold-500/20 transition-all text-xs cursor-pointer focus:outline-none uppercase font-mono tracking-widest"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  id="maps-direction-link"
                  href="https://maps.google.com/?q=ADEVIP+Estrada+Manoel+de+Sa+256+Belford+Roxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-gold-950/30 hover:bg-gold-950/60 text-gold-300 border border-gold-700/30 hover:border-gold-500/80 transition-all text-xs focus:outline-none uppercase font-mono tracking-widest"
                >
                  <Map className="h-4 w-4" />
                  <span>Obter Rotas de GPS</span>
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-900 pt-4 flex items-center gap-2.5 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Estacionamento no Local e Segurança</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
