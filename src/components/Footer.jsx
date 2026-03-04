const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-20 text-center text-gray-600">
      <p className="mb-2">
        © {new Date().getFullYear()} Lucia & Agustin. Todos los derechos reservados.
      </p>
      <p className="mb-2">
        Diseñado y creado con ❤️ por <strong>Federico Delbueno</strong>
      </p>
      <p>
        Usá nuestro hashtag <strong>#LUGUS2026</strong> para compartir tus fotos.
      </p>
    </footer>
  );
};

export default Footer;