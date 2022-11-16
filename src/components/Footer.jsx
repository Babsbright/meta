import React from "react";
import logo from "../Images/footerlogo.png";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer bg-black text-white">
      <div className="column1">
        <img className="mb-12" src={logo} alt="logo" />
        <div className="social flex flex-row mb-6">
          <FiInstagram className=" text-xl" />
          <FiFacebook className="ml-4 text-xl" />
          <FiTwitter className="ml-4 text-xl" />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className="column2">
        <h4 className="font-bold mb-4">Community</h4>
        <h6 className="text-sm font-normal mb-3">NFT</h6>
        <h6 className="text-sm font-normal mb-3">Tokens</h6>
        <h6 className="text-sm font-normal mb-3">Landlords</h6>
        <h6 className="text-sm font-normal mb-3">Discord</h6>
      </div>

      <div className="column3">
        <h5 className="font-bold mb-4">Places</h5>
        <h6 className="text-sm font-normal mb-3">Castle</h6>
        <h6 className="text-sm font-normal mb-3">Farms</h6>
        <h6 className="text-sm font-normal mb-3">Beach</h6>
        <h6 className="text-sm font-normal mb-3">Learn more</h6>
      </div>
      <div className="column4">
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
