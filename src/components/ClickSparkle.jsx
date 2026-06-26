import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ["#D4AF37", "#FDE68A", "#B8962E", "#F9E27A", "#FFF5B0", "#FFFEF9"];

const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  angle: i * 36,
  distance: 22 + (i % 3) * 18,
  size: 3 + (i % 3),
  color: COLORS[i % COLORS.length],
}));

const ClickSparkle = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const spark = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev.slice(-8), spark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== spark.id));
      }, 680);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[200]" aria-hidden="true">
      <AnimatePresence>
        {sparks.map((spark) =>
          PARTICLES.map((p, i) => (
            <motion.div
              key={`${spark.id}-${i}`}
              className="absolute rounded-full"
              style={{
                left: spark.x - p.size / 2,
                top: spark.y - p.size / 2,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size + 3}px ${p.color}`,
              }}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{
                opacity: 0,
                x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                scale: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClickSparkle;
