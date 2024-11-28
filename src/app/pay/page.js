"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Header from "../components/header";
import Footer from "../components/footer";
import useCart from "../hooks/useCart"; 
import supabase from "../lib/supabaseClient"; 

const PaymentPage = () => {
  const { emptyCart, calculateTotalAmount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [error, setError] = useState(""); 
  const rout = useRouter(); 

  const handlePayment = async (e) => {
    e.preventDefault();

    // Get the authenticated user's ID
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) {
      setError("Failed to retrieve user. Please log in.");
      return;
    }

    const userId = user?.id; 
    if (!userId) {
      setError("User not logged in. Please log in to place an order.");
      return;
    }

    // Validation for card payment
    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
        setError("Please fill in all card details.");
        return;
      }
      if (cardNumber.length < 19 || isNaN(cardNumber.replace(/\s/g, ""))) {
        setError("Invalid card number. Must be 16 digits.");
        return;
      }
      if (cvv.length !== 3 || isNaN(cvv)) {
        setError("Invalid CVV. Must be 3 digits.");
        return;
      }
      setError("");
    }

    try {
      // Insert into orders table
      const { data, error } = await supabase.from("orders").insert([
        {
          user_id: userId, 
          total_amount: calculateTotalAmount(), 
          status: "placed", 
          payment_status: paymentMethod === "card" ? "paid" : "pending", 
        },
      ]);

      if (error) throw error;

      alert(paymentMethod === "card" ? "Card Payment Successful!" : "Cash Payment Confirmed!");
      emptyCart(); 
      rout.push("/"); 

    } catch (err) {
      console.error("Error placing order:", err.message);
      setError("Failed to place the order. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center mb-8 font-bold text-gray-900">
          Payment Page
        </h1>

        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setPaymentMethod("card")}
            className={`px-4 py-2 rounded-md font-bold ${paymentMethod === "card" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Pay with Card
          </button>
          <button
            onClick={() => setPaymentMethod("cash")}
            className={`px-4 py-2 rounded-md font-bold ${paymentMethod === "cash" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Pay with Cash
          </button>
        </div>

        {paymentMethod === "card" && (
          <form onSubmit={handlePayment} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            {error && (
              <p className="mb-4 text-red-500 text-center font-semibold">{error}</p>
            )}
            <div className="mb-4">
              <label htmlFor="nameOnCard" className="block text-gray-700 font-medium mb-2">
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                placeholder="John Doe"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={cardNumber}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "");
                  const formatted = input.replace(/(.{4})/g, "$1 ").trim();
                  setCardNumber(formatted);
                }}
                maxLength={19}
                placeholder="#### #### #### ####"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 2) {
                    value = value.slice(0, 2) + "/" + value.slice(2, 4);
                  }
                  setExpiryDate(value);
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="###"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition"
            >
              Submit Card Payment
            </button>
          </form>
        )}

        {paymentMethod === "cash" && (
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 mb-4">
              You have selected to pay with cash. Please proceed to the counter.
            </p>
            <button
              onClick={handlePayment}
              className="px-4 py-2 bg-green-500 text-white rounded-md font-bold hover:bg-green-600 transition"
            >
              Confirm Cash Payment
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
