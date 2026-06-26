import { motion } from "framer-motion";
import { FaHashtag, FaInstagram } from "react-icons/fa";

const HashtagSection = () => {
  return (
    <motion.section
      className="relative py-12 md:py-20 px-6 md:px-20 text-center flex flex-col items-center gap-5 md:gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ background: "#FDFAF2" }}
    >
      {/* Flores decorativas */}
      <img
        src="/images/lavender.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-48 opacity-25 pointer-events-none scale-x-[-1]"
        alt="flores decorativas"
      />
      <img
        src="/images/lavender.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-48 opacity-25 pointer-events-none"
        alt="flores decorativas"
      />

      {/* Íconos en círculos dorados */}
      <div className="flex items-center gap-4 mb-2 z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
          style={{ background: 'linear-gradient(135deg, #FDE68A, #D4AF37)' }}
        >
          <FaHashtag className="text-lg text-amber-900" />
        </div>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
          style={{ background: 'linear-gradient(135deg, #FDE68A, #D4AF37)' }}
        >
          <FaInstagram className="text-lg text-amber-900" />
        </div>
      </div>

      <p className="section-label text-amber-600 z-10">— Compartí el momento —</p>

      <h2
        className="font-serif font-bold tracking-widest z-10"
        style={{ color: '#7D6212', fontSize: 'clamp(1.6rem, 5vw, 3rem)', letterSpacing: '0.12em' }}
      >
        #LUYAGUS2026
      </h2>

      <div className="w-24 h-px z-10" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      <p className="font-body text-lg md:text-xl max-w-2xl text-amber-800 leading-relaxed z-10">
        ¡Preparate para nuestro gran día!<br />
        Etiquetanos en Instagram con nuestro hashtag en tus fotos, reels o videos.
      </p>

      <motion.a
        href="https://www.instagram.com/explore/tags/lugus2026/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Ver hashtag
      </motion.a>
    </motion.section>
  );
};

export default HashtagSection;
