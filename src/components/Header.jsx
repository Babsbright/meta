import React from "react";
import hero1 from "../Images/hero1.png";
import hero2 from "../Images/hero2.png";
import hero3 from "../Images/hero3.png";
import hero4 from "../Images/hero4.png";
import logo from "../Images/logo.png";
function Header() {
  return (
    <div className=" my-20">
      <div className=" mx-24 flex flex-col items-around lg:flex-row justify-around">
        <div className="lg:w-1/2 mt-12">

          <h1 className="text-5xl tracking-normal leading-snug">
            Rent a <span className="text-pink-800 font-bold">Place</span> away
            from <br /> <span className="text-pink-800 font-bold">Home </span>
            in the<span className="text-pink-800 font-bold"> Metaverse</span>
          </h1>

          <p className="text-lg mt-10 mb-8 ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="">
            <div className="mb-3">
              <div className="input-group relative flex flex-row">
                <input
                  type="search"
                  className="px-12 py-2.5 text-gray-700 bg-white border border-solid border-gray-500 border-1 rounded transition ease-in-out focus:text-black focus:bg-white focus:border-pink-800 focus:outline-none"
                  placeholder="Search for location"
                />
                <button
                  className="relative -left-2 px-14 py-2.9 bg-pink-800 text-white rounded hover:bg-black"
                  type="button"
                  id="button"
                >
                  Search
                </button>
              </div>
            </div>
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

      <section className="flex d-flex justify-around mt-12 bg-pink-800 w-full p-2">
        <img src={logo} alt="logos" />
        <img src={logo} alt="logos" />
        <img src={logo} alt="logos" />
      </section>
    </div>
  );
}

export default Header;
