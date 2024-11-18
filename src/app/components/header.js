"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ toggleCart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="border-b border-gray-200 p-2 flex items-center justify-between">
        <Image
          src="/icons/burger-logo.png"
          alt="Funky Burger Logo"
          className="w-16 h-16 object-contain"
          width={100}
          height={100}
        />
        {/* Funky Burger text for mobile view */}
        <span className="block text-gray-900 font-bold text-lg sm:block md:hidden pixel-font">
          Funky Burger
        </span>
        <nav className="hidden md:flex flex-grow justify-center space-x-[5vw] items-center">
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
          >
            Cart
          </div>
        </nav>

        <div className="hidden md:flex">
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
        </div>

        {/* Drawer Icon */}
        <button
          onClick={toggleDrawer}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-indigo-100 to-gray-100 via-purple-50  shadow-md transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <button
            onClick={toggleDrawer}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
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
            onClick={() => {
              toggleCart();
              toggleDrawer();
            }}
            className="cursor-pointer text-gray-900 font-semibold pixel-font text-md cart-button flex items-center"
          >
            Cart
          </div>
          <Link href="/login" className="text-gray-900 font-semibold pixel-font text-md">
            Log In
          </Link>
        </nav>
      </div>
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Header;
