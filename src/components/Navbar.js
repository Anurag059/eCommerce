import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src="https://via.placeholder.com/100" alt="3DCommerce Logo" className="h-10 mr-2" />
          <span className="text-2xl font-bold text-gray-800">3DCommerce</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;