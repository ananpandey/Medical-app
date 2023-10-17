import React from "react";
import { AiFillStar } from "react-icons/ai";

const MultiCard5 = () => {
  return (
    <div className="w-[266px] overflow-hidden hover:shadow-md h-[266px] bg-white mt-4 rounded-lg">
      <div className="mt-6">
        <span className="ml-7">05.</span>
        <span>
          <img src="/images/range5.png" alt="card" className="ml-7 mt-2" />
        </span>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Success</div>
          <p className="text-gray-700 text-base">
            There are many variation passages of available, but the majority
            have suffered...
          </p>
        </div>
        <span className=" ml-7 font-bold flex">
          <AiFillStar className="h-2 w-2 mt-1" /> Read More
        </span>
      </div>
    </div>
  );
};
export default MultiCard5;
