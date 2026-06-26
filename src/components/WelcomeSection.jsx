import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75 } },
};

const WelcomeSection = () => {
  return (
    <motion.section
      className="py-12 md:py-20 px-6 md:px-20 text-center"
      style={{
        background: "linear-gradient(135deg, #FDE68A 0%, #D4AF37 35%, #C9A227 60%, #B8962E 100%)",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        className="font-body italic text-amber-100 text-xs uppercase mb-5"
        style={{ letterSpacing: "0.35em" }}
        variants={itemVariants}
      >
        — Queremos compartirlo con vos —
      </motion.p>

      <motion.h2
        className="font-serif text-4xl md:text-5xl font-bold text-amber-950 drop-shadow mb-5"
        variants={itemVariants}
      >
        ¡Bienvenidos!
      </motion.h2>

      <motion.div
        className="w-20 h-px mx-auto mb-6"
        style={{ background: "rgba(255,255,255,0.5)" }}
        variants={itemVariants}
      />

      <motion.p
        className="font-body text-xl md:text-2xl text-amber-900 max-w-2xl mx-auto leading-relaxed mb-4"
        variants={itemVariants}
      >
        Gracias por compartir con nosotros este día tan especial
      </motion.p>

      <motion.p
        className="font-script mt-6 drop-shadow"
        style={{ color: "#5C3A00", fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
        variants={itemVariants}
      >
        Lucia &amp; Agustín
      </motion.p>
    </motion.section>
  );
};

export default WelcomeSection;
