import React from "react";

const Card3 = () => {
  return (
    <div>
      <div className="w-[450px] rounded-xl overflow-hidden hover:shadow-lg h-[385px] bg-white">
        <img className="w-full" src="/card3.png" alt="card" />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Sponsors</div>
          <p className="text-[#9f9d9d]">
            Expanding your clinical trials reach , boosting recruitment and
            embracing diversity for inclusive research.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card3;
