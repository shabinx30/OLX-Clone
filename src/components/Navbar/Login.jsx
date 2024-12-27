import React from "react";
import loginImage from "/Users/hp/Downloads/loginEntryPointPost.webp";
import { IoMdClose } from "react-icons/io";
import { LuSmartphone } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/setUp";

const Login = () => {

    const googleSignIn = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-md shadow dark:bg-gray-700">
            <IoMdClose size={35} className="absolute top-2 right-2 cursor-pointer" data-modal-hide="authentication-modal"/>
            <div className="flex justify-center items-center pt-8">
              <img src={loginImage} alt="" className="w-[8em]" />
            </div>
            <div className="flex justify-center items-center text-center font-medium">
              <h1 className="w-[19em]">
                Help us to become one of the safest places to buy and sell
              </h1>
            </div>
            <div className="flex justify-center items-center pt-16 px-5 ">
              <div className="relative border-2 border-black w-full h-[3em] rounded-md cursor-pointer hover:border-4">
                <LuSmartphone size={20} className="my-3 mx-4" />
                <h1 className="absolute top-2.5 left-12 font-medium">
                  Continue with phone
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center py-3 px-5 ">
              <div className="relative border-2 border-gray-300 w-full h-[3em] rounded-sm cursor-pointer hover:bg-blue-100/40 duration-200">
                <FcGoogle size={20} className="my-3 mx-4" />
                <h1 className="absolute top-2.5 left-24 text-base text-gray-700">
                  Continue with Google
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="font-medium">OR</h1>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="font-medium underline">Login with Email</h1>
            </div>
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-[13px] text-gray-500">All your personal details are safe with us.</h1>
            </div>
            <div className="flex justify-center items-center mt-3">
                <h1 className="text-[12px] w-[22em] text-gray-500 text-center">If you continue, you are accepting <span className="text-cyan-600">OLX Terms and Conditions and Privacy Policy</span></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
