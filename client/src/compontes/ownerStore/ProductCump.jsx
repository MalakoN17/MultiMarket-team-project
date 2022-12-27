import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCump({product}) {
    const navigate=useNavigate()
    const handleUpdateBtn = (e)=>{
        navigate(`/ownerstore/updateproduct/${product._id}`)
    }
  return (
   <div class="flex justify-center md:w-1/4 w-full my-3">
  <div class="rounded-lg shadow-lg bg-white max-w-sm p-2">
      <img class="rounded-t-lg h-52 w-[21rem] " src={product.image.url} alt={product.name}/>
    
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
      <p class="text-gray-700 text-base mb-4">
      <p className="text-gray-600">כשרות {product.kosherType}</p>
      <hr />
        <p className="text-gray-600">כמות מוצר:  {product.productStock}</p>
      <hr />
        <p className="text-gray-600">כמות מחירות מוצר: {product.salesQuantity}</p>
      <hr />
        <p className="text-gray-600"> ברקוד: {product.barcode}</p>
      <hr />
        <p className="text-gray-600">יצרן: {product.manufacturer}</p>
      <hr />
      </p>
      <button type="button" onClick={handleUpdateBtn} class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">עידכון מוצר</button>
    </div>
  </div>
</div>
  )
}
