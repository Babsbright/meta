import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white py-12 px-24 flex flex-row flex-wrap justify-between">
        <div>
            <h2 className="text-5xl mb-10">Metabnb</h2>
          <p>&copy; 2022 Metabnb</p>
        </div>
        <div className="">
          <h4 className="font-bold mb-4">Community</h4>
          <h6 className="text-sm font-normal mb-3">NFT</h6>
          <h6 className="text-sm font-normal mb-3">Tokens</h6>
          <h6 className="text-sm font-normal mb-3">Landlords</h6>
          <h6 className="text-sm font-normal mb-3">Discord</h6>
        </div>
 
        <div>
          <h5 className="font-bold mb-4">Places</h5>
          <h6 className="text-sm font-normal mb-3">Castle</h6>
          <h6 className="text-sm font-normal mb-3">Farms</h6>
          <h6 className="text-sm font-normal mb-3">Beach</h6>
          <h6 className="text-sm font-normal mb-3">Learn more</h6>
        </div>
        <div>
          <h5 className="font-bold mb-4">About us</h5>
          <h6 className="text-sm font-normal mb-3">Road map</h6>
          <h6 className="text-sm font-normal mb-3">Creators</h6>
          <h6 className="text-sm font-normal mb-3">Career</h6>
          <h6 className="text-sm font-normal mb-3">Contact us</h6>
        </div>
      </div>

  );
}

export default Footer;
