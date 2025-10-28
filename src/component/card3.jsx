import React from "react";
import logo from "../assets/Cart.svg";
import logo2 from "../assets/Frame 566 (1).svg";
const Card = () => {
  return (
    <>
      <section>
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="p-3">
          <p>Gucci duffle bag</p>
          <p>$960</p>
          <img src={logo2} alt="" />
        </div>
      </section>
    </>
  );
};

export default Card;
