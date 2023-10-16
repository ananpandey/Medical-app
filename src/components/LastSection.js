import React from "react";

const LastSection = () => {
  return (
    <div className="ml-7 mt-12 h-[663px]" id="blogs">
      <span className="mb-2">WHATS NEW</span>
      <hr className="mt-4" />
      <div className="mt-6">
        <span className=" text-4xl">News & Stories</span>
        <div className="flex mt-16 gap-3">
          <img src="/images/section1.png" alt="img" />
          <img src="/images/section2.png" alt="img" />
          <img src="/images/section3.png" alt="img" />
        </div>
        <div className="flex justify-between mt-6">
          <img src="/images/button.png" alt="img" />
          <img src="/images/button.png" alt="img" />
          <img src="/images/button.png" alt="img" className="mr-[330px]" />
        </div>
        <div className="flex justify-between mt-6 text-2xl">
          <span>
            Getting AI to Reason: Using Neuro-
            <br />
            Symbolic Question Answering
          </span>
          <span>
            Technology Breakthrough Always
            <br />
            Change How The World Works
          </span>
          <span className="mr-[150px]">
            The Benefits of Digital Sequence
            <br />
            Information In Biological Research
          </span>
        </div>
        <div className="flex justify-between mt-6 ">
          <div className=" flex gap-2">
            <span>John Doe</span>
            <span>
              <img src="/images/star.png" alt="img" className="mt-2" />
            </span>
            <span>11/09/2023</span>
          </div>
          <div className="flex gap-2">
            <span>John Doe</span>
            <span>
              <img src="/images/star.png" alt="img" className="mt-2" />
            </span>
            <span>11/09/2023</span>
          </div>
          <div className="flex gap-2">
            <span>John Doe</span>
            <span>
              <img src="/images/star.png" alt="img" className="mt-2" />
            </span>
            <span className="mr-[330px]">11/09/2023</span>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            class="text-white bg-[#9DBDCF]   font-medium rounded-lg text-xl px-12 py-4 mr-2 mb-2 "
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
export default LastSection;
