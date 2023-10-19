import React from "react";
import Card4 from "./Card4";
import Card5 from "./Card5";

const SecondSection = () => {
  return (
    <div className="ml-8 relative mt-14">
      <div className="relative block">
        <img
          className="w-full sm:w-auto md:w-auto lg:w-auto relative"
          src="/image1.svg"
          alt="card"
        />
        <span className=" flex absolute ml-[570px] bottom-24 gap-2 sm:left-0">
          <Card4 />
          <Card5 />
        </span>
      </div>
    </div>
  );
};
export default SecondSection;
