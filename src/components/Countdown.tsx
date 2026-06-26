import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Hourglass } from "lucide-react";

export default function Countdown() {
  const targetDate = new Date("2026-07-04T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const timeBlocks = [
    { label: "DIAS", value: padZero(timeLeft.days) },
    { label: "HORAS", value: padZero(timeLeft.hours) },
    { label: "MINUTOS", value: padZero(timeLeft.minutes) },
    { label: "SEGUNDOS", value: padZero(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown-section"
      className="relative py-24 bg-gradient-to-b from-zinc-950 to-black px-4 text-center overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-gold-600/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Accent Icon */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-950/20 text-gold-400 border border-gold-800/40 mb-6 animate-pulse">
          <Hourglass className="h-5 w-5" />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
          A Reconstrução Está <span className="text-gold-gradient">Próxima</span>
        </h2>
        <p className="mt-4 text-xs md:text-sm text-zinc-400 tracking-widest uppercase font-mono">
          FALTAM POUCOS DIAS PARA O DERRAMAR DO ESPÍRITO SANTO
        </p>

        {/* Countdown Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <motion.div
              id={`countdown-block-${idx}`}
              key={block.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 rounded-sm bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-md relative group overflow-hidden shadow-2xl hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="font-serif text-4xl md:text-6xl font-black text-white select-none leading-none tracking-tight">
                {block.value}
              </div>
              
              <div className="mt-3 text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-gold-400/80">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>

        {timeLeft.isOver && (
          <div className="mt-8 text-gold-300 font-serif text-xl tracking-widest animate-pulse">
            O CONGRESSO JÁ SE INICIOU! VEM CONSTRUIR COM A GENTE!
          </div>
        )}
      </div>
    </section>
  );
}
