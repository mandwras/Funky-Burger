"use client";
import React from "react";
import RecommendedItem from "./recommendedItem";

const RecommendedItemsList = ({ recommendedItems, addRecommendedItem }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">You might wanna add:</h2>
      <ul className="space-y-4">
        {recommendedItems.map((item) => (
          <RecommendedItem key={item.id} item={item} addRecommendedItem={addRecommendedItem} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendedItemsList;
