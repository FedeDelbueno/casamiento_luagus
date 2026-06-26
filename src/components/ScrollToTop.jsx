import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #FDE68A, #D4AF37)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 4px 16px rgba(212,175,55,0.45)",
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Volver al inicio"
        >
          <FaChevronUp className="text-amber-900" style={{ fontSize: "14px" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
