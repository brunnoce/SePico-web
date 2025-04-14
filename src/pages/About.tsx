import AboutCard from "../components/AboutCard"
import {prod1, prod2, prod3} from "../assets/index"

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AboutCard
        title="NUESTRA HISTORIA"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. 
        lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."        
        image={prod1}
      />
      <AboutCard
        title="NUESTROS PRODUCTOS"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. 
        lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        image={prod2}
        reverse
      />
      <AboutCard
        title="NUESTRO LOCAL"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. 
        lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."        
        image={prod3}
      />
    </div>
  )
}

export default About