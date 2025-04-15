import { Product } from "../data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard