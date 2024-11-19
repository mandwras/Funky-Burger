import React from "react";

const ShoppingCheck = ({ isVisible, closeCart, cart = [], setCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const newCart = prevCart
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedQuantity = cartItem.quantity + change;
            if (updatedQuantity <= 0) {
              return null; // remove item from cart if quantity goes to 0 or less
            }
            return { ...cartItem, quantity: updatedQuantity };
          }
          return cartItem;
        })
        .filter(Boolean); // remove null items
  
      localStorage.setItem("cart", JSON.stringify(newCart)); // update localStorage
      return newCart;
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-90 bg-white shadow-neumorphic transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full" 
      } flex flex-col`}
    >
      {/* Cart Header */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-b shadow-neumorphic">
        <h2 className="text-md pixel-font font-semibold text-gray-800 w-5 text-[rgb(116,129,129)]">
          Your Cart
        </h2>
        <button
          onClick={closeCart}
          className="text-[rgb(116,129,129)] pixel-font text-sm hover:text-red-500 transition-all duration-200 ease-in-out"
        >
          Close
        </button>
      </div>

      {/* Cart Items Container */}
      <div className="p-4 flex-grow overflow-y-auto space-y-4">
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-lg p-4 flex flex-col items-start ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F5F1F1]"
                } shadow-neumorphic`}
              >
                {/* Neumorphic Item Card */}
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 pixel-font text-sm">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="px-2 text-red-500"
                    >
                      -
                    </button>
                    <span className="text-gray-500 pixel-font text-sm">x{item.quantity}</span>
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
                <span className="text-gray-700 pixel-font text-sm mt-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        ) : ( 
          <div className="mt-[270px] flex justify-center items-center w-90 h-20 bg-white shadow-neumorphic "><p className="text-gray-600 pixel-font text-tiny">Your cart is empty.</p></div>

        )}
      </div>

      {/* Total Price and Checkout Button */}
      <div className="p-4 shadow-lg  m-2">
        <div className="flex justify-between items-center">
          <div className="px-4 py-4 bg-purple-500 text-white rounded-md pixel-font text-sm ml-2">
            Total:${totalPrice.toFixed(2)}
          </div>
          <button className="px-4 py-4 bg-green-500 text-white rounded-md pixel-font text-sm ml-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCheck;


{/* <span className="text-md pixel-font text-gray-600">
Total:${totalPrice.toFixed(2)}
</span> */}