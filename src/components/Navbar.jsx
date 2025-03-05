import React from "react";
import Logo from "./Logo";
import SellButton from "./SellButton";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Language from "./Navbar/Language";
import Login from "./Login";
import { AuthProvider, useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, loading, signInWithGoogle, logout } = useAuth();

  return (
    <>
      <div className="z-10 h-[4.2em] w-full flex bg-gray-100 pt-[10px] gap-1 px-3 justify-between fixed">
        <div className="w-[2em]"><Logo /></div>
        <div className="w-full justify-evenly pl-4 gap-2 hidden md:flex">
          <form>
            <div className="flex border-2 w-full bg-white border-black rounded-md py-[2.5px]">
              <IoIosSearch size={20} className="mt-[10px] ml-3" />
              <input
                type="text"
                className="border-0"
                placeholder="Search city, area or loca..."
              />
              <IoIosArrowDown size={30} className="mt-[6px] mx-3"/>
            </div>
          </form>
          <div className="border-2 w-full h-12 bg-white border-black rounded-md flex relative">
            <form>
              <input
                type="text"
                className="w-full border-0 mt-[2px]"
                placeholder='Search "Cars"'
              />
            </form>
            <IoIosSearch
              className="text-white absolute bg-[#002f34] h-full top-0 right-0 min-w-[3em] rounded-sm p-2"
            />
          </div>
        </div>
        <div className="md:hidden lg:flex"><Language /></div>
        {currentUser ? (
          <p
            onClick={() => logout()}
            className="text-black font-bold text-base underline mt-2 mr-3 cursor-pointer"
          >
            Logout
          </p>
        ) : (
          <p
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="text-black font-bold text-base underline mt-2 mr-3 cursor-pointer"
          >
            Login
          </p>
        )}

        <div className="relative w-[6em]">
          <SellButton />
          <FaPlus size={20} className="absolute top-3 right-[3.3em]" />
          <p className="absolute top-2.5 right-4 font-medium">SELL</p>
        </div>
      </div>

      <Login />
    </>
  );
};

export default Navbar;
