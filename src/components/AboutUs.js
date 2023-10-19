import React from "react";
import DescriptionCard from "./DescriptionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: `url('/bg.svg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="flex mt-20" style={backgroundStyle} id="description">
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
              <img src="/banner1.svg" width={12} alt="card" />
              Neural Engineering
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="card" />
              Neural Engineering
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="card" />
              Neural Engineering
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="card" />
              Immunology Research
            </span>
            <span className="text-md font-thin flex gap-2 mt-4 text-white contrast-75">
              <img src="/banner1.svg" width={12} alt="card" />
              Immunology Research
            </span>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <Slider {...settings} className="w-[100%]">
          {[1, 2].map((index) => (
            <div className="flex ml-20" key={index}>
              <div className="flex">
                <DescriptionCard />
                <DescriptionCard />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default AboutUs;
