import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { getStore } from '../../features/ownerStore/ownerStoreSlice'
import FooterMobile from "../footer/footerMobile"


export default function OwnerStoreAccount() {
  const { currentUser } = useSelector(state => state.user)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavStoreDetails = () => {
    navigate('ownerdet')
  }
  const handleNavReceipts = () => {
    navigate('updateownerdet')
  }
  return (
    <>
    <div className="h-screen">
      <div className="md:flex flex-col justify-center p-12 w-full h-screen">
        <div className="flex flex-col md:flex-row mt-10 w-full justify-evenly">
          <div onClick={handleNavStoreDetails} className="rounded-md  bg-black text-white hover:bg-lime-600 h-[110px] w-[300px] justify-center items-center flex p-2 mb-10">
            <h1 className="text-xl">פירטי חשבון</h1>
          </div>
          <div onClick={handleNavReceipts} className="rounded-md  bg-black text-white hover:bg-lime-600 h-[110px] w-[300px] justify-center items-center flex p-2 mb-10">
            <h1 className="text-xl">עידכון חשבון</h1>
          </div>
        </div>
        <div className="sm:mx-auto p-10 rounded-2xl w-[300px] ">
          <Outlet />
        </div>
      </div>
      <FooterMobile />
    </div>
    <div className="sm:h-52 sm:w-72 rounded-md flex justify-center items-center  sm:border sm:border-black sm:mb-5">
      <h1 onClick={handleNavReceipts} className="text-xl">עידכון חשבון</h1>
    </div>
    
    <div className="sm:h-52 sm:w-72 rounded-md flex justify-center items-center  sm:border sm:border-black">
      <h1 onClick={handleNavReceipts} className="text-xl">החלפת סיסמא</h1>
    </div>
    </>
  );
}

