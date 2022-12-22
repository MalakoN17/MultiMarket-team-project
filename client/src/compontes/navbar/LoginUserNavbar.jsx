import React from 'react';
import logo from '../../assets/multimarket-logo1.png';

export default function LoginUserNavbar() {
  return (
    <div className='flex justify-center'>
        <div className="border border-black container flex flex-row justify-evenly">
     {/* user information */}
     <div>
        <p>שלום</p>
        <p>שם פרטי</p>
      </div>
      {/* input */}
      <div className='relative mt-1 rounded-md shadow-sm'>
        <input
          type="text"
          className="block w-full border border-black rounded-md pl-7 pr-12 sm:text-sm"
        />
      </div>
       {/* logo */}
        <div 
        // className="p-5"
        >
          <img className="h-8 w-auto" src={logo} alt="Your Company" />
        </div>
    </div>
    </div>
  );
}
