import React from "react";

const PaymentMethodSelector = ({ paymentMethod, setPaymentMethod }) => {
  return (
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
  );
};

export default PaymentMethodSelector;
