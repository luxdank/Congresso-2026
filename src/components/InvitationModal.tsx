import { motion, AnimatePresence } from "motion/react";
import { X, Play, Volume2, Shield } from "lucide-react";

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvitationModal({ isOpen, onClose }: InvitationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="invitation-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 9999 }}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="invitation-modal-container"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-gold-400 bg-black shadow-2xl shadow-gold-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Golden Header Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-800" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 z-55 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 hover:bg-gold-500 transition-all border border-gold-400 text-white hover:text-black group focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Fecar vídeo"
            >
              <X className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Video Content */}
            <div className="relative aspect-video w-full bg-zinc-950">
              {/* Cinematic Video Embed */}
              <iframe
                id="invitation-video"
                className="h-full w-full object-cover"
                src="https://www.youtube.com/embed/S_Csp-Zidb4?autoplay=1&mute=0&rel=0"
                title="Congresso Jovem 2K26 - Convite Especial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="no-referrer"
              ></iframe>

              {/* Decorative light leaking */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Video Footer Info */}
            <div className="p-6 md:p-8 bg-zinc-950/90 text-left border-t border-zinc-900">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-300 tracking-wide">
                    Uma Grande Obra Está Sendo Feita!
                  </h3>
                  <p className="mt-1 text-zinc-400 text-sm max-w-xl">
                    Assista à convocação especial dos preletores e pastores para o Congresso Jovem 2K26. Prepare o seu coração para dias inesquecíveis de restauração espiritual.
                  </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-700/30 bg-gold-950/20 text-gold-300 text-xs font-semibold">
                  <Shield id="shield-icon" className="h-4 w-4 text-gold-400 animate-pulse" />
                  <span>Entrada Franca / RSVP Obrigatório</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
