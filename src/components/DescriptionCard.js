import React from "react";

const DescriptionCard = () => {
  return (
    <div>
      <div className=" w-[370px] h-[440px] p-6 bg-[rgba(34,57,68,0.7)] rounded-lg mt-28 ml-3  shadow-6xl mr-2">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-white mt-16 ml-6">
            Solutions for neural <br /> problems
          </h5>
        </a>
        <p className="mb-3 font-thin text-white ml-6 mt-4 contrast-75 ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form, injected humour, randomized
          words which don't
        </p>
        <hr className="ml-6 mt-4" />
        <a
          href="#"
          className="inline-flex items-center px-8 py-4 text-xl font-medium text-center text-white contrast-75 mt-6 ml-40 border border-white rounded-md"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
export default DescriptionCard;
