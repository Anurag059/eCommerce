import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-tan-light">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <div className="mt-3 flex space-x-2">
          <Link
            to={`/product/${product._id}`}
            className="flex-1 bg-tan-dark text-white py-2 px-4 rounded hover:bg-tan-light text-center"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;