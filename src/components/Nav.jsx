import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/footerlogo2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MobileNav } from "@material-tailwind/react";
import modal1 from "../Images/modal1.png";
import modal2 from "../Images/modal2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <Link
          to="/"
          className="flex items-center hover:text-gray-500 active:text-[#a02279]"
        >
          Home
        </Link>
      </li>

      <li className="p-1 font-normal">
        <Link
          to="/place"
          className="flex items-center hover:text-gray-500 active:text-[#a02279]"
        >
          Place to stay
        </Link>
      </li>

      <li className="p-1 font-normal">
        <Link
          to="/"
          className="flex items-center hover:text-gray-500 active:text-[#a02279]"
        >
          NFTs
        </Link>
      </li>

      <li className="p-1 font-normal">
        <Link
          to="/"
          className="flex items-center hover:text-gray-500 active:text-[#a02279]"
        >
          Community
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-4 lg:py-12">
        <div className="container mx-auto flex items-center justify-between">
          <span className="flex flex-row px-1 py-4">
            <img className="h-[22px] md:h-[25px]" src={logo} alt="logo" />
          </span>

          <div className="hidden lg:block">{navList}</div>

          <button
            onClick={() => setShowModal(true)}
            size="sm"
            className="bg-pink-800 hidden lg:inline-block rounded-lg text-sm text-white px-4 py-2"
          >
            Connect wallet
          </button>

          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <AiOutlineClose fill="#a02279" className="text-xl font-bold" />
            ) : (
              <AiOutlineMenu className="text-xl" fill="#a02279" />
            )}
          </button>
        </div>

        <MobileNav open={openNav}>
          {navList}
          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-800 inline-block rounded-lg text-sm text-white px-4 py-2 lg:hidden"
          >
            Connect wallet
          </button>
        </MobileNav>
      </div>

      {/* MODAL */}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto h-auto my-6 mx-auto w-lg max-h-xs">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/* CLOSE BUTTON */}

                <div className="flex items-center justify-between px-6 py-2 border-t border-solid border-slate-200 rounded-lg">
                  <h3 className="font-bold text-md">Connect Wallet</h3>
                  <button
                    className="text-black font-normal px-3 py-2 text-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <hr />

                {/* BODY */}

                <div className="relative p-6 flex-auto">
                  <p className="text-sm">Choose your preferred wallet:</p>
                  <div className="flex flex-row items-center justify-between border border-black/25 py-2.5 rounded-lg mt-3 bg-transparent mb-2 px-5 w-[250px] hover:bg-gray-400 md:w-[350px] lg:w-[400px]">
                    <div className="flex flex-row items-center">
                      <img src={modal1} alt="modal logo" />
                      <span className="font-bold ml-2">Metamask</span>
                    </div>
                    <MdOutlineKeyboardArrowRight className="text-2xl text-gray-500" />
                  </div>
                  <div className="flex flex-row items-center justify-between border border-black/25 py-2.5 rounded-lg mt-3 bg-transparent mb-2 px-5 w-[250px] hover:bg-gray-400 md:w-[350px] lg:w-[400px]">
                    <div className="flex flex-row items-center">
                      <img src={modal2} alt="modal logo" />
                      <span className="font-bold ml-2">WalletConnect</span>
                    </div>
                    <MdOutlineKeyboardArrowRight className="text-2xl text-gray-500" />
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Nav;
