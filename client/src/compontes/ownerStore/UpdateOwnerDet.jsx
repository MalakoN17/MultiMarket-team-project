import React from 'react'
import { useSelector } from 'react-redux'
import InputOwner from './InputOwner'

export default function UpdateOwnerDet() {
    
    const {currentUser} = useSelector(state=>state.user)
  return (
    <div>
        <h1 className='text-4xl'>עידכון משתמש</h1>
    <div>
        <form>
    <InputOwner type='name' description='שם פרטי' value={currentUser.firstName}/>
        </form>
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
