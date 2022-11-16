import React, { useState, useEffect } from "react";
import { pictures } from "../components/pictures.js";
import { AiFillStar } from "react-icons/ai";

function Adventure() {
  const [data, setData] = useState([]);
  const getData = () => {
    setData(pictures);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-center mx-0 text-2xl mt-12 mb-12 md:text-4xl">Inspiration for your next adventure</h1>
      <div className="flex flex-row flex-wrap justify-center">
      
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=""
              data-aos-anchor-easing="ease-in-out"
            >
              <div className="">
                <div
                  className=" p-3 border border-black/25 m-2 h-[350px] md:h-[330px] lg:h-[320px] w-auto rounded-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <img
                    className="h-[250px] md:h-[210px] lg:h-[200px] w-auto mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    src={item.picture}
                    alt="place"
                  />
                  <div className=" text-xs">
                    <p className="float-right font-bold mb-2">1MBT per night</p>

                    <p className="mb-2">Desert king</p>
                    <p className="float-right">available for 2weeks stay</p>

                    <p className="mb-2">2345km away</p>
                    <div className=" flex flex-row">
                     
                      <AiFillStar fill = '#a02279' className="mr-2"/>
                      <AiFillStar fill = '#a02279' className="mr-2"/>
                      <AiFillStar fill = '#a02279' className="mr-2"/>
                      <AiFillStar fill = '#a02279' className="mr-2"/>
                      <AiFillStar fill = '#a02279' className="mr-2"/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adventure;
