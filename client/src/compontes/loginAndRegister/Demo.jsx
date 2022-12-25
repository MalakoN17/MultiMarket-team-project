import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Demo({
  firstName,
  lastName,
  email,
  password,
  loginFun,
  btnText,
  linkDisplay,
  nameDisplay,
  ownerDisplay,
  // singInWithGoogle,
}) {
  return (
    <div className="relative w-full h-screen bg-[#eee] ">
      <div className="flex justify-center items-center h-full">
        {/* form */}
        <form className="max-w-[400px] w-full mx-auto sm:h-auto h-fit bg-white p-16">
          <h1 className="text-xl font-bold text-center py-4">
            .ATLAS Multi Market
          </h1>
          <h1 className="text-lg font-bold py-5 underline decoration-solid"></h1>
          {/* input for first name */}
          <div className={nameDisplay}>
            <label className="flex items-start">First Name</label>
            <input
              onChange={(e) => firstName(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
              id="default-search"
            />
          </div>{' '}
          {/* input for last name */}
          <div className={nameDisplay}>
            <label className="flex items-start">Last Name</label>
            <input
              onChange={(e) => lastName(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
              id="default-search"
            />
          </div>
          {/* input for email */}
          <div className="flex  flex-col mb-4">
            <label className="flex items-start">Email</label>
            <input
              onChange={(e) => email(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
              id="default-search"
            />
          </div>
          {/* input for password */}
          <div className="flex flex-col mb-4">
            <label className="flex items-start">Password</label>
            <input
              onChange={(e) => password(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          {/* button */}
          <button
            className="w-full py-3 bg-[#2d2d2d] hover:bg-[#aaa] relative text-[#fff]"
            onClick={(e) => loginFun(e)}
          >
            {btnText}
          </button>
          <Link to="/register" style={{ display: `${linkDisplay}` }}>
            <p className="text-center mt-8">Not a member? Sing up now</p>
          </Link>
          <Link to="/ownerlogin" style={{ display: `${ownerDisplay}` }}>
            <p className="text-center mt-8">sing In with owner account</p>
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
