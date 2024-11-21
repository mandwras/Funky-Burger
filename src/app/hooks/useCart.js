"use client"
import { useState, useEffect } from "react";

const useCart = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartButtonVisible, setCartButtonVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem("cart");
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, []);




  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1024) {
        setCartButtonVisible(true);
      } else {
        if (window.scrollY > 150) {
          setCartButtonVisible(true);
        } else {
          setCartButtonVisible(false);
        }
      }
    };
  
    // Call handleScroll on mount to ensure correct initial state
    handleScroll();
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  
  


  // useEffect(() => {
  //   if (isCartVisible) {
  //     document.body.classList.add('overflow-hidden');
  //   } else {
  //     document.body.classList.remove('overflow-hidden');
  //   }
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, [isCartVisible]); 
  

  const toggleCart = () => setCartVisible(!isCartVisible);
  const closeCart = () => setCartVisible(false);

  const handleAddToCart = (item, e) => {
    console.log("Item added to cart:", item.id)
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
      const newCart = itemInCart
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

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

  return {
    isCartVisible,
    isCartButtonVisible,
    cart,
    toggleCart,
    closeCart,
    handleAddToCart,
    setCart,
  };
};

export default useCart;
