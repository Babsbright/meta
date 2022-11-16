import React from "react";
import nft1 from "../Images/nft.png";

function Nft() {
  return (
    <div className = 'nft mt-5'>

      <div className ='text text-white '>
        <h1 className="text-center text-5xl mb-6 font-bold md:text-left">Metabnb NFTs</h1>
        <p className="mb-7 leading-8 text-sm font-normal">
          Discover our NFT gift cards collection. Loyal customers gets amazzing
          gift cards which are traded as NFTs. These NFTs gives our customer to
          access to loads of our exclusive services.
        </p>
        <button className="bg-white px-7 py-2 font-semibold rounded-lg text-sm text-pink-800">Learn more</button>
      </div>
      
      <div className=" image">
      <img src={nft1} alt="nft1" />
     </div>
    
    </div>
  );
}

export default Nft;
