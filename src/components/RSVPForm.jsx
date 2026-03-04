import { motion } from "framer-motion";

const RSVPSection = () => {
  return (
    <motion.section
      className="py-16 px-6 md:px-20 text-center flex flex-col items-center gap-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-50 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-md">
        CONFIRMACIÓN DE ASISTENCIA
      </h2>
      <p className="text-lg md:text-xl max-w-3xl">
        Por favor confirmar asistencia antes del <strong>01/10/2026</strong>. 
        Por cuestiones de organización tenemos esa fecha límite. 
        Quien no haya confirmado antes de esta fecha, no podrá ser incluido después. 
        ¡Gracias por comprendernos!
      </p>

      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdyNJREO7GgLJ4zIgzSl2RLZT8wcv0kC7lrt0KxrFvHKTZMXA/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-full font-semibold text-gray-800 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #fef3c7, #fde68a, #ff7a95)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Confirmar asistencia
      </motion.a>
    </motion.section>
  );
};

export default RSVPSection;