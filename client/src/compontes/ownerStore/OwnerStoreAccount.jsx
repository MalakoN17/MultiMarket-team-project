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
      <div className="flex  justify-around   h-screen">
        <div className="flex flex-col justify-around  mt-10  ">
          <div onClick={handleNavStoreDetails} className="rounded-md  bg-black text-white hover:bg-lime-600 h-[110px] w-[300px] justify-center items-center flex p-2 ">
            <h1 className="text-xl">פירטי חשבון</h1>
          </div>
          <div onClick={handleNavReceipts} className="rounded-md  bg-black text-white hover:bg-lime-600 h-[110px] w-[300px] justify-center items-center flex p-2 ">
            <h1 className="text-xl">עידכון חשבון</h1>
          </div>
        </div>
        <div className="rounded-2xl w-[300px] ">
          <Outlet />
        </div>
      </div>
      <FooterMobile />
    </div>
    </>
  );
}

