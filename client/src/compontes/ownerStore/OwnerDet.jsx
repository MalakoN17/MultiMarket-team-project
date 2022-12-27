import React from 'react'
import { useSelector } from 'react-redux'

export default function OwnerDet() {
    const {user} = useSelector(state=>state.user)

  return (
    <div>
        
        <div>
            <h1 className='text-3xl'>שם: {user.currentUser.firstName} {user.currentUser.lastName}</h1>
        </div>
        <br />
        <div className='flex '>
            <h1 className='text-3xl'>איימל: {user.currentUser.email}</h1>
        </div>
        <div className='flex '>
            <h1 className='text-3xl'>טלפון {user.currentUser.phone}</h1>
        </div>
    </div>
  )
}
