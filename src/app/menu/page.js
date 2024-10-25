"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import MenuItems from "../components/menuItem";
import ReturnToTop from "../components/returnToTop";
import ShoppingCart from "../components/shoppingCart";
import Footer from "../components/footer";
import ShoppingCheck from "../components/shoppingCheck";

const Menu = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  const handleAddToCart = (item, e) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
      const newCart = itemInCart
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];

      // Save new cart to localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
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

  const [isVisible, setIsVisible] = useState(false);

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
      <Header toggleCart={toggleCart} />
      <MenuItems handleAddToCart={handleAddToCart} />
      <ReturnToTop />
      <ShoppingCart toggleCart={toggleCart} isVisible={isVisible} />
      <Footer bgColor="bg-white" />
      <ShoppingCheck isVisible={isCartVisible} closeCart={closeCart} cart={cart} setCart={setCart}/>
    </div>
  );
};

export default Menu;
