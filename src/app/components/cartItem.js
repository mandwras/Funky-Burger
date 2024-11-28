"use client";
import React from "react";

const CartItem = ({ item, handleQuantityChange }) => {
  return (
    <li className="flex justify-between items-center">
      <div>
        <div className="flex space-x-2">
          <h2 className="text-lg font-bold text-gray-600">{item.name}</h2>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleQuantityChange(item, -1)}
              className="px-2 text-red-500"
            >
              -
            </button>
            <span className="text-gray-500">x{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item, 1)}
              className="px-2 text-green-500"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-gray-300">{item.description}</p>
      </div>
      <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
    </li>
  );
};

export default CartItem;
