import React, { useEffect, useRef } from "react";

interface AnimatedFloralBackgroundProps {
  animationSpeed?: number;
  movementIntensity?: number;
  className?: string;
}

const AnimatedFloralBackground: React.FC<AnimatedFloralBackgroundProps> = ({
  animationSpeed = 0.1,
  movementIntensity = 0.1,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size immediately
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Flower colors
    const colors = [
      "rgba(255, 160, 180, 0.9)", // pink
      "rgba(150, 200, 220, 0.9)", // blue
      "rgba(255, 200, 160, 0.9)", // peach
      "rgba(210, 140, 210, 0.9)", // purple
      "rgba(255, 210, 150, 0.9)", // orange
    ];

    // Create flowers
    const flowers: any[] = [];
    for (let i = 0; i < 30; i++) {
      flowers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * movementIntensity,
        speedY: (Math.random() - 0.5) * movementIntensity,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02 * animationSpeed,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.forEach((flower) => {
        // Update position
        flower.x += flower.speedX;
        flower.y += flower.speedY;
        flower.rotation += flower.rotationSpeed;

        // Wrap around screen
        if (flower.x < -flower.size) flower.x = canvas.width + flower.size;
        if (flower.x > canvas.width + flower.size) flower.x = -flower.size;
        if (flower.y < -flower.size) flower.y = canvas.height + flower.size;
        if (flower.y > canvas.height + flower.size) flower.y = -flower.size;

        // Draw flower
        ctx.save();
        ctx.translate(flower.x, flower.y);
        ctx.rotate(flower.rotation);

        // Draw petals
        ctx.fillStyle = flower.color;
        for (let i = 0; i < 6; i++) {
          ctx.save();
          ctx.rotate((i * Math.PI) / 3);
          ctx.beginPath();
          ctx.ellipse(0, -flower.size * 0.6, flower.size * 0.3, flower.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Draw center
        ctx.fillStyle = "rgba(255, 255, 180, 0.9)";
        ctx.beginPath();
        ctx.arc(0, 0, flower.size * 0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation immediately
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animationSpeed, movementIntensity]);

  return (
    <div className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default AnimatedFloralBackground;