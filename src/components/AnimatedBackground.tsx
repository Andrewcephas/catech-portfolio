import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const codeStrings = [
      'andrew', 'cephas', 'ngumbau', 'catech', 
      'hire me', 'Quality', 'graphics', 'website', 
      'web dev', 'software', 'full stack', 
      'frontend', 'backend', 'UI/UX', 'design'
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      opacity: number;
      size: number;
    }

    const particles: Particle[] = [];
    let waveOffset = 0;

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 1 + 0.5,
        text: codeStrings[Math.floor(Math.random() * codeStrings.length)],
        opacity: Math.random() * 0.4 + 0.1,
        size: Math.random() * 10 + 6,
      });
    }

    const animate = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#ff9900';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height * 0.7 + Math.sin((x + waveOffset) * 0.008) * 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#017020';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height * 0.35 + Math.sin((x + waveOffset + 150) * 0.006) * 50;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      waveOffset += 1.2;

      particles.forEach(particle => {
        particle.y += particle.vy;
        particle.x += Math.sin(waveOffset * 0.01 + particle.y * 0.001) * 0.3;

        if (particle.y > canvas.height + 30) {
          particle.y = -30;
          particle.x = Math.random() * canvas.width;
          particle.text = codeStrings[Math.floor(Math.random() * codeStrings.length)];
        }

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = Math.random() > 0.5 ? '#ff9900' : '#017020';
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = '#ff9900';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedBackground;