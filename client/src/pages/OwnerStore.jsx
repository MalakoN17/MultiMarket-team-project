import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../compontes/footer/Footer'
import NavOwner from '../compontes/ownerStore/NavOwner'
import { getStore, getStoreProducts } from '../features/ownerStore/ownerStoreSlice'

export default function OwnerStore() {
  const {user}=useSelector(state=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStoreProducts(user.currentUser.storeIds[0]))
    dispatch(getStore(user.currentUser.storeIds[0]))
  },[])
  return (
    <div className='bg-zinc-100'>
      <NavOwner/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
