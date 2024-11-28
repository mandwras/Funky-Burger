import React, { useState } from "react";

const CardPaymentForm = ({ handlePayment }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  return (
    <form onSubmit={handlePayment} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="nameOnCard" className="block text-gray-700 font-medium mb-2">
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          placeholder="John Doe"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md"
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
          value={cardNumber}
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, "");
            const formatted = input.replace(/(.{4})/g, "$1 ").trim();
            setCardNumber(formatted);
          }}
          maxLength={19}
          placeholder="#### #### #### ####"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
          Expiry Date (MM/YY)
        </label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value.replace(/\D/g, "").slice(0, 5))}
          maxLength={5}
          placeholder="MM/YY"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength={3}
          placeholder="###"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-bold"
      >
        Submit Card Payment
      </button>
    </form>
  );
};

export default CardPaymentForm;
