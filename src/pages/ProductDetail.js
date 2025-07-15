import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/cartContext';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load product. Please try again.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container py-8 text-center">Loading...</div>;
  if (error) return <div className="container py-8 text-center text-red-500">{error}</div>;
  if (!product) return <div className="container py-8 text-center">Product not found</div>;

  return (
    <div className="product-detail container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;