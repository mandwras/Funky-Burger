"use client";
import React from "react";

const RecommendedItem = ({ item, addRecommendedItem }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
      <div>
        <h3 className="font-semibold text-gray-700">{item.name}</h3>
        <p className="text-gray-500">{item.description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-bold text-gray-800">${item.price.toFixed(2)}</span>
        <button
          onClick={() => addRecommendedItem(item)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
        >
          Add
        </button>
      </div>
    </li>
  );
};

export default RecommendedItem;
