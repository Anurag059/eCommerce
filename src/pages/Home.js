import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load products. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container py-8 text-center">Loading...</div>;
  if (error) return <div className="container py-8 text-center text-red-500">{error}</div>;

  return (
    <div className="home container py-8">
      <h1 className="text-3xl font-bold text-leather-brown mb-6">Our Leather Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;