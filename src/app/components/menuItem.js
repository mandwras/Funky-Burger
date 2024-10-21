"use client"
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { SUBRESOURCE_INTEGRITY_MANIFEST } from "next/dist/shared/lib/constants";

const MenuItems = () => {
  //server
  const [item, setItems] = useState([])
  const[loading, setLoading] = useState(true)
  //fetching
  useEffect(() => { 
    const fetchItems = async () => {
      try {
        const res = await fetch('http://localhost:5000')
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log('Catch')
      }

    }
    fetchItems
  }, [])

  //will delete//
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
      price: 9.5  ,
    },
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
      price: 9.5  ,
    },
    
  ];
  
  const handleAddToCart = (e) => {
    const { pageX, pageY } = e; // Get cursor position 
    let cart;
    // if (window.scrollY < 100) {
      cart = document.querySelector('.cart-button'); // cart no scroll
      console.log('no scroll cart');
    // } else {
    //   cart = document.querySelector('.scrolled-cart'); // cart on scroll
    //   console.log('on scroll cart');
    // }

    if (!cart) {
      console.error('Cart element not found');
      return; // Exit if cart is not found
    }

    const cartRect = cart.getBoundingClientRect(); // Get cart's position
    
    const floatingItem = document.createElement('img');


     floatingItem.src = 'icons/burger1.png'; 
    
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
          // { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(0)`, opacity: 0 }, //a bounce effect on the end that i dk if i want
          // { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(1.5)`, opacity: 1 }, //remove if i want
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
                <div className="border mt-4 w-[90px] shadow-neumorphic rounded-md border-gray-900 flex justify-center bg-emerald-300"> 
                <button onClick={handleAddToCart} className="flex justify-center items-center text-purple-900 text-sm font-bold">Add to Cart</button>
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