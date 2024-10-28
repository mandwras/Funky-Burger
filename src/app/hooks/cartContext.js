"use client"
import React, { createContext, useContext } from "react";
import useCart from "./useCart"; // Import your custom hook


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const cart = useCart(); 

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = () => {
  return useContext(CartContext);
};
