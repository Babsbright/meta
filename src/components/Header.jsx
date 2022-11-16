import React from "react";
import hero1 from "../Images/hero1.png";
import hero2 from "../Images/hero2.png";
import hero3 from "../Images/hero3.png";
import hero4 from "../Images/hero4.png";
import group1 from "../Images/group1.png"
import group2 from "../Images/group2.png"
import group3 from "../Images/group3.png"

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-text">
          <h1 className="">
            Rent a <span className="text-[#a02279] font-bold">Place</span> away
            from <span className="text-[#a02279]  font-bold">Home </span>
            in the<span className="text-[#a02279]  font-bold"> Metaverse</span>
          </h1>

          <p className="">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="search-container">
            <input
              type="search"
              className=""
              placeholder="Search for location"
            />
            <button className="" type="button" id="button">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-row">
          <div className=" mt-24 mr-1">
            <img className="mb-2" src={hero4} alt="hero" />
            <img className="" src={hero2} alt="hero" />
          </div>
          <div className="">
            <img className="mb-2" src={hero3} alt="hero" />
            <img className="" src={hero1} alt="hero" />
          </div>
        </div>
      </div>

      <section className="group">
        <img src={group1} alt="logos" />
        <img src={group2} alt="logos" />
        <img src={group3} alt="logos" />
      </section>
    </div>
  );
}

export default Header;
