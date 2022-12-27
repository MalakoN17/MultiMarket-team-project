import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwnerStore } from '../../features/ownerStore/ownerStoreSlice'
import InputOwner from './InputOwner'

export default function UpdateOwnerDet() {

    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const [ownerDe, setOwnerDe] = useState(currentUser)
    const handleInput = (e)=>{
        const {name, value} = e.target
        setOwnerDe({...ownerDe, [name]:value})
        
    }
    const handleForm = (e)=>{
        e.preventDefault();
        dispatch(updateOwnerStore(ownerDe))
    }
    

  return (
    <div>
        <h1 className='text-2xl text-center'>עידכון משתמש</h1>
    <div>
        <form>
    <InputOwner type='name' description='שם פרטי' value={user.currentUser.firstName}/>
        </form>
        <h1 className='text-3xl'>שם: {user.currentUser.firstName} {user.currentUser.lastName}</h1>
    </div>
    <br />
    <div className='flex '>
        <h1 className='text-3xl'>איימל: {user.currentUser.email}</h1>
    </div>
    <div className='flex '>
        <h1 className='text-3xl'>טלפון: {user.currentUser.phone}</h1>
    </div>
</div>
  )
}
