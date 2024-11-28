import React from "react";

const CashPaymentConfirmation = ({ handlePayment }) => (
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
);

export default CashPaymentConfirmation;
