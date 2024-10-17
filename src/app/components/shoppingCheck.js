import React from "react";

const ShoppingCheck = ({ isVisible, closeCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cart Header */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={closeCart} className="text-gray-500">
          Close
        </button>
      </div>

      {/* Cart Content */}
      <div className="p-4">
        {/* Add your cart items here */}
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default ShoppingCheck;
