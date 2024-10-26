import React from "react";

const ShoppingCheck = ({ isVisible, closeCart, cart = [], setCart }) => {
  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedQuantity = cartItem.quantity + change;
            if (updatedQuantity <= 0) {
              return null;
            }
            return { ...cartItem, quantity: updatedQuantity };
          }
          return cartItem;
        })
        .filter(Boolean);
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-90 bg-white shadow-neumorphic transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cart Header */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-b shadow-neumorphic">
        <h2 className="text-md pixel-font font-semibold text-gray-800 w-5 text-[rgb(116,129,129)]">
          Your Cart
        </h2>
        <button
          onClick={closeCart}
          className="text-[rgb(116,129,129)] pixel-font text-sm"
        >
          Close
        </button>
      </div>

      {/* Cart Items Container */}
      <div className="p-4 space-y-4">
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-lg p-4 flex flex-col items-start ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F5F1F1]" // Change background color on odd or not 
                } shadow-neumorphic`}
              >
                {/* Neumorphic Item Card */}
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 pixel-font text-sm">
                    {item.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="px-2 text-red-500"
                    >
                      -
                    </button>
                    <span className="text-gray-500 pixel-font text-sm">
                      x{item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="px-2 text-green-500"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 pixel-font text-tiny mt-1">
                  {item.description.slice(0, 18)}...
                </p>
                <span className="text-gray-700 pixel-font text-sm mt-2 ">
                  ${item.price} {/* Replace with item price if available */}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-800">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCheck;
