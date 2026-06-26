const Footer = () => {
  return (
    <footer
      className="py-14 px-6 md:px-20 text-center"
      style={{ background: 'linear-gradient(135deg, #3D2800, #4A3000, #5C3A00)' }}
    >
      <p
        className="font-script mb-4 drop-shadow"
        style={{ color: '#FDE68A', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
      >
        Lucia &amp; Agustín
      </p>

      <div
        className="w-28 h-px mx-auto mb-6"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <p className="font-body text-amber-200 mb-2">
        © {new Date().getFullYear()} Lucia & Agustín · Todos los derechos reservados.
      </p>
      <p className="font-body text-amber-300 mb-2">
        Diseñado y creado con ❤️ por <strong className="text-amber-100">Federico Delbueno</strong>
      </p>
      <p className="font-body text-amber-400">
        Usá nuestro hashtag{" "}
        <strong className="text-amber-200">#LUYAGUS2026</strong>{" "}
        para compartir tus fotos.
      </p>
    </footer>
  );
};

export default Footer;
