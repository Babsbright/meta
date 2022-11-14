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
      <h1 className="font-bold text-center text-4xl mb-5">Inspiration for your next adventure</h1>
      <div className="flex sm:flex-col md:flex-row flex-wrap justify-center">
        {/* {
data && data.length>0 && data.map((item)=><img src = {item.picture} alt = 'kkk'/>)
} */}
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
                    <p className="float-right font-bold mb-2">1MBT per night</p>

                    <p className="mb-2">Desert king</p>
                    <p className="float-right">available for 2weeks stay</p>

                    <p className="mb-2">2345km away</p>
                    <div className=" flex flex-row">
                     
                      <AiFillStar className="mr-2"/>
                      <AiFillStar className="mr-2"/>
                      <AiFillStar className="mr-2"/>
                      <AiFillStar className="mr-2"/>
                      <AiFillStar className="mr-2"/>
                      
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
