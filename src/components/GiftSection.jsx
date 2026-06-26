import { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

const GiftSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative py-10 md:py-16 px-6 md:px-20 text-center flex flex-col items-center gap-4 overflow-hidden"
      style={{ background: '#FFFEF9' }}
    >
      {/* Flores decorativas */}
      <img
        src="/images/lavender.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-25 pointer-events-none"
        alt="flores decorativas"
      />
      <img
        src="/images/lavender.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-25 pointer-events-none scale-x-[-1]"
        alt="flores decorativas"
      />

      {/* Icono */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10"
        style={{ background: 'linear-gradient(135deg, #FDE68A, #D4AF37)' }}
      >
        <FaGift className="text-2xl text-amber-900" />
      </div>

      {/* Título en fuente script */}
      <h2
        className="font-script z-10 drop-shadow"
        style={{ color: '#7D6212', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
      >
        Nuestro Hogar
      </h2>

      <div className="w-24 h-px z-10" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      {/* Descripción */}
      <p className="font-body text-lg md:text-xl text-amber-800 max-w-xl tracking-wide z-10 leading-relaxed">
        Ya tenemos nuestro hogar equipado. Si querés hacernos un regalo, podés hacerlo a:
      </p>

      {/* Botón */}
      <motion.button
        className="btn-gold z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        Ver datos bancarios
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="rounded-3xl shadow-2xl p-8 max-w-md w-full relative"
            style={{
              background: "linear-gradient(135deg, #FFFEF9 0%, #FEF9D9 50%, #FDE68A 100%)",
              border: "1px solid rgba(212,175,55,0.45)",
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-xl font-bold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h3 className="font-serif text-2xl font-bold text-amber-900 text-center mb-2">Datos Bancarios</h3>
            <div className="w-16 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

            <div className="mb-6 text-left">
              <h4 className="font-serif font-semibold text-amber-800 mb-2 text-lg">Caja de ahorro en Pesos</h4>
              <p className="font-body text-amber-700">Número de cuenta:</p>
              <p className="font-body text-amber-700">CBU:</p>
              <p className="font-body text-amber-700">Alias:</p>
            </div>

            <div className="w-full h-px mb-6" style={{ background: 'rgba(212,175,55,0.4)' }} />

            <div className="text-left">
              <h4 className="font-serif font-semibold text-amber-800 mb-2 text-lg">Caja de ahorro en Dólares</h4>
              <p className="font-body text-amber-700">Número de cuenta:</p>
              <p className="font-body text-amber-700">CBU:</p>
              <p className="font-body text-amber-700">Alias:</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GiftSection;
