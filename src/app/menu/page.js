"use client"
import React, {useState, useEffect} from "react";
import Header from "../components/header";
import Link from "next/link";
import MenuItems from "../components/menuItem";
import ReturnToTop from "../components/returnToTop"
import ShoppingCart from "../components/shoppingCart"
import Footer from "../components/footer";
import ShoppingCheck from "../components/shoppingCheck";

const Menu = () => {
  //logic for cart visibility
  const [isCartVisible, setCartVisible] = useState (false);


  const toggleCart = () => {
    setCartVisible(!isCartVisible)
  };

  const closeCart = () => {
    setCartVisible(false)
  }

  const [isVisible, setIsVisible] = useState(false)
  //scroll down
  useEffect(() => {
    const toggleVisibility = () =>{
      if (window.scrollY > 100) {
        setIsVisible(true)
        console.log('active')
      } else {
        setIsVisible(false)
        console.log('hidden')
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return() => window.removeEventListener("scroll", toggleVisibility)
  }
  )

  const [cart, setCart] = useState([])
  const handleAddToCart = (item, e) => {
    console.log(`${item.id} leitourgei`)
    const { pageX, pageY } = e; // Get cursor position 

    // Update cart state
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);

      if (itemInCart) {
        // If item is already in the cart, increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
            console.log(cart.length),
        );
      } else {
        // If item is not in the cart, add it with quantity 1
        console.log(cart)
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    let cartElement;
    // if (window.scrollY < 100) {
      cartElement = document.querySelector('.cart-button'); // cart no scroll
    // console.log('no scroll cart');
    // } else {
    //   cart = document.querySelector('.scrolled-cart'); // cart on scroll
    //   console.log('on scroll cart');
    // }

    if (!cartElement) {
      console.error('Cart element not found');
      return; // Exit if cart is not found
    }

    const cartRect = cartElement.getBoundingClientRect(); // Get cart's position
    
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
      <div className="bg-gray-100 min-h-screen">
        <Header/>
        <MenuItems handleAddToCart={handleAddToCart}/>
        <ReturnToTop/>
        <ShoppingCart toggleCart={toggleCart} isVisible ={isVisible}/> 
        <Footer bgColor="bg-white"/>
        <ShoppingCheck isVisible={isCartVisible} closeCart={closeCart} cart={cart}/>
      </div>
  )
} 

export default Menu