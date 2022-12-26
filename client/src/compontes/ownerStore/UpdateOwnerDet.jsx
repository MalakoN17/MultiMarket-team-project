import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import InputOwner from './InputOwner'

export default function UpdateOwnerDet() {
    
    const {currentUser} = useSelector(state=>state.user)
    const firstNameRef = useRef(currentUser.firstName)
    const lastNameRef = useRef(currentUser.lastName)
    const emailRef = useRef(currentUser.email)
    const phoneRef = useRef(currentUser.phone)

  return (
    <div>
        <h1 className='text-4xl'>עידכון משתמש</h1>
    <div>
        <form className='py-10'>
    <InputOwner type='name' name='firstName' funChange={(e)=>firstNameRef(e.target.value)} description='שם פרטי' value={firstNameRef.current}/>
    <InputOwner type='name' name='lastName' description='שם משפחה' value={lastNameRef.current}/>
    <InputOwner type='email' name='email' description='איימל' value={emailRef.current}/>
    <InputOwner type='tal' name='tal' description='טלפון' value={phoneRef.current}/>
        </form>
    </div>
</div>
  )
}
