"use client";
import React from "react";
import Head from "next/head"; // Import Head from Next.js
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import AboutUs2 from "./components/aboutus2";
import ReturnToTop from "./components/returnToTop";
import Footer from "./components/footer";
import ShoppingCart from "./components/shoppingCart"; 
import ShoppingCheck from "./components/shoppingCheck";   
import { useCartContext } from "./hooks/cartContext";

const Home = () => {
  const {
    isCartVisible,
    cart,
    toggleCart,
    closeCart,
    handleAddToCart,
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
      <div className="bg-gray-200 min-h-screen font-pixel"> 
        <Header toggleCart={toggleCart} /> 
        <AboutUs />
        <AboutUs2 />
        <AboutUs />
        <ReturnToTop />
        <ShoppingCart toggleCart={toggleCart} isVisible={isCartVisible} />
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
