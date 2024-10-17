"use client"
import React, { useState, useEffect } from "react";

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, );

  // Scroll to top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 bg-gray-200 p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-300 transition duration-300"
        >
          {/* Arrow icon for return to top */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ReturnToTop;