import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


export default function FormProductTwo() {
    const [product, setProduct] = useState({kosherType:'', productTag:'',contactInfo:{contactNumber:'', contactName:''},expirationDate:'',  })
    const navigate = useNavigate()



    const handleInput = (e)=>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})

    }
   const handleForm = (e)=>{
    e.preventDefault()
    
    navigate('/addproduct/formproductthree')
   }
  return (
    <div> 
     <form onSubmit={handleForm}>
    <input onChange={handleInput} type='text' name='name' placeholder='name product' required/>
    <input onChange={handleInput} type='file' name='image' placeholder='upload image' required/>
    <input onChange={handleInput} type='number' name='price' placeholder='price' required/>
    <input onChange={handleInput} type='text' name='barcode' placeholder='barcode' required/>
    <input onChange={handleInput} type='number' name='priority' placeholder='priority' required min={0} max={5}/>
    <select>
        {}
    </select>
    <button type='submit'>page 3</button>
</form>
</div>
  )
}
