
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

    // Code particles animation
    const codeStrings = ['andrew', 'cephas', 'ngumbau', 'catech', 'hire me', '{Quality}', 'graphics', 'website development', 'website design', 'web development', 'software development', 'full stack developer', 'frontend developer', 'backend developer', 'UI/UX designer'];
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      opacity: number;
      size: number;
    }> = [];

    // Wave properties
    let waveOffset = 0;

    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: Math.random() * 2 + 1,
        text: codeStrings[Math.floor(Math.random() * codeStrings.length)],
        opacity: Math.random() * 0.7 + 0.3,
        size: Math.random() * 14 + 10,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated wave
      ctx.strokeStyle = '#ff9900';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.3;

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = canvas.height * 0.7 + Math.sin((x + waveOffset) * 0.01) * 50;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Second wave
      ctx.strokeStyle = '#017020';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = canvas.height * 0.3 + Math.sin((x + waveOffset + 100) * 0.008) * 40;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      waveOffset += 2;

      // Update and draw code particles
      particles.forEach(particle => {
        particle.y += particle.vy;
        particle.x += particle.vx;

        if (particle.y > canvas.height + 20) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
          particle.text = codeStrings[Math.floor(Math.random() * codeStrings.length)];
        }

        if (particle.x < -50 || particle.x > canvas.width + 50) {
          particle.vx *= -1;
        }

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = Math.random() > 0.5 ? '#ff9900' : '#017020';
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#ff9900';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
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
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}
    />
  );
};

export default AnimatedBackground;
