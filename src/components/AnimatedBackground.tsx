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

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
    }

    const points: Point[] = [];
    let waveOffset = 0;
    let time = 0;

    for (let i = 0; i < 15; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        size: Math.random() * 4 + 3,
      });
    }

    const animate = () => {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-primary').trim() || '#017020';
      const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-secondary').trim() || '#ff9900';

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Digital Grid
      ctx.strokeStyle = '#f8f8f8';
      ctx.lineWidth = 1;
      const gridSize = 50;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      time += 0.005;

      // Digital Particles (Binary & Dots)
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;

        const distFromCenter = Math.abs(point.x - canvas.width / 2);
        const opacityFactor = distFromCenter < 300 ? 0.3 : 1;
        
        ctx.globalAlpha = point.opacity * opacityFactor * 0.4;
        ctx.fillStyle = primaryColor;
        
        if (Math.random() > 0.99) {
          ctx.font = '10px monospace';
          ctx.fillText(Math.random() > 0.5 ? '1' : '0', point.x, point.y);
        } else {
          ctx.beginPath();
          ctx.rect(point.x, point.y, 1.5, 1.5);
          ctx.fill();
        }
      });

      // Straight connection lines - extremely subtle
      ctx.globalAlpha = 0.03;
      ctx.strokeStyle = primaryColor;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
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