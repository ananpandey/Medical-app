import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Card = () => {
  return (
    <div className="bg-gradient-to-t from-[#eff7fc] via-[#f0f6fa] min-h-screen">
      <div className="mt-6 mx-4 md:mx-8 lg:ml-7 xl:ml-7">
        <span className="text-md font-bold text-[#0E202A]">WHAT WE DO</span>
        <hr className="mt-4" />
        <div className="mt-6">
          <span className="text-4xl text-[#3b4b51] font-bold">
            <b className="text-black">Variations</b> of passages of Lorem Ipsum
            available, but the majority
            <br /> have suffered alteration in some form, by injected humor
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
