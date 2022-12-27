import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../compontes/footer/Footer'
import MobileNavOwner from '../compontes/ownerStore/MobileNavOwner'
import NavOwner from '../compontes/ownerStore/NavOwner'
import ErrorPage from '../pages/ErrorPage'
import { getStore, getStore, getStoreProducts } from '../features/ownerStore/ownerStoreSlice'

export default function OwnerStore() {
  const {user}=useSelector(state=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStoreProducts(currentUser.storeIds[0]))
  },[])
  return (
    <div className='bg-zinc-100'>
      {currentUser && <NavOwner/>}
      {currentUser && <Outlet/>}
      {currentUser && <MobileNavOwner/>}
      {currentUser && <Footer/>}
      
      {!currentUser&&<ErrorPage/>}
      
    </div>
  )
}
