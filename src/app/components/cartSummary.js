"use client";
import React from "react";
import Link from "next/link";

const CartSummary = ({ totalPrice, deliveryOption, toggleDeliveryOption }) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="text-l font-bold text-gray-700 mb-4 sm:mb-0">
        Total: ${totalPrice.toFixed(2)}
      </span>
      <div className="w-full sm:w-auto mb-4 sm:mb-0 relative flex justify-center sm:justify-start">
        <button
          onClick={() => toggleDeliveryOption("Takeaway")}
          className={`w-full sm:w-1/2 text-center px-4 py-2 rounded-md font-bold transition ${
            deliveryOption === "Takeaway" ? "text-blue-500" : "text-gray-700"
          }`}
        >
          Takeaway
        </button>
        <button
          onClick={() => toggleDeliveryOption("Instore")}
          className={`w-full sm:w-1/2 text-center px-4 py-2 rounded-md font-bold transition ${
            deliveryOption === "Instore" ? "text-blue-500" : "text-gray-700"
          }`}
        >
          Instore
        </button>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
          <div
            className={`absolute h-1 bg-blue-500 transition-all duration-300 ${
              deliveryOption === "Takeaway" ? "w-1/2 left-0" : "w-1/2 left-1/2"
            }`}
          ></div>
        </div>
      </div>

      <div className="w-full sm:w-auto flex justify-between items-center sm:space-x-4">
        <Link href={deliveryOption === "Takeaway" ? "/pay" : "/"}>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md w-full sm:w-48">
            {deliveryOption === "Takeaway" ? "Proceed to Payment" : "Scan QR Code"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
