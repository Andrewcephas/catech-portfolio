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
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;
      waveOffset += 1;

      // Animated waves - clean lines
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#e85d04';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 3) {
        const y = canvas.height * 0.65 + Math.sin((x + waveOffset) * 0.007) * 50 + Math.sin((x + waveOffset * 1.5) * 0.004) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#007520';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 3) {
        const y = canvas.height * 0.4 + Math.sin((x + waveOffset + 120) * 0.006) * 40 + Math.sin((x + waveOffset * 1.2) * 0.003) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#3b82f6';
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 3) {
        const y = canvas.height * 0.25 + Math.sin((x + waveOffset + 240) * 0.008) * 25 + Math.sin((x + waveOffset * 0.8) * 0.004) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw connecting lines between points
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#e85d04';
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        points[i].x += points[i].vx;
        points[i].y += points[i].vy;

        if (points[i].x < 0 || points[i].x > canvas.width) points[i].vx *= -1;
        if (points[i].y < 0 || points[i].y > canvas.height) points[i].vy *= -1;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots at intersection points
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#e85d04';
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Twinkling stars
      for (let i = 0; i < 3; i++) {
        const starX = Math.random() * canvas.width;
        const starY = Math.random() * canvas.height;
        const twinkle = Math.sin(time * 4 + i) * 0.5 + 0.5;
        ctx.globalAlpha = twinkle * 0.3;
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