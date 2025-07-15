import './About.css';

function About() {
  return (
    <div className="about container py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Welcome to 3DCommerce, your one-stop shop for innovative 3D-printed products. We
          specialize in creating high-quality, customizable items that blend technology and
          creativity. Our mission is to bring cutting-edge 3D printing solutions to your doorstep.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in 2025, our team is passionate about pushing the boundaries of what's possible
          with 3D printing. From home decor to functional gadgets, we offer a wide range of products
          designed to inspire and delight.
        </p>
        <p className="text-gray-700">
          Thank you for choosing 3DCommerce. We look forward to serving you!
        </p>
      </div>
    </div>
  );
}

export default About;