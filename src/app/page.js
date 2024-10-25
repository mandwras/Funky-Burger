import React from "react";
import Head from "next/head"; // Import Head from Next.js
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import AboutUs2 from "./components/aboutus2";
import ReturnToTop from "./components/returnToTop";
import Footer from "./components/footer"


const Home = () => {
  return (
    <>
      <Head>
        {/* Include the pixel art font */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <div className="bg-gray-200 min-h-screen font-pixel"> {/* Add font class here */}
        <Header />
        <AboutUs />
        <AboutUs2 />
        <AboutUs />
        <ReturnToTop />
        <Footer />
      </div>
    </>
  );
}

export default Home;
