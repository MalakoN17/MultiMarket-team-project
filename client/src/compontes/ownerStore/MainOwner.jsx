import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../footer/Footer'

export default function MainOwner() {
  const {store} = useSelector(state=> state.ownerStore)
  return (
    <div >
        <div className='bg-slate-400 h-screen'>
          <div className='pt-10'>
          <h1 className='text-center text-4xl'> שלום {"store.name"}</h1>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
