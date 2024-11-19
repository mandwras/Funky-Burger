"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MenuItems = ({ handleAddToCart }) => {
  // State for items and loading status
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/items.json");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching data!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Skeleton loader for items
  const skeletonItems = Array(5).fill(0); // Adjust the number for the number of skeletons

  return (
    <div className="p-8 flex-row">
      <h2 className="text-center text-black text-3xl mb-6 pixel-font">
        Funky&apos;s Menu
      </h2>

      <div className="space-y-8 flex flex-col">
        {loading
          ? skeletonItems.map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 rounded-lg shadow-neumorphic animate-pulse"
              >
                {/* Skeleton Left Side */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 md:mb-0 md:mr-6"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-48"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-36"></div>
                    <div className="h-6 bg-gray-300 rounded mt-4 mb-3 w-[120px]"></div>
                  </div>
                </div>

                {/* Skeleton Right Side */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))
          : items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-neumorphic"
              >
                {/* Left Side: Image and Text */}
                <div className="flex flex-col md:flex-row items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3 className="pixel-font text-l font-semibold text-gray-900">
                      {item.name}
                      <span className="p-1"></span>
                      {item.price}$
                    </h3>
                    <p className="pixel-font text-sm text-gray-700 mt-2">
                      {item.description}
                    </p>
                    <div className="hover:scale-105 transition-all duration-200 ease-in-out border mt-4 mb-3 w-[120px] h-8 shadow-md rounded-md border-gray-900 flex justify-center bg-white hover:bg-emerald-300">
                      <button
                        onClick={(e) => handleAddToCart(item, e)}
                        className="flex justify-center items-center text-purple-900 text-tiny font-bold pixel-font"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Right Side: Icon and Text */}
                <div className="flex items-center space-x-2">
                  <Image
                    src={item.rightIcon}
                    alt={item.rightDescription}
                    className="w-6 h-6 object-contain"
                    width={100}
                    height={100}
                  />
                  <p className="pixel-font text-sm text-gray-700">
                    {item.rightDescription}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MenuItems;
