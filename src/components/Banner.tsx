import bannerImage from "../assets/bannerImage.jpg"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

const Banner = () => {
  return (
    <div
      className="w-full h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ARMAMOS TUS PICADAS</h1>
        <h3 className="text-lg md:text-2xl mb-6">Gran variedad de quesos y Fiambres</h3>
        <p className="text-lg md:text-xl mb-6">Hace tu pedido!</p>

        <div className="flex justify-center gap-6 mt-8 ">
          <a
            href="https://wa.me/543564632553" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/60 p-4 rounded-full hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://www.instagram.com/sepico_quesosyfiambres/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/60 p-4 rounded-full hover:bg-pink-600 transition-all"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
