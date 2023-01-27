import React from "react";

function Hero() {
  return (
    <div className="text-white">
      {/* h-screen은 뷰포트100vh */}
      <div className="max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center  ">
        <p className="uppercase p-2 font-bold text-[#00df9a]">
          growing with data analtics
        </p>
        {/*md:text-7xl, 768px에서는 font-size가 4.5rem   */}
        <h1 className="md:text-7xl sm:text-6xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast,flexible financing for
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
