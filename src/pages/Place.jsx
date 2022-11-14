import React, { useState, useEffect } from "react";
import { pictures } from "../components/place.js";
import { AiFillStar } from "react-icons/ai";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Place() {
  const [data, setData] = useState([]);
  const getData = () => {
    setData(pictures);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Nav />
      <div className="mt-14 mb-24">
        <ul className="flex md:flex-row justify-evenly items-center mx-16 mb-9">
            <li className="text-sm">Restaurant</li>
            <li className="text-sm">Cottage</li>
            <li className="text-sm">Castle</li>
            <li className="text-sm">Fantasy city</li>
            <li className="text-sm">Beach</li>
            <li className="text-sm">Cabins</li>
            <li className="text-sm">Off-grid</li>
            <li className="text-sm">Farm</li>
            <button className="text-xs border border-black/25 rounded py-1.5 px-6">Location</button>
        </ul>
      
        <div className="flex sm:flex-col md:flex-row flex-wrap justify-center">
  
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className=""
                data-aos-anchor-easing="ease-in-out"
              >
                <div className="">
                  <div
                    className=" p-3 border border-black/25 m-2 h-[350px] rounded-2xl"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    <img
                      className=" h-[250px] mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      src={item.picture}
                      alt="place"
                    />
                    <div className=" text-xs">
                      <p className="float-right font-bold mb-2">
                        1MBT per night
                      </p>

                      <p className="mb-2">Desert king</p>
                      <p className="float-right">available for 2weeks stay</p>

                      <p className="mb-2">2345km away</p>
                      <div className=" flex flex-row">
                        <AiFillStar className="mr-2" />
                        <AiFillStar className="mr-2" />
                        <AiFillStar className="mr-2" />
                        <AiFillStar className="mr-2" />
                        <AiFillStar className="mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Place;
