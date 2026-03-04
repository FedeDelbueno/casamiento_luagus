import { motion } from "framer-motion";

const DownArrow = () => {
  return (
    <motion.div
      className="absolute bottom-8 flex justify-center w-full z-10"
      animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {/* Triángulo SVG apuntando hacia abajo */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16L6 8H18L12 16Z"
          fill="#4B5563" // color gris oscuro, combinar con tu texto
        />
      </svg>
    </motion.div>
  );
};

export default DownArrow;