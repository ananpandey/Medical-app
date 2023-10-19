import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ThirdSection = () => {
  return (
    <div className="flex ml-7 mt-12 flex-col md:flex-row">
      <span className="mr-6 md:mr-12">
        <img src="/card4.png" alt="card" />
      </span>

      <div className="mt-8 md:mt-20">
        <div className="text-4xl">
          <b>Recent</b> Healthcare Trails
        </div>
        <div className="text-md text-[#9f9d9d] mt-6">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything <br /> embarrassing hidden in the middle of text.
        </div>
        <div className="flex justify-between mt-6">
          <span className=" font-semibold text-2xl">Neural Research</span>
          <span className=" font-semibold text-2xl">Medical Research</span>
          <hr className="mt-4 md:mt-0 w-1 md:h-auto border-none border-t border-[#9f9d9d]" />
        </div>
        <hr className="mt-6" />
        <div className="flex justify-between mt-4">
          <div className="flex flex-col ">
            <span className="text-md text-[#9f9d9d] flex gap-1 mt-4">
              <img src="/banner1.svg" width={10} alt="card" />
              Neural Engineering
            </span>
            <span className="text-md text-[#9f9d9d] flex gap-1 mt-4">
              <img src="/banner1.svg" width={10} alt="card" />
              Neural Engineering
            </span>
            <span className="text-md text-[#9f9d9d] flex gap-1 mt-4">
              <img src="/banner1.svg" width={10} alt="card" />
              Neural Engineering
            </span>
          </div>
          <div className="flex flex-col md:mr-36">
            <span className="text-md text-[#9f9d9d] flex gap-1 mt-4">
              <img src="/banner1.svg" width={10} alt="card" />
              Immunology Research
            </span>
            <span className="text-md text-[#9f9d9d] flex gap-1 mt-4">
              <img src="/banner1.svg" width={10} alt="card" />
              Immunology Research
            </span>
          </div>
        </div>
        <span className="flex gap-2 mt-10 text-normal font-semibold">
          READ MORE ABOUT TRAILS
          <FiArrowUpRight className="h-7 w-6" />
        </span>
      </div>
    </div>
  );
};
export default ThirdSection;
