import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-8  mx-4 sm:mx-6 lg:mx-40  ">
        <div className="flex flex-col justify-center gap-5 p-4 sm:p-6 lg:p-8  rounded-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Explore the world, One Country at a Time.
          </h1>
          <p className="text-white mt-3 text-base sm:text-lg">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country">
            <button className=" sm:w-auto inline-flex items-center justify-center gap-2 text-white bg-amber-500 px-6 py-3 rounded-xl cursor-pointer hover:bg-amber-900 hover:scale-105 transition-transform duration-200 mt-2">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/world.png" alt="world beauty" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
