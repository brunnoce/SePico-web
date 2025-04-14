import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/products";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const arrowColor = "#c91c1c";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-8 transform -translate-y-1/2 cursor-pointer z-30"
      style={{ color: arrowColor }}
    >
      <IoIosArrowForward size={40} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -left-8 transform -translate-y-1/2 cursor-pointer z-30"
      style={{ color: arrowColor }}
    >
      <IoIosArrowBack size={40} />
    </div>
  );
};

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">PRODUCTOS</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider