import { motion } from "framer-motion";
import { FaHeart, FaChevronDown } from "react-icons/fa";

const RSVP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyNJREO7GgLJ4zIgzSl2RLZT8wcv0kC7lrt0KxrFvHKTZMXA/viewform?usp=publish-editor";

const RSVPSection = () => {
  return (
    <motion.section
      id="rsvp-section"
      className="relative py-12 md:py-20 px-6 md:px-20 text-center flex flex-col items-center gap-5 md:gap-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FEF9D9 0%, #FDE68A 50%, #FEF9D9 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Anillos expansivos de fondo */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            border: "1.5px solid rgba(212,175,55,0.3)",
            top: "50%",
            left: "50%",
          }}
          initial={{ width: 60, height: 60, x: "-50%", y: "-50%", opacity: 0.8 }}
          animate={{ width: 380, height: 380, x: "-50%", y: "-50%", opacity: 0 }}
          transition={{ duration: 3.5, delay: i * 1.15, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* Badge de urgencia animado */}
      <motion.div
        className="flex items-center gap-2 px-5 py-2 rounded-full z-10"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1.5px solid rgba(184,150,46,0.5)",
          boxShadow: "0 2px 12px rgba(212,175,55,0.3)",
        }}
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 2px 12px rgba(212,175,55,0.3)", "0 4px 24px rgba(212,175,55,0.6)", "0 2px 12px rgba(212,175,55,0.3)"] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span>⏰</span>
        <span className="font-body font-semibold text-amber-800 text-sm tracking-wide">
          Confirmá antes del <strong>01/10/2026</strong>
        </span>
      </motion.div>

      {/* Corazón pulsante */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="z-10"
      >
        <FaHeart className="text-3xl text-amber-600" />
      </motion.div>

      <p className="section-label text-amber-700 z-10">— Confirmá tu lugar —</p>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 drop-shadow-sm z-10">
        Confirmación de Asistencia
      </h2>

      <div
        className="w-24 h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, #B8962E, transparent)" }}
      />

      <p className="font-body text-lg md:text-xl max-w-2xl text-amber-800 leading-relaxed z-10">
        Por favor confirmá tu asistencia antes del <strong>01/10/2026</strong>.
        Por cuestiones de organización tenemos esa fecha límite.
        Quien no haya confirmado antes de esta fecha no podrá ser incluido después.
        ¡Gracias por comprendernos!
      </p>

      {/* Chevrones apuntando al botón */}
      <div className="flex gap-3 z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 0.85, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="text-amber-600 text-lg" />
          </motion.div>
        ))}
      </div>

      {/* CTA principal — pulsante y con glow fuerte */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <motion.a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-base md:text-lg px-10 md:px-14 py-4 font-bold"
          animate={{
            scale: [1, 1.07, 1],
            boxShadow: [
              "0 4px 20px rgba(212,175,55,0.45)",
              "0 10px 50px rgba(212,175,55,0.95)",
              "0 4px 20px rgba(212,175,55,0.45)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
        >
          ¡Confirmar asistencia!
        </motion.a>

        <p className="font-body italic text-amber-700 text-sm z-10">
          ¡Va a ser una noche que no vas a olvidar! ✨
        </p>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
