import React from 'react'
import { useSelector } from 'react-redux'

export default function OwnerDet() {
    const {currentUser} = useSelector(state=>state.user)
  return (
    <div>
        
        <div>
            <h1 className='text-3xl'>שם: {currentUser.firstName} {currentUser.lastName}</h1>
        </div>
        <br />
        <div className='flex '>
            <h1 className='text-3xl'>איימל: {currentUser.email}</h1>
        </div>
        <div className='flex '>
            <h1 className='text-3xl'>טלפון {currentUser.phone}</h1>
        </div>
    </div>
  )
}
