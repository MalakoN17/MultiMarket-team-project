import React from 'react'
import InputOwner from './InputOwner';

export default function ChangePassword() {
    const handleForm = async (e)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <InputOwner />
        </form>
    </div>
  )
}
