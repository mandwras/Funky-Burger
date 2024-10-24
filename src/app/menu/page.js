"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import MenuItems from "../components/menuItem";
import ReturnToTop from "../components/returnToTop";
import ShoppingCart from "../components/shoppingCart";
import Footer from "../components/footer";
import ShoppingCheck from "../components/shoppingCheck";

const Menu = () => {
  // Single state for cart visibility, used by both Header and ShoppingCart components
  const [isCartVisible, setCartVisible] = useState(false);

  // Single state to store cart items, shared across components
  const [cart, setCart] = useState([]);

  // For handling scroll-based visibility of the floating cart button
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the cart's visibility (used by both Header and Scroll Cart)
  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  // Function to close the cart
  const closeCart = () => {
    setCartVisible(false);
  };

  // Add items to the cart, or update quantity if item is already in cart
  const handleAddToCart = (item, e) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        // If the item is already in the cart, increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    // Floating item animation (optional, as per your previous logic)
    const { pageX, pageY } = e;
    const cartElement = document.querySelector('.cart-button');
    if (!cartElement) return;

    const cartRect = cartElement.getBoundingClientRect();
    const floatingItem = document.createElement('img');
    floatingItem.src = 'icons/burger1.png'; 
    floatingItem.style.position = 'absolute';
    floatingItem.style.top = `${pageY}px`;
    floatingItem.style.left = `${pageX}px`;
    floatingItem.style.width = '20px';
    floatingItem.style.height = '20px';
    floatingItem.style.zIndex = '1000';

    document.body.appendChild(floatingItem);

    floatingItem.animate(
      [
        { transform: `translate(0, 0) scale(3)`, opacity: 1 },
        { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(1.5)`, opacity: 1 },
        { transform: `translate(${cartRect.left - pageX}px, ${cartRect.top - pageY}px) scale(0)`, opacity: 0 }
      ],
      { duration: 1000, easing: 'ease-in-out' }
    ).onfinish = () => {
      document.body.removeChild(floatingItem);
    };
  };

  // Scroll-based visibility logic for the floating cart button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header toggleCart={toggleCart} /> {/* Pass toggleCart to Header */}
      <MenuItems handleAddToCart={handleAddToCart} /> {/* Pass handleAddToCart to MenuItems */}
      <ReturnToTop />
      <ShoppingCart toggleCart={toggleCart} isVisible={isVisible} /> {/* Pass toggleCart and isVisible to ShoppingCart */}
      <Footer bgColor="bg-white" />
      <ShoppingCheck isVisible={isCartVisible} closeCart={closeCart} cart={cart} /> {/* Pass cart and visibility logic to ShoppingCheck */}
    </div>
  );
};

export default Menu;
