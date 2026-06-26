import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const createParticle = (initY = false) => {
      const size = Math.random() * 2.5 + 0.5;
      return {
        x: Math.random() * canvas.width,
        y: initY ? Math.random() * canvas.height : canvas.height + 10,
        size,
        speedY: -(Math.random() * 0.5 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        fadeSpeed: Math.random() * 0.002 + 0.001,
      };
    };

    // Pre-populate particles
    for (let i = 0; i < 40; i++) {
      particles.push(createParticle(true));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple dark gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, "rgba(10, 8, 5, 0.15)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Draw glowing particle
        ctx.beginPath();
        const goldGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        goldGlow.addColorStop(0, `rgba(232, 218, 159, ${p.opacity})`);
        goldGlow.addColorStop(0.5, `rgba(201, 164, 59, ${p.opacity * 0.4})`);
        goldGlow.addColorStop(1, "rgba(27, 16, 5, 0)");
        ctx.fillStyle = goldGlow;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(244, 237, 208, ${p.opacity * 0.8})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Edge containment & recycling
        if (p.y < -20 || p.x < -10 || p.x > canvas.width + 10) {
          particles[index] = createParticle();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}
