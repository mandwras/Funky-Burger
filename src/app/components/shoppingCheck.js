import React from "react";

const ShoppingCheck = ({ isVisible, closeCart , cart}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-neumorphic transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* CartHeader */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-b shadow-neumorphic">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        <button onClick={closeCart} className="text-gray-500">
          Close
        </button>
      </div>
      <div className="pt-5 pl-2">
        <p className="text-gray-800">Your cart is empty.</p>
      </div>
    </div>
  );
};

export default ShoppingCheck;
