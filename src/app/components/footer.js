import React from "react";
const Footer = ({bgColor = "bg-gray-100"}) => {
  return (
    <footer className={`${bgColor} py-6 mt-10 shadow-neumorphic`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-gray-600 text-sm">
            © 2024 Funky Burger , Inc. All rights reserved.
          </h1>
        </div>

        {/* Right Side: Icons */}
        <div className="flex justify-center items-center space-x-4">
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5 object-contain opacity-50 grayscale rounded-full hover:opacity-100"/>
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/icons/twitter.png" alt="X" className="w-5 h-5 object-contain opacity-50 hover:opacity-100" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5 object-contain opacity-50 hover:opacity-100" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
