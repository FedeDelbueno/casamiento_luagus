import { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

const GiftSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-12 px-6 md:px-20 text-center flex flex-col items-center gap-4 bg-white text-gray-800 overflow-hidden">
      {/* Flor pegada al costado derecho */}
      <img
        src="/images/lavender.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-40 pointer-events-none"
        alt="flores decorativas"
      />

      {/* Icono de regalo */}
      <FaGift className="text-4xl md:text-5xl text-yellow-400 mb-4 z-10" />

      {/* Título romántico */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-yellow-600 drop-shadow-md font-[Dancing\ Script] z-10">
        Nuestro Hogar
      </h2>

      {/* Texto descriptivo con fuente cursiva y ancho completo */}
      <p className="text-lg md:text-xl mb-4 w-full text-center tracking-wide font-[Dancing\ Script] z-10">
        Ya tenemos nuestro hogar equipado, si querés hacernos un regalo, podés hacerlo a:
      </p>

      {/* Botón para abrir modal */}
      <motion.button
        className="px-6 py-2 rounded-lg font-semibold text-gray-800 z-10"
        style={{
          background: "linear-gradient(90deg, #fef3c7, #fde68a, #ff7a95)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        Ver más
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="rounded-3xl shadow-2xl p-6 max-w-md w-full relative text-gray-800"
            style={{
              background: "linear-gradient(135deg, #fef3c7, #fde68a, #ff7a95)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Cerrar */}
            <button
              className="absolute top-3 right-3 text-gray-800 hover:text-gray-900 text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">Datos Bancarios</h3>

            <div className="mb-4">
              <h4 className="font-semibold">Caja de ahorro en Pesos</h4>
              <p>Número de cuenta: </p>
              <p>CBU: </p>
              <p>Alias: </p>
            </div>

            <div>
              <h4 className="font-semibold">Caja de ahorro en Dólares</h4>
              <p>Número de cuenta: </p>
              <p>CBU: </p>
              <p>Alias: </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GiftSection;