"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import supabase from "../lib/supabaseClient";

const MenuItems = ({ handleAddToCart }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0); // Default value


  // Fetching items and categories from Supabase
  useEffect(() => {
    const fetchItemsAndCategories = async () => {
      try {
        // Fetching products
        const { data: productsData, error: productsError } = await supabase
          .from("products")
          .select("*");

        if (productsError) {
          console.log("Error fetching products from Supabase:", productsError);
          setItems([]); // Fallback in case of error
        } else {
          setItems(productsData);
          setFilteredItems(productsData); // Default filtered items
          console.log("Fetched items:", productsData);
        }

        // Fetching categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from("categories")
          .select("*");

        if (categoriesError) {
          console.log("Error fetching categories from Supabase:", categoriesError);
          setCategories([]); // Fallback in case of error
        } else {
          setCategories(categoriesData);
          console.log("Fetched categories:", categoriesData);
        }
      } catch (error) {
        console.log("Error fetching data from Supabase!", error);
        setItems([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItemsAndCategories();
  }, []);

  // Category change handling
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category_id === categoryId));
    }
  };

  const skeletonItems = Array(5).fill(0);

  return (
    <div className="p-8 flex-col relative">

      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h2 className="text-center text-black text-3xl pixel-font flex-1">
          Funky&apos;s Menu
        </h2>
      </div>

      {/* Menu Items */}
      <div className="space-y-8 flex flex-col">
        {loading
          ? skeletonItems.map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 rounded-lg shadow-neumorphic animate-pulse"
              >
                {/* Skeleton aristera */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 md:mb-0 md:mr-6"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-48"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-36"></div>
                    <div className="h-6 bg-gray-300 rounded mt-4 mb-3 w-[120px]"></div>
                  </div>
                </div>

                {/* Skeleton Deksia */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))
          : filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-neumorphic"
              >
                {/* Item aristera */}
                <div className="flex flex-col md:flex-row items-center">
                  <Image
                    src={item.image_url}
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
                    <p className="pixel-font text-sm text-gray-700 mt-2 max-w-[1200px]">
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

                <div className="flex items-center space-x-2">
                  <Image
                    src={item.icon_url}
                    alt={item.right_description}
                    className="w-6 h-6 object-contain"
                    width={100}
                    height={100}
                  />
                  <p className="pixel-font text-sm text-gray-700">
                    {item.description2}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {/* Filter */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-emerald-500 rounded-[60px] text-white font-semibold text-sm  hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center"
      >

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="filter" className="w-4 h-4 mr-2">
          <path d="M4 10h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2H22.91A6 6 0 0 0 11.09 8H4a1 1 0 0 0 0 2zM17 5a4 4 0 1 1-4 4A4 4 0 0 1 17 5zM44 23H36.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2H25.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM31 28a4 4 0 1 1 4-4A4 4 0 0 1 31 28zM44 38H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM17 43a4 4 0 1 1 4-4A4 4 0 0 1 17 43z"></path>
        </svg>
        Filter
      </button>


      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 sm:w-1/2 md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">By Category</h3>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-6 py-3 rounded-lg text-lg font-semibold ${
                  selectedCategory === "all" ? "bg-emerald-500 text-white" : "bg-gray-200 text-black"
                } hover:bg-emerald-400 transition-all duration-200`}
              >
                Show All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-lg text-lg font-semibold ${
                    selectedCategory === category.id ? "bg-emerald-500 text-white" : "bg-gray-200 text-black"
                  } hover:bg-emerald-400 transition-all duration-200`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">By Price</h4>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$0</span>
                <span>${selectedPrice}</span>
                <span>$20</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setDrawerOpen(false)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
