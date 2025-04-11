const Footer = () => {
  return (
    <footer className="bg-[#c91c1c] text-white text-sm px-4 py-4 sm:py-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="text-base font-semibold">Se Picó</div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a href="https://www.instagram.com/sepico_quesosyfiambres/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
            <span>-</span>
            <a href="https://wa.me/543564632553" target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp
            </a>
            <span>-</span>
            <a href="https://maps.app.goo.gl/mj6SzjMWR1rM6A2w8" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Ubicación
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1 sm:gap-2 text-right">
          <div className="font-medium">Desarrollado por <strong>Bruno Cé</strong></div>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-start sm:justify-end">
            <a href="https://github.com/brunnoce" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <span>-</span>
            <a href="https://www.linkedin.com/in/bruno-ce/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <span>-</span>
            <a href="mailto:brunoce2003@gmail.com" className="hover:underline">
              Enviar mail
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;