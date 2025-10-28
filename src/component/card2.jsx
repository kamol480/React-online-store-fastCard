import React from "react";
import logo from "../assets/Category-Computer.svg";

const Card2 = () => {
  return (
    <div
      className="
        w-[150px] h-[130px] flex flex-col items-center justify-center gap-2 
        border border-gray-300  transition-all duration-300
        hover:bg-[#DB4444] hover:text-white cursor-pointer
      "
    >
      <img
        src={logo}
        alt="icon"
        className=" transition-all duration-300 hover:invert"
      />
      <p className="text-sm text-gray-800 font-medium hover:text-white">
        Computers
      </p>
    </div>
  );
};

export default Card2;
