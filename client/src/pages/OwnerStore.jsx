import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import NavOwner from '../compontes/ownerStore/NavOwner'
import { getStore } from '../features/ownerStore/ownerStoreSlice'

export default function OwnerStore() {
  const {currentUser} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStore(currentUser.storeIds))
  },[])
  return (
    <div>
      <NavOwner/>
      <Outlet/>
    </div>
  )
}
