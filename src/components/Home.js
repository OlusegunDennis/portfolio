import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image from "../Assets/coolDp.jpeg"; // Ensure the path is correct

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001f3f] text-white relative">
      {/* Social Media Links */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#ffd700] hover:text-[#fff700] transition"
        >
          <i className="fab fa-twitter text-3xl"></i> {/* Font Awesome Icon */}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#ffa500] hover:text-[#ffcc00] transition"
        >
          <i className="fab fa-linkedin text-3xl"></i> {/* Font Awesome Icon */}
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#ffffff] hover:text-[#cccccc] transition"
        >
          <i className="fab fa-github text-3xl"></i> {/* Font Awesome Icon */}
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100094069570855" // Facebook link added here
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#3b5998] hover:text-[#4c70ba] transition" // Facebook color scheme
        >
          <i className="fab fa-facebook-f text-3xl"></i> {/* Font Awesome Icon for Facebook */}
        </a>
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold">Hello, I am</h1>
      <h2 className="text-3xl mt-2">Olusegun Dennis</h2>
      <h3 className="text-xl mt-2">Quality Assurance & Software Tester</h3>
      <img 
        src={image} 
        alt="Cool Profile" 
        className="w-full h-auto max-w-xs rounded-full" 
      />
      
      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <a 
          href="https://example.com/path-to-your-cv.pdf" // Replace with your CV link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200"
        >
          DOWNLOAD CV
        </a>
        <Link to="/contact">
          <button className="bg-orange-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition duration-200">
            LET'S TALK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;