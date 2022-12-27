import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"

import {getStore} from '../../features/ownerStore/ownerStoreSlice'


export default function OwnerStoreAccount() {
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNavStoreDetails = ()=>{
        navigate('ownerdet')
    }
    const handleNavReceipts = ()=>{
        navigate('updateownerdet')
    }
  return (
    <div className="sm:flex justify-between sm:h-screen mt-10">
   <div className="flex sm:flex-col ">
    <div className="sm:h-52 sm:w-72 rounded-md flex justify-center items-center  sm:border sm:border-black sm:mb-5">
      <h1 onClick={handleNavStoreDetails} className="text-xl">פירטי חשבון</h1>
    </div>
    <div className="sm:h-52 sm:w-72 rounded-md flex justify-center items-center  sm:border sm:border-black">
      <h1 onClick={handleNavReceipts} className="text-xl">עידכון חשבון</h1>
    </div>
    
   </div>
   <div className="sm:mx-auto">
   <Outlet/>
   </div>
   </div>
  );
}

