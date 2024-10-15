import React from "react";
import Header from "./components/header";
import AboutUs from "./components/aboutus"
import AboutUs2 from "./components/aboutus2"
import Link from "next/link";

const Home = () => {
  return(
    <div className="bg-gray-200 min-h-screen"> 
      <Header/>
      <AboutUs/>
      <AboutUs2/>
    </div>
  )
}
export default Home