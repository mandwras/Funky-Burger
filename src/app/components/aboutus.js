"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

const AboutUs = () => {
  const cardRef = useRef(null);
  const burgersSectionRef = useRef(null); // Ref for the burgers section
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

  const scrollToBurgers = () => {
    if (burgersSectionRef.current) {
      burgersSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4 sm:px-0">

      <div
        ref={cardRef}
        className={`bg-blue-100 shadow-blue-200 rounded-[20px] p-6 w-full lg:h-[32vw] sm:w-[70%] md:w-[50%] lg:w-[40vw] max-w-[500px] h-auto transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'card-enter' : ''
        } shadow-lg overflow-hidden`}
      >

        <div className="h-[350px] md:max-h-full overflow-auto md:overflow-visible">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Funky Burger, where a love for juicy burgers collides with the thrill of classic arcade gaming! We’re all about bringing a unique, unforgettable experience to every visitor. Whether you’re a die-hard retro gamer, a burger aficionado, or just someone looking for a good time, we’ve got everything you need for a full-on fun fest.
          </p>
          <p className="text-gray-600 mb-4">
            Our menu is crafted with passion, featuring gourmet burgers that are as bold as your favorite video game heroes—think locally sourced ingredients, irresistible flavors, and a dash of creativity. Dive into a burger experience unlike any other, with each bite as rewarding as that high score you’ve been chasing!
          </p>
          <p className="text-gray-600 mb-4">
            Once you’ve satisfied your taste buds, step into the arcade and relive the golden era of gaming. From classic pinball machines to retro consoles, our arcade offers a nostalgic blast from the past. Challenge your friends to Pac-Man, defend your honor in Street Fighter, or set a new personal best on our racing games. Here, it’s not just about playing; it’s about winning, sharing laughs, and making memories.
          </p>
          <Link href="/menu">
            <button className="bg-gray-700 text-white rounded-full py-2 px-4 hover:bg-gray-600 transition-colors">
              Order Now
            </button>
          </Link>
        </div>
      </div>


      <div className="mt-[150px] w-full ">
        <button
          onClick={scrollToBurgers}
          className="bg-blue-300 text-gray-800  py-3 text-lg w-full hover:bg-blue-400 transition-colors relative"
        >
          Explore Our Burgers
          <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-3xl text-gray-800 font-bold animate-bounce">
            ↓
          </span>
        </button>
      </div>

      {/* Signature Burgers Section */}
      <div ref={burgersSectionRef} className="mt-12 p-6 bg-gray-100 rounded-xl w-full max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Signature Burgers</h2>
        

        <div className="flex flex-col items-center space-y-6">

          <div className="flex flex-row bg-white shadow-lg rounded-lg p-6 w-full max-w-[700px]">

            <div className="w-1/3 pr-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">The Funky Classic</h3>
              <Image 
                src="/icons/burger1.png"
                alt="Arcade Beast Burger" 
                width={100}
                height={100}
                className=" rounded-lg"
              />
            </div>

            <div className="w-2/3">
              <p className="text-gray-600">A juicy beef patty, melted cheddar, fresh lettuce, tomato, and our special funky sauce. Served on a toasted brioche bun.</p>
            </div>
          </div>

          <div className="flex flex-row bg-white shadow-lg rounded-lg p-6 w-full max-w-[700px]">
            <div className="w-1/3 pr-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">The Retro Deluxe</h3>
              <Image 
                src="/icons/burger1.png"
                alt="Arcade Beast Burger" 
                width={100}
                height={100}
                className=" rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <p className="text-gray-600">Grilled chicken breast, crispy bacon, avocado, and spicy mayo, topped with lettuce and pickles on a soft sesame bun.</p>
            </div>
          </div>

          <div className="flex flex-row bg-white shadow-lg rounded-lg p-6 w-full max-w-[700px]">
            <div className="w-1/3 pr-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">The Arcade Beast</h3>
              <Image 
                src="/icons/burger1.png"
                alt="Arcade Beast Burger" 
                width={100}
                height={100}
                className=" rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <p className="text-gray-600">Double beef patties, smoked gouda cheese, caramelized onions, and jalapenos, served on a brioche bun with tangy BBQ sauce.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
