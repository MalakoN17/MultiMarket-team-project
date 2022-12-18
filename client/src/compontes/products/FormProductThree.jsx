import React from 'react'
import { useState } from 'react'

export default function FormProductThree() {
    const [product, setProduct] = useState({weight:{inWeight:'', avgWeightPerUnit:0, weightUnit:''}, units:{unitsInCarton:'',amount:'', minimumOrderCartonsCount:'', measureUnits:''},brand:''})

    const handleInput = (e)=>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }
  return (
    <div>
         <form >
            <input onChange={handleInput} type='text' name='name' placeholder='name product' required/>
            <input onChange={handleInput} type='file' name='image' placeholder='upload image' required/>
            <input onChange={handleInput} type='number' name='price' placeholder='price' required/>
            <input onChange={handleInput} type='text' name='barcode' placeholder='barcode' required/>
            <input onChange={handleInput} type='number' name='priority' placeholder='priority' required min={0} max={5}/>
            <select>
                {}
            </select>
        </form>
    </div>
  )
}
