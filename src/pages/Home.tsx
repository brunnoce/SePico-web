import Banner from "../components/Banner"
import { bannerImage } from "../assets/index"
import { Suspense, lazy } from "react"

const ProductSlider = lazy(() => import("../components/ProductSlider"))

const Home = () => {
  return (
    <div>
      <Banner 
        image={bannerImage}
        title="ARMAMOS TU PICADA"
        subtitle="Gran variedad de quesos y fiambres"
        description="Hace tu pedido!"  
      />

      <Suspense fallback={<div className="text-center py-12">Cargando productos...</div>}>
        <ProductSlider />
      </Suspense>
    </div>
  )
}

export default Home