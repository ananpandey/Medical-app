import React from "react";

const Card1 = () => {
  return (
    <div>
      <div className="w-[450px] rounded-xl overflow-hidden hover:shadow-lg h-[385px] bg-white">
        <img className="w-full" src="/card1.png" alt="card" />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Clinicians</div>
          <p className=" text-[#9f9d9d]">
            Empowering you to connect your patients, improve patient care
            through clinical trials and expand the range of healthcare
            experiences and choices available.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card1;
