"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Header from "../components/header";
import Footer from "../components/footer";
import useCart from "../hooks/useCart"; 
import supabase from "../lib/supabaseClient"; 
import PaymentMethodSelector from "../components/paymentMethodSelector";
import CardPaymentForm from "../components/cardPaymentForm";
import CashPaymentConfirmation from "../components/cashPaymentConfirmation";
import ErrorMessage from "../components/errorMessage";

const PaymentPage = () => {
  const { emptyCart, calculateTotalAmount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [error, setError] = useState(""); 
  const rout = useRouter(); 

  const handlePayment = async (e) => {
    e.preventDefault();


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

 
    if (paymentMethod === "card" && !error) {
      setError("");
    }

    try {
      // Insert into orders table
      const { error } = await supabase.from("orders").insert([ 
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
        <h1 className="text-3xl text-center mb-8 font-bold text-gray-900">Payment Page</h1>

        <PaymentMethodSelector paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

        {error && <ErrorMessage error={error} />}

        {paymentMethod === "card" && <CardPaymentForm handlePayment={handlePayment} />}
        {paymentMethod === "cash" && <CashPaymentConfirmation handlePayment={handlePayment} />}
        
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
