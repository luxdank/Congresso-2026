import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Phone, Home, MapPin, CheckCircle2, Ticket, Calendar, ShieldCheck, Send } from "lucide-react";
import { RSVPData } from "../types";

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
    phone: "",
    church: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppUrl = (idToUse = ticketId) => {
    const formattedPhone = "5521974737108";
    const text = `Olá! Confirmei minha presença especial no Congresso Jovem 2K26! 🌟\n\n` +
      `🎟️ *Inscrição:* ${idToUse}\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Contato:* ${formData.phone}\n` +
      `⛪ *Igreja:* ${formData.church || "Visitante"}\n` +
      `📍 *Origem:* ${formData.city || "Não informada"}\n\n` +
      `Estou muito na expectativa por este grande evento! Nos vemos lá! 🙌`;
    
    return `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    // Simulate real server call holding for 1.2s to build the premium feel
    setTimeout(() => {
      // Create a unique random ticket ID (e.g. CJ2K26-48C9)
      const randomId = "CJ-" + Math.floor(1000 + Math.random() * 9000);
      setTicketId(randomId);
      
      // Save in localStorage to show persistent ticket if they refresh
      try {
        const list = JSON.parse(localStorage.getItem("rsvp_list") || "[]");
        list.push({ ...formData, ticketId: randomId, timestamp: new Date().toISOString() });
        localStorage.setItem("rsvp_list", JSON.stringify(list));
      } catch (err) {
        console.error("Local storage not enabled", err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Attempt automatic open
      try {
        const autoUrl = `https://api.whatsapp.com/send?phone=5521974737108&text=${encodeURIComponent(
          `Olá! Confirmei minha presença especial no Congresso Jovem 2K26! 🌟\n\n` +
          `🎟️ *Inscrição:* ${randomId}\n` +
          `👤 *Nome:* ${formData.name}\n` +
          `📱 *Contato:* ${formData.phone}\n` +
          `⛪ *Igreja:* ${formData.church || "Visitante"}\n` +
          `📍 *Origem:* ${formData.city || "Não informada"}\n\n` +
          `Estou muito na expectativa por este grande evento! Nos vemos lá! 🙌`
        )}`;
        window.open(autoUrl, '_blank');
      } catch (err) {
        console.error("Auto open blocked", err);
      }
    }, 1200);
  };

  return (
    <section
      id="rsvp-section"
      className="relative py-28 bg-black px-4 scroll-mt-6"
    >
      {/* Visual glowing orbs */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-gold-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-gold-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Render Form with nice animations */}
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="rsvp-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950/75 rounded-sm border border-zinc-800/80 p-8 md:p-14 backdrop-blur-md relative overflow-hidden max-w-2xl mx-auto text-left shadow-2xl shadow-gold-500/5"
            >
              {/* Gold Top line accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-900 via-gold-400 to-gold-900" />

              {/* Title Header */}
              <div className="mb-10 text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#d4af37]">PARTICIPAÇÃO CONECTIVA</span>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-white mt-3 uppercase">
                  CONFIRME SUA <span className="text-gold-gradient">PRESENÇA</span>
                </h2>
                <p className="mt-4 text-xs text-zinc-400 font-light leading-relaxed">
                  Preencha os dados abaixo para confirmar sua presença. Este evento é de entrada gratuita, mas requer confirmação.
                </p>
              </div>

              {/* Input Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Nome Completo */}
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                    Nome Completo <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                      <User className="h-5 w-5" />
                    </span>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome e sobrenome"
                      className="w-full bg-zinc-900/60 hover:bg-zinc-900 focus:bg-zinc-950 text-white rounded-sm pl-11 pr-4 py-3.5 text-sm border border-zinc-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 2. Telefone */}
                <div>
                  <label htmlFor="phone-input" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                    Telefone de Contato (WhatsApp) <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                      <Phone className="h-5 w-5" />
                    </span>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-zinc-900/60 hover:bg-zinc-900 focus:bg-zinc-950 text-white rounded-sm pl-11 pr-4 py-3.5 text-sm border border-zinc-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Grid for Church and City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Igreja */}
                  <div>
                    <label htmlFor="church-input" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                      Igreja / Ministério
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                        <Home className="h-5 w-5" />
                      </span>
                      <input
                        id="church-input"
                        type="text"
                        name="church"
                        value={formData.church}
                        onChange={handleChange}
                        placeholder="Nome da sua igreja"
                        className="w-full bg-zinc-900/60 hover:bg-zinc-900 focus:bg-zinc-950 text-white rounded-sm pl-11 pr-4 py-3.5 text-sm border border-zinc-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 4. Cidade */}
                  <div>
                    <label htmlFor="city-input" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                      Cidade / Estado
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <input
                        id="city-input"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Ex: Belford Roxo - RJ"
                        className="w-full bg-zinc-900/60 hover:bg-zinc-900 focus:bg-zinc-950 text-white rounded-sm pl-11 pr-4 py-3.5 text-sm border border-zinc-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Form submit button */}
                <button
                  id="confirm-rsvp-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group py-4 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-black font-black tracking-widest text-xs rounded-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-xl shadow-gold-500/10 hover:shadow-gold-500/25 active:scale-[0.99] disabled:opacity-50 uppercase"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  {isSubmitting ? "CONFIRMANDO..." : "CONFIRMAR PRESENÇA ESPECIAL"}
                </button>
              </form>
            </motion.div>
          ) : (
            /* Premium Success Ticket Mockup */
            <motion.div
              key="rsvp-success"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="max-w-xl mx-auto"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ rotate: -15, scale: 0.5 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 mb-4"
                >
                  <CheckCircle2 className="h-9 w-9" />
                </motion.div>
                
                <h3 className="font-serif text-3xl font-extrabold text-white">Presença Confirmada!</h3>
                <p className="mt-3 text-[#f4edd0] text-sm italic">
                  &ldquo;Seu lugar está reservado. Nos vemos no Congresso Jovem 2K26.&rdquo;
                </p>
              </div>

              {/* High-End digital luxury ticket */}
              <div className="relative overflow-hidden rounded-sm bg-zinc-950 border border-gold-400/30 shadow-2xl flex flex-col">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 to-gold-400" />
                
                {/* Upper ticket half */}
                <div className="p-8 pb-4 relative flex flex-col text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#d8c067] font-bold">EVENTPASS • CORTESIA</span>
                      <h4 className="font-serif text-2xl font-black text-white uppercase mt-1">CONGRESSO JOVEM 2K26</h4>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ANO DA RECONSTRUÇÃO</p>
                    </div>
                    {/* Golden Ticket Icon */}
                    <div className="text-gold-400 p-2.5 rounded-lg bg-gold-950/20 border border-gold-800/30">
                      <Ticket className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">CONVIDADO</span>
                      <p className="text-sm font-bold text-white truncate">{formData.name}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">TELEFONE</span>
                      <p className="text-sm font-semibold text-white">{formData.phone}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">IGREJA REPRESENTATIVA</span>
                      <p className="text-sm font-semibold text-zinc-300 truncate">{formData.church || "Visitante"}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">CADASTRADO DE</span>
                      <p className="text-sm font-semibold text-zinc-300 truncate">{formData.city || "Belford Roxo"}</p>
                    </div>
                  </div>
                </div>

                {/* Perforated ticket seam */}
                <div className="relative h-4 flex items-center justify-between">
                  <div className="w-4 h-4 rounded-full bg-black border-r border-zinc-900 -ml-2" />
                  <div className="w-full border-b border-dashed border-zinc-800" />
                  <div className="w-4 h-4 rounded-full bg-black border-l border-zinc-900 -mr-2" />
                </div>

                {/* Ticket stub bottom half */}
                <div className="p-8 pt-4 bg-zinc-900/30 flex flex-col items-start gap-4 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gold-300">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      <span className="text-xs font-bold">04 e 05 de Julho de 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <MapPin className="h-4 w-4 text-zinc-500" />
                      <span className="text-xs">ADEVIP • Estrada Manoel de Sá, 256</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Inscrição Confirmada • ID: {ticketId}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* WhatsApp manual confirmation CTA */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative overflow-hidden group py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black tracking-widest text-xs rounded-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-[0.99] uppercase flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 text-white" />
                  <span>Enviar Ingressos p/ meu Whatsapp</span>
                </a>
                <p className="text-[11px] text-zinc-500 text-center">
                  Clique no botão acima para enviar o comprovante com os detalhes para o nosso WhatsApp se não abrir automaticamente.
                </p>
              </div>

              {/* Return option */}
              <button
                id="reset-rsvp-btn"
                onClick={() => {
                  setFormData({ name: "", phone: "", church: "", city: "" });
                  setIsSuccess(false);
                }}
                className="mt-6 text-zinc-500 hover:text-gold-400 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 mx-auto cursor-pointer focus:outline-none"
              >
                ← Confirmar mais uma pessoa
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
