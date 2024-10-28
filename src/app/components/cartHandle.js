import React, { useState, useEffect } from 'react';

function CartHandle() {
  // State to manage the cart items
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the cart's visibility
  const toggleCart = () => setIsVisible(!isVisible);
  
  // Close the cart
  const closeCart = () => setIsVisible(false);

  // Add an item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  // Total items in cart
  const cartCount = cart.length;

  // Effect to log cart updates (optional, can be modified for actual cart updates)
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div>
      {/* Cart Toggle Button */}
      <button onClick={toggleCart}>
        {isVisible ? 'Hide Cart' : 'Show Cart'} ({cartCount})
      </button>
      
      {/* Cart Details */}
      {isVisible && (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => handleRemoveFromCart(item.id)} style={{ marginLeft: '1rem' }}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          
          {/* Cart Actions */}
          <button onClick={closeCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
}

export default CartHandle;
