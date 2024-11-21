"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useCartContext } from "../hooks/cartContext";

const Checkout = () => {
  const { cart, setCart } = useCartContext();
  const [deliveryOption, setDeliveryOption] = useState("Takeaway");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const newCart = prevCart
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedQuantity = cartItem.quantity + change;
            if (updatedQuantity <= 0) {
              return null; // Remove item from cart if quantity is 0 or less
            }
            return { ...cartItem, quantity: updatedQuantity };
          }
          return cartItem;
        })
        .filter(Boolean); // Remove null items

      localStorage.setItem("cart", JSON.stringify(newCart)); // Update localStorage
      return newCart;
    });
  };

  const toggleDeliveryOption = () => {
    setDeliveryOption((prevOption) =>
      prevOption === "Takeaway" ? "Instore" : "Takeaway",
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center mb-8 pixel-font text-gray-900">
          Checkout
        </h1>
        {cart.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-neumorphic">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-600">
                      {item.name}
                    </h2>
                    <p className="text-gray-300">{item.description}</p>
                    <div className="flex items-center space-x-2">
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
                  <span className="text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
                  Total: ${totalPrice.toFixed(2)}
                </span>
              <div className="w-full sm:w-auto mb-4 sm:mb-0 relative flex justify-center sm:justify-start">
                <button
                  onClick={() => toggleDeliveryOption("Takeaway")}
                  className={`w-full sm:w-1/2 text-center px-4 py-2 rounded-md font-bold transition ${
                    deliveryOption === "Takeaway"
                      ? "text-blue-500"
                      : "text-gray-700"
                  }`}
                >
                  Takeaway
                </button>
                <button
                  onClick={() => toggleDeliveryOption("Instore")}
                  className={`w-full sm:w-1/2 text-center px-4 py-2 rounded-md font-bold transition ${
                    deliveryOption === "Instore"
                      ? "text-blue-500"
                      : "text-gray-700"
                  }`}
                >
                  Instore
                </button>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
                  <div
                    className={`absolute h-1 bg-blue-500 transition-all duration-300 ${
                      deliveryOption === "Takeaway"
                        ? "w-1/2 left-0"
                        : "w-1/2 left-1/2"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex justify-between items-center sm:space-x-4">

                <button className="px-4 py-2 bg-green-500 text-white rounded-md w-full sm:w-48">
                  {deliveryOption === "Takeaway"
                    ? "Proceed to Payment"
                    : "Scan QR Code"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
