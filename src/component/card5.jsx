import React from "react";
import logo from "../assets/Services (1).svg";

const Card5 = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-white border border-gray-200 rounded-lg p-6 w-full sm:w-[250px] transition-all duration-300 hover:bg-[#DB4444] group cursor-pointer">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-4 transition-all duration-300 group-hover:bg-white">
        <img
          src={logo}
          alt=""
          className="object-contain + filter invert-0 group-hover:invert transition-all duration-300"
        />
      </div>
      <p className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-none text-black group-hover:text-white transition-all duration-300">
        10.5k
      </p>
      <p className="text-xs sm:text-sm md:text-base mt-1 text-gray-700 group-hover:text-white transition-all duration-300">
        Sellers active our site
      </p>
    </section>
  );
};

export default Card5;
