import React from "react";
import nft1 from "../Images/image 7.png";

function Nft() {
  return (
    <div className = ' bg-pink-800 mt-5'>
    <div className="flex flex-col mx-5 py-8 md:flex-row justify-between md:mx-24 md:py-24">
      <div className ='text-white md:w-1/2 lg:w-1/3'>
        <h1 className="text-center text-5xl mb-5 font-bold md:text-left">Metabnb NFTs</h1>
        <p className="mb-5 leading-8 text-sm font-normal">
          Discover our NFT gift cards collection. Loyal customers gets amazzing
          gift cards which are traded as NFTs. These NFTs gives our customer to
          access to loads of our exclusive services.
        </p>
        <button className="bg-white px-6 py-2 font-semibold rounded-lg text-sm text-pink-800">Learn more</button>
      </div>
      
      <div className="md:w-1/2 lg:w-1/3">
      <img src={nft1} alt="nft1" />
      {/* <img src={nft2} alt="nft2" />
      <img src={nft3} alt="nft3" /> */}
      </div>
    </div>
    </div>
  );
}

export default Nft;
