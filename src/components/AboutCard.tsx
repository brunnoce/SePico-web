interface AboutCardProps {
  title: string
  description: string
  image: string
  reverse?: boolean
}

const AboutCard = ({ title, description, image, reverse = false }: AboutCardProps) => {
  return (
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-8 py-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full max-h-80 rounded-xl shadow-lg object-contain"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
  )
}

export default AboutCard