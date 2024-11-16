"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const AboutUs = () => {
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

    const currentCardRef = cardRef.current; // Capture the ref value

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
    <div className="flex flex-col items-center mt-10 px-4 sm:px-0">
      <div
        ref={cardRef}
        className={`bg-blue-100 shadow-blue-200 rounded-[20px] p-6 w-full lg:h-[37vw] sm:w-[70%] md:w-[50%] lg:w-[40vw] max-w-[500px] h-auto transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'card-enter' : ''
        } shadow-lg overflow-hidden`}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-2">About Us</h2>
        
        <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis">
          At Funky Burger, where a love for juicy burgers collides with the thrill of classic arcade gaming, we&apos;re all about bringing a unique, unforgettable experience to every visitor! Whether you&apos;re a die-hard retro gamer, a burger aficionado, or just someone looking for a good time, we&apos;ve got everything you need for a full-on fun fest.

          Our menu is crafted with passion, featuring gourmet burgers that are as bold as your favorite video game heroes—think locally sourced ingredients, irresistible flavors, and a dash of creativity. Dive into a burger experience unlike any other, with each bite as rewarding as that high score you&apos;ve been chasing!

          Once you&apos;ve satisfied your taste buds, step into the arcade and relive the golden era of gaming. From classic pinball machines to retro consoles, our arcade offers a nostalgic blast from the past. Challenge your friends to Pac-Man, defend your honor in Street Fighter, or set a new personal best on our racing games. Here, it&apos;s not just about playing; it&apos;s about winning, sharing laughs, and making memories.

          Our space is designed for everyone to enjoy, whether you&apos;re here for a family outing, a casual lunch, or a weekend night of fun. Dive into a world where every visit is a mini adventure, full of great food, great games, and endless fun.

          So grab a seat, order up, and get ready to play. Welcome to Funky Burger—where every bite is legendary, and every game is a new challenge!
        </p>

        <Link href="/menu">
          <button className="bg-gray-800 text-white rounded-full py-2 px-4 hover:bg-gray-700 transition-colors">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
