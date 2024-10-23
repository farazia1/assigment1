import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section: Brand or Logo */}
          <div className="text-lg font-bold">
            <a href="/" className="text-white hover:text-gray-400">
              go to home
            </a>
          </div>

          {/* Center Section: Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; 2024 MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
