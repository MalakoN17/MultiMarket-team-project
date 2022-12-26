import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"

import {getStore} from '../../features/ownerStore/ownerStoreSlice'


export default function OwnerStoreAccount() {
    const storeD = useSelector(state => state.ownerStore)
    const user = useSelector(state => state.user)
    const { isLogin, isSuccuss, store } = storeD
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNavStoreDetails = ()=>{
        navigate('storedetails')
    }
    const handleNavReceipts = ()=>{
        navigate('receipts')
    }
    const handleNavUpdateStoreDetails = ()=>{
        navigate('updatestorsetails')
    }

    useEffect(()=>{
        dispatch(getStore('63a5b33f5fc28c9e324800c8'))
        
    },[])
  return (
   <div className="">
    <div>
      
    </div>
   </div>
  );
}
