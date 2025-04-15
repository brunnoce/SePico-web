import { Suspense, lazy } from "react"
import { prod1, prod2, prod3 } from "../assets/index"

const AboutCard = lazy(() => import("../components/AboutCard"))

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Suspense fallback={<div className="text-center py-6">Cargando sección...</div>}>
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
      </Suspense>
    </div>
  )
}

export default About