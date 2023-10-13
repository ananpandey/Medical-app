import React from "react";
import DescriptionCard from "./DescriptionCard";

const Description = () => {
  const backgroundStyle = {
    backgroundImage: `url('/bg.svg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex mt-20" style={backgroundStyle}>
      <div className="h-[500px] flex flex-col mt-40 ml-7">
        <div className="flex gap-2">
          <span className="text-white text-4xl contrast-200"> Solutions</span>
          <span className="text-white text-4xl contrast-75">
            Provided by Healthcare
          </span>
        </div>
        <span className="text-white mt-6 text-md font-extralight leading-6 contrast-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni
          praesentium assumenda asperiores ea. Ducimus voluptates non excepturi
          libero commodi dignissimos ea fugit amet quaerat cupiditate
          consectetur inventore quas, assumenda est laboriosam, earum placeat
          nobis optio, officia minima vel! Consectetur nulla labore repudiandae
          animi dicta exercitationem corrupti dolorum tempore rerum?
        </span>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col ">
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="image" />
              Neural Engineering
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="image" />
              Neural Engineering
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="image" />
              Neural Engineering
            </span>
          </div>
          <div className="flex flex-col mr-40">
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="image" />
              Immunology Research
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="image" />
              Immunology Research
            </span>
          </div>
        </div>
      </div>
      <div className="ml-2">
        <DescriptionCard />
      </div>
      <div>
        <DescriptionCard />
      </div>
    </div>
  );
};
export default Description;
