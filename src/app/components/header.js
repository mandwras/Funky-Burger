import React from "react";

const Header = () => {
  return(
    <header className="bg-gray-100 p-4 flex items-center justify-between shadow-neumorphic">
      {/* Left Side: Title */}
      <h1 className="text-gray-900 text-2xl font-bold font-sans">Logo</h1>
      
      {/* Center: Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-3"> {/* Adjusted space-x value */}
        <a href="/" className="text-gray-900 font-semibold font-sans text-md">Home</a>
          <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
        <a href="/menu" className="text-gray-900 font-semibold font-sans text-md">Menu</a>
          <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
        <a href="/cart" className="text-gray-900 font-semibold font-sans text-md">Cart</a>
            <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
        <a href="/info" className="text-gray-900 font-semibold font-sans text-md">Info</a>
</nav>

      {/* Right Side: Log In Button */}
      <button className="flex items-center text-gray-900 font-semibold font-sans text-base">
        Log In
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
        </svg>
      </button>
    </header>
  )
}

export default Header;