import React from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/hero_4.jpg"; // 🖼️ Replace with your image path

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white max-w-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen text-center px-6 bg-black/40 w-full">
        <h1 className="text-xl md:text-3xl font-bold drop-shadow-lg big  lg:mt-30">
          Welcome to <span className="text-violet-300">Power Cruise Holidays</span>
        </h1>
        <p className="mt-4 text-5xl md:text-8xl big text-white max-w-6xl font-semibold">
      Find your <span >perfect voyage</span>
        </p>
         <p className="mt-4 text-lg md:text-7xl big text-violet-300 max-w-6xl font-semibold">
        Relax, explore, and sail free.
        </p>
        <button className="mt-8 big text-lg bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
