import React from "react";
import Laptop from "./assets/laptop.jpeg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            data analytics dashboard
          </p>
          <h1 className="text-2xl py-2 font-bold md:text-4xl sm:text-3xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, maxime fugit quo, autem repellendus excepturi ad
            cupiditate rem tenetur atque nemo quos quibusdam sit nostrum
            accusamus. Eius esse amet nihil!
          </p>
          <button className="md:mx-0 w-[200px] rounded-md font-medium bg-black text-[#00df9a] my-6 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
