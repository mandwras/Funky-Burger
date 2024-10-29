"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//import ShoppingCheck from "./shoppingCheck";
//import ShoppingCart from "./shoppingCart";

const Header = ({ toggleCart }) => {
  return (
    <>
      <header className="border-b border-gray-200 p-2 flex items-center justify-between ">
        {/* Left Side: Logo */}
        <Image
          src="/icons/burger-logo.png" 
          alt="Funky Burger Logo" 
          className="w-16 h-16 object-contain"  width={100} height={100}
        />

        {/* Center: Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-[5vw] items-center">
          <Link href="/" className="text-gray-900 font-semibold pixel-font text-md">
            Home
          </Link>
          <Link href="/menu" className="text-gray-900 font-semibold pixel-font text-md">
            Menu
          </Link>
          <Link href="/info" className="text-gray-900 font-semibold pixel-font text-md">
            Info
          </Link>   
          <div 
            onClick={toggleCart} 
            className="cursor-pointer text-gray-900 font-semibold pixel-font text-md cart-button flex items-center transform hover:scale-110 transition-transform duration-300"
          >Cart
            {/* <Image src="/icons/cart.png" alt="Cart" className="w-9 h-9 object-contain" width={100} height={100} /> */}
          </div>
        </nav>

        {/* Right Side: Log In Button */}
        <Link href="/login">
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
        </Link>
      </header>
    </>
  );
};

export default Header;
