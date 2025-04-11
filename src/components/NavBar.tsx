import { Link } from "react-router-dom";
import logo from "../assets/icon.png";

const NavBar = () => {
  return (
    <header className="bg-[#c91c1c] text-white shadow-md px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
      <div className="flex items-center gap-3">
        <Link to="/">
          <div className="bg-black rounded-full p-1">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          </div>
        </Link>
        <span className="text-sm sm:text-base font-medium tracking-wide text-center sm:text-left">
          Se Picó - Quesos y fiambres
        </span>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        <Link to="/">
          <button className="px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition">
            Inicio
          </button>
        </Link>
        <Link to="/about">
          <button className="px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition">
            Nosotros
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition">
            Contacto
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;