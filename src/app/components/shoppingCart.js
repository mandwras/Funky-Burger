"use client"
import React, { useState, useEffect } from 'react'


const ShoppingCart = () => {
  const [isVisible, setIsVisible] = useState(false)
  //scroll down
  useEffect(() => {
    const toggleVisibility = () =>{
      if (window.scrollY > 100) {
        setIsVisible(true)
        console.log('active')
      } else {
        setIsVisible(false)
        console.log('hidden')
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return() => window.removeEventListener("scroll", toggleVisibility)
  }
  )




  return (
    <div>
      {isVisible &&(
        <div 
        style={{ width: '65px', height: '50px' }}
        className='scrolled-cart fixed bottom-3 left-3 bg-indigo-200 p-3 rounded-full shadow-lg hover:bg-indigo-300 transition duration-300 flex justify-center items-center  hover:outline hover:outline-1 hover:outline-black'>
          <p>🛒</p>
        </div>
      )}
    </div>
  )
}

export default ShoppingCart