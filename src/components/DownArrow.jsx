import { motion } from "framer-motion";

const DownArrow = () => {
  return (
    <motion.div
      className="absolute bottom-8 flex justify-center w-full z-10"
      animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 16L6 8H18L12 16Z" fill="#B8962E" />
      </svg>
    </motion.div>
  );
};

export default DownArrow;
