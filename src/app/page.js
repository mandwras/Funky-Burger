"use client";
import React from "react";
import Head from "next/head"; // Import Head from Next.js
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import ReturnToTop from "./components/returnToTop";
import Footer from "./components/footer";
import ShoppingCart from "./components/shoppingCart"; 
import ShoppingCheck from "./components/shoppingCheck";   
import { useCartContext } from "./hooks/cartContext";

const Home = () => {
  const {
    isCartVisible,
    isCartButtonVisible,
    cart,
    toggleCart,
    closeCart,
    setCart,
  } = useCartContext();

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100  min-h-screen font-pixel"> 
        <Header toggleCart={toggleCart} /> 
        <AboutUs />
        <ReturnToTop />
        <ShoppingCart toggleCart={toggleCart} isVisible={isCartButtonVisible} />
        <Footer />
        <ShoppingCheck
          isVisible={isCartVisible}
          closeCart={closeCart}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
};

export default Home;
