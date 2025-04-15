import { FaWhatsapp, FaInstagram } from "react-icons/fa"

interface BannerProps {
  image: string,
  title: string,
  subtitle: string,
  description: string
}

const Banner = ({image, title, subtitle, description}: BannerProps) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <h2 className="text-lg md:text-2xl mb-6">{subtitle}</h2>
        <p className="text-lg md:text-xl mb-6">{description}</p>

        <div className="flex justify-center gap-6 mt-8 ">
          <a
            href="https://wa.me/543564632553" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-black/60 p-4 rounded-full hover:bg-green-600 active:bg-green-600 focus-visible:ring-2 focus-visible:ring-green-600 transition-all"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://www.instagram.com/sepico_quesosyfiambres/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-black/60 p-4 rounded-full hover:bg-pink-600 active:bg-pink-600 focus-visible:ring-2 focus-visible:ring-pink-600 transition-all"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
