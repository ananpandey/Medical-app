import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex">
      <div className="w-full fixed h-10 bg-[#0e202a] flex justify-between z-10 ">
        <div className="flex items-center ">
          <span className="ml-8 md:ml-8 text-white font-extralight text-sm md:text-base">
            Healthcare Global
          </span>
          <span className="border border-r-gray-500 ml-2 md:ml-6 h-6 hidden md:inline"></span>
          <span className="text-white ml-2 md:ml-6">
            <BsGlobeAmericas />
          </span>
          <span className="text-white font-extralight text-sm md:text-base ml-2 md:ml-4 hidden md:inline">
            EN
          </span>
          <span className="text-white text-2xl md:text-3xl">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-white font-extralight text-xs md:text-sm mr-2 md:mr-6">
            Our Sponsers
          </span>
          <span className="border border-r-gray-500 mr-2 md:mr-6 h-6 hidden md:inline"></span>
          <span className=" text-white font-extralight text-xs md:text-sm hidden md:inline">
            Already have an account?
          </span>
          <span className="text-white text-sm md:text-base mr-4 md:mr-8 hidden md:inline">
            Login Now
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
