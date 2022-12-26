import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import Footer from '../compontes/footer/Footer'
import MainOwner from '../compontes/ownerStore/MainOwner'
import NavOwner from '../compontes/ownerStore/NavOwner'
import OwnerStoreAccount from '../compontes/ownerStore/OwnerStoreAccount'
import { getStoreProducts } from '../features/ownerStore/ownerStoreSlice'

export default function OwnerStore() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStoreProducts('63a5b33f5fc28c9e324800c8'))
  },[])
  return (
    <div className='bg-zinc-100'>
      <NavOwner/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
