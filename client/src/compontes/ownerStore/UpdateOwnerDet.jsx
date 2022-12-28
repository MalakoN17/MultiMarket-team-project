import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwnerStore } from '../../features/ownerStore/ownerStoreSlice'
import InputOwner from './InputOwner'

export default function UpdateOwnerDet() {

    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const [ownerDe, setOwnerDe] = useState(user.currentUser)
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
    
        <form>
    <InputOwner type='name' funChange={handleInput}  name='firstName' description='שם פרטי' value={ownerDe.firstName} />
    <InputOwner type='name' funChange={handleInput} name='lastName' description='שם משפחה' value={ownerDe.lastName}/>
    <InputOwner type='email' funChange={handleInput} name='email' description='איימיל' value={ownerDe.email}/>
    <InputOwner type='tal' funChange={handleInput} name='phone' description='טלפון' value={ownerDe.phone}/>
        </form>
    
</div>
  )
}
