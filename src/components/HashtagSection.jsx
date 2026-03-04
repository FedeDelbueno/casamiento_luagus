import { motion } from "framer-motion";
import { FaHashtag, FaInstagram } from "react-icons/fa";

const HashtagSection = () => {
  return (
    <motion.section
        className="relative py-16 px-6 md:px-20 text-center flex flex-col items-center gap-6 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
            background: "linear-gradient(120deg, #fce7f0, #ffe0f7, #f8e1ff)"
        }}
    >
       {/* Flor pegada al costado izquierdo */}
        <img
        src="/images/lavender.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-48 opacity-50 pointer-events-none scale-x-[-1]"
        alt="flores decorativas"
        />
      {/* Íconos del hashtag */}
      <div className="flex items-center gap-4 mb-2">
        <FaHashtag className="text-4xl md:text-5xl text-yellow-400" />
        <FaInstagram className="text-4xl md:text-5xl text-pink-500" />
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-md">
        #LUGUS2026
      </h2>

      <p className="text-lg md:text-xl max-w-3xl">
        ¡Preparate para nuestro gran día!<br />
        Etiquetanos en Instagram con nuestro hashtag en tus fotos, reels o videos.
      </p>

      <motion.a
        href="https://www.instagram.com/explore/tags/lugus2026/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-full font-semibold text-gray-800 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #fef3c7, #fde68a, #ff7a95)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver hashtag
      </motion.a>
    </motion.section>
  );
};

export default HashtagSection;