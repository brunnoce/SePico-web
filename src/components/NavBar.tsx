import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {icon} from "../assets";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50 || currentScroll < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#c91c1c] text-white shadow-md px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <Link to="/">
          <div className="bg-white rounded-full p-1">
            <img src={icon} alt="Logo" className="h-10 w-10 object-contain" />
          </div>
        </Link>
        <Link to="/">
          <span className="text-sm sm:text-base font-medium tracking-wide text-center sm:text-left">
            Se Picó - Quesos y fiambres
          </span>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        <Link to="/">
          <button className="cursor-pointer px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition active:bg-[#ffaa11] active:text-black transition">
            Inicio
          </button>
        </Link>
        <Link to="/about">
          <button className="cursor-pointer px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition active:bg-[#ffaa11] active:text-black transition">
            Nosotros
          </button>
        </Link>
        <Link to="/contact">
          <button className="cursor-pointer px-4 py-2 text-sm border border-white rounded-md text-white hover:bg-[#ffaa11] hover:text-black transition active:bg-[#ffaa11] active:text-black transition">
            Contacto
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar