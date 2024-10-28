"use client";
import React from "react";
import Header from "../components/header";
import MenuItems from "../components/menuItem";
import ReturnToTop from "../components/returnToTop";
import ShoppingCart from "../components/shoppingCart";
import Footer from "../components/footer";
import ShoppingCheck from "../components/shoppingCheck";
import { useCartContext } from "../hooks/cartContext";

const Menu = () => {
  const {
    isCartVisible,
    isCartButtonVisible,
    cart,
    toggleCart,
    closeCart,
    handleAddToCart,
    setCart,
  } = useCartContext();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header toggleCart={toggleCart} />
      <MenuItems handleAddToCart={handleAddToCart} />
      <ReturnToTop />
      <ShoppingCart toggleCart={toggleCart} isVisible={isCartButtonVisible} />
      <Footer bgColor="bg-white" />
      <ShoppingCheck
        isVisible={isCartVisible}
        closeCart={closeCart}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Menu;
