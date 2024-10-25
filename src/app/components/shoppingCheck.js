import React from "react";

const ShoppingCheck = ({ isVisible, closeCart, cart = [] , setCart}) => {
  console.log(cart)


  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          // Adjust quantity by the specified change value
          const updatedQuantity = cartItem.quantity + change;
          // If quantity is 0 or less, filter the item out of the cart
          if (updatedQuantity <= 0) {
            return null; // Return null to remove it from the cart
          }
          return { ...cartItem, quantity: updatedQuantity };
        }
        return cartItem;
      }).filter(Boolean); // Remove null items from the array
    });
  };



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

      <div className="p-4 shadow-neumorphic m-2 mt-5">
        {/* Render cart items */}
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="text-gray-800 pixel-font">{item.name}</span>
                <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="px-2 text-red-500 font-bold"
                  >
                    -
                  </button>
                  <span className="text-gray-500 pixel-font mx-2">x{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className="px-2 text-green-500 font-bold"
                  >
                    +
                  </button>
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
