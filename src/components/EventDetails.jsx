import { motion } from "framer-motion";
import { FaChurch, FaGlassCheers } from "react-icons/fa"; // iconos

const EventDetails = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800 px-6 md:px-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Ceremonia */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <FaChurch className="text-4xl text-yellow-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Ceremonia</h2>
          <p className="text-lg mb-1">25 de noviembre a las <strong>20:00</strong> horas</p>
          <p className="text-lg mb-4">Parroquia Sagrado Corazón de Jesús</p>
          <a
            href="https://maps.google.com/?q=Parroquia+Sagrado+Corazon+de+Jesus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 font-semibold underline mt-auto"
          >
            Ver en Google Maps
          </a>
        </div>

        {/* Fiesta */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <FaGlassCheers className="text-4xl text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fiesta</h2>
          <p className="text-lg mb-1">Después de la ceremonia, a las <strong>21:00</strong> hs</p>
          <p className="text-lg mb-4">Asociación Rural General Madariaga</p>
          <a
            href="https://maps.google.com/?q=Asociacion+Rural+General+Madariaga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 font-semibold underline mt-auto"
          >
            Ver en Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;