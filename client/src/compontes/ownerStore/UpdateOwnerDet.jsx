import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwnerStore } from '../../features/ownerStore/ownerStoreSlice'
import InputOwner from './InputOwner'

export default function UpdateOwnerDet() {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state=>state.user)
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
        <h1 className='text-4xl'>עידכון משתמש</h1>
    <div>
        <form onSubmit={handleForm} className='py-10'>
    <InputOwner type='name' name='firstName' funChange={handleInput} description='שם פרטי' value={ownerDe.firstName}/>
    <InputOwner type='name' name='lastName' funChange={handleInput} description='שם משפחה' value={ownerDe.lastName}/>
    <InputOwner type='email' name='email' funChange={handleInput} description='איימל' value={ownerDe.email}/>
    <InputOwner funChange={handleInput} type='tal' name='phone' description='טלפון' value={ownerDe.phone}/>
    <button type='submit' className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:shadow-form w-full rounded-md mt-4 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>עדכן</button>
        </form>
    </div>
</div>
  )
}
