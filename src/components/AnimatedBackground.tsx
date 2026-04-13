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
      'frontend', 'backend', 'UI/UX', 'design',
      'innovation', 'creativity', 'excellence'
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
    let time = 0;

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: Math.random() * 1.2 + 0.5,
        text: codeStrings[Math.floor(Math.random() * codeStrings.length)],
        opacity: Math.random() * 0.5 + 0.15,
        size: Math.random() * 12 + 8,
      });
    }

    const animate = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      // Animated waves
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = '#ff9900';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height * 0.65 + Math.sin((x + waveOffset) * 0.007) * 50 + Math.sin((x + waveOffset * 1.5) * 0.004) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#017020';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height * 0.4 + Math.sin((x + waveOffset + 120) * 0.006) * 40 + Math.sin((x + waveOffset * 1.2) * 0.003) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#3b82f6';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height * 0.25 + Math.sin((x + waveOffset + 240) * 0.008) * 25 + Math.sin((x + waveOffset * 0.8) * 0.004) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      waveOffset += 1.5;

      // Update and draw particles
      particles.forEach(particle => {
        particle.y += particle.vy;
        particle.x += Math.sin(time + particle.y * 0.001) * 0.4;

        if (particle.y > canvas.height + 30) {
          particle.y = -30;
          particle.x = Math.random() * canvas.width;
          particle.text = codeStrings[Math.floor(Math.random() * codeStrings.length)];
          particle.opacity = Math.random() * 0.5 + 0.15;
          particle.size = Math.random() * 12 + 8;
        }

        if (particle.x < -50 || particle.x > canvas.width + 50) {
          particle.vx *= -1;
        }

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = Math.random() > 0.5 ? '#ff9900' : '#017020';
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      // Draw connecting lines
      ctx.globalAlpha = 0.08;
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

      // Twinkling stars
      for (let i = 0; i < 5; i++) {
        const starX = Math.random() * canvas.width;
        const starY = Math.random() * canvas.height;
        const twinkle = Math.sin(time * 4 + i) * 0.5 + 0.5;
        ctx.globalAlpha = twinkle * 0.4;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(starX, starY, 1.5, 0, Math.PI * 2);
        ctx.fill();
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