import React from "react";
import Logo from "./Logo";
import SellButton from "./SellButton";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Language from "./Navbar/Language";
import Login from "./Navbar/Login";

const Navbar = () => {
  return (
    <>
      <div className="z-10 h-[4.2em] w-full flex bg-gray-100 pt-[10px] px-4 justify-between fixed">
        <Logo />
        <div className="pl-4 hidden md:flex">
          <form>
            <div className="flex border-2 bg-white border-black rounded-md py-[2.5px] w-[17em]">
              <IoIosSearch size={20} className="mt-[10px] ml-3" />
              <input
                type="text"
                className="w-[80%] border-0"
                placeholder="Search city, area or loca..."
              />
              <IoIosArrowDown size={30} className="mt-[6px] mx-3" />
            </div>
          </form>
          <div className="border-2 h-12 bg-white border-black rounded-md w-[50em] ml-4 flex">
            <form>
              <input
                type="text"
                className="w-[46.8em] border-0 mt-[2px]"
                placeholder='Search "Cars"'
              />
            </form>
            <IoIosSearch
              size={20}
              className="text-white bg-[#002f34] h-full w-full rounded-sm p-2"
            />
          </div>
        </div>
        <Language />
        <p
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="text-black font-bold text-base underline mt-2 mr-3 cursor-pointer"
        >
          Login
        </p>

        <SellButton />
        <FaPlus size={20} className="absolute top-6 right-[4.8em]" />
        <p className="absolute top-5 right-10 font-medium">SELL</p>
      </div>

      <Login />
    </>
  );
};

export default Navbar;
