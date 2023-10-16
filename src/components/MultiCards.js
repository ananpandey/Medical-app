import React from "react";
import MultiCard1 from "./MultiCard1";
import MultiCard2 from "./MultiCard2";
import MultiCard3 from "./MultiCard3";
import MultiCard4 from "./MultiCard4";
import MultiCard5 from "./MultiCard5";

const MultiCards = () => {
  return (
    <div
      className="bg-gradient-to-t from-[#eff7fc] via-[#f0f6fa] to-white h-[500px] mt-16"
      id="multicards"
    >
      <div className="ml-7">
        <span className="mb-2 text-md font-bold text-[#0E202A]">
          HOW WE WORK
        </span>
        <hr className="mb-4 mt-4" />
        <span className="text-4xl mt-6 block mb-4">
          <b>Variation</b> of passages of Lorem Ipsum available, but the
          majority <br /> have suffered alteration in some form, by injected
          humour
        </span>
        <div className="flex flex-wrap gap-3 mt-10">
          <MultiCard1 />
          <MultiCard2 />
          <MultiCard3 />
          <MultiCard4 />
          <MultiCard5 />
        </div>
      </div>
    </div>
  );
};
export default MultiCards;
