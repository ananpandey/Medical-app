import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FourthSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto ml-7">
      <Slider {...settings}>
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col md:flex-row mt-4 md:mt-28">
            <div className="flex">
              <span className="mb-6 md:mb-0 md:mr-8">
                <img src="/banner3.png" alt="card" />
              </span>
              <div className="flex flex-col md:ml-12 mt-6 md:mt-0">
                <span className="mb-4 md:mb-0">
                  <img src="/banner4.png" alt="card" />
                </span>
                <span className="mt-4 text-xl md:text-2xl lg:text-4xl">
                  Doctus propriae erroribus an eam, mel agam modus civibus,
                  <br />
                  vim solet dissentiet cu velit sanctus mei
                </span>
                <span className="mt-6">
                  <h1 className="lg:text-2xl md:text-xl font-bold">John Doe</h1>
                  <p className="text-md font-light">
                    PRINCIPLE SCIENTIST, TRANSLATIONAL BIOLOGY
                  </p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FourthSection;
