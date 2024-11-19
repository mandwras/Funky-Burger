"use client";
import React from "react";

const ShoppingCart = ({ toggleCart, isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div
          onClick={toggleCart}
          style={{ width: "65px", height: "50px" }}
          className="fixed bottom-3 left-3 bg-indigo-200 p-3 rounded-full shadow-lg hover:bg-indigo-300 transition duration-300 flex justify-center items-center hover:outline hover:outline-1 hover:outline-black"
        >
          <p>🛒</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
