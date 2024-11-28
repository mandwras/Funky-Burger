"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CartItem from "../components/cartItem";
import CartSummary from "../components/cartSummary";
import RecommendedItemsList from "../components/recommendedItemsList";
import { useCartContext } from "../hooks/cartContext";

const Checkout = () => {
  const { cart, setCart } = useCartContext();
  const [deliveryOption, setDeliveryOption] = useState("Takeaway");

  const recommendedItems = [
    { id: 101, name: "Extra Sauce", price: 1.5, description: "Add more flavor!" },
    { id: 102, name: "Fried Potatoes", price: 3.0, description: "Perfect side dish." },
    { id: 103, name: "Coca Cola", price: 2.5, description: "Stay refreshed." },
  ];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const newCart = prevCart
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

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const addRecommendedItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const toggleDeliveryOption = () => {
    setDeliveryOption((prevOption) =>
      prevOption === "Takeaway" ? "Instore" : "Takeaway"
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center mb-8 pixel-font text-gray-900">Checkout</h1>
        {cart.length > 0 ? (
          <>
            <div className="bg-white p-6 rounded-lg shadow-neumorphic">
              <ul className="space-y-4">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleQuantityChange={handleQuantityChange}
                  />
                ))}
              </ul>
              <CartSummary
                totalPrice={totalPrice}
                deliveryOption={deliveryOption}
                toggleDeliveryOption={toggleDeliveryOption}
              />
            </div>
            <RecommendedItemsList
              recommendedItems={recommendedItems}
              addRecommendedItem={addRecommendedItem}
            />
          </>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;