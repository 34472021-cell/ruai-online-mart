import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
      <h3 className="font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-semibold mt-1">KES {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
