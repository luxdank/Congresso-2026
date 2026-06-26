import { motion } from "motion/react";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import adevipLogo from "../assets/images/adevip_logo.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-[#030303] text-zinc-400 border-t border-zinc-900 overflow-hidden">
      
      {/* Decorative Golden Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-500/55 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Logo ADEVIP & Branding column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col items-start gap-1 cursor-pointer select-none" onClick={scrollToTop}>
              <img
                src={adevipLogo}
                alt="ADEVIP Logo"
                className="h-7 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
              <span className="block text-[8px] uppercase tracking-[0.42em] font-mono text-gold-500 font-bold pl-0.5 mt-1.5 opacity-95">Assembleia de Deus</span>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-sm">
              Um ministério engajado em espalhar a palavra da verdade e apoiar o crescimento espiritual de toda a nossa comunidade.
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-zinc-800 hover:border-gold-500/40 hover:bg-gold-500 hover:text-black flex items-center justify-center text-zinc-400 transition-all focus:outline-none"
                aria-label="Acessar Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-zinc-800 hover:border-gold-500/40 hover:bg-gold-500 hover:text-black flex items-center justify-center text-zinc-400 transition-all focus:outline-none"
                aria-label="Acessar YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-zinc-800 hover:border-gold-500/40 hover:bg-gold-500 hover:text-black flex items-center justify-center text-zinc-400 transition-all focus:outline-none"
                aria-label="Acessar Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold tracking-widest text-[#d4af37] uppercase">NAVEGAÇÃO</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#hero-section" className="hover:text-gold-200 transition-colors">Início</a>
              </li>
              <li>
                <a href="#info-section" className="hover:text-gold-200 transition-colors">Informações</a>
              </li>
              <li>
                <a href="#speakers-section" className="hover:text-gold-200 transition-colors">Preletores e Louvor</a>
              </li>
              <li>
                <a href="#rsvp-section" className="hover:text-gold-200 transition-colors">Confirmar Presença</a>
              </li>
            </ul>
          </div>

          {/* Full address column */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-serif text-sm font-bold tracking-widest text-[#d4af37] uppercase">ENDEREÇO DA SEDE</h4>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-light">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>
                  Estrada Manoel de Sá, 256<br />
                  Vale do Ipê, Belford Roxo - RJ<br />
                  CEP: 26177-110
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-500" />
                <a href="mailto:midia.adevip@gmail.com" className="hover:text-gold-100">midia.adevip@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-500" />
                <a href="tel:+5521974737108" className="hover:text-gold-100">+55 (21) 97473-7108</a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing details section */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-600 font-medium">
          
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-zinc-500 text-[13px] font-semibold tracking-wide">
              2026 — Ano da Reconstrução
            </p>
            <p className="text-zinc-600">
              Uma geração levantada para cumprir o propósito de Deus.
            </p>
          </div>

          <div className="flex items-center gap-1.5 justify-center md:justify-end text-[11px]">
            <span>© ADEVIP. Todos os direitos reservados.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
