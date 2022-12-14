import React from 'react'
import { useState } from 'react'

export default function AddingProducts() {
    const [product, setProduct] = useState({barcode:'', image:'', name:'', price:0, priority:'', sectionId:'', kosherType:'', productTag:'', weight:{inWeight:'', avgWeightPerUnit:0, weightUnit:''}, units:{unitsInCarton:'',amount:'', minimumOrderCartonsCount:'', measureUnits:''},contactInfo:{contactNumber:'', contactName:''},expirationDate:'', manufacturer:'', parallelImporter:false, brand:'', salesQuantity:0, productStock:'', description:''})

    const handleInput = (e)=>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }
  return (
    <div>
        <form>
            
        </form>
    </div>
  )
}
