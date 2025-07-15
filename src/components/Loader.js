import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar bg-leather-brown text-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">LeatherCraft</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-tan-light">
            Home
          </Link>
          <Link to="/about" className="hover:text-tan-light">
            About
          </Link>
          <Link to="/contact" className="hover:text-tan-light">
            Contact
          </Link>
          <Link to="/cart" className="relative hover:text-tan-light">
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