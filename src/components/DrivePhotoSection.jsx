import { motion } from "framer-motion";
import { FaCamera, FaGoogleDrive } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";

// ⚡ Reemplazá esta URL con el link de la carpeta de Google Drive compartida
// Ejemplo: "https://drive.google.com/drive/folders/TU_ID_DE_CARPETA?usp=sharing"
const DRIVE_URL = "https://drive.google.com/drive/folders/REEMPLAZAR_CON_LINK_REAL";

const DrivePhotoSection = () => {
  return (
    <motion.section
      className="py-12 md:py-20 px-6 md:px-20 text-center flex flex-col items-center gap-5"
      style={{
        background: "linear-gradient(135deg, #FDE68A 0%, #D4AF37 35%, #C9A227 60%, #B8962E 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Icono */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "1.5px solid rgba(255,255,255,0.4)",
        }}
      >
        <FaCamera className="text-xl text-amber-950" />
      </div>

      <p className="section-label text-amber-100">— Compartí el momento —</p>

      <h2 className="font-serif text-2xl md:text-4xl font-bold text-amber-950 drop-shadow">
        ¡Subí tus fotos del casamiento!
      </h2>

      <div
        style={{
          height: "1px",
          width: "60%",
          maxWidth: "200px",
          background: "rgba(255,255,255,0.4)",
        }}
      />

      <p className="font-body text-base md:text-lg text-amber-900 max-w-sm md:max-w-xl leading-relaxed">
        Escaneá el código QR y subí tus fotos y videos a nuestra carpeta compartida.
        ¡Queremos revivir cada momento con ustedes!
      </p>

      {/* QR Code */}
      <div
        className="bg-white rounded-2xl p-5 shadow-2xl"
        style={{ border: "2px solid rgba(255,255,255,0.6)" }}
      >
        <QRCodeSVG
          value={DRIVE_URL}
          size={180}
          bgColor="white"
          fgColor="#5C3A00"
          level="M"
        />
      </div>

      <p className="font-body italic text-amber-900 text-sm max-w-[240px] leading-relaxed">
        Apuntá la cámara de tu celular al código y accedé a la carpeta
      </p>

      {/* Botón alternativo */}
      <motion.a
        href={DRIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold tracking-wide shadow-lg"
        style={{
          background: "rgba(255,255,255,0.22)",
          border: "1.5px solid rgba(255,255,255,0.5)",
          color: "#3D2800",
          backdropFilter: "blur(6px)",
        }}
        whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.32)" }}
        whileTap={{ scale: 0.97 }}
      >
        <FaGoogleDrive className="text-lg" />
        Abrir carpeta de fotos
      </motion.a>
    </motion.section>
  );
};

export default DrivePhotoSection;
