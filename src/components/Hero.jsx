import { motion } from "framer-motion";
import Countdown from "./Countdown";
import DownArrow from "./DownArrow";

const Hero = () => {
  const weddingDate = new Date("2026-11-25T17:00:00");

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">

      {/* Fondo dinámico animado */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(120deg, #fef3c7, #fde68a, #ffb6b9)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>

       {/* Flores decorativas */}
        <img 
            src="/images/lavender.png" 
            className="absolute top-0 left-0 w-32 md:w-48 opacity-20 pointer-events-none scale-x-[-1]" 
            alt="flores decorativas"
        />
        <img 
            src="/images/lavender.png" 
            className="absolute bottom-0 right-0 w-32 md:w-48 opacity-20 pointer-events-none" 
            alt="flores decorativas"
        />
      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg text-center">
            Lucia Navarro <br /> & Agustin Delbueno
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-sm">
          ¡Se casan el 25 de Noviembre 2026!
        </p>

        {/* Contador dentro del Hero */}
        <Countdown targetDate={weddingDate} />
      </motion.div>

      {/* Flecha minimal animada */}
      <DownArrow />

      {/* Elemento decorativo */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>
    </section>
  );
};

export default Hero;