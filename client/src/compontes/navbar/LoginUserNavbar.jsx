import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from '../../features/user/userSlice'
import logo from '../../assets/atlaslogo.png';
import {ImLocation} from "react-icons/im"

export default function LoginUserNavbar() {

  const [whiteImg, setWhiteImage] = useState('https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNxi_LSue-6sEnjrB1XMp_4hmhchFOWcEykGA51eC_RMQ_sYJHf_QaNVPnHk2zOaTHoZCgaLQok2o-5QF_XuVShzKMklKjlW2_9YqWV9O-ITeAa4Lht7v1cQ&usqp=CAc')

  const city = useSelector(state=> state.city.cityValue);
  const {user} = useSelector(state=> state.user)
  const dispatch = useDispatch()

  const logout = async ()=>{
    dispatch(removeUser())
   if(user.currentUser?.registerType == "google" || "facebook") window.open("http://localhost:8000/auth/logout", "_self");
  }

  return (
    <div  className={user?.currentUser  ? 'flex justify-center' : "hidden"}>
        <div className="border border-black container flex flex-row justify-evenly items-center p-1">
     {/* user information */}
     <div className='flex items-center'>
        <img src={user?.currentUser?.profileImage === "" ? `${whiteImg}` : user?.currentUser?.profileImage} alt="avatar" className='w-12 h-12 rounded-full'/>
        <p className='mx-2'> שלום {user?.currentUser?.firstName }</p>
        <p className='flex items-center ml-2'> <ImLocation /> {city}</p>
        <p className='cursor-pointer' onClick={()=>logout()}>התנקות</p>
      </div>
      {/* input */}
      {/* <div className='hidden sm:flex'>
        <input
          type="text"
          className="block w-full px-5 border border-black"
        />
      </div> */}
       {/* logo */}
        <div 
        // className="p-5"
        >
          {/* <img className="h-8 w-auto" src={logo} alt="Your Company" /> */}
        </div>
    </div>
    </div>
  );
}
