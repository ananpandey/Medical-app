import React from "react";

const Card2 = () => {
  return (
    <div>
      <div className="w-[450px] rounded-xl overflow-hidden hover:shadow-lg h-[385px] bg-white">
        <img className="w-full" src="/card2.png" alt="image" />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Patients</div>
          <p className="text-[#9f9d9d]">
            Empower yourself in your healthcare decisions with direct access to
            clinical trials.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card2;
