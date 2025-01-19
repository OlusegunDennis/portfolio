import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-center">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/projects" // Corrected link for Projects
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/services" // Corrected link for Services
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/experience" // Corrected link for Experience
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link 
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                        to="/testimonials"
                    >
                        Testimonials
                    </Link>
                </li>
                {/* Uncomment below line if you want to include Contact link */}
                {/* <li><Link className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-200" to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;