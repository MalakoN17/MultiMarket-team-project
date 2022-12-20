import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginDemo({
    // email,
    // password,
    // loginFun,
    btnText,
    linkDisplay,
    // singInWithGoogle,
  }) {
  return (
    <div className="relative w-full h-screen bg-[#eee] ">
      <div className="flex justify-center items-center h-full">
        {/* form */}
        <form className="max-w-[400px] w-full mx-auto sm:h-auto h-fit bg-white p-16">
          <h1 className="text-xl font-bold text-center py-4">.ATLAS Multi Market</h1>
          <h1 className="text-lg font-bold py-5 underline decoration-solid">
          </h1>
          <div className="flex  flex-col mb-4">
            <label className="flex items-start">Username</label>
            {/* input for email */}
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="flex items-start">Password</label>
            {/* input for password */}
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          {/* button */}
          <button
            className="w-full py-3 bg-[#2d2d2d] hover:bg-[#aaa] relative text-[#fff]"
          >
            {btnText}
          </button>
          <Link to="/register" style={{ display: `${linkDisplay}` }}> 
            <p className="text-center mt-8">Not a member? Sing up now</p>
           </Link>
          {/* another div for login with google and facebook */}
          <div
            style={{ display: `${linkDisplay}` }}
            className="flex justify-center mt-5 p-4"
          >
            <p
              // onClick={singInWithGoogle}
              className="border border-[#2d2d2d] shadow-lg hover:shadow-xl px-14 py-3 ml-2 relative flex items-center"
            >
              <FcGoogle />
            </p>
            <p
              // onClick={singInWithGoogle}
              className="border border-[#2d2d2d] shadow-lg hover:shadow-xl px-14 py-3 relative flex items-center"
            >
              <FaFacebookF />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}