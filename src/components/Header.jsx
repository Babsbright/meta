import React from "react";
import hero1 from "../Images/hero1.png";
import hero2 from "../Images/hero2.png";
import hero3 from "../Images/hero3.png";
import hero4 from "../Images/hero4.png";

function Header() {
  return (
    <div className="flex flex-col justify-center mt-2 lg:flex-row justify-around mt-10">
      <div className=" m-5 lg:m-12">
        <h1 className="text-5xl">
          Rent a <span>Place</span> away from <span>Home </span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p className="mt-5 w-96">
          we provide you access to lololuxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>

      <div className="flex flex-row m-12">
        <div className=" mt-12 m-1">
          <img className="mb-2" src={hero4} alt="hero" />
          <img className="" src={hero2} alt="hero" />
        </div>
        <div className="">
          <img className="mb-2" src={hero3} alt="hero" />
          <img className="" src={hero1} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Header;
