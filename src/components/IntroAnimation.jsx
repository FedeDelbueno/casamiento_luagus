import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  const handleComplete = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 900);
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(handleComplete, 2800);
    return () => clearTimeout(timer);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #2E1A00, #3D2800, #4A3000)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* Flores decorativas */}
          <img
            src="/images/lavender.png"
            className="absolute top-0 left-0 w-28 md:w-40 opacity-20 pointer-events-none scale-x-[-1]"
            alt=""
          />
          <img
            src="/images/lavender.png"
            className="absolute bottom-0 right-0 w-28 md:w-40 opacity-20 pointer-events-none"
            alt=""
          />

          {/* Línea superior */}
          <motion.div
            className="mb-8"
            style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, #D4AF37)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />

          {/* Etiqueta */}
          <motion.p
            className="font-body italic tracking-[0.35em] text-xs uppercase mb-5"
            style={{ color: "rgba(253,230,138,0.7)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Con inmensa alegría
          </motion.p>

          {/* Nombres en script */}
          <motion.h1
            className="font-script leading-tight mb-1"
            style={{
              color: "#FDE68A",
              fontSize: "clamp(2.8rem, 11vw, 5.5rem)",
              textShadow: "0 2px 20px rgba(212,175,55,0.4)",
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 1, ease: "easeOut" }}
          >
            Lucia &amp; Agustín
          </motion.h1>

          {/* Divisor dorado */}
          <motion.div
            className="my-5"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "120px" }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />

          {/* Fecha */}
          <motion.p
            className="font-body tracking-[0.4em] uppercase"
            style={{ color: "rgba(253,230,138,0.85)", fontSize: "0.9rem" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            25 · Noviembre · 2026
          </motion.p>

          {/* Línea inferior */}
          <motion.div
            className="mt-8"
            style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #D4AF37, transparent)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
