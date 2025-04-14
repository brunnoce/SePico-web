import Banner from "../components/Banner"
import ProductSlider from "../components/ProductSlider"
import {bannerImage} from "../assets/index"

const Home = () => {
  return (
    <div>
      <Banner 
        image={bannerImage}
        title="ARMAMOS TU PICADA"
        subtitle="Gran variedad de quesos y fiambres"
        description="Hace tu pedido!"  
      />
      <ProductSlider />
    </div>
  )
}

export default Home
