import './Contact.css';

function Contact() {
  return (
    <div className="contact container py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;