import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <motion.section
      className="py-12 px-6 md:px-20 text-center text-white"
      style={{
        background: "linear-gradient(90deg, #fad53f 0%, #ff7a95 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">¡BIENVENIDOS!</h2>
      <p className="text-lg md:text-xl mb-2">
        Gracias por compartir con nosotros este día tan especial
      </p>
      <p className="text-lg md:text-xl font-semibold mt-4">Lucia & Agustin</p>
    </motion.section>
  );
};

export default WelcomeSection;