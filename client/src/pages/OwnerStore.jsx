import React from 'react'
import { Outlet } from 'react-router'
import NavOwner from '../compontes/ownerStore/NavOwner'

export default function OwnerStore() {
  return (
    <div>
      <NavOwner/>
      <Outlet/>
    </div>
  )
}
