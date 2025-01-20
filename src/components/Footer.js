import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-white py-4 mt-6 w-full">
      <p>&copy; {new Date().getFullYear()} Olusegun Dennis. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;