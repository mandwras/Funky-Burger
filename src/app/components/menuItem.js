"use client"
import React, {useState} from "react";
import Image from "next/image";

const MenuItems = () => {

  const items = [
    {
      name: "Classic Burger",
      description: "A juicy beef patty with lettuce, tomato, and our special sauce.",
      image: "/icons/burger1.png", 
      rightIcon: "/icons/heart.png", 
      rightDescription: "Customer Favorite",
      price: 8.5,
    },
    {
      name: "Cheeseburger",
      description: "Topped with cheddar cheese, onions, and pickles.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/star.png",
      rightDescription: "Best Seller",
      price: 9.5,
    },
    {
      name: "Bacon Burger",
      description: "A burger loaded with crispy bacon, cheese, and BBQ sauce.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/star.png",
      rightDescription: "Top Rated",
      price: 8,
    },
    {
      name: "Veggie Burger",
      description: "A delicious plant-based patty with avocado and veggies.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/leaf.png", 
      rightDescription: "Vegetarian Option",
      price: 10,
    },
    {
      name: "Mand Burger",
      description: "A delicious plant-based patty with avocado and veggies.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/leaf.png",
      rightDescription: "Healthy Choice",
      price: 9.5,
    },
  ];
  
  const handleAddToCart = (e) => {
    const { pageX, pageY } = e; // Get cursor position 

    const cart = document.querySelector('.cart-button'); // Get cart element
    const cartRect = cart.getBoundingClientRect(); // Get cart's position
    const floatingItem = document.createElement('img');

    // Set the source of the image
    floatingItem.src = 'icons/burger1.png'; // Replace with your image URL
    
    // Set styles to position the image
    floatingItem.style.position = 'absolute';
    floatingItem.style.top = `${pageY}px`;
    floatingItem.style.left = `${pageX}px`;
    floatingItem.style.width = '20px'; 
    floatingItem.style.height = '20px'; 
    floatingItem.style.zIndex = '1000';
    

    
    // Add the img element to the DOM
    document.body.appendChild(floatingItem);

    // Start the animation 
    floatingItem.animate(
      [
        { transform: `translate(0, 0) scale(3)`, opacity: 1 }, 
        { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(1.5)`, opacity: 1 }, 
        //{ transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(0)`, opacity: 0 }, a bounce effect on the end that i dk if i want
        //{ transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(1.5)`, opacity: 1 }, remove // if i want
        { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(0)`, opacity: 0 }
      ],
      { duration: 1000, easing: 'ease-in-out' }
    ).onfinish = () => {
      document.body.removeChild(floatingItem); 
    };
  };

  return (
    <div className="p-8 flex-row" >
      <h2 className="text-center text-black text-3xl mb-6 pixel-font">Funky's Menu</h2>
      <div className="space-y-8 flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-neumorphic"
          >
            {/* Left Side: Image and Text */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="pixel-font text-xl font-semibold text-gray-900">{item.name}<span className="p-1"></span>{item.price}$</h3>
                <p className="pixel-font text-gray-700 mt-2">{item.description}</p>
                <div className="border mt-4 w-[90px] shadow-neumorphic rounded-md border-gray-900 flex justify-center "> 
                <button onClick={handleAddToCart} className="flex justify-center items-center text-gray-900 text-sm font-bold">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Right Side: Icon and Text */}
            <div className="flex items-center space-x-2">
              <img
                src={item.rightIcon}
                alt={item.rightDescription}
                className="w-6 h-6 object-contain"
              />
              <p className="pixel-font text-gray-700">{item.rightDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
