import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const SongsSection = () => {
  return (
    <motion.section
      className="py-16 px-6 md:px-20 text-center flex flex-col items-center gap-6 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        background: "linear-gradient(120deg, #fff9f9, #fff0f0, #fffbe6)", // degradé suave y romántico
      }}
    >
      {/* Icono */}
      <FaMusic className="text-4xl md:text-5xl text-yellow-400 mb-4" />

      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-md">
        ¿Qué canciones no pueden faltar?
      </h2>

      {/* Descripción */}
      <p className="text-lg md:text-xl max-w-3xl">
        ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
      </p>

      {/* Botón */}
      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfwShrV1yQcE4sIoonvcv2rjqSrOsVs5LHeSO-spjRPc8-VfQ/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-full font-semibold text-gray-800 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #fef3c7, #fde68a, #ff7a95)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sugerir canción
      </motion.a>
    </motion.section>
  );
};

export default SongsSection;