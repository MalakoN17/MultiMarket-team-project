import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from '../../features/user/userSlice'
import logo from '../../assets/multimarket-logo1.png';

export default function LoginUserNavbar() {

  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()

  return (
    <div  className={user?.currentUser  ? 'flex justify-center' : "hidden"}>
        <div className="border border-black container flex flex-row justify-evenly">
     {/* user information */}
     <div className='flex'>
        <p>שלום</p>
        <p className='mx-2'>{user.currentUser?.email}</p>
        <p className='cursor-pointer' onClick={()=>dispatch(removeUser())}>התנקות</p>
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
