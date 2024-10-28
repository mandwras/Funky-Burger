"use client";

import React, { useEffect, useRef, useState } from 'react';

const AboutUs2 = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    const currentCardRef = cardRef.current; // Capture ref's initial value

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div className="flex-row pl-[55%] items-center justify-left mt-5">
      <div
        ref={cardRef}
        className={`bg-blue-100 shadow-blue-200 rounded-[20px] p-6 w-80 transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'card-enter' : ''
        } shadow-lg`}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Lorem ipsum</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="bg-gray-800 text-white rounded-full py-2 px-4 hover:bg-gray-700 transition-colors">Order Now</button>
      </div>
    </div>
  );
};

export default AboutUs2;
