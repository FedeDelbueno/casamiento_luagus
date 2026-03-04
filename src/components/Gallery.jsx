import { motion } from "framer-motion";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      {/* Título */}
      <h2 className="text-3xl text-center font-bold mb-4">Nuestra Historia</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Momentos felices que queremos compartir con vos
      </p>

      {/* Carrusel horizontal infinito */}
      <div className="overflow-hidden relative mb-16">
        <motion.div
          className="flex gap-6"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              className="w-64 h-64 object-cover rounded-2xl shadow-xl flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Sección de agradecimiento */}
        <div className="bg-gradient-to-r from-[#f3f0ff] to-[#fff9e5] rounded-3xl py-12 px-6 md:px-20 text-center shadow-inner">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 drop-shadow-md">
                ¡Gracias por acompañarnos en este momento tan importante!
            </h3>
            <p className="text-lg text-gray-700 drop-shadow-sm">
                Cada sonrisa, cada abrazo y cada recuerdo compartido hace que nuestro día sea aún más especial.
            </p>
        </div>
    </section>
  );
};

export default Gallery;